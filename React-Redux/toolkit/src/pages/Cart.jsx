import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { remove } from "../redux/cartSlice";

const Cart = () => {
  const cartitems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  return (
    <div>
      <h2>Cart-Page</h2>
      <div>
        {cartitems.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt="" />
            <h4>{item.title}</h4>
            <h5>{item.price}</h5>
            <button onClick={() => handleRemove(item.id)}>Remove </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
