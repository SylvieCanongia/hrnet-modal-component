import { useState } from "react";
import { Modal } from './lib';
import './app.css';

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="app">
      <div>
        <h1>Hello from app component !</h1>
        <button onClick={() => setOpenModal(true)}>Click to open the modal</button>
      </div>
      
      { openModal &&
      <Modal
        onClose={() => setOpenModal(false)}
        message="Put your custom message to display here !"/>
      }
    </div>
  );
}

export default App;
