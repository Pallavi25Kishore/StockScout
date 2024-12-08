
# :chart:StockScout - An AI driven platform for stock exploration 

## :books:About
StockScout is an AI-driven platform designed to simplify stock exploration and analysis using natural language queries. StockScout leverages technologies like Pinecone for semantic search and Llama 3.3 for intelligent responses within a Retrieval-Augmented Generation (RAG) workflow.

<div align="center">
<h3>CStockScout Dashboard</h3>
 <img src="client/public/gif1.gif" alt="StockScout Dashboard gif" width="600px" />
 <img src="client/public/gif2.gif" alt="Gif 2" width="600px" />
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

## :gear: Features

![Static Badge](https://img.shields.io/badge/Customer%20Churn%20Prediction-purple) Predict churn probabilities using ML models

![Static Badge](https://img.shields.io/badge/Actionable%20Insights-purple) Detailed explanations of why a customer is at risk of churning, powered by Google’s Gemma2

![Static Badge](https://img.shields.io/badge/Personalized%20Retention%20Strategies-purple) Automatically generate customer-specific emails to incentivize loyalty

![Static Badge](https://img.shields.io/badge/Dynamic%20Dashboards-purple) Interactive visualizations including:

![Static Badge](https://img.shields.io/badge/Speedometer-purple) Displays average churn probability

![Static Badge](https://img.shields.io/badge/Model%20Predictions-purple) Bar chart of churn probabilities from individual ML models

![Static Badge](https://img.shields.io/badge/Customer%20Ranking-purple) Bar chart showing percentile rank among peers

## :rocket: Machine Learning Workflow

![Static Badge](https://img.shields.io/badge/Dataset-red) 
  - Bank customer dataset from Kaggle

![Static Badge](https://img.shields.io/badge/Data%20Splitting-red) 
  - The dataset was split into 80/20 ratio (80% for training and 20% for testing)

![Static Badge](https://img.shields.io/badge/Feature%20Engineering-red)  
  - Performed feature selection, transformation, and creation to enhance the dataset
  - Addressed class imbalance using SMOTE to oversample the minority class

![Static Badge](https://img.shields.io/badge/Models%20Trained-red) 
  - XGBoost  
  - k-Nearest Neighbors  
  - Gradient Boosting  
  - ExtraTrees  
  - AdaBoost  

![Static Badge](https://img.shields.io/badge/Ensembling%20Techniques-red)
  - Implemented **voting classifiers**, **stacking**, and **bagging** to combine the strengths of multiple models and improve predictive performance 

![Static Badge](https://img.shields.io/badge/Performance%20Metrics-red)  
  - **Accuracy**: 0.851500  
  - **Recall**: 0.62
  - In the context of ChurnGuard, recall is a critical metric because it measures the model's ability to correctly identify customers who are at risk of churning and the cost of false negatives is much higher than the cost of false positives
     
## :computer: Application Architecture

![Static Badge](https://img.shields.io/badge/Frontend-blue)
 - Built with **React** for an intuitive and dynamic user experience
 - Deployed on **Vercel** for scalability and reliability

![Static Badge](https://img.shields.io/badge/Backend-blue)
 - Powered by **Flask**, which handles API services and integrates with AI tools
 - Deployed on **Render** for seamless performance

![Static Badge](https://img.shields.io/badge/Integration%20with%20Generative%20AI-blue)
 - Google’s **Gemma2** generates:
   - Explanations for churn predictions
   - Personalized emails to incentivize at-risk customers

## :sparkles:Getting Started
### Prerequisites
![Static Badge](https://img.shields.io/badge/npm-black)
![Static Badge](https://img.shields.io/badge/Python%203.8%2B-black)
![Static Badge](https://img.shields.io/badge/pip-black)
![Static Badge](https://img.shields.io/badge/Flask-black)

### Installation
1. Clone the repo
```sh
git clone https://github.com/Pallavi25Kishore/ChurnGuard.git
```

2. Navigate to churn-prediction folder and install NPM packages
```sh
cd churn-prediction
npm install
```

3. Navigate to src/App.js and change all fetch urls to http://localhost:5001 instead of public url for deployed backend on render 
```sh
//fetch('https://churnguard-fb9w.onrender.com/..........')
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



