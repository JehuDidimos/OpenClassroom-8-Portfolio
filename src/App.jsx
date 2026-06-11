import ButtonComponent from "./components/ButtonComponent";
import HeaderComponent from "./components/HeaderComponent";
import ProjectsPage from "./pages/ProjectsPage";
import SchoolPage from "./pages/SchoolPage";
import WelcomePage from "./pages/WelcomePage";
import { Routes, Route, Navigate } from 'react-router'

export default function App() {
  return (
    <main className="page-shell">
      <HeaderComponent></HeaderComponent>
      <Routes>
        <Route path="/welcome" element={<WelcomePage/>}/>
        <Route path="/projects" element={<ProjectsPage/>}/>
        <Route path="/school" element={<SchoolPage/>}/>
        <Route path="/*" element={<Navigate to='/welcome' replace/>}/>
      </Routes>
      
    </main>
  );
}
