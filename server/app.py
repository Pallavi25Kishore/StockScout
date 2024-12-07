from flask import Flask, jsonify, request
from flask_cors import CORS
from dotenv import load_dotenv
from openai import OpenAI
# from langchain_community.embeddings import HuggingFaceEmbeddings
from sentence_transformers import SentenceTransformer
from pinecone import Pinecone
import os
import logging

app = Flask(__name__)
CORS(app, origins=["https://stock-scout-eight.vercel.app", "http://localhost:3000"])

# Load environment variables
load_dotenv()
PINECONE_API_KEY = os.getenv("PINECONE_API_KEY")
GROQ_API_KEY = os.getenv("GROQ_API_KEY")

# Validate environment variables
if not PINECONE_API_KEY or not GROQ_API_KEY:
    raise ValueError("Missing PINECONE_API_KEY or GROQ_API_KEY in the environment variables.")


# Initialize logger
logging.basicConfig(level=logging.INFO)

# Initialize Pinecone client
pc = Pinecone(api_key=PINECONE_API_KEY)
index_name = "stocks2"
namespace = "stock-descriptions"
pinecone_index = pc.Index(index_name)

# hf_embeddings = HuggingFaceEmbeddings()

def get_huggingface_embeddings(text, model_name="sentence-transformers/all-mpnet-base-v2"):
    """
    Generates embeddings for the given text using a specified Hugging Face model.

    Args:
        text (str): The input text to generate embeddings for.
        model_name (str): The name of the Hugging Face model to use.
                          Defaults to "sentence-transformers/all-mpnet-base-v2".

    Returns:
        np.ndarray: The generated embeddings as a NumPy array.
    """
    model = SentenceTransformer(model_name)
    return model.encode(text)

@app.route("/api/chat", methods=["POST"])
def chat():
    query = request.json.get("query", "").strip()
    if not query:
        return jsonify({"error": "Query cannot be empty"}), 400

    try:
        # Generate query embedding
        raw_query_embedding = get_huggingface_embeddings(query)

        # Query Pinecone for top matches
        top_matches = pinecone_index.query(
            vector=raw_query_embedding.tolist(),
            top_k=8,
            include_metadata=True,
            namespace=namespace,
        )

        if not top_matches.get("matches"):
            return jsonify({"reply": "No relevant results found."})

        # Collect metadata and contexts
        company_metadata = [
            {
                "Company": item["metadata"].get("Name", "Unknown"),
                "Ticker": item["metadata"].get("Ticker", "Unknown"),
                "Market Cap": item["metadata"].get("MarketCap", "Unknown"),
                "Sector": item["metadata"].get("Sector", "Unknown"),
                "Industry": item["metadata"].get("Industry", "Unknown"),
                "Volume": item["metadata"].get("Volume", "Unknown"),
                "Earnings Quarterly Growth": item["metadata"].get("Earnings Quarterly Growth", "Unknown"),
                "Revenue Per Share": item["metadata"].get("Revenue Per Share", "Unknown"),
                "Revenue Growth": item["metadata"].get("Revenue Growth", "Unknown"),
                "Gross Margins": item["metadata"].get("Gross Margins", "Unknown"),
                "EBITDA Margins": item["metadata"].get("EBITDA Margins", "Unknown"),
                "EBITDA": item["metadata"].get("EBITDA", "Unknown"),
                "52 Week Change": item["metadata"].get("52 Week Change", "Unknown"),
                "Website": item["metadata"].get("website", "Unknown"),
                "Description": item["metadata"].get("text", "No description available"),
            }
            for item in top_matches["matches"]
        ]

        # Combine contexts for LLM
        combined_context = "\n\n-------\n\n".join(
            f"Company: {meta['Company']}\n"
            f"Ticker: {meta['Ticker']}\n"
            f"Market Cap: {meta['Market Cap']}\n"
            f"Sector: {meta['Sector']}\n"
            f"Industry: {meta['Industry']}\n"
            f"Volume: {meta['Volume']}\n"
            f"Earnings Quarterly Growth: {meta['Earnings Quarterly Growth']}\n"
            f"Revenue Per Share: {meta['Revenue Per Share']}\n"
            f"Revenue Growth: {meta['Revenue Growth']}\n"
            f"Gross Margins: {meta['Gross Margins']}\n"
            f"EBITDA Margins: {meta['EBITDA Margins']}\n"
            f"EBITDA: {meta['EBITDA']}\n"
            f"52 Week Change: {meta['52 Week Change']}\n"
            f"Website: {meta['Website']}\n"
            f"Description: {meta['Description']}"
            for meta in company_metadata
        )

        # Build augmented query for comparison
        augmented_query = (
            f"<QUERY>\n{query}\n</QUERY>\n\n"
            "<CONTEXT>\n"
            + combined_context
            + "\n-------\n</CONTEXT>\n\n"
        )

        # Create system prompt for comparison
        system_prompt = (
            """
            You are an expert stock analyst. Please first answer the user's query based on the context provided in 2-3 lines. After that, generate a 3-5 line summary comparison of the stocks, highlighting their strengths, weaknesses, and overall performance.

            Do not mention the prompt in any way. Do not use sentences like - "here is a 3-5 line comparision".

            End your response with the exact phrase: "Happy Stock Scouting!"
            """
        )

        # Call LLM API via GROQ
        client = OpenAI(base_url="https://api.groq.com/openai/v1", api_key=GROQ_API_KEY)
        llm_response = client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": augmented_query},
            ],
        )

        # Extract LLM response
        llm_comparison = llm_response.choices[0].message.content

        # Prepare response for frontend
        response_data = {
            "companies": company_metadata,
            "comparison": llm_comparison.strip(),
        }

        return jsonify(response_data)

    except Exception as e:
        logging.error(f"Error during chat processing: {str(e)}")
        return jsonify({"error": "An error occurred while processing your request."}), 500


# Run app locally
# if __name__ == "__main__":
#     app.run(debug=True, port=5001)

# #for deplyment on Render
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=int(os.environ.get("PORT", 5000)))