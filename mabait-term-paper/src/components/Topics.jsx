import React from 'react'
import Title from './Title';
import Topic from './Topic';
import "../css/Global.css";
import "../css/Topics.css"


const Topics = () => {
  return (
    <div>
      <section className="section topics" id="topics">
        <Title title="Some" subTitle="Topics" />
        <Topic />
      </section>
    </div>
  );
}

export default Topics
