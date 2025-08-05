import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import projectsData from '../data/projects.json';

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center mb-16">
          <Link to="/" className="text-2xl font-bold text-white">Portfolio</Link>
          <div className="flex gap-6">
            <Link 
              to="/projects" 
              className="text-blue-400 font-medium border-b-2 border-blue-400"
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

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">My Projects</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              {/* Blurb explaining */}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project) => (
              <Card key={project.id} className="bg-gray-800 border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;