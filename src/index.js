import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class Header extends React.Component
{
  render()
  {
    return(
    <div>
      See the details
    </div>
    );
  }
}
const code=(
  <div>
   <h1>Welcome To All!!!!!!!!!</h1>
    <Header />
  </div>
);
ReactDOM.render(code,document.getElementById('root'));
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('king')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
