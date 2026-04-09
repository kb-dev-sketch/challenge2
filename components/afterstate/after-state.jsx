import "./after-state.css";
import icon from "/icon-list.svg";

const AfterState=()=>{
    return(
        <div className="container">
            <div className="card">
                <img src={icon} />
                <h1> Thank  for Subscribing!</h1>
                <p className="confirmation-message">A confirmation email has been sent to
                             ash@loremcompany.com. 
                 Please open it and click the button inside to confirm your subscription.</p>
<button className="dismiss-button">Dismiss Message</button>
            </div>
        </div>
    )
}
export default AfterState;
