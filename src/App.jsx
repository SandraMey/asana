import { Routes, Route } from 'react-router-dom';
import YogaCard from './components/yogaCard/YogaCard';
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
      <Route path="/" element={<YogaCard />} />
      <Route path="description" element={<YogaPage />} />
      <Route path="admin" element={<AdminDescription />} />
      <Route path="admincreate" element={<AdminCreateDescription />} />
    </Routes>
    </>
  );
};

export default App;
