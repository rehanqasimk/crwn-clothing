import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./routes/home";

const Navigation = () => {
  return (
    <div>
      <h1>I am the Navigation Bar</h1>
      <Outlet />
    </div>
  );
};
const Shop = () => {
  return <h1>I am the Shop</h1>;
};
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
