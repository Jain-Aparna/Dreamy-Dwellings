// import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import List from './Components/List';
import Hotel from './Components/Hotel';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './Components/Login';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
