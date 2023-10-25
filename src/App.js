import { Route, Routes, NavLink } from 'react-router-dom';
import Greeting from './components/Greeting';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <NavLink to="/greeting">
        Greeting
      </NavLink>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/greeting" element={<Greeting />} />
      </Routes>
    </div>

  );
}

export default App;