import React from "react";
import "../css/Topics.css"

const topics = [
  {
    id: 1,
    icon: "fa-solid fa-code",
    title: "Syntax and Semantics",
    text: "Understanding the structure and meaning of programming languages.",
  },
  {
    id: 2,
    icon: "fa-solid fa-cogs",
    title: "Lexical and Syntax Analysis",
    text: "Breaking down and analyzing programming language constructs.",
  },
  {
    id: 3,
    icon: "fa-solid fa-scroll",
    title: "Grammars and Parsing",
    text: "Defining language rules and processing code for correctness.",
  },
  {
    id: 4,
    icon: "fa-solid fa-project-diagram",
    title: "Programming Paradigms",
    text: "Exploring styles like procedural, object-oriented, and functional programming.",
  },
  {
    id: 5,
    icon: "fa-solid fa-lightbulb",
    title: "Language Design Principles",
    text: "Crafting expressive, efficient, and user-friendly programming languages.",
  },
  {
    id: 6,
    icon: "fa-solid fa-tools",
    title: "Compiler Design Basics",
    text: "Learning the processes of lexical analysis and code generation.",
  },
];


const Topic = () => {
  return (
    <div className="section-center topics-center">
      {topics.map((topic) => {
        return (
          <div className="topic" key={topic.id}>
            <span className="topic-icon">
              <i className={topic.icon}></i>
            </span>
            <div className="topic-info">
              <h3 className="topic-title">{topic.title}</h3>
              <p className="topic-text">{topic.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Topic;
