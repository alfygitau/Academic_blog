import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './pages/header/Header';
import Home from './pages/home/Home';

function App() {
  return (
    <div>
      <Header/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
