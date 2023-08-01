import { ReactComponent as ProgramTable } from "../Assets/SVG/ProgramTable.svg";
function Program() {
  return (
    <div className="program">
      <p className="program-head">Program</p>
      <div className="program-container">
        <ProgramTable className="table"></ProgramTable>
      </div>
      <p className="program-head" id="hello">
        Competition Details
      </p>
      <div className="program-competition-section">
        <img src={require("../Assets/Award.png")} className="program-award" />
        <div className="program-competition-text-container">
          <p className="program-title">Description</p>
          <p className="program-competition-text1">
            In collaboration with IEEE Computational intelligence society
            Tunisia Chapter, we prepared to you our special competition with the
            theme "AI in HEALTHCARE".
          </p>
          <p className="program-title">Prizes</p>
          <div className="program-competition-text2">
            <p>1st Place : 500 DTN</p>
            <p>2nd Place : 300 DTN</p>
            <p>3rd Place : 200 DTN</p>
          </div>
          <a
            href="https://docs.google.com/forms/d/18wPYp97mQlDYAyOhehAi2cp1qsuKh2t0ab5yykBe0RA/viewform?fbclid=IwAR3Oc256nnsTdpPE1NFANxiC-ifpQI2P-8sSgrQFBnGK_a9d4K4Tp7q8YRM&edit_requested=true"
            className="button3"
          >
            Register Now
          </a>
        </div>
      </div>
      <p className="program-head" id="hello">
        Party
      </p>
      <div className="program-party-section">
        <img src={require("../Assets/Party.png")} className="program-party" />
        <div className="program-party-text-container">
          <p className="program-title">Theme : Masquerade</p>
          <p className="program-party-text1">
            In order to create a vibe of mystery and fun at the same time, we
            choose the party theme "MASQUERADE" which is an event in which many
            participants attend in costume wearing a mask to hide their
            identity. Typically, the masks are small and it is possible to tell
            who is who, but the main fun of the party is to dress up and wear a
            silly mask.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Program;
