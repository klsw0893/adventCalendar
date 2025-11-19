import { useState } from 'react';
import Header from './components/Header/Header';
import Window from './components/Window/Window';
import HeaderBanner from './assets/Header.png';
import Popup from './components/Popup/Popup';
import Content from './assets/data.json';
import './App.css';

function App() {
  const [popupContent, setPopupContent] = useState(null);

  const handleWindowClick = (label) => {
    setPopupContent(`${label}`);
  };

  const closePopup = () => setPopupContent(null);

  return (
    <div className="app-wrapper">
      <Header src={HeaderBanner} />
      <div className="grid-container">
        {Content.map((item) => (
          <Window key={item.position} imgSrc={item.adventDay} timeLimit={`Elem ${item.position}`} onClick={(src) => handleWindowClick(`Elem ${item.position}`)}
 />
        ))}
      </div>
      {popupContent && <Popup content={Content} onClose={closePopup} />}
    </div>
  );
}

export default App;
