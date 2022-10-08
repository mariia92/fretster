import React from "react";
import Stage from "./components/Stage";
import Presentation from "./components/Presentation";
import TwoSider from "./components/TwoSider";
import CtaContainer from "./components/CtaContainer";
import CustomerFeedback from "./components/CustomerFeedback";
import Footer from "./components/Footer";
import drums from "./images/drums.png";
import guitar_pov from "./images/guitar_pov.png";
import piano from "./images/piano.png";

import "./App.css";

const Page = ({ navigationButtons, currentPage, navigationHook }) => {
  return (
    <>
      <Stage
        navigationButtons={navigationButtons}
        navigationHook={navigationHook}
      >
        <div className="StageTextWrapper">
          <div className="StageText-Big">
            <span>see the </span>
            <span className="red">possibilities</span>
          </div>
          <div className="StageText-Big">
            <span className="red">of music </span>
            <span>- do something</span>
          </div>
          <div className="StageText-Fansy">really good</div>
        </div>
      </Stage>
      <CtaContainer />
      <Presentation />
      <TwoSider img={drums} isReversedOrder={false} fill={"#e04b69"}>
        <div className="TwoSider-Title huge">Band</div>
        <div className="TwoSider-Text">
          Lorem ipsum dolor sit amet, consetetur sadipsc- ing elitr, sed diam
          nonumy eirmod tempor invi- dunt ut labore et dolore magna aliquyam
          erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
          et ea rebum. Stet clita kasd.
        </div>
        <div className="TwoSider-Cta">anfragen</div>
      </TwoSider>
      <CustomerFeedback />
      <TwoSider img={guitar_pov} isReversedOrder={true} fill={"#ededed"} isProportional>
        <div className="TwoSider-Title big">
          <span style={{ color: "#e04b69" }}>Online </span>
          <span style={{ color: "#9a9aad" }}>Unterricht</span>
        </div>
        <div className="TwoSider-Text">
          Lorem ipsum dolor sit amet, consetetur sadipsc- ing elitr, sed diam
          nonumy eirmod tempor invi- dunt ut labore et dolore magna aliquyam
          erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
          et ea rebum. Stet clita kasd.
        </div>
        <div
          className="TwoSider-Cta"
          style={{ color: "#4e4e4e", "border-color": "#4e4e4e" }}
        >
          jetzt buchen
        </div>
      </TwoSider>
      <TwoSider img={piano} isReversedOrder={false} fill={"#9999ac"} isProportional>
        <div className="TwoSider-Title big">
          <span style={{ color: "#464646" }}>bei dir </span>
          <span style={{ color: "#fff" }}>zu hause</span>
        </div>
        <div className="TwoSider-Text">
          Lorem ipsum dolor sit amet, consetetur sadipsc- ing elitr, sed diam
          nonumy eirmod tempor invi- dunt ut labore et dolore magna aliquyam
          erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
          et ea rebum. Stet clita kasd.
        </div>
        <div
          className="TwoSider-Cta"
          style={{ color: "#fff", "border-color": "#fff" }}
        >
          jetzt buchen
        </div>
      </TwoSider>
      <Footer />
    </>
  );
};
export default Page;
