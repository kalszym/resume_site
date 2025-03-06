import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import CV from './pages/CV';
import Projects from './pages/portfolio';
import ProjectDetail from './pages/details';

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">🏠 Home</Link>
        <Link to="/cv">📄 CV</Link>
        <Link to="/projects">💼 Projects</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:projectId" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
