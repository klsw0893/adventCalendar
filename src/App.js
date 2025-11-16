import Header from './components/Header/Header';
import Window from './components/Window/Window';
import HeaderBanner from './assets/header_banner.png';
import FirstPic from './assets/1.png';
import './App.css';

function App() {
  const items = Array.from({ length: 24 }, (_, i) => i);

  return (
    <div className="app-wrapper">
      <Header src={HeaderBanner} />
      <div className="grid-container">
        {items.map((item) => (
          <Window key={item} src={FirstPic} timeLimit={`Elem ${item + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default App;
