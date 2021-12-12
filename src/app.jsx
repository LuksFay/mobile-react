import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import Header from './components/Header.jsx'

class App extends React.Component {	
  render() {
    return (
     <>
     <p>hola</p>
     <Header/>
     </>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
