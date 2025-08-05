import { Link, useParams } from 'react-router-dom';
import blogsData from '../data/blogs.json';

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const blog = blogsData.find(b => b.id === id);

  if (!blog) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Blog Not Found</h1>
          <Link to="/blogs" className="text-blue-400 hover:text-blue-300">
            ← Back to Blogs
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
            to="/blogs" 
            className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8"
          >
            ← Back to Blogs
          </Link>

          <article className="bg-gray-800 border border-gray-700 rounded-2xl shadow-xl overflow-hidden">
            <div className="aspect-video bg-gray-700 overflow-hidden">
              <img 
                src={blog.image} 
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-8">
              <div className="mb-8">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <time>
                    {new Date(blog.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </time>
                  <span>•</span>
                  <span>{blog.readTime}</span>
                </div>
                
                <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
                  {blog.title}
                </h1>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {blog.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="bg-green-900 text-green-300 text-sm px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  {blog.excerpt}
                </p>
                
                <div className="text-gray-300 leading-relaxed space-y-6">
                  {blog.content.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;