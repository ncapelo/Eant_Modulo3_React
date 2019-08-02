import React from 'react';
import './App.css';
import Header from './Header';
import Menu from './Menu';

let lenguajes = ["HTML", "CSS", "JavaScript", "JSX", "React", "Node.js"]

class App extends React.Component{
  
  render(){
    return (
      <div className="App">
        <Menu links={lenguajes}/>
        <Header title="Mi primer App con react" action="Más info" link="https://reactjs.org" />
      </div>
    );
  }  
  
}

export default App;
