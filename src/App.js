import './App.css';
import HeroComponent from './components/HeroComponent';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroComponent />
      <HomePage />
    </div>
  );
}

export default App;
