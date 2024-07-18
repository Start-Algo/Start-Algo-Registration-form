import ThankYou from "./ThankYou";
import "./App.css";
import React, { useState } from "react";
import axios from "axios";
// import { FloatingWhatsApp } from "react-floating-whatsapp";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

function Form() {
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [investment, setInvestment] = useState("");
  const [broker, setBroker] = useState("");
  const [segment, setSegment] = useState("");
  const [state, setState] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // const formattedDate = new Date(date).toLocaleDateString("en-GB"); // Format the date as dd/mm/yyyy
    const [year, month, day] = date.split("-");
    const formattedDate = `${day}/${month}/${year}`;

    // console.log(name,email,number,investment,broker,segment,state);
    const data = {
      Date: formattedDate,
      Full_Name: name,
      Email_Address: email,
      Mobile_Number: number,
      Investment_Amount: investment,
      Broker_Account: broker,
      Segment: segment,
      State: state,
    };
    axios
      .post(
        "https://sheet.best/api/sheets/d242212a-c200-4c32-b0c5-84d93b1fc9c4",
        data
      )
      // .post(
      //   "https://docs.google.com/spreadsheets/d/e/2PACX-1vRS2SE_ThLcBWr2o3LpeYioOknRgkmzU17lrniiEnHGGfQyBxFxbHPWFq4cRF4Q1PLoisE9lReaWcB6/pubhtml?widget=true&amp;headers=false",
      //   data
      // )
      .then((response) => {
        alert("Data submitted successfully:", response);
        clearForm();
        navigate("/thankyou");
      })
      .catch((error) => {
        alert("Error submitting data:", error);
        // navigate("/thankyou");
      });
  };
  const clearForm = () => {
    setDate("");
    setName("");
    setEmail("");
    setNumber("");
    setInvestment("");
    setBroker("");
    setSegment("");
    setState("");
  };

  // const handleJoinCommunity = () => {
  //   // Replace with your actual WhatsApp group link
  //   window.location.href = "https://chat.whatsapp.com/BsORpdYghzhJRl0y86g1AB";
  // };

  return (
    <div className="container">
      <br />
      <div className="text">ALGO TRADING WITH VIVEK</div>
      <br />
      <form className="form-group" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputDate" className="form-label">
            Date
          </label>
          <input
            type="date"
            className="form-control"
            id="exampleInputDate"
            name="Date"
            onChange={(e) => setDate(e.target.value)}
            value={date}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName"
            aria-describedby="nameHelp"
            name="Full_Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            name="Email_Address"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputNumber" className="form-label">
            Mobile Number
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputNumber"
            name="Mobile_Number"
            onChange={(e) => setNumber(e.target.value)}
            value={number}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputAmount" className="form-label">
            Investment Amount
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputAmount"
            name="Investment_Amount"
            onChange={(e) => setInvestment(e.target.value)}
            value={investment}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputAccount" className="form-label">
            Broker Account
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputAccount"
            name="Broker_Account"
            onChange={(e) => setBroker(e.target.value)}
            value={broker}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputSegment" className="form-label">
            Segment
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputSegment"
            name="Segment"
            onChange={(e) => setSegment(e.target.value)}
            value={segment}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputState" className="form-label">
            State
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputState"
            name="State"
            onChange={(e) => setState(e.target.value)}
            value={state}
            required
          />
        </div>
        <div
          className="submit-btn "
          style={{ display: "flex", justifyContent: "center" }}
        >
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <button
            type="button"
            className="btn btn-secondary mx-3"
            onClick={clearForm}
          >
            Clear Form
          </button>

          {/* <button type="button"  className="btn btn-success mx-3" onClick={handleJoinCommunity}>Join Our Community</button> */}
          {/* <div>
            <FloatingWhatsApp onClick={handleJoinCommunity} />
          </div> */}
        </div>
      </form>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
    </Router>
  );
}

export default App;
