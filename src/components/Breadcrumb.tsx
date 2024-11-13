import React from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <div className="text-sm text-gray-500 mb-8">
      {items.map((item, index) => (
        <React.Fragment key={item.label}>
          {item.path ? (
            <Link to={item.path} className="hover:text-gray-700">
              {item.label}
            </Link>
          ) : (
            <span>{item.label}</span>
          )}
          {index < items.length - 1 && <span className="mx-2">{'>'}</span>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumb;