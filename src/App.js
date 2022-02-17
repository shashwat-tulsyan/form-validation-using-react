import './App.css';
// import Nav from './nav';
import Signup from './signup';
// import Footer from './footer';
import Login from './login';
import {Routes,Route} from 'react-router';
function App(){
  return (
    <>
    <Routes>
    <Route exact path='/' element={<Signup/>}></Route>
    <Route exact path='/login' element={<Login/>}></Route>
    </Routes>


     {/* <Nav/>
     <Signup/>
     <Footer/>
     <Login/> */}

     
    </>
  );
}

export default App;
