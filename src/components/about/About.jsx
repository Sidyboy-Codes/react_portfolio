import axios from "axios";
import React, { useEffect, useState } from "react";
import "./about.css";

const About = () => {
  // fetch local json: https://akhtarvahid.medium.com/how-to-access-fetch-the-local-json-file-to-react-5ce07c43731d
  const [abouts, setAbouts] = useState([]);
  useEffect(() => {
    axios
      .get("./abouts/about.json")
      .then((res) => setAbouts(res.data))
      .catch((err) => console.log(err));
  });

  
  return (
    <section id="about" className="container">
      <h2>
        About Me<span className="red_text">.</span>
      </h2>
      <div className="about_container">

        {/* if abouts present then do map */}
        {abouts &&
          abouts.map((about) => {
            return(
            <div className="about_card" key={about.id}>
              <img src={"./"+about.image} alt={about.tagline}/>
              <h4>{about.tagline}</h4>
              <p>{about.description}</p>
            </div>);
          })}

          
      </div>
    </section>
  );
};

export default About;
