const CategoryCard = ({ title, desc }) => {
  return (
    <div className="glass-card">
      <h3>{title}</h3>
      <p>{desc}</p>
      <span className="cta">Explore →</span>
    </div>
  );
};

export default CategoryCard;
