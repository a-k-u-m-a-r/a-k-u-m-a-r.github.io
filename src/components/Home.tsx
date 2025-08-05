import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center mb-16">
          <h1 className="text-2xl font-bold text-white">Portfolio</h1>
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

        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-5xl font-bold text-white leading-tight">
                Hi, I'm <span className="text-blue-400">Akshay Kumar</span>
              </h2>
              <h3 className="text-2xl text-gray-300">
                Aspiring Robotics Engineer
              </h3>
            </div>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              This website is to serve as digital representation of all the work I completed, projects in progress, and things I want to blog about. ALSO, its IN PROGRESS atm.
            </p>

            <div className="flex gap-4 pt-4">
              <Link
                to="/projects"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                View Projects
              </Link>
              <Link
                to="/blogs"
                className="border border-gray-600 text-gray-300 px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium"
              >
                Read Blogs
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-80 h-80 bg-gray-800 rounded-2xl flex items-center justify-center border-2 border-gray-700 shadow-xl">
              <div className="text-center text-gray-400">
                <svg 
                  className="w-20 h-20 mx-auto mb-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1.5} 
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
                  />
                </svg>
                <p className="text-sm">Something Here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;