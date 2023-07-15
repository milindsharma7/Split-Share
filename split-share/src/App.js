import './App.css';
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import Home from './Home';
import Main from './Main';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}>
        <Route path='/' element={<Main/>}/>
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
