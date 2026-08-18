import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Invitation1 from "./invitations/invitation1/Invitation1";
import Invitation2 from "./invitations/invitation2/Invitation2";
import Invitation3 from "./invitations/invitation3/Invitation3";
import Invitation4 from "./invitations/invitation4/Invitation4";
import Invitation5 from "./invitations/invitation5/Invitation5";
import Invitation6 from "./invitations/invitation6/Invitation6";
import Invitation7 from "./invitations/invitation7/Invitation7";

function App() {
  return (
    <Routes>
      <Route path="/invitation-catalogue/" element={<Home />} />

      <Route path="/invitation-catalogue/ana-marko" element={<Invitation1 />} />

      <Route
        path="/invitation-catalogue/jovana-nikola"
        element={<Invitation2 />}
      />

      <Route
        path="/invitation-catalogue/jelena-nikola"
        element={<Invitation3 />}
      />

      <Route
        path="/invitation-catalogue/invitation4"
        element={<Invitation4 />}
      />

      <Route
        path="/invitation-catalogue/invitation5"
        element={<Invitation5 />}
      />

      <Route
        path="/invitation-catalogue/invitation6"
        element={<Invitation6 />}
      />

      <Route
        path="/invitation-catalogue/invitation7"
        element={<Invitation7 />}
      />
    </Routes>
  );
}

export default App;
