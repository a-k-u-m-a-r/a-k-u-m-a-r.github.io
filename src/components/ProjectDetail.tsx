import { Link, useParams } from 'react-router-dom';
import projectsData from '../data/projects.json';
import Markdown from './Markdown';
import styles from './Markdown.module.css';
import { gruvboxTheme } from '../theme/gruvbox';
import Navbar from './Navbar';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: gruvboxTheme.bg0 }}>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4" style={{ color: gruvboxTheme.fg1 }}>Project Not Found</h1>
          <Link 
            to="/projects" 
            className="hover:opacity-80 transition-colors"
            style={{ color: gruvboxTheme.blue }}
          >
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12" style={{ backgroundColor: gruvboxTheme.bg0 }}>
      <div className="max-w-6xl mx-auto px-6">
        <Navbar />
      </div>
      
      <div className="max-w-4xl mx-auto px-6">
        <header className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <Link 
              to="/projects" 
              className="text-sm hover:opacity-80 transition-colors"
              style={{ color: gruvboxTheme.blue }}
            >
              ← Back to Projects
            </Link>
          </div>
          <div className={`prose prose-gruvbox prose-lg max-w-none ${styles.root}`}>
            <h1>{project.title}</h1>
          </div>
          <div className="flex items-center justify-center gap-4 text-sm mb-6 flex-wrap" style={{ color: gruvboxTheme.fg3 }}>
            <div className="flex gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs rounded-full"
                  style={{ 
                    backgroundColor: gruvboxTheme.blue, 
                    color: gruvboxTheme.bg0 
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex gap-4 mb-8 justify-center">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg transition-colors font-medium border"
              style={{ 
                borderColor: gruvboxTheme.bg3,
                color: gruvboxTheme.fg3,
                backgroundColor: 'transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = gruvboxTheme.bg3;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              View on GitHub
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg transition-colors font-medium"
              style={{ 
                backgroundColor: gruvboxTheme.blue,
                color: gruvboxTheme.bg0
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = gruvboxTheme.aqua;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = gruvboxTheme.blue;
              }}
            >
              Live Demo
            </a>
          </div>
        </header>

        <div className="text-left">
          <Markdown source={project.details.replace(/\\n/g, '\n')} />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;