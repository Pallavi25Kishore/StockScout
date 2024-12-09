
# :chart:StockScout - An AI driven platform for stock exploration 

## :books:About
StockScout is an AI-driven platform designed to simplify stock exploration and analysis using natural language queries. StockScout leverages technologies like Pinecone for semantic search and Llama 3.3 for intelligent responses within a Retrieval-Augmented Generation (RAG) workflow.

<div align="center">
<h3>StockScout Dashboard</h3>
 <img src="client/public/gif1.gif" alt="StockScout Dashboard gif" width="800px" />
 <img src="client/public/gif2.gif" alt="Gif 2" width="800px" />
</div>

## :video_camera:Deployed App Demo on youtube
<div align="center">
  <a href="https://www.youtube.com/watch?v=qOYk5196HGM">
    <img src="https://img.youtube.com/vi/qOYk5196HGM/0.jpg"" alt="Watch the demo video" width="800px"/>
  </a>
</div>

## :rocket:Technologies
### Front-End
![Static Badge](https://img.shields.io/badge/javascript-yellow?style=for-the-badge)
![Static Badge](https://img.shields.io/badge/React-yellow?style=for-the-badge)
![Static Badge](https://img.shields.io/badge/HTML%2FCSS-yellow?style=for-the-badge)
![Static Badge](https://img.shields.io/badge/Tailwind-yellow?style=for-the-badge)
![Static Badge](https://img.shields.io/badge/TypingEffect-yellow?style=for-the-badge)
![Static Badge](https://img.shields.io/badge/TradingViewWidgets-yellow?style=for-the-badge)

### Back-End 
![Static Badge](https://img.shields.io/badge/python-yellow?style=for-the-badge)
![Static Badge](https://img.shields.io/badge/flask-yellow?style=for-the-badge)

### Other Tools/ Embedding + RAG + Generative AI 
![Static Badge](https://img.shields.io/badge/YahooFinanceAPI-yellow?style=for-the-badge)
![Static Badge](https://img.shields.io/badge/HuggingFaceEmbeddings-yellow?style=for-the-badge)
![Static Badge](https://img.shields.io/badge/Pinecone-yellow?style=for-the-badge)
![Static Badge](https://img.shields.io/badge/Langchain-yellow?style=for-the-badge)
![Static Badge](https://img.shields.io/badge/Groq-yellow?style=for-the-badge)
![Static Badge](https://img.shields.io/badge/Google%20colab-yellow?style=for-the-badge)
![Static Badge](https://img.shields.io/badge/llama3.370bversatile-yellow?style=for-the-badge)

### Deployment
![Static Badge](https://img.shields.io/badge/vercel-yellow?style=for-the-badge)
![Static Badge](https://img.shields.io/badge/render-yellow?style=for-the-badge)

## :gear: Key Features

![Static Badge](https://img.shields.io/badge/Semantic%20Search%20Querying-purple) Semantic search-based stock discovery for natural language queries.

![Static Badge](https://img.shields.io/badge/Stock%20Analysis-purple) AI-generated query responses and stock comparisons.

![Static Badge](https://img.shields.io/badge/Stock%20Metrics-purple) Interactive UI with stock cards showcasing details like market cap, revenue growth, etc.

![Static Badge](https://img.shields.io/badge/Stock%20Price%20Widget-purple) TradingView widget for real-time stock price graph

![Static Badge](https://img.shields.io/badge/Top%20Stories%20Widget-purple) TradingView widget for real-time market news


## :rocket: RAG Workflow

![Static Badge](https://img.shields.io/badge/Data%20Ingestion-red) 
  - Retrieved stock tickers from SEC, then fetched metadata via Yahoo Finance API.
  - Used parallel processing for fetching stock data
  - Implemented exponential backoff and ticker bucketing to handle Yahoo Finance API rate limits

![Static Badge](https://img.shields.io/badge/Embedding-red) 
  - Use Hugging Face to embed stock descriptions (business summaries) and stored them in Pinecone.

![Static Badge](https://img.shields.io/badge/Query%20Handling-red)  
  - Embedded user query and conducted semantic similarity search (cosine similarity search) in Pinecone to find top 8 matches.

![Static Badge](https://img.shields.io/badge/Response%20Generation-red) 
  -  Leveraged Llama 3.3-70b-versatile to generate responses to queries and a comparision and analysis of the top 8 stocks based on the query. 
 

![Static Badge](https://img.shields.io/badge/UI%20Features-red)
  - Embedded TradingView's real-time graphs and stock price detail widgets displayed using React components.

![Static Badge](https://img.shields.io/badge/Deployment-red)
  - Deployed web application using Render and Vercel
     
## :computer: Application Architecture

![Static Badge](https://img.shields.io/badge/Frontend-blue)
 - Built with **React** for an intuitive and dynamic user experience
 - Deployed on **Vercel** for scalability and reliability

![Static Badge](https://img.shields.io/badge/Backend-blue)
 - Powered by **Flask**, which handles API services and integrates with AI tools
 - Deployed on **Render** for seamless performance

![Static Badge](https://img.shields.io/badge/Data%20Storage-blue)
 - Used Pinecone to store embedded stock descriptions
 - Embeddings generated via Hugging Face

![Static Badge](https://img.shields.io/badge/Integration%20with%20Generative%20AI-blue)
 - Leveraged Llama 3.3 to generate responses to query and conduct relevant stock analysis
   
## :sparkles:Getting Started
### Prerequisites
![Static Badge](https://img.shields.io/badge/npm-black)
![Static Badge](https://img.shields.io/badge/Python%203.8%2B-black)
![Static Badge](https://img.shields.io/badge/pip-black)
![Static Badge](https://img.shields.io/badge/Flask-black)

### Installation
1. Clone the repo
```sh
git clone https://github.com/Pallavi25Kishore/StockScout.git
```

2. Navigate to client folder and install NPM packages
```sh
cd client
npm install
```

3. Navigate to client/src/components/App.js and change all fetch urls to http://localhost:5001 instead of public url for deployed backend on render 
```sh
//fetch('https://stockscout.onrender.com/..........')
fetch('http://localhost:5001/..........')
```

4. Run in dev environment
```sh
npm start
```

5. Navigate to server folder and activate virtual environment
```sh
source venv/bin/activate
```

6. Install dependencies
```sh
pip install -r requirements.txt
```

7. Make a copy of the server/.exampleenv file and rename it to .env. Enter the following in the .env file
```sh
GROQ_API_KEY=<groqapikey>
PINECONE_API_KEY=<pineconeapikey>
```

8. Navigate to server/app.py. Comment out and uncomment out the code such that the final code looks as follows:
```sh
#for running on local
if __name__ == '__main__':
    app.run(debug=True, port=5001)

#for deplyment on Render
#if __name__ == '__main__':
    #app.run(host='0.0.0.0', port=int(os.environ.get("PORT", 5000)))
```

9. Start the flask server
```sh
python3 app.py
```



