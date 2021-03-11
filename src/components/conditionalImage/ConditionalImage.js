import React from "react";
import Male from "../../images/male.png";
import Female from "../../images/female.png";

const ConditionalImage = (props) => {
  let displayImage;
  props.gender === "Male"
    ? (displayImage = <img src={Male} alt="" />)
    : (displayImage = <img src={Female} alt="" />);

  // if(props.gender ==="Male"){
  //     displayImage = <img src={Male} alt=""/>
  // }
  return <div>{displayImage}</div>;
};

export default ConditionalImage;
