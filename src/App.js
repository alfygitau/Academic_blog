import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Articles from './pages/articles/Articles';
import Header from './pages/header/Header';
import Home from './pages/home/Home';

function App() {
  return (
    <div>
      <Header/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/articles' element={<Articles/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
