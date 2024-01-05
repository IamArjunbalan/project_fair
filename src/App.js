
import { Route, Routes } from 'react-router-dom';
import './App.css';
import PFHome from './pages/PFHome';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Projects from './pages/Projects';
import Register from './pages/Register';
import Footer from './Components/Footer';
import Auth from './Components/Auth';






function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<PFHome/>}/>
        <Route path='/login' element={<Auth/>}/>
        <Route path='/register' element={<Auth register/>}/>
        <Route path='/Projects' element={<Projects/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>
      </Routes>
      <Footer/>
      
      
    </div>
  );
}

export default App;
