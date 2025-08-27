import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
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
        <div 
          className="rounded-xl p-8 mb-8"
        >
          <div className="text-center">
            <h1 
              className="text-4xl font-bold mb-4"
              style={{ color: gruvboxTheme.red }}
            >
              My Projects
            </h1>
            <p 
              className="text-lg max-w-2xl mx-auto"
              style={{ color: gruvboxTheme.fg4 }}
            >
              COMING SOON! IN THE MEAN TIME CHECKOUT BLOGS !!!
            </p>
          </div>
        </div>

          {/* Create a separate branch to handle project creation */}
          {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project) => (
              <Card key={project.id} style={{background: "#1e2021"}}>
                <div className="aspect-video bg-gray-700 rounded-t-lg overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="bg-blue-900 text-blue-300 text-xs px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="flex gap-3">
                  <Link
                    to={`/project/${project.id}`}
                    className="flex-1 bg-blue-600 text-white text-center px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    View Details
                  </Link>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-gray-600 text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors font-medium"
                  >
                    GitHub
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div> */}
        </div>
      </div>
  );
};

export default Projects;