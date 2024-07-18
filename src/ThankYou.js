import React from "react";
import "./App.css";
// import { FloatingWhatsApp } from "react-floating-whatsapp";

const ThankYou = () => {
  // const handleJoinCommunity = () => {
  //   // Replace with your actual WhatsApp group link
  //   window.location.href = "https://chat.whatsapp.com/BsORpdYghzhJRl0y86g1AB";
  // };

  return (
    // <div>
    //   <h1 style={{background : "blue"}}>Thank You For Your Response</h1>
    // </div>

    <div class="content">
      <div class="wrapper-1">
        <div class="wrapper-2">
          <h1>Thank you !</h1>
          <a
            href="https://chat.whatsapp.com/BsORpdYghzhJRl0y86g1AB"
            style={{ textDecoration: "none" }}
          >
            <p style={{ color: "#3eab3e" }}>Join our Whatsapp community</p>
          </a>
          <a href="https://chat.whatsapp.com/BsORpdYghzhJRl0y86g1AB">
            <img
              src="./whatsapp.png"
              alt=""
              
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
