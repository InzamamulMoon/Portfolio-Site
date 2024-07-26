import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {About_Me} from './App'
import {Projects_skills} from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
/*const about_me=ReactDOM.createRoot(document.getElementById('About_Me'));
const project_skills=ReactDOM.createRoot(document.getElementById('Project_Skills'));*/
root.render(
  <React.StrictMode>
    <App />
    <About_Me />
    <Projects_skills />
  </React.StrictMode>
);
/*about_me.render(
  <React.StrictMode>
    <About_Me />
  </React.StrictMode>
)
project_skills.render(
  <React.StrictMode>
    <Projects_skills />
  </React.StrictMode>
)*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
