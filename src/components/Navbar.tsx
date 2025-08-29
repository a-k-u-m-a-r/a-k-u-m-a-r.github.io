import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className = "" }) => {
  const location = useLocation();
  const { theme } = useTheme();

  const navItems = [
    { path: '/projects', label: 'Projects' },
    { path: '/blogs', label: 'Blogs' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`flex justify-between items-center mb-16 ${className}`}>
      <Link 
        to="/" 
        className="text-2xl font-bold transition-colors hover:opacity-80"
        style={{ color: theme.fg1 }}
      >
        Portfolio
      </Link>
      <div className="flex items-center gap-6">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`transition-colors hover:opacity-80 ${
              isActive(item.path) ? 'font-medium border-b-2' : ''
            }`}
            style={{
              color: isActive(item.path) ? theme.blue : theme.fg4,
              borderColor: isActive(item.path) ? theme.blue : 'transparent',
            }}
          >
            {item.label}
          </Link>
        ))}
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;