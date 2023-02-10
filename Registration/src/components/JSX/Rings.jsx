import "../CSS/rings.css";
import primaryRings from "../../assets/rings_primary.svg";
import ring1 from "../../assets/ring1.svg";
import ring2 from "../../assets/ring2.svg";
import ring3 from "../../assets/ring3.svg";
import ring4 from "../../assets/ring4.svg";
import ring5 from "../../assets/ring5.svg";
import ring6 from "../../assets/ring6.svg";
import ring7 from "../../assets/ring7.svg";
import ring8 from "../../assets/ring8.svg";
import ring9 from "../../assets/ring9.svg";
import ring10 from "../../assets/ring10.svg";
import ringSideOut from "../../assets/ring_side_out.svg";
import ringSideIn from "../../assets/ring_side_in.svg";
import ringSideLine from "../../assets/ring_side_line.svg";

const Rings = props => {
  return (
    <>
      <div className="rings-cont abs-left side-rings">
        <img
          className="rings abs-ring ring-glow"
          src={ringSideOut}
          style={{
            "--speed": "30s",
            "--delay": "200ms",
            "--dir": "reverse",
            "--size": "100%",
            "--scale": "1",
            "--tro": "50% 50%",
          }}
        />
        <img
          className="rings abs-ring"
          src={ringSideIn}
          style={{
            "--speed": "10s",
            "--delay": "200ms",
            "--dir": "normal",
            "--size": "100%",
            "--scale": "0.55",
            "--tro": "50% 50%",
          }}
        />
        <img
          className="ring-line"
          src={ringSideLine}
        />
      </div>
      <div className="rings-cont abs-center">
        <img
          className="rings ring-glow"
          src={primaryRings}
          style={{
            "--speed": "30s",
            "--delay": "300ms",
            "--dir": "normal",
          }}
        />
        <img
          className="rings abs-ring"
          src={ring1}
          style={{
            "--speed": "16s",
            "--delay": "300ms",
            "--dir": "normal",
            "--size": "50%",
            "--scale": "1.2",
            bottom: "50%",
            right: "50%",
            "--tro": "100% 100%",
          }}
        />
        <img
          className="rings abs-ring"
          src={ring2}
          style={{
            "--speed": "1s",
            "--delay": "0ms",
            "--dir": "reverse",
            "--size": "12.8%",
            "--scale": "1",
            top: "3.8%",
            left: "14.5%",
            "--tro": "272% 362%",
          }}
        />
        <img
          className="rings abs-ring"
          src={ring3}
          style={{
            "--speed": "4s",
            "--delay": "400ms",
            "--dir": "reverse",
            "--size": "50%",
            "--scale": "0.75",
            bottom: "50%",
            left: "50%",
            "--tro": "0 100%",
          }}
        />
        <img
          className="rings abs-ring"
          src={ring4}
          style={{
            "--speed": "15s",
            "--delay": "600ms",
            "--dir": "reverse",
            "--size": "55%",
            "--scale": "0.97",
            top: "50%",
            left: "50%",
            "--tro": "-0.5% -1%",
          }}
        />
        <img
          className="rings abs-ring"
          src={ring5}
          style={{
            "--speed": "10s",
            "--delay": "900ms",
            "--dir": "normal",
            "--size": "24%",
            "--scale": "1",
            bottom: "50%",
            right: "-10.8%",
            "--tro": "-153% 99%",
          }}
        />
        <img
          className="rings abs-ring"
          src={ring6}
          style={{
            "--speed": "6s",
            "--delay": "600ms",
            "--dir": "normal",
            "--size": "46%",
            "--scale": "1.54",
            bottom: "0",
            left: "25.5%",
            "--tro": "52% -10%",
          }}
        />
        <img
          className="rings abs-ring"
          src={ring7}
          style={{
            "--speed": "6s",
            "--delay": "100ms",
            "--dir": "normal",
            "--size": "37%",
            "--scale": "0.78",
            top: "50%",
            left: "90%",
            "--tro": "-108.4% -1.2%",
          }}
        />
        <img
          className="rings abs-ring"
          src={ring8}
          style={{
            "--speed": "4s",
            "--delay": "400ms",
            "--dir": "normal",
            "--size": "33%",
            "--scale": "0.875",
            top: "49%",
            right: "90%",
            "--tro": "221.7% 0.7%",
          }}
        />
        <img
          className="rings abs-ring"
          src={ring9}
          style={{
            "--speed": "4s",
            "--delay": "400ms",
            "--dir": "normal",
            "--size": "16.9%",
            "--scale": "1.032",
            top: "-9%",
            left: "49.8%",
            "--tro": "1% 345%",
          }}
        />
        <img
          className="rings abs-ring"
          src={ring10}
          style={{
            "--speed": "20s",
            "--delay": "400ms",
            "--dir": "normal",
            "--size": "25%",
            "--scale": "1",
            top: "3%",
            left: "69%",
            "--tro": "-74% 187%",
          }}
        />
      </div>
      <div className="rings-cont abs-right side-rings">
        <img
          className="rings abs-ring ring-glow"
          src={ringSideOut}
          style={{
            "--speed": "30s",
            "--delay": "200ms",
            "--dir": "normal",
            "--size": "100%",
            "--scale": "1",
            "--tro": "50% 50%",
          }}
        />
        <img
          className="rings abs-ring"
          src={ringSideIn}
          style={{
            "--speed": "10s",
            "--delay": "200ms",
            "--dir": "reverse",
            "--size": "100%",
            "--scale": "0.55",
            "--tro": "50% 50%",
          }}
        />
        <img
          className="ring-line"
          src={ringSideLine}
        />
      </div>
    </>
  );
};

export default Rings;
