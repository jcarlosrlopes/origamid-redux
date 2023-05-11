import { useSelector } from "react-redux";
import Login from "./Components/Login";

function App() {
  const { data } = useSelector((state) => state.login.user);

  return (
    <div className="App">
      <Login />
      <p>{data?.email}</p>
    </div>
  );
}

export default App;
