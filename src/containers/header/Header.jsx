import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai2.png';

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Let’s Build Something amazing with GPT-3 OpenAI</h1>
        <p>AI (Artificial Intelligence) refers to the simulation of human intelligence processes by machines, particularly computer systems. GPT (Generative Pre-trained Transformer) exemplifies this by being a sophisticated machine learning model. It learns from enormous datasets of text, enabling it to understand language patterns and context. When given a prompt, it utilizes this knowledge to generate text that closely resembles what a human might write, demonstrating the capacity of AI to mimic and understand human-like behaviors and tasks.</p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your email address" />
          <button type="button">Get Started</button>

        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  )
}

export default Header