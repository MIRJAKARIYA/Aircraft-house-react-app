import './App.css';
import Shop from './components/Shop/Shop';
import React, { useState } from 'react';
import Modal from 'react-modal';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '300px',
    position: 'relative',
    borderRadius: '20px'

  },
};
Modal.setAppElement('#root');
function App() {
  const [randomAircraft, setRandomAircraft] = useState([])
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal(cart) {
    setIsOpen(true);
    if(cart.length !==0){
      const randomItem = Math.floor(Math.random()*(cart.length))
      setRandomAircraft([cart[randomItem]])
    }
    
  }
  function closeModal() {
    setIsOpen(false);
    setRandomAircraft([])
  }
  return (
    <div className="App">
        <h1 className='website-title'>Aircraft House</h1>
        <h2 className='website-subtitle'>Get your dream Aircraft!!!!</h2>
        <Shop openModal={openModal}></Shop>


        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal">
            <button onClick={closeModal} className='modal-close-button'>X</button>
            <h3>{randomAircraft[0]?.name && 'Our Recommendation for you:'}</h3>
            <div className='modal-item-container'>
              <img className='modal-img' src={randomAircraft[0]?.image} alt="" />
            </div>
            <p style={{marginBottom:'3px'}}>{randomAircraft[0]?.name || 'Add some aircrafts to the cart to get recommendation.'}</p>
            <p style={{marginTop: '0'}}>{randomAircraft[0]?.price && `price: $${randomAircraft[0].price}`}</p>
          </Modal>
    </div>
  );
}

export default App;
