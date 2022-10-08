import AwesomeSlider from "react-awesome-slider";
import AwsSliderStyles from "react-awesome-slider/src/styles.js";
import "./CustomerFeedback.css";

const CustomerFeedback = () => {
  return (
    <div className="SliderWrapper">
      <div className="SliderTitle">Kundentimmen</div>
      <AwesomeSlider>
        <div className="SliderPage">
          <div className="SliderText">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </div>
          <div className="SliderSignature">Tom Hermann</div>
        </div>
        <div className="SliderPage">
          <div className="SliderText">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </div>
          <div className="SliderSignature">Tommi Hermann</div>
        </div>
      </AwesomeSlider>
    </div>
  );
};

export default CustomerFeedback;
