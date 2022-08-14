import axios from 'axios';
import React, { useEffect, useState } from "react";
import './social_contacts.css';

const Social_contacts = () => {
  const [connects, setConnects]=useState([]);
  useEffect(()=>{
    axios.get('./connects/connect.json').then((res)=>setConnects(res.data))
  })
  return (
  <section id="social" className="container">
    <h2>On Social<span className="red_text">.</span></h2>
    <div className="connects_container">

      {/* dynamic content from json file */}
      {connects && connects.map((connect)=>{
        return(
          <a href={connect.link}><img src={'./'+connect.image} alt={connect.title}/></a>
        )
      })}
    </div>
    </section>);
};

export default Social_contacts;
