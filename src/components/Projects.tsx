import { Link } from 'react-router-dom';
import { Card} from '@/components/ui/card';
import projectsData from '../data/projects.json';
import { gruvboxTheme } from '../theme/gruvbox';
import Navbar from './Navbar';

const Projects = () => {
  return (
    <div className="min-h-screen py-12" style={{ backgroundColor: gruvboxTheme.bg0 }}>
      <div className="max-w-6xl mx-auto px-6">
        <Navbar />
      </div>
      
      <div className="max-w-4xl mx-auto px-6">
          <div className="text-center">
            <h1 
              className="text-4xl font-bold mb-4"
              style={{ color: gruvboxTheme.red }}
            >
              My Projects
            </h1>
            {/* <p 
              className="text-lg max-w-2xl mx-auto"
              style={{ color: gruvboxTheme.fg4 }}
            >
              COMING SOON! IN THE MEAN TIME CHECKOUT BLOGS !!!
            </p> */}
        </div>

          {/* Create a separate branch to handle project creation */}
          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-4">
            {projectsData.map((project) => (
              // Using Gruvbox bg1 color for consistency
              <Link
                    key={project.id}
                    to={`/project/${project.id}`}
                    className="block"
                  >
                <Card 
                  style={{background: gruvboxTheme.bg1}} 
                  className="flex flex-col p-0 overflow-hidden transition-colors cursor-pointer rounded-md"
                >
                  
                  <div className="flex-1 overflow-hidden" style={{ backgroundColor: gruvboxTheme.bg3 }}>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  
                  <div className="px-4 pb-4 flex-shrink-0">
                    <h3 
                      className="text-xl font-bold mb-2 mt-0 text-left"
                      style={{ color: gruvboxTheme.yellow }}
                    >
                      {project.title}
                    </h3>
                    <p 
                      className="mb-4 text-left text-sm"
                      style={{ color: gruvboxTheme.orange }}
                    >
                      {project.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tech) => (
                        <span 
                          key={tech}
                          className="text-xs px-1.5 py-0.5 rounded-full"
                          style={{ 
                            backgroundColor: gruvboxTheme.green,
                            color: gruvboxTheme.bg0
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 rounded-lg transition-colors text-sm border"
                        style={{ 
                          borderColor: gruvboxTheme.bg3,
                          color: gruvboxTheme.fg3 
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = gruvboxTheme.bg3;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent';
                        }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </Card>
                </Link>
            ))}
          </div>
        </div>
      </div>
  );
};

export default Projects;