import React from 'react';

const Breadcrumbs = ({ items }) => {
    return (
        <nav aria-label="breadcrumb text-white">
            <ol className="breadcrumb text-white">
                {items.map((item, index) => (
                    <li 
                        key={index} 
                        className={`breadcrumb-item text-white ${index === items.length - 1 ? 'active' : ''}`} 
                        aria-current={index === items.length - 1 ? 'page' : undefined}
                    >
                        {index === items.length - 1 ? (
                            item.name
                        ) : (
                            <a href={item.link}>{item.name}</a>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;
