import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GlobalStyles from './styles/GlobalStyle';
import Typography from './styles/Typography';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles/>
    <Typography/>
    <App />
  </React.StrictMode>,
)
