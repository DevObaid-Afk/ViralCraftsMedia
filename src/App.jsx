import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<ProjectsPage />} />
    </Routes>
  );
}

export default App;
