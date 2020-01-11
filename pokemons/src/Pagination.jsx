import React from 'react'
import './App.css';

export default function Pagination({goNextPage, goPrevPage}) {
    return (
        <div className="pagination">
            {goPrevPage && <button className="btn" onClick={goPrevPage}>Prev</button>}
            {goNextPage && <button className="btn" onClick={goNextPage}>Next</button>}
        </div>
    )
}
