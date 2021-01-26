import React from "react";
import './App.css';
import Header from './Components/Header'
import Card from './Components/Card'


function App() {
    const pageStyle = {
        border: 'solid',
        borderColor: 'black',
        height: '100vh',
        borderWidth: 5
    }

  return (
    <div className="App" style={pageStyle}>
        <Header>Task1</Header>
      <Card caption='Caption'>Some text ...</Card>
    </div>
  );
}

export default App;
