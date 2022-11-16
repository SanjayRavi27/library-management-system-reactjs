
import './App.css';
import Home from './components/home';
import AdminLogin from './components/adminLogin';
import UserLogin from './components/userLogin';
import {BrowserRouter,Routes,Route}  from "react-router-dom"
import AdminPortal from './components/adminPortal';
import BookList from './components/bookList';
import UserPortal from './components/userPortal';

function App() {
  let email = "admin@gmail.com"
  let email1 = "user-1@gmail.com"
  
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/admin-login' element={<AdminLogin data={email}/>}/>
        <Route path='/user-login' element={<UserLogin data={email1}/>}/>
        <Route path='/admin-portal/*' element={<AdminPortal data={email}/>}/>
        <Route path='/user-portal/*' element={<UserPortal data={email1}/>}/>
        
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
