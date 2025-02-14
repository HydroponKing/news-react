import React from 'react';
import s from './Pagination.module.css'

const Pagination = ({
                        totalPages,
                        handleNextPage,
                        handlePageClick,
                        handlePreviousPage,
                        currentPage
}) => {
    return (
        <div className={s.pagination}>
            <button
                onClick={handlePreviousPage}
                className={s.arrow}
                disabled={currentPage <= 1}

            >{'<'}</button>
                <div className={s.list}>
                    {[...Array(totalPages)].map((_, index) => {
                        return <button
                            onClick={()=> handlePageClick(index + 1)}
                            className={s.pageNumber}
                            disabled={index + 1 === currentPage}
                            key={index}>{index + 1}
                        </button>
                    })}
                </div>
            <button
                onClick={handleNextPage}
                className={s.arrow}
                disabled={currentPage >= totalPages}

            >{'>'}</button>
        </div>
    );
};

export default Pagination;