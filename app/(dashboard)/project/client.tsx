import React from 'react';

interface Project {
  id: string;
  name: string;
  description: string;
}

function AllProjects() {
  const projects: Project[] = [
    {
      id: '1',
      name: 'Optimize Website Controllers',
      description: 'Improving performance and user experience of web controllers'
    },
    {
      id: '2',
      name: 'Remove Sales App',
      description: 'Deprecating legacy sales application and migrating data'
    },
    {
      id: '3',
      name: 'Stripe Integration',
      description: 'Implementing secure payment processing with Stripe API'
    },
    {
      id: '4',
      name: 'Mobile App Redesign',
      description: 'Complete visual overhaul of mobile application interface'
    },
    {
      id: '5',
      name: 'Database Migration',
      description: 'Migrating from MySQL to PostgreSQL for better performance'
    },
    {
      id: '6',
      name: 'API Documentation',
      description: 'Creating comprehensive API documentation for developers'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group flex flex-col items-center justify-center min-h-[280px]"
          >
            {/* Project Title */}
            <h3 className="text-lg font-semibold text-center group-hover:text-blue-600 transition-colors mb-3">
              {project.name}
            </h3>
            
            {/* Project Description */}
            <p className="text-sm text-gray-600 text-center mb-4 px-2">
              {project.description}
            </p>
            
            {/* Placeholder Image */}
            <div className="w-full h-24 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-xs">Project Image</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllProjects;