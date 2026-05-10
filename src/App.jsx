import { Route, Routes } from 'react-router-dom';
import FounderPage from './pages/FounderPage.jsx';
import Home from './pages/Home.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/founder" element={<FounderPage />} />
    </Routes>
  );
}

export default App;
