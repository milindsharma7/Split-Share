import './styles/App.css';
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import Home from './pages/Home';
import Main from './pages/Main';
import Read from './pages/Read';
import Working from './pages/Working';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}>
        <Route path='/' element={<Main/>}/>
        <Route path='/home' element={<Main/>}/>
        <Route path='/working' element={<Working/>}/>
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
