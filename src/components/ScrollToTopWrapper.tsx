import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface ScrollToTopWrapperProps {
  children: React.ReactNode;
}

const ScrollToTopWrapper: React.FC<ScrollToTopWrapperProps> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // Scroll para o topo da página sempre que a rota mudar
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [location.pathname]);

  return <>{children}</>;
};

export default ScrollToTopWrapper;
