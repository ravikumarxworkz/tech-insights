import './Pagination.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div className="pagination">
            <button 
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="pagination-btn"
            >
                ← Previous
            </button>
            
            <div className="page-numbers">
                {[...Array(totalPages)].map((_, idx) => {
                    const pageNum = idx + 1;
                    if (
                        pageNum === 1 || 
                        pageNum === totalPages || 
                        Math.abs(pageNum - currentPage) <= 1
                    ) {
                        return (
                            <button
                                key={pageNum}
                                onClick={() => onPageChange(pageNum)}
                                className={currentPage === pageNum ? 'active' : ''}
                            >
                                {pageNum}
                            </button>
                        );
                    } else if (
                        pageNum === currentPage - 2 || 
                        pageNum === currentPage + 2
                    ) {
                        return <span key={pageNum}>...</span>;
                    }
                    return null;
                })}
            </div>

            <button 
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="pagination-btn"
            >
                Next →
            </button>
        </div>
    );
};

export default Pagination;