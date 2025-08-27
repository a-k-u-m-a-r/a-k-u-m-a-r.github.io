import { Link } from 'react-router-dom';
import blogsData from '../data/blogs.json';
import { gruvboxTheme } from '../theme/gruvbox';
import Navbar from './Navbar';

const Blogs = () => {
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
              Blog Articles
            </h1>
            <p 
              className="text-lg max-w-2xl mx-auto"
              style={{ color: gruvboxTheme.fg4 }}
            >
              {/* Blurb explaining */}
            </p>
          </div>

          
          <div className="flex flex-col gap-4">
            {blogsData.map((blog) => (
              <Link
                key={blog.id}
                to={`/blog/${blog.id}`}
                className="rounded-lg flex items-stretch transition-all duration-200 cursor-pointer overflow-hidden hover:shadow-lg"
                style={{ 
                  backgroundColor: gruvboxTheme.bg1,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = gruvboxTheme.bg2;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = gruvboxTheme.bg1;
                }}
              >
                <div 
                  className="w-32 flex-shrink-0 flex items-center justify-center rounded-l-lg"
                  style={{ backgroundColor: gruvboxTheme.bg3 }}
                >
                  {blog.image ? (
                    <img 
                      src={blog.image} 
                      alt={blog.title}
                      className="w-full h-full object-cover rounded-l-lg"
                    />
                  ) : (
                    <div className="text-center" style={{ color: gruvboxTheme.fg4 }}>
                      <div className="text-lg mb-1">📄</div>
                      <div className="text-xs">No Image</div>
                    </div>
                  )}
                </div>
                
                <div className="flex-1 min-w-0 p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-3">
                      <time 
                        className="text-sm"
                        style={{ color: gruvboxTheme.fg4 }}
                      >
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
                            className="text-xs px-2 py-1 rounded-full"
                            style={{ 
                              backgroundColor: gruvboxTheme.green,
                              color: gruvboxTheme.bg0
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <span 
                      className="text-sm"
                      style={{ color: gruvboxTheme.fg4 }}
                    >
                      {blog.readTime}
                    </span>
                  </div>
                  
                  <h3 
                    className="text-lg font-bold mb-1 leading-tight text-left"
                    style={{ color: gruvboxTheme.yellow }}
                  >
                    {blog.title}
                  </h3>
                  
                  <p 
                    className="text-sm mb-2 line-clamp-2 text-left"
                    style={{ color: gruvboxTheme.orange }}
                  >
                    {blog.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

  );
};

export default Blogs;