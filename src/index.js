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
      <h1>WELCOME TO ALL!!!!</h1>
    </div>
    );
  }
}
class Application extends React.Component
{
  render()
  {
    return(
    <div>
      <Header />
    </div>
    );
  }
}

ReactDOM.render(<Application />,document.getElementById('root'));
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
