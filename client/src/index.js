import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import HelloWorld from './components/HelloWorld/HelloWorld'

ReactDOM.render(
  <React.StrictMode>
     <HelloWorld msg="Olá mundo!" />
  </React.StrictMode>,
  document.getElementById('root')
);


