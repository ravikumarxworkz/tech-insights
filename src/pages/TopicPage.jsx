import { useParams } from 'react-router-dom';
import { topicData } from '../data/topicData';
import CodeTabs from '../components/CodeTabs';
import { motion } from 'framer-motion';

const TopicPage = () => {
    const { id } = useParams();
    const data = topicData[id] || topicData['java']; // Default to Java if not found

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
        </main>
    );
};

export default TopicPage;
