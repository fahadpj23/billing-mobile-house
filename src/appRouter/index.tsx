import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoard from "pages/dashBoard";
import Attributes from "pages/attributes";
import Category from "pages/category";
import Purchase from "pages/purchase";
import Sales from "pages/sales";
import Products from "pages/products";
import Inventory from "pages/Inventory";
import MainLayout from "layout/index";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<DashBoard />} />
          <Route path="attributes" element={<Attributes />} />
          <Route path="category" element={<Category />} />
          <Route path="purchase" element={<Purchase />} />
          <Route path="sales" element={<Sales />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="products" element={<Products />} />
        </Route>
      </Routes>
    </Router>
  );
};
export default AppRouter;
