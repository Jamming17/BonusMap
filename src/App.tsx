import { Routes, Route } from "react-router-dom";

import Header            from "./components/layout/Header";
import Footer            from "./components/layout/Footer";
import HomePage          from "./components/pages/HomePage";
import MapPage           from "./components/pages/MapPage";
import AdventurePage     from "./components/pages/AdventurePage";

import "leaflet/dist/leaflet.css";

function App() {

  return (
    <>
        <Header />
        <Routes>
            <Route path="/"          element={<HomePage      />} />
            <Route path="/map"       element={<MapPage       />} />
            <Route path="/adventure" element={<AdventurePage />} />
        </Routes>
        <Footer />
    </>
  );
}

export default App;