import './App.css';
import './assests/font-awesome/css/font-awesome.min.css';
import Header from './components/Header/Header';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <BrowserRouter>
        {/*static data */}
        <Header />
        <Routes>
          {/*dynamic data */}
         <Route path='' element={<Register/>}/>
         <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;


