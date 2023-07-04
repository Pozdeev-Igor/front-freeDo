
//import './assets/styles/global.css';
import { Route, Routes } from 'react-router-dom';
import Ad from './components/screens/ad/Ad';
import Home from './components/screens/home/Home';
import NotFound from './components/screens/notFound/NotFound';

function App() {
  return (
    <>
    {/* <Home/> */}
    {/* <Ad/> */}

    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path="/ad/:id" element={<Ad/>} />
    <Route path='*' element={<NotFound/>} />
  </Routes>
    </>
  );
}

export default App;
