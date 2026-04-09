import "./active.css";
import { useState} from "react";
import {useNavigate} from "react-router-dom";
import icon from "/icon-list.svg";
import desktopImg from "/illustration-sign-up-desktop.svg";

const Active = () => {
    const [email,setEmail]=useState("");
    const [error,setError]=useState("");
    const navigate=useNavigate();
    const handleSubmit=()=>{
        const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailPattern.test(email)){
            setError("please enter a valid email");
        }
        else{
            setError("");
            navigate("/afterstate");
        }
    };
    return (
        <div className="active-container">
            <div className="active-box">
                <div className="left-side">
                    <h1 className="heading"> Stay Updated!</h1>
                    
                    <p className="list-item">Join 60,000+ product managers receiving monthly updates on:</p>
                     <p className="list-item"><img src={icon} alt="list icon" />And much more!</p>
                  <p className="list-item"><img src={icon} alt="list icon" />Product discovery and building what matters</p>
                  <p className="list-item"><img src={icon} alt="list icon" />The latest trends and best practices</p>
                  <div className="form-container">
                         <div className="email-error">
                          <label className="form-label" htmlFor="email">Email Address</label>

                          {error && <p className="error-message">{error}</p>}
                            </div>
                          <input className="email-input" type="email" id="email" placeholder="Enter your email"
                          value={email} 
                          onChange={(e) => setEmail(e.target.value)}
                          />
                          <button  className="subscribe-button" type="submit"
                          onClick={handleSubmit}
                          >Subscribe to new monthly newsletter</button>
                  </div>
                </div>
                <div className="right-side">
                    <img src={desktopImg} alt="illustration" />
        </div>
    </div>
    </div>
        
    )
}

export default Active;