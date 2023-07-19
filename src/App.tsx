import { useEffect, lazy, Suspense } from "react";
import { useDispatch } from "react-redux";

import { Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/scroll-to-top/scroll-to-top.component";
import Spinner from "./components/spinner/spinner.component";
import UpdateModal from "./components/update-modal/update-modal.component";

import { checkUserSession } from "./store/user/user.action";

const Navigation = lazy(
  () => import("./routes/navigation/navigation.component")
);
const Shop = lazy(() => import("./routes/shop/shop.component"));
const Checkout = lazy(() => import("./routes/checkout/checkout.component"));
const Home = lazy(() => import("./routes/home/home.component"));
const Authentication = lazy(
  () => import("./routes/authentication/authentication.component")
);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <Suspense fallback={<Spinner />}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>

      <UpdateModal />
    </Suspense>
  );
};

export default App;
