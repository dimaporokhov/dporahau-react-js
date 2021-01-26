import React from "react";
import './App.css';
import Header from './Components/Header/Header'
import Card from './Components/Card/Card'


function App() {
  return (
    <div className="App">
        <Header>Task1</Header>
      <Card caption='Caption'>Some text ...</Card>
    </div>
  );
}

export default App;
