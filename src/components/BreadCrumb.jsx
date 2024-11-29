import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x); 

  return (
    <nav className="p-4 rounded-md">
      <ol className="list-reset flex text-gray-700">
        <li>
          <Link to="/" style={{ color: '#1E231E', fontWeight: 400, fontSize: "16px", lineHeight: "24px" }}>
            Home
          </Link>
        </li>
        {pathnames.map((pathname, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1; 

          return (
            <li key={routeTo}>
              <span className="mx-2">/</span>
              <Link
                to={routeTo}
                className={`capitalize ${isLast ? 'font-semibold' : 'font-normal'}`}
                style={{ color: '#1E231E', fontWeight: isLast ? 600 : 400 }}
              >
                {pathname.replace(/-/g, ' ')}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;