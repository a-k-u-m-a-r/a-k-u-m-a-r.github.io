import { Link, useParams } from 'react-router-dom';
import blogsData from '../data/blogs.json';
import Markdown from './Markdown';
import styles from './Markdown.module.css';
import { gruvboxTheme } from '../theme/gruvbox';
import Navbar from './Navbar';

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const blog = blogsData.find(b => b.id === id);
  const blogPieces = blog?.blocks.map(block => {
      if (block.type == "image") {
        return ( <img className="h-auto max-w-md mx-auto" src={block.content} alt="image description" />)
      } else{
        return (<Markdown source={block.content}></Markdown>)
      }
  })
    

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Blog Not Found</h1>
          {/* <Link to="/blogs" className="text-blue-400 hover:text-blue-300">
            ← Back to Blogs
          </Link> */}
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
              to="/blogs" 
              className="text-sm hover:opacity-80 transition-colors"
              style={{ color: gruvboxTheme.blue }}
            >
              ← Back to Blogs
            </Link>
          </div>
          <div className={`prose prose-gruvbox prose-lg max-w-none ${styles.root}`}>
            <h1>{blog.title}</h1>
          </div>
          <div className="flex items-center justify-center gap-4 text-sm mb-6 flex-wrap" style={{ color: gruvboxTheme.fg3 }}>
            <span>{blog.date}</span>
            <span>•</span>
            <span>{blog.readTime}</span>
            <span>•</span>
            <div className="flex gap-2">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs rounded-full"
                  style={{ 
                    backgroundColor: gruvboxTheme.blue, 
                    color: gruvboxTheme.bg0 
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        <div className="text-left">
          {blogPieces}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;