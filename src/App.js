import { Route, Routes } from "react-router-dom";
import HomePage from "./scenes/homepage";

import Navbar from "../src/scenes/navbar/index";
import Store from "./scenes/Store/Store";
import ArtistPage from "./scenes/artistsPage";
import Footer from "./scenes/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/Shop" element={<Store />} />
        <Route path="/Artists" element={<ArtistPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
