import { useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { topicData } from '../data/topics';
import CodeTabs from '../components/CodeTabs';
import { motion } from 'framer-motion';
import Pagination from '../components/Pagination';

// Import your sub-sections
import ConceptsSection from '../components/ConceptsSection';
import InterviewQuestionsSection from '../components/InterviewQuestionsSection';

const TopicPage = () => {
    const { id } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    
    // 'default' shows your original list. 'concepts' or 'interview' shows the sections.
    const view = searchParams.get('section') || 'default';
    const currentPage = parseInt(searchParams.get('page')) || 1;
    const filterType = searchParams.get('filter') || 'all';
    const conceptFilter = searchParams.get('concept') || 'all';
    
    const data = topicData[id];
    const pageSize = 10;
    const questions = data?.questions || [];
    const totalQuestionPages = Math.max(1, Math.ceil(questions.length / pageSize));
    const safeQuestionPage = Math.min(Math.max(currentPage, 1), totalQuestionPages);
    const pageQuestions = questions.slice(
        (safeQuestionPage - 1) * pageSize,
        safeQuestionPage * pageSize
    );

    if (!data) {
        return (
            <main className="topic-page">
                <section className="topic-hero">
                    <h1>Topic not found</h1>
                </section>
            </main>
        );
    }

    // Navigation Handlers
    const showInDepth = (sectionName) => {
        setSearchParams({ section: sectionName, page: 1, filter: 'all', concept: 'all' });
    };

    const resetToDefault = () => {
        setSearchParams({}); // Clears URL params to show original view
    };

    return (
        <main className="topic-page">
            <section className="topic-hero">
                <h1 onClick={resetToDefault} style={{ cursor: 'pointer' }}>{data.title}</h1>
                <p>{data.subtitle}</p>
                
                {/* --- NAVIGATION BUTTONS --- */}
                <div className="view-selector">
                    <button 
                        className={`selector-btn ${view === 'concepts' ? 'active' : ''}`}
                        onClick={() => showInDepth('concepts')}
                    >
                        📚 In-Depth Concepts
                    </button>
                    <button 
                        className={`selector-btn ${view === 'interview' ? 'active' : ''}`}
                        onClick={() => showInDepth('interview')}
                    >
                        💼 Full Interview Bank
                    </button>
                    {view !== 'default' && (
                        <button className="selector-btn back-btn" onClick={resetToDefault}>
                            ⬅ Back to Overview
                        </button>
                    )}
                </div>
            </section>

            {/* --- CONDITIONAL RENDERING --- */}
            
            {/* 1. ORIGINAL DEFAULT VIEW */}
            {view === 'default' && (
                <>
                    <div className="questions-list">
                        <h2 className="section-title">⭐ Quick Revision: Must-Know Questions</h2>
                        {pageQuestions.map((q, index) => (
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="question-card" 
                                key={q.id}
                            >
                                <div className="q-header">
                                    <h2>{q.title}</h2>
                                    <span className="q-badge">Important</span>
                                </div>
                                <p className="q-desc">{q.desc}</p>
                                <CodeTabs code={q.code} output={q.output} />
                            </motion.div>
                        ))}
                    </div>

                    {totalQuestionPages > 1 && (
                        <Pagination 
                            currentPage={safeQuestionPage}
                            totalPages={totalQuestionPages}
                            onPageChange={(p) => setSearchParams({ page: p })}
                        />
                    )}

                    {data.top10 && (
                        <div className="top10-section">
                            <h2 className="section-title">🔥 Top 10 Interview Q&A</h2>
                            {data.top10.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="qa-card"
                                >
                                    <h3>{idx + 1}. {item.q}</h3>
                                    <p className="qa-answer">{item.a}</p>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </>
            )}

            {/* 2. IN-DEPTH CONCEPTS VIEW */}
            {view === 'concepts' && (
                <ConceptsSection 
                    data={data.concepts} 
                    currentPage={currentPage}
                    filterType={filterType}
                    conceptFilter={conceptFilter}
                    onPageChange={(p) => setSearchParams({ section: 'concepts', page: p, filter: filterType, concept: conceptFilter })}
                    onFilterChange={(f) => setSearchParams({ section: 'concepts', page: 1, filter: f, concept: conceptFilter })}
                    onConceptChange={(c) => setSearchParams({ section: 'concepts', page: 1, filter: filterType, concept: c })}
                />
            )}

            {/* 3. FULL INTERVIEW QUESTIONS VIEW */}
            {view === 'interview' && (
                <InterviewQuestionsSection 
                    data={data.interviewQuestions} 
                    currentPage={currentPage}
                    filterType={filterType}
                    conceptFilter={conceptFilter}
                    onPageChange={(p) => setSearchParams({ section: 'interview', page: p, filter: filterType, concept: conceptFilter })}
                    onFilterChange={(f) => setSearchParams({ section: 'interview', page: 1, filter: f, concept: conceptFilter })}
                    onConceptChange={(c) => setSearchParams({ section: 'interview', page: 1, filter: filterType, concept: c })}
                />
            )}
        </main>
    );
};

export default TopicPage;
