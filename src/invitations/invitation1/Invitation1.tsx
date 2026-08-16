import { useState } from "react";

import DoorIntro from "./components/DoorIntro/DoorIntro";
import Header from "./components/Header/Header";
import Countdown from "./components/Countdown/Countdown";
import PlanOfDay from "./components/PlanOfDay/PlanOfDay";
import RSVP from "./components/RSVP/RSVP";

function Invitation1() {
  const [invitationOpened, setInvitationOpened] = useState(false);

  return (
    <>
      <DoorIntro
        onOpen={() => setInvitationOpened(true)}
      />

      <main>
        <Header revealed={invitationOpened} />
        <Countdown />
        <PlanOfDay />
        <RSVP />
      </main>
    </>
  );
}

export default Invitation1;
