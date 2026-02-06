import { motion } from 'framer-motion';
import CodeTabs from '../components/CodeTabs';
import Pagination from './Pagination';
import './ConceptsSection.css';

const ConceptsSection = ({ data, currentPage, filterType, conceptFilter, onPageChange, onFilterChange, onConceptChange }) => {
    if (!data || !data.pages) return null;

    const allConcepts = data.pages.flatMap(page => page.concepts || []);
    const conceptOptions = Array.from(
        new Set(
            allConcepts
                .map(concept => concept.concept)
                .filter(Boolean)
        )
    );

    const conceptFilteredConcepts = conceptFilter === 'all'
        ? allConcepts
        : allConcepts.filter(c => c.concept === conceptFilter);

    const theoryCount = conceptFilteredConcepts.filter(c => c.type === 'theory').length;
    const exampleCount = conceptFilteredConcepts.filter(c => c.type === 'example').length;

    const typeFilteredConcepts = filterType === 'all'
        ? conceptFilteredConcepts
        : conceptFilteredConcepts.filter(c => c.type === filterType);

    const pageSize = 10;
    const totalPages = Math.max(1, Math.ceil(typeFilteredConcepts.length / pageSize));
    const safePage = Math.min(Math.max(currentPage, 1), totalPages);
    const pageConcepts = typeFilteredConcepts.slice(
        (safePage - 1) * pageSize,
        safePage * pageSize
    );

    return (
        <>
            {/* Stats Bar */}
            <div className="stats-bar">
                <div className="stat">
                    <span className="stat-label">Total Concepts:</span>
                    <span className="stat-value">{typeFilteredConcepts.length}</span>
                </div>
                <div className="stat">
                    <span className="stat-label">Page:</span>
                    <span className="stat-value">{safePage} of {totalPages}</span>
                </div>
            </div>

            {/* Filter Buttons */}
            <div className="filter-section">
                <div className="filter-buttons">
                    {conceptOptions.length > 0 && (
                        <div className="concept-filter">
                            <label htmlFor="concept-filter">Concept:</label>
                            <select
                                id="concept-filter"
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
                        All ({conceptFilteredConcepts.length})
                    </button>
                    <button 
                        className={filterType === 'theory' ? 'active theory-btn' : 'theory-btn'}
                        onClick={() => onFilterChange('theory')}
                    >
                        📖 Theory ({theoryCount})
                    </button>
                    <button 
                        className={filterType === 'example' ? 'active example-btn' : 'example-btn'}
                        onClick={() => onFilterChange('example')}
                    >
                        💡 Examples ({exampleCount})
                    </button>
                </div>
            </div>

            {/* Concepts List */}
            <div className="concepts-list">
                {pageConcepts.map((concept, index) => (
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="concept-card" 
                        key={concept.id}
                    >
                        <div className="concept-header">
                            <h2>{concept.title}</h2>
                            <span className={`concept-badge ${concept.type}`}>
                                {concept.type === 'theory' ? '📖 Theory' : '💡 Example'}
                            </span>
                        </div>
                        
                        <div className="concept-content">
                            <pre>{concept.content}</pre>
                        </div>
                        
                        {concept.codeExample && (
                            <CodeTabs code={concept.codeExample} output={concept.output} />
                        )}
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

export default ConceptsSection;
