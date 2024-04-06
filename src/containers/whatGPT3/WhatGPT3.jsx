import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-features">
        <Feature title="What is GPT-3" text="ChatGPT-3, short for 'Chat Generative Pre-trained Transformer 3,' is an advanced natural language processing model developed by OpenAI. It is the third iteration of the GPT (Generative Pre-trained Transformer) series, following GPT and GPT-2. GPT-3 is trained on a massive dataset of diverse text from the internet, allowing it to generate human-like text and respond to prompts in a wide range of topics and styles."/>
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">Create possibilities beyond your imagination.</h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt__whatgpt3-container">
        <Feature title="Chatbots" text="ChatGPT-3: Revolutionizing conversational AI with human-like text generation."/>
        <Feature title="Knowledgebase" text="ChatGPT-3: Advanced AI generates human-like text, revolutionizing conversational understanding."/>
        <Feature title="Education" text="GPT-3: Text gen, translation, summarization, QA, integrated for diverse linguistic needs."/>
      </div>
    </div>
  )
}

export default WhatGPT3;