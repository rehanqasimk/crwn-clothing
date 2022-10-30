import { Routes, Route } from "react-router-dom";
import Home from "./routes/home";

const Shop = () => {
  return <h1>I am the Shops</h1>;
};
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
