import { useState} from 'react';
import Header from './components/Header/Header';
import Window from './components/Window/Window';
import HeaderBanner from './assets/Header.png';
import Popup from './components/Popup/Popup';
import Content from './assets/data.json';
import './App.css';

function App() {
  const [popupContent, setPopupContent] = useState(null);  

  const handleWindowClick = (item) => {
    setPopupContent(item);
  };

  const closePopup = () => setPopupContent(null);

  return (
    <div className="app-wrapper">
      <Header src={HeaderBanner} />
      <div>
      <p>Ez az adventi kalendárium most nem édességeket rejt, hanem minden nap egy apró meglepetést:
      egy gondolatot, ami megállít; egy hangulatot, ami megmelenget; egy kis élményt, játékosságot ami kísér a napodon.
      Ahogy nyílnak az ablakok, úgy gyűlnek benned a pillanatok, amelyek lassan ünneppé szövik a decembert.</p>
      </div>
      <div className="grid-container">
        {Content.map((item) => (
          <Window key={item.position} imgSrc={item.adventDay} day={item.day} onClick={() => handleWindowClick(item)}
 />
        ))}
      </div>
      {popupContent && <Popup content={popupContent} onClose={closePopup} />}
    </div>
  );
}

export default App;
