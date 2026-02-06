import { motion } from 'framer-motion';
import CodeTabs from '../components/CodeTabs';
import Pagination from './Pagination';
import './InterviewQuestionsSection.css';

const InterviewQuestionsSection = ({ data, currentPage, filterType, conceptFilter, onPageChange, onFilterChange, onConceptChange }) => {
    if (!data || !data.pages) return null;

    const allQuestions = data.pages.flatMap(page => page.questions || []);
    const conceptOptions = Array.from(
        new Set(
            allQuestions
                .map(question => question.concept)
                .filter(Boolean)
        )
    );

    const conceptFilteredQuestions = conceptFilter === 'all'
        ? allQuestions
        : allQuestions.filter(q => q.concept === conceptFilter);

    const easyCount = conceptFilteredQuestions.filter(q => q.difficulty === 'easy').length;
    const mediumCount = conceptFilteredQuestions.filter(q => q.difficulty === 'medium').length;
    const hardCount = conceptFilteredQuestions.filter(q => q.difficulty === 'hard').length;

    const difficultyFilteredQuestions = filterType === 'all'
        ? conceptFilteredQuestions
        : conceptFilteredQuestions.filter(q => q.difficulty === filterType);

    const pageSize = 10;
    const totalPages = Math.max(1, Math.ceil(difficultyFilteredQuestions.length / pageSize));
    const safePage = Math.min(Math.max(currentPage, 1), totalPages);
    const pageQuestions = difficultyFilteredQuestions.slice(
        (safePage - 1) * pageSize,
        safePage * pageSize
    );

    return (
        <>
            {/* Stats Bar */}
            <div className="stats-bar">
                <div className="stat">
                    <span className="stat-label">Total Questions:</span>
                    <span className="stat-value">{difficultyFilteredQuestions.length}</span>
                </div>
                <div className="stat">
                    <span className="stat-label">Page:</span>
                    <span className="stat-value">{safePage} of {totalPages}</span>
                </div>
                <div className="stat difficulty-stats">
                    <span className="easy">Easy: {easyCount}</span>
                    <span className="medium">Medium: {mediumCount}</span>
                    <span className="hard">Hard: {hardCount}</span>
                </div>
            </div>

            {/* Difficulty Filter */}
            <div className="filter-section">
                <div className="filter-buttons">
                    {conceptOptions.length > 0 && (
                        <div className="concept-filter">
                            <label htmlFor="interview-concept-filter">Concept:</label>
                            <select
                                id="interview-concept-filter"
                                value={conceptFilter}
                                onChange={(e) => onConceptChange(e.target.value)}
                            >
                                <option value="all">All Concepts</option>
                                {conceptOptions.map(option => (
                                    <option key={option} value={option}>{option}</option>
                                ))}
                            </select>
                        </div>
                    )}
                    <button 
                        className={filterType === 'all' ? 'active' : ''}
                        onClick={() => onFilterChange('all')}
                    >
                        All ({conceptFilteredQuestions.length})
                    </button>
                    <button 
                        className={filterType === 'easy' ? 'active easy-btn' : 'easy-btn'}
                        onClick={() => onFilterChange('easy')}
                    >
                        🟢 Easy ({easyCount})
                    </button>
                    <button 
                        className={filterType === 'medium' ? 'active medium-btn' : 'medium-btn'}
                        onClick={() => onFilterChange('medium')}
                    >
                        🟡 Medium ({mediumCount})
                    </button>
                    <button 
                        className={filterType === 'hard' ? 'active hard-btn' : 'hard-btn'}
                        onClick={() => onFilterChange('hard')}
                    >
                        🔴 Hard ({hardCount})
                    </button>
                </div>
            </div>

            {/* Interview Questions List */}
            <div className="interview-questions-list">
                {pageQuestions.map((question, index) => (
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="interview-card" 
                        key={question.id}
                    >
                        <div className="question-header">
                            <h2>{question.title}</h2>
                            <div className="badges">
                                <span className={`difficulty-badge ${question.difficulty}`}>
                                    {question.difficulty.toUpperCase()}
                                </span>
                            </div>
                        </div>
                        
                        {question.askedBy && (
                            <div className="asked-by">
                                <strong>Asked by:</strong> {question.askedBy.join(', ')}
                            </div>
                        )}
                        
                        {question.tags && (
                            <div className="tags">
                                {question.tags.map(tag => (
                                    <span key={tag} className="tag">{tag}</span>
                                ))}
                            </div>
                        )}
                        
                        <div className="question-text">
                            <h4>Problem:</h4>
                            <pre>{question.question}</pre>
                        </div>
                        
                        {question.hints && (
                            <details className="hints">
                                <summary>💡 Hints ({question.hints.length})</summary>
                                <ul>
                                    {question.hints.map((hint, idx) => (
                                        <li key={idx}>{hint}</li>
                                    ))}
                                </ul>
                            </details>
                        )}
                        
                        <details className="solution" open>
                            <summary>✅ Solution</summary>
                            {question.answer ? (
                                <div className="explanation">
                                    <h4>Answer:</h4>
                                    <pre>{question.answer}</pre>
                                </div>
                            ) : (
                                <CodeTabs code={question.solution} output={question.output} />
                            )}
                            {question.explanation && (
                                <div className="explanation">
                                    <h4>Explanation:</h4>
                                    <pre>{question.explanation}</pre>
                                </div>
                            )}
                        </details>
                    </motion.div>
                ))}
            </div>

            {/* Pagination */}
            <Pagination 
                currentPage={safePage}
                totalPages={totalPages}
                onPageChange={onPageChange}
            />
        </>
    );
};

export default InterviewQuestionsSection;
