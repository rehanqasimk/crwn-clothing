import "./categories.styles.scss";
const App = () => {
  const categories = [
    {
      id: 1,
      title: "hats",
    },
    {
      id: 2,
      title: "hats",
    },
    {
      id: 3,
      title: "hats",
    },
    {
      id: 4,
      title: "hats",
    },
    {
      id: 5,
      title: "hats",
    },
  ];
  return (
    <div className="categories-container">
      {categories.map(({ title, id }) => (
        <div key={id} className="category-container">
          <div className="background-image" />
          <div className="category-body-container">
            <h1>{title}</h1>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
