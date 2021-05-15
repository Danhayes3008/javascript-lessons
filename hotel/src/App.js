import './App.css';
import { useState } from "react";
import Rooms from "./components/Rooms"

function App() {
  const [rooms] = useState([
    {
      id: 1,
      rooms: 30,
      booked: 24,
      available: "",
    }
  ]);
  return (
    <div className="App">
      <div className="container">
        <Rooms rooms={rooms} />
      </div>
    </div>
  );
}

export default App;
