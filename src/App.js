import './App.css';
import { Home } from './Components/Home';
import { Menu } from './Components/Menu';
import { Cart } from './Components/Cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/menu' element={<Menu />} />
          <Route exact path='/cart' element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
