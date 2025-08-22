import { Link, useParams } from 'react-router-dom';
import blogsData from '../data/blogs.json';
import Markdown from './Markdown';

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
          <Link to="/blogs" className="text-blue-400 hover:text-blue-300">
            ← Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/blogs" className="text-blue-400 hover:text-blue-300 mb-8 inline-block">
          ← Back to Blogs
        </Link>
        
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">{blog.title}</h1>
          <div className="flex items-center gap-4 text-gray-300 text-sm mb-6">
            <span>{blog.date}</span>
            <span>•</span>
            <span>{blog.readTime}</span>
          </div>
          <div className="flex gap-2 mb-6">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-blue-600 text-white text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="prose prose-invert prose-lg max-w-none text-left">
          

          {blogPieces}

        </div>
      </div>
    </div>
  );
};

export default BlogDetail;