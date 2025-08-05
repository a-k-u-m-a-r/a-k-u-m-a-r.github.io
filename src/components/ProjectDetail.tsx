import { Link, useParams } from 'react-router-dom';
import projectsData from '../data/projects.json';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-blue-400 hover:text-blue-300">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center mb-16">
          <Link to="/" className="text-2xl font-bold text-white">Portfolio</Link>
          <div className="flex gap-6">
            <Link 
              to="/projects" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Projects
            </Link>
            <Link 
              to="/blogs" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Blogs
            </Link>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto">
          <Link 
            to="/projects" 
            className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8"
          >
            ← Back to Projects
          </Link>

          <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-xl overflow-hidden">
            <div className="aspect-video bg-gray-700 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-8">
              <div className="mb-6">
                <h1 className="text-4xl font-bold text-white mb-4">{project.title}</h1>
                <p className="text-xl text-gray-300 mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="bg-blue-900 text-blue-300 text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4">Project Details</h2>
                <p className="text-gray-300 leading-relaxed">{project.details}</p>
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors font-medium"
                >
                  View on GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;