import { useParams, useLocation } from "react-router-dom";
const User = () => {
  const { fname } = useParams();
  const location = useLocation();

  return (
    <div className="mr-5">
      {fname !== undefined ? (
        <div>the user name is {fname}</div>
      ) : (
        <div>User</div>
      )}

      <div>
        <h2>The address is {location.pathname}</h2>
        <h2>The address is {location.key}</h2>
        <h2>The address is {location.hash}</h2>
        <h2>The address is {location.search}</h2>
      </div>
    </div>
  );
};

export default User;
