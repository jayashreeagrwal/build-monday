"use client";

import React, { useEffect, useState } from "react";

interface Project {
  id: string;
  name: string;
  description: string;
}

function AllProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/projects/view-all-project");
        console.log(res)
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || "Failed to fetch projects");
        }

        setProjects(data.data || []);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-600">Loading projects...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-red-600">Error: {error}</p>
      </div>
    );
  }

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
