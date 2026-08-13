import { useState } from "react";

import DoorIntro from "./components/DoorIntro/DoorIntro";
import Header from "./components/Header/Header";

function Invitation2() {
  const [invitationOpened, setInvitationOpened] = useState(false);

  return (
    <>
      <DoorIntro
        onOpen={() => setInvitationOpened(true)}
      />

      <main>
        <Header revealed={invitationOpened} />
      </main>
    </>
  );
}

export default Invitation2;