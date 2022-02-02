import { Routes, Route } from 'react-router-dom';
import HomePage from './components/homePage/HomePage';
import YogaPage from './components/yogaPage/YogaPage';
import AdminDescription from './components/adminDescription/AdminDescription';
import AdminCreateDescription from './components/admincreatedescription/AdminCreateDescription';
import Header from '../src/components/header/Header';
import Menu from '../src/components/menu/Menu'
import './App.css';


function App() {
  return (
    <>
    <Header />
    <Menu />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="description" element={<YogaPage />} />
      <Route path="admin" element={<AdminDescription />} />
      <Route path="admincreate" element={<AdminCreateDescription />} />
    </Routes>
    </>
  );
};

export default App;
