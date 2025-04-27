import { useState } from "react";
import { Github, Linkedin, Globe, Mail, Facebook, User, Twitter } from "lucide-react";
import JosiahProfile from '../assets/images/picture.jpg';

export default function About() {
  const [activeTab, setActiveTab] = useState("team");

  const teamMembers = [
    {
      id: 1,
      name: "Josiah Danielle Gallenero",
      role: "Full Stack Web Developer",
      bio: `Hi, I'm Josiah Danielle Gallenero, a Junior Full Stack Web Developer with a passion for creating both static and dynamic websites. My skills range from frontend design to backend development, and I'm always eager to learn new technologies.\n
          I am currently a 2nd-year college student at PHINMA University of Iloilo, pursuing my degree in Information Technology. In my free time, I work on personal projects and freelance gigs to expand my portfolio and gain more experience.`,
      avatar: JosiahProfile,
      techStack: [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "PHP",
        "Python",
        "MySQL",
      ],
      learningStack: [
        "Laravel",
        "React",
        "TypeScript",
        "API",
        "Tailwind CSS",
        "MongoDB",
        "Node.js",
        "Express",
      ],
      links: [
        { type: "github", url: "https://github.com/anyasauce" },
        { type: "facebook", url: "https://www.facebook.com/josiahqt1" },
        { type: "portfolio", url: "https://josiahh.vercel.app/" },
      ],
    },
    {
      id: 2,
      name: "Jhales Santiago",
      role: "Backend Developer",
      bio: "Specializes in building robust server architectures and efficient database systems.",
      avatar: "/api/placeholder/200/200",
      techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      links: [
        { type: "github", url: "https://github.com/jhaless" },
        { type: "facebook", url: "https://www.facebook.com/jhales016" },
        { type: "portfolio", url: "https://jhalessantiago.com" },
      ],
    },
  ];

  const stats = [
    {
      id: 1,
      text: "1 Year below of Experience and Growing with Our New Team",
      bgClass: "bg-indigo-50 dark:bg-indigo-900/20",
      textClass: "text-indigo-700 dark:text-indigo-300",
    },
    {
      id: 2,
      text: "2+ Projects Completed",
      bgClass: "bg-indigo-50 dark:bg-indigo-900/20",
      textClass: "text-indigo-700 dark:text-indigo-300",
    },
    {
      id: 3,
      text: "100% Client Satisfaction",
      bgClass: "bg-indigo-50 dark:bg-indigo-900/20",
      textClass: "text-indigo-700 dark:text-indigo-300",
    },
  ];

  const getSocialIcon = (type: "github" | "portfolio" | "linkedin" | "facebook" | "mail" | "twitter"): React.ReactNode => {
    switch (type) {
      case "github":
        return <Github size={16} />;
      case "portfolio":
        return <User size={16} />;
      case "linkedin":
        return <Linkedin size={16} />;
      case "facebook":
        return <Facebook size={16} />;
      case "mail":
        return <Mail size={16} />;
      case "twitter":
        return <Twitter size={16} />;
      default:
        return <Globe size={16} />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <section className="mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            About{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              Our Team
            </span>
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            We are a passionate team of developers, designers, and creators who
            specialize in building innovative solutions. Our goal is to deliver
            high-quality projects that push the boundaries of creativity and
            technology.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className={`${stat.bgClass} rounded-full px-6 py-2 ${stat.textClass} font-medium`}
              >
                {stat.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-2xl mx-auto mb-12">
        <div className="flex border-b border-gray-200 dark:border-gray-700">
          <button
            className={`px-6 py-3 font-medium text-sm ${
              activeTab === "team"
                ? "text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400"
                : "text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
            }`}
            onClick={() => setActiveTab("team")}
          >
            Our Team
          </button>
          <button
            className={`px-6 py-3 font-medium text-sm ${
              activeTab === "mission"
                ? "text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400"
                : "text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
            }`}
            onClick={() => setActiveTab("mission")}
          >
            Our Mission
          </button>
          <button
            className={`px-6 py-3 font-medium text-sm ${
              activeTab === "process"
                ? "text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400"
                : "text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
            }`}
            onClick={() => setActiveTab("process")}
          >
            Our Process
          </button>
        </div>
      </div>

      {activeTab === "team" && (
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-30 h-30 rounded-full object-cover border-2 border-indigo-100 dark:border-indigo-600"
                    />
                    <div className="ml-4">
                      <h3 className="text-2xl mb-3 font-semibold text-gray-800 dark:text-gray-100">
                        {member.name}
                      </h3>
                      <p className="text-indigo-600 dark:text-indigo-400">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  <div>
                    {member.bio.split("\n").map((line, index) => (
                      <p
                        key={index}
                        className="text-gray-600 dark:text-gray-300 mb-4"
                      >
                        {line}
                      </p>
                    ))}
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.techStack.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-indigo-600 dark:bg-indigo-700 px-2 py-1 rounded text-sm text-gray-700 dark:text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                      Learning Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {Array.isArray(member.learningStack) &&
                      member.learningStack.length > 0 ? (
                        member.learningStack.map((tech, index) => (
                          <span
                            key={index}
                            className="bg-indigo-600 dark:bg-indigo-700 px-2 py-1 rounded text-sm text-gray-700 dark:text-gray-300"
                          >
                            {tech}
                          </span>
                        ))
                      ) : (
                        <p className="text-gray-500 dark:text-gray-400">
                          No learning stack yet
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex space-x-2 relative">
                    {member.links.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full text-gray-600 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors relative group"
                        aria-label={`${link.type} link for ${member.name}`}
                      >
{getSocialIcon(link.type as "github" | "facebook" | "portfolio" | "linkedin" | "mail" | "twitter")}

                        <span className="absolute bottom-full mb-4 left-1/2 transform -translate-x-1/2 text-lg text-white bg-black rounded-xl py-2 px-4 opacity-0 group-hover:opacity-100 transition-opacity">
                          {`Go to ${
                            link.type.charAt(0).toUpperCase() +
                            link.type.slice(1)
                          } profile`}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {activeTab === "mission" && (
        <section className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              At Icodechs, our mission is to transform ideas into exceptional
              digital experiences. We believe in the power of technology to
              solve complex problems and create meaningful connections between
              businesses and their audiences.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              We are committed to:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <div className="bg-indigo-100 dark:bg-indigo-900/30 p-1 rounded-full mr-3 mt-1">
                  <div className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full"></div>
                </div>
                <span className="text-gray-700 dark:text-gray-300">
                  Creating innovative solutions that deliver real business value
                </span>
              </li>
              <li className="flex items-start">
                <div className="bg-indigo-100 dark:bg-indigo-900/30 p-1 rounded-full mr-3 mt-1">
                  <div className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full"></div>
                </div>
                <span className="text-gray-700 dark:text-gray-300">
                  Maintaining the highest standards of quality and craftsmanship
                </span>
              </li>
              <li className="flex items-start">
                <div className="bg-indigo-100 dark:bg-indigo-900/30 p-1 rounded-full mr-3 mt-1">
                  <div className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full"></div>
                </div>
                <span className="text-gray-700 dark:text-gray-300">
                  Continuously learning and adapting to the latest industry trends
                </span>
              </li>
            </ul>
          </div>
        </section>
      )}

      {activeTab === "process" && (
        <section className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              Our Process
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              We follow a structured and iterative approach to ensure the
              success of every project.
            </p>
            <ul className="space-y-6">
              <li className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Discovery:</span> We start by
                understanding your business, goals, and audience. This phase
                helps us develop a clear vision for the project.
              </li>
              <li className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Design:</span> We then move on
                to wireframing, prototyping, and designing the user experience
                (UX) and user interface (UI). Our goal is to create an
                intuitive, engaging experience for users.
              </li>
              <li className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Development:</span> Our
                development phase involves building the application using
                modern technologies and best practices to ensure quality,
                security, and scalability.
              </li>
              <li className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Launch:</span> After thorough
                testing, we deploy the application and ensure that it’s
                performing at its best.
              </li>
              <li className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Support & Maintenance:</span> We
                continue to monitor and support the application to ensure it
                runs smoothly.
              </li>
            </ul>
          </div>
        </section>
      )}
    </div>
  );
}
