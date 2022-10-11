import './App.css';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import AddCard from './pages/AddCard';
import Cards from './pages/Cards';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/AddCard/" element={<AddCard />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
