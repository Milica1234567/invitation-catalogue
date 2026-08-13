import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Invitation1 from "./invitations/invitation1/Invitation1";
import Invitation2 from "./invitations/invitation2/Invitation2";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/catalogue/ana-marko"
        element={<Invitation1 />}
      />

      <Route
        path="/catalogue/jovana-nikola"
        element={<Invitation2 />}
      />
    </Routes>
  );
}

export default App;