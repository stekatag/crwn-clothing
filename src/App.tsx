import { useState, useEffect, lazy, Suspense } from "react";
import { useDispatch } from "react-redux";

import { Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/scroll-to-top/scroll-to-top.component";
import Spinner from "./components/spinner/spinner.component";
import BasicModal from "./components/basic-modal/basic-modal.component";

import { checkUserSession } from "./store/user/user.action";
import { registerSW } from "virtual:pwa-register";

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
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(checkUserSession());

    const unregisterSW = registerSW({
      onNeedRefresh() {
        setShowModal(true); // Show the modal when a new version is available
      },
    });

    return () => {
      // Cleanup the SW registration to avoid multiple listeners
      unregisterSW();
    };
  }, [dispatch]);

  const handleUpdate = async () => {
    setShowModal(false); // Close the modal before performing the update

    const updateSW = registerSW();
    await updateSW(true); // Perform the update

    // After performing the update, trigger a page reload to get the new content
    window.location.reload();
  };

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

      {showModal && (
        <BasicModal
          modalTitle="New Version Available"
          modalText="A new version of the app is available. Load new version?"
          closeModal={() => setShowModal(false)} // Close the modal without update
          confirmButton
          onConfirm={handleUpdate} // Perform the update and close the modal
        />
      )}
    </Suspense>
  );
};

export default App;
