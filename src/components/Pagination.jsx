import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { fetchrecipe, setCurrentPage, visitedPages } from '../redux/recipeSlicer'; 

const POSTS_PER_PAGE = 12;

const Pagination = ({ total }) => {
    const totalPages = Math.ceil(total / POSTS_PER_PAGE);
    const dispatch = useDispatch(); 
    const state = useSelector((state) => state.recipe)
    // console.log(state.currentPage)
    // console.log(state.visitedPages)
    // console.log(state.data)

    const handlePageClick = (page) => {

        if (!(page in state.data)) {

            const skip = (page - 1) * POSTS_PER_PAGE;

            dispatch(fetchrecipe(skip));
        } else {
            dispatch(setCurrentPage(page))
        }
    }
        ;

    return (
        <nav className="pagination is-right" role="navigation" aria-label="pagination" >
            <a className="pagination-previous"
                onClick={() => handlePageClick(state.currentPage - 1)} disabled={state.currentPage === 1}  >Previous</a>
            <a className="pagination-next"
                onClick={() => handlePageClick(state.currentPage + 1)} disabled={state.currentPage === totalPages} >Next</a>
            <ul className="pagination-list">
                {[...Array(totalPages)].map((_, i) => (
                    <li key={i}>
                        <a
                           className={`pagination-link ${state.currentPage === i + 1 ? 'is-current' : ''}`}
                           aria-label={`Page ${i + 1}`}
                           onClick={() => handlePageClick(i + 1)}
                        >
                            {i + 1}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;