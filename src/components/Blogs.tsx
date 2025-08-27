import { Link } from 'react-router-dom';
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

          
          <div className="flex flex-col gap-4">
            {blogsData.map((blog) => (
              <Link
                key={blog.id}
                to={`/blog/${blog.id}`}
                className="bg-[#1e2021] rounded-lg flex items-stretch hover:bg-[#2a2d2e] transition-colors cursor-pointer overflow-hidden"
              >
                <div className="w-32 bg-gray-700 flex-shrink-0 flex items-center justify-center rounded-l-lg">
                  {blog.image ? (
                    <img 
                      src={blog.image} 
                      alt={blog.title}
                      className="w-full h-full object-cover rounded-l-lg"
                    />
                  ) : (
                    <div className="text-gray-400 text-center">
                      <div className="text-lg mb-1">📄</div>
                      <div className="text-xs">No Image</div>
                    </div>
                  )}
                </div>
                
                <div className="flex-1 min-w-0 p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-3">
                      <time className="text-sm text-gray-400">
                        {new Date(blog.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </time>
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
                    </div>
                    <span className="text-sm text-gray-400">{blog.readTime}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-1 leading-tight text-left">
                    {blog.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-2 line-clamp-2 text-left">
                    {blog.excerpt}
                  </p>
                  
                  {/* <div className="flex flex-wrap gap-2">
                    {blog.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="bg-green-900 text-green-300 text-xs px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div> */}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;