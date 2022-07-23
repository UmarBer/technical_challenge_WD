import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import AllPhonesPage from './pages/AllPhonesPage';
import SinglePhonePage from './pages/SinglePhonePage';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/phones" element={<AllPhonesPage />} />
        <Route path="/phones/:id" element={<SinglePhonePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
