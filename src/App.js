import { useState } from 'react';
import Header from './components/Header/Header';
import Window from './components/Window/Window';
import HeaderBanner from './assets/header_banner.png';
import Popup from './components/Popup/Popup';
import FirstPic from './assets/1.png';
import './App.css';

function App() {
  const items = Array.from({ length: 24 }, (_, i) => i);
  const [popupContent, setPopupContent] = useState(null);

  const handleWindowClick = (label) => {
    setPopupContent(`${label}`);
  };

  const closePopup = () => setPopupContent(null);


  return (
    <div className="app-wrapper">
      <Header src={HeaderBanner} />
      <div className="grid-container">
        {items.map((item) => (
          <Window key={item} imgSrc={FirstPic} timeLimit={`Elem ${item + 1}`} onClick={(src) => handleWindowClick(`Elem ${item + 1}`)}
 />
        ))}
      </div>
      {popupContent && <Popup content={popupContent} onClose={closePopup} />}
    </div>
  );
}

export default App;
