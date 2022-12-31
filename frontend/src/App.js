import './App.css';
import Nav from './components/navbar/navbar';
import Home from './components/home/home';
import Login from './components/login/login';
import About from './components/about/about';
import Join from './components/join/join';
import { Route, Routes } from 'react-router-dom';

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <>
     <Nav />
     <div className="container">
      <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path='/login' element= {<Login/>} />
        <Route path='/about' element= {<About/>} />
        <Route path='/join' element= {<Join/>} />
      </Routes>
     </div>
    </>
  );
}

export default App;
