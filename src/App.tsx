import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import { Nav } from './components/Nav/Nav.tsx';
import { About } from './pages/About/About.tsx';
import { Home } from './pages/Home/Home.tsx';

function App() {
  return (
    <BrowserRouter>
      <div className="h-screen flex flex-col overflow-hidden">
        <Nav></Nav>

        <div className="flex-1 overflow-hidden">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
