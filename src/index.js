import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));

// const headingStyle = {
//     backgroundColor: "purple",
//     color:"white",
//     textAlign: "center",
//     padding:"15px"
// }

const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const yearName = date.getFullYear();
const title = "Call Family";
const detail = "If you don’t experience the problems described above or don’t feel comfortable using JavaScript tools yet"

root.render(
  <React.StrictMode>
    <div>
        <h1 className="headingStyle">Welcome to React Js</h1>
        <div className="card">
            <h2 className="cardTitle">{title}</h2>
            <p className="cardDetail">{detail}</p>
            <p className="cardFooter">{dateName + " " + monthName + " " + yearName }</p>
        </div>
    </div>
  </React.StrictMode>
);
