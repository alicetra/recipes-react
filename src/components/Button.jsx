import React from 'react';

const POSTS_PER_PAGE = 12;

const Button = ({ total }) => {
    const totalPages = Math.ceil(total / POSTS_PER_PAGE);

    return (
            <nav className="pagination" role="navigation" aria-label="pagination">
                <a className="pagination-previous">Previous</a>
                <a className="pagination-next">Next</a>
                <ul className="pagination-list">
                    {[...Array(totalPages)].map((e, i) => (
                        <li key={i}>
                            <a className="pagination-link" aria-label={`Page ${i + 1}`}>
                                {i + 1}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
    );
};

export default Button;