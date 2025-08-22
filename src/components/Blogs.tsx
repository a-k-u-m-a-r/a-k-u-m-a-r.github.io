import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import blogsData from '../data/blogs.json';

const Blogs = () => {
  return (
    <div className="min-h-screen">
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
              className="text-blue-400 font-medium border-b-2 border-blue-400"
            >
              Blogs
            </Link>
          </div>
        </nav>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Blog Articles</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              {/* Blurb explaining */}
            </p>
          </div>

          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogsData.map((blog) => (
              <Card key={blog.id} style={{background: "#1e2021"}}>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <time className="text-sm text-gray-400">
                      {new Date(blog.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </time>
                    <span className="text-sm text-gray-400">{blog.readTime}</span>
                  </div>
                  <CardTitle className="text-xl text-white leading-tight">
                    {blog.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    {blog.excerpt}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="bg-green-900 text-green-300 text-xs px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter>
                  <Link
                    to={`/blog/${blog.id}`}
                    className="w-full bg-blue-600 text-white text-center px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Read Article
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;