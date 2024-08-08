import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import Home from './pages/Home';
import Providers from './pages/Providers';
function App() {
  return (
    <>
      <Toaster />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/providers' element={<Providers />} />
      </Routes>
    </>
  );
}

export default App;
