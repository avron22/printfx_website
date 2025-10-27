export interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  repo?: string;
}

export const projects: Project[] = [
  {
    title: "Project One",
    description: "Brief summary of what you built and why it matters.",
    tech: ["React", "Vite", "TypeScript"],
    link: "https://example.com",
    repo: "https://github.com/you/project-one",
  },
  {
    title: "Project Two",
    description: "Another highlight project.",
    tech: ["React", "API"],
    link: "https://example.com",
    repo: "https://github.com/you/project-two",
  },
];
