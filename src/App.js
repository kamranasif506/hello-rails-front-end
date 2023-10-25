import { Route, Routes, Link } from 'react-router-dom';
import Greeting from './components/Greeting';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <div className="collapse navbar-collapse justify-content-start" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item border-right">
            <Link className="nav-link" to="/">
              Home
            </Link>
            </li>
          <li>  
            <Link className="nav-link" to="/greeting">
              Greetings
            </Link>
          </li>
        </ul>  
      </div>  
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/greeting" element={<Greeting />} />
      </Routes>
    </div>

  );
}

export default App;