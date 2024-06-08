import Home from "./routes/home/home.component";
import { Routes, Route, Outlet } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";

const Shop = () => {
  return (
    <>
    <h1>This is a shop page</h1>
    </>
  )
};

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Route>
 
      </Routes>
    </>
  );
}
