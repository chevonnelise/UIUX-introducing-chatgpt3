import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Versatile problem-solving capabilities',
    text: 'GPT-3 can tackle a wide range of tasks, from coding to writing essays.'
  },
  {
    title: 'Enhanced productivity and efficiency',
    text: 'It automates repetitive tasks, saving time and effort for users.'
  },
  {
    title: 'Seamless natural language understanding',
    text: 'It comprehends and generates human-like text, facilitating effective communication.'
  },
  {
    title: 'Diverse creative content generation',
    text: 'GPT-3 generates varied and engaging content across different topics and styles.'
  },
];


const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item,index)=> (
          <Feature title={item.title} text={item.text} key={item.title + index}/>
        ))}
      </div>
    </div>
  )
}

export default Features;