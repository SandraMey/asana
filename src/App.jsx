import { Routes, Route } from 'react-router-dom';
import YogaCard from './components/yogaCard/YogaCard';
import YogaDescription from './components/yogaDescription/YogaDescription';
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
      <Route path="/" element={<YogaCard />} />
      <Route path="description" element={<YogaDescription/>} />
      <Route path="admin" element={<AdminDescription />} />
      <Route path="admincreate" element={<AdminCreateDescription />} />
    </Routes>
    </>
  );
};

export default App;
