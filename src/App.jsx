import { nanoid } from "nanoid";
import { MainLayout } from "./layout/main-layout";
import { main_pages } from "./router/main-router";
import { Route, Routes } from "react-router-dom";
import { ShopMainSingle } from "./pages/shop-single/shop-main-single";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {main_pages.map((route) => (
          <Route
            index={route.path ? false : true}
            key={nanoid()}
            path={route.path}
            element={route.component}
          />
        ))}
        <Route path="/shop-main-single/:id" element={<ShopMainSingle/>} />
      </Route>
    </Routes>
  );
}

export default App;
