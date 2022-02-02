import HomePage from './components/homePage/HomePage';
import YogaPage from './components/yogaPage/YogaPage';
import AdminDescription from './components/adminDescription/AdminDescription';
import AdminCreateDescription from './components/admincreatedescription/AdminCreateDescription';
import './App.css';
import { Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="blog" element={<YogaPage />} />
      <Route path="admin" element={<AdminDescription />} />
      <Route path="admincreate" element={<AdminCreateDescription />} />
    </Routes>
  );
};

export default App;
