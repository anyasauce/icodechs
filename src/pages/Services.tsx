import { useState } from "react";
import { Search } from "lucide-react";

type Service = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
};

type ServiceCardProps = {
  service: Service;
}; 

export default function Services() {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

 const services = [
   {
     id: 1,
     title: "Web Application Development",
     description:
       "Build scalable and robust web applications using the latest technologies to ensure excellent performance and user experience.",
     imageUrl:
       "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
     category: "web",
   },
   {
     id: 2,
     title: "School Projects",
     description:
       "We offer specialized services in creating innovative school projects that meet academic requirements while showcasing technical creativity.",
     imageUrl:
       "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
     category: "school",
   },
   {
     id: 3,
     title: "POS System Development",
     description:
       "Customized Point of Sale systems that help businesses streamline their sales processes and improve overall efficiency.",
     imageUrl:
       "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
     category: "pos",
   },
   {
     id: 4,
     title: "Business Solutions",
     description:
       "Tailored business solutions that improve operational efficiency, increase revenue, and help your company thrive in the competitive market.",
     imageUrl:
       "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
     category: "business",
   },
   {
     id: 5,
     title: "Any Management System",
     description:
       "We provide management systems for various business needs, from inventory to employee management, tailored to your requirements.",
     imageUrl:
       "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
     category: "management",
   },
 ];

  const categories = [
    { id: "all", name: "All Services" },
    { id: "web", name: "Web Apps" },
    { id: "school", name: "School Projects" },
    { id: "pos", name: "POS Systems" },
    { id: "business", name: "Business Solutions" },
    { id: "management", name: "Management Systems" },
  ];

  const filteredServices = services.filter((service) => {
    const matchesCategory = filter === "all" || service.category === filter;

    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());

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
              Services
            </span>
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            Discover the range of services we offer to help you achieve your
            business and technical goals. From web apps to business solutions,
            we create custom solutions for any need.
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
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700 dark:text-gray-300"
            />
          </div>
        </div>

        {/* Results Count */}
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          Showing {filteredServices.length} of {services.length} services
        </p>
      </section>

      {/* Services Grid */}
      <section>
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
              No matching services found
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </section>
    </div>
  );
}

function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all group">
      <div className="relative overflow-hidden">
        <img
          src={service.imageUrl}
          alt={service.title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {service.title}
        </h2>

        <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
          {service.description}
        </p>
      </div>
    </div>
  );
}
