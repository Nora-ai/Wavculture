import React from 'react'
import './App.css';
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

function App() {
  return (<>
    <Header/>
    <div>
      <h1>Wavculture</h1>
    </div>
    <Main />
    <Footer/>
  </>);
}

export default App;
