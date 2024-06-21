import { useState, useEffect } from "react";
import { add } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

const Home = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchproduct = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    };
    fetchproduct();
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  return (
    <>
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt="" />
          <h4>{product.title}</h4>
          <h5>${product.price}</h5>
          <button onClick={() => handleAdd(product)}>Add to cart</button>
        </div>
      ))}
    </>
  );
};

export default Home;
