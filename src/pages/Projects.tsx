import { useState } from "react";
import { ExternalLink, Github, Search } from "lucide-react";
import StudentPortal from '../assets/projects/studentportal.png';

interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
  githubLink: string;
  imageUrl: string;
  techStack: string[];
  category: string;
  featured: boolean;
}

interface Category {
  id: string;
  name: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const projects: Project[] = [
    {
      id: 1,
      title: "Student Portal with E-Wallet Functionality",
      description:
        "An all-in-one platform for students to manage their accounts, make secure e-wallet transactions, and track transactions availability in real-time.",
      link: "#",
      githubLink: "#",
      imageUrl: StudentPortal,
      techStack: ["Laravel", "jQuery", "Tailwind CSS", "JavaScript", "MySQL"],
      category: "web",
      featured: true,
    },
  ];

  const categories: Category[] = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Apps" },
    { id: "dashboard", name: "Dashboards" },
    { id: "backend", name: "Backend Systems" },
    { id: "featured", name: "Featured" },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      filter === "all" ||
      (filter === "featured" && project.featured) ||
      project.category === filter;

    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some((tech) =>
        tech.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            Our{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              Projects
            </span>
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            Explore our portfolio of work across various industries and
            technologies. Each project represents our commitment to quality,
            innovation, and solving real-world problems.
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="mb-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === category.id
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700 dark:text-gray-300"
            />
          </div>
        </div>

        {/* Results Count */}
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          Showing {filteredProjects.length} of {projects.length} projects
        </p>
      </section>

      {/* Projects Grid */}
      <section>
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
              No matching projects found
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </section>

      {/* Call to Action */}
      <section className="mt-20 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          Have a project in mind?
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
          We're always looking for interesting challenges and opportunities to
          create amazing digital experiences.
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
        >
          Let's Talk
        </a>
      </section>
    </div>
  );
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all group">
      <div className="relative overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {project.featured && (
          <div className="absolute top-4 right-4 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">
            Featured
          </div>
        )}
      </div>

      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {project.title}
        </h2>

        <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
          {project.description}
        </p>

        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
            TECHNOLOGIES
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 dark:bg-indigo-700 text-sm text-gray-700 dark:text-gray-300 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium transition-colors"
          >
            View Project <ExternalLink size={16} className="ml-1" />
          </a>

          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          >
            <Github size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}
