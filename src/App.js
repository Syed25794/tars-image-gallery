import './App.css';
import HeroComponent from './components/HeroComponent';
import ImageCard from './components/ImageCard';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroComponent />
      <ImageCard />
    </div>
  );
}

export default App;
