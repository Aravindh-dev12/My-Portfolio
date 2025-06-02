interface Project {
  title: string;
  image: string;
  tags: string[];
  description: string;
}

export const projectsData: Project[] = [
  {
    title: "Project 1",
    image: "/images/project1.jpg",
    tags: ["React", "TypeScript", "Material-UI"],
    description: "A sample project description"
  },
  {
    title: "Project 2",
    image: "/images/project2.jpg",
    tags: ["Next.js", "Tailwind", "Node.js"],
    description: "Another sample project description"
  }
]; 