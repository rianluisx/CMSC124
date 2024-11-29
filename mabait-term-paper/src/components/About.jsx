import React from 'react'
import "../css/Global.css"
import "../css/About.css"
import Title from './Title';


const About = () => {
  return (
    <section className="section" id="about">
      <Title title="about" subTitle="CMSC 124" />
      <p className="section-center about-center about-text">
        CMSC 124 focuses on the design and implementation of programming
        languages, exploring principles and techniques behind their creation and
        development. It covers topics such as syntax and semantics, lexical and
        syntax analysis, grammars, and parsing techniques, including tools like
        lexers and parsers. Students study various programming paradigms, such
        as procedural, object-oriented, functional, and logic programming, while
        also learning about language design principles that ensure
        user-friendliness, efficiency, and expressiveness.
      </p>
    </section>
  );
}

export default About
