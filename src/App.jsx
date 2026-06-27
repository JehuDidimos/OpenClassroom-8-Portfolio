import HeaderComponent from "./components/HeaderComponent";
import ProjectsPage from "./pages/ProjectsPage";
import SchoolPage from "./pages/SchoolPage";
import WelcomePage from "./pages/WelcomePage";
import { Routes, Route } from "react-router";
import WorkExperiencePage from "./pages/WorkExperiencePage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";

export default function App() {
  return (
    <main className="page-shell">
      <HeaderComponent />
      <Routes>
        <Route path="/projects/:id" element={<ProjectDetailsPage />} />
        <Route
          path="/*"
          element={
            <>
              <section id="welcome">
                <WelcomePage />
              </section>
              <section id="projects">
                <ProjectsPage />
              </section>
              <section id="school">
                <SchoolPage />
              </section>
              <section id="work">
                <WorkExperiencePage />
              </section>
            </>
          }
        />
      </Routes>
    </main>
  );
}
