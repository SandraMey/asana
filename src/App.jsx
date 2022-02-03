import { Routes, Route } from 'react-router-dom';
import YogaCard from './components/yogaCard/YogaCard';
import YogaDescription from './components/yogaDescription/YogaDescription';
import AdminDescription from './components/adminDescription/AdminDescription';
import AdminCreateDescription from './components/admincreatedescription/AdminCreateDescription';
import AdminTag from './components/adminTag/AdminTag'
import Header from '../src/components/header/Header';
import './App.css';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<YogaCard />} />
      <Route path="yoga/:id" element={<YogaDescription/>} />
      <Route path="admin" element={<AdminDescription />} />
      <Route path="admincreate" element={<AdminCreateDescription />} />
      <Route path="adminTag" element={<AdminTag />} />
    </Routes>
    </>
  );
};

export default App;
