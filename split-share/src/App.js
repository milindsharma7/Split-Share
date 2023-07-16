import './App.css';
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import Home from './Home';
import Main from './Main';
import Read from './Read';
import Working from './Working';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}>
        <Route path='/' element={<Main/>}/>
        <Route path='/home' element={<Main/>}/>
        <Route path='/working' element={<Working/>}/>
        <Route path='/read' element={<Read/>}/>
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
