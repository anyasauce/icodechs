import { ArrowRight, Code, Users, Zap } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Define the types for the props
interface FeatureCardProps {
  icon: React.ReactNode; // for JSX elements like <Zap />
  title: string;
  description: string;
}

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen">
      <section
        className={`flex flex-col items-center justify-center min-h-[85vh] px-4 transition-all duration-700 ${
          isVisible ? "opacity-100" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            Welcome to Our{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              Team Portfolio
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
            We're a talented group of designers and developers creating
            exceptional digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/projects">
              <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium flex items-center justify-center transition-colors">
                View Our Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </Link>

            <Link to="/about">
              <button className="px-8 py-3 border border-gray-300 dark:border-gray-600 hover:border-indigo-500 dark:hover:border-indigo-400 text-gray-800 dark:text-gray-200 rounded-lg font-medium transition-colors">
                Meet The Team
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
            What We Bring to the Table
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Zap className="h-8 w-8 text-indigo-500" />}
              title="Fast Performance"
              description="Optimized solutions that deliver lightning-fast experiences for your users."
            />
            <FeatureCard
              icon={<Code className="h-8 w-8 text-indigo-500" />}
              title="Clean Code"
              description="We write maintainable, well-documented code following best practices."
            />
            <FeatureCard
              icon={<Users className="h-8 w-8 text-indigo-500" />}
              title="User-Focused"
              description="Elegant designs that prioritize user experience and accessibility."
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="bg-indigo-50 dark:bg-indigo-900/20 p-3 rounded-lg inline-block mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}
