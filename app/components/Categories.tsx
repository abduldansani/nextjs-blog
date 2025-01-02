const Categories = () => {
  return (
    <div className="bg-textInLight2 h-20">
      <div className="container bg-textInDark2 h-full flex gap-20 justify-between">
        <h3>Categories</h3>
        <div className="flex items-ceneter gap-10">
          {categories.map((category, i) => (
            <a key={i} href="#" className="font-semibold text-2xl">
              {category}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const categories = ["Science", "Politics", "Innovation", "Invention"];

export default Categories;
