import { useParams } from 'react-router-dom';
import { topicData } from '../data/topics';
import CodeTabs from '../components/CodeTabs';
import { motion } from 'framer-motion';

const TopicPage = () => {
    const { id } = useParams();
    const data = topicData[id];

    if (!data) {
        return (
            <main className="topic-page">
                <section className="topic-hero">
                    <h1>Topic not found</h1>
                    <p>We couldn't find the requested topic.</p>
                </section>
            </main>
        );
    }

    return (
        <main className="topic-page">
            <section className="topic-hero">
                <h1>{data.title}</h1>
                <p>{data.subtitle}</p>
            </section>

            <div className="questions-list">
                {data.questions.map((q, index) => (
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

            {data.top10 && (
                <div className="top10-section">
                    <h2>Top 10 Interview Q&A</h2>
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
        </main>
    );
};

export default TopicPage;
