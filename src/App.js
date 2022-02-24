import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Articles from './pages/articles/Articles';
import Header from './pages/header/Header';
import Home from './pages/home/Home';
import Login from './pages/login/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/articles' element={<Articles/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
