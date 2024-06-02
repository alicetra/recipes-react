import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Import useDispatch
import { fetchrecipe, setCurrentPage, visitedPages } from '../redux/recipeSlicer'; // Import your actions

const POSTS_PER_PAGE = 12;

const Button = ({ total }) => {
    const totalPages = Math.ceil(total / POSTS_PER_PAGE);
    const dispatch = useDispatch(); // Get the dispatch function
    const state = useSelector((state) => state.recipe)
    // console.log(state.currentPage)
    // console.log(state.visitedPages)
    // console.log(state.data)

    const handlePageClick = (page) => {
        // Dispatch the setCurrentPage action to update the current page
        if (!(page in state.data)) {
            // dispatch(setCurrentPage(page));
            // Calculate the skip value based on the current page
            const skip = (page - 1) * POSTS_PER_PAGE;
            // Dispatch the fetchrecipe action with the updated skip value
            dispatch(fetchrecipe(skip));
        } else {
            dispatch(setCurrentPage(page))
        }
    }
        ;

    return (
        <nav className="pagination is-right" role="navigation" aria-label="pagination" >
            <a className="pagination-previous"
                onClick={() => handlePageClick(state.currentPage - 1)} >Previous</a>
            <a className="pagination-next"
                onClick={() => handlePageClick(state.currentPage + 1)} disabled={state.currentPage === totalPages} >Next</a>
            <ul className="pagination-list">
                {[...Array(totalPages)].map((_, i) => (
                    <li key={i}>
                        <a
                            className="pagination-link"
                            aria-label={`Page ${i + 1}`}
                            onClick={() => handlePageClick(i + 1)} // Call handlePageClick on click
                        >
                            {i + 1}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Button;