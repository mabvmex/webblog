import React from "react";
import { DatePicker, Card } from "antd";
import "./App.scss";

function App() {
  const test = (date, dateString) => {
    console.log(date, dateString);
  }

  return (
    <div className="app">
      <h1>
        
        Web Blog <span> hola a todos </span>
      </h1>
      <h2> Personal </h2>
      <DatePicker onChange={test} />
    
      <Card title= "Tarjeta de prueba" extra= { <a href = "#" > Más... </a> } style= {{ width: 300}} >
        <p>Miguel</p>
        <p>Barrera</p>
        <p>+52 55 5555 5555</p>
      </Card>
    
    </div>
  );
}

export default App;
