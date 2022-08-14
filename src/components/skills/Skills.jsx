import axios from "axios";
import React, { useEffect, useState } from "react";
import './skills.css';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    axios
      .get("./skills/skill.json")
      .then((res) => setSkills(res.data))
      .catch((err) => console.log(err));
  });

  return (
    <section id="skills" className="container">
      <h2>Skills<span className="red_text">.</span></h2>
      <div className="skills_container">

        {/* dynamic data coming from json file */}
        {skills && skills.map((skill)=>{
          return(

            <img src={'./'+skill.image} alt={skill.skill_name} key={skill.id}/>

          );
        })}
      </div>
    </section>
  );
};

export default Skills;
