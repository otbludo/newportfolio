import { useState } from "react";
import { BottomNavigation } from "./components/base/BottomNavigation.jsx";
import { ContactFooter } from "./components/base/ContactFooter.jsx";
import { ExperiencePage } from "./pages/ExperiencePage.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { SkillsPage } from "./pages/SkillsPage.jsx";
import { TravelPage } from "./pages/TravelPage.jsx";

function App() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="w-full bg-slate-50 text-slate-900 antialiased">
      {activeSection === "home" ? (
        <HomePage onProjectsClick={() => setActiveSection("projects")} />
      ) : activeSection === "projects" ? (
        <ExperiencePage />
      ) : activeSection === "travel" ? (
        <TravelPage />
      ) : (
        <SkillsPage
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />
      )}
      <ContactFooter />
      <BottomNavigation
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        onHome={() => {
          setActiveSection("home");
          setActiveFilter("all");
        }}
      />
    </div>
  );
}

export default App;