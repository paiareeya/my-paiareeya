import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Contacts from './pages/Contacts';
import Layout from './pages/Layout';
import { HashRouter } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            {/* <Route index element={<Main />} /> */}
            <Route index element={<Home />} />
            {/* <Route path='git push' element={<Main />} /> */}
            <Route path='contacts' element={<Contacts />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
