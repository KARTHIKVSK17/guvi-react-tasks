import ProductCard from "../components/ProductCard";

function Home() {
  return (
    <div>
      <div className="container justify-content-center">
        <div className="row">
          <h2>Home Page</h2>
        </div>
      </div>
      <div className="container justify-content-center">
        <div className="row">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
}

export default Home;
