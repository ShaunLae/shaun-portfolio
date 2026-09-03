import { profile } from "./data/profile";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { SkillsGrid } from "./components/SkillsGrid";
import { ProjectsSection } from "./components/ProjectsSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { EducationGrid } from "./components/EducationGrid";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-base focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <Nav brand={profile.brand} links={profile.navLinks} />
      <main id="main" className="mx-auto max-w-wrap px-7">
        <div id="top" />
        <Hero profile={profile} />
        <About
          eyebrow={profile.aboutEyebrow}
          paragraphs={profile.aboutParagraphs}
          timeline={profile.aboutTimeline}
        />
        <SkillsGrid eyebrow={profile.skillsEyebrow} groups={profile.skillGroups} />
        <ProjectsSection eyebrow={profile.projectsEyebrow} projects={profile.projects} />
        <ExperienceSection eyebrow={profile.experienceEyebrow} entries={profile.experience} />
        <EducationGrid entries={profile.education} />
        <ContactSection
          headline={profile.contactHeadline}
          body={profile.contactBody}
          links={profile.contactLinks}
        />
      </main>
      <Footer text={profile.footer} />
    </>
  );
}
