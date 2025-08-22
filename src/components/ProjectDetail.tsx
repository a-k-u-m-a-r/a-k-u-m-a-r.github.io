import { Link, useParams } from 'react-router-dom';
import projectsData from '../data/projects.json';
import Markdown from './Markdown';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
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
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/projects" className="text-blue-400 hover:text-blue-300 mb-8 inline-block">
          ← Back to Projects
        </Link>
        
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">{project.title}</h1>
          <p className="text-xl text-gray-300 mb-6">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-blue-600 text-white text-xs rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4 mb-8">
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
        </header>

        <div className="prose prose-invert prose-lg max-w-none text-left">
          <Markdown source={project.details.replace(/\\n/g, '\n')} />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;