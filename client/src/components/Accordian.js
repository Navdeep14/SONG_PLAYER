import React, { useEffect, useRef, useState } from "react";
import styles from "./Accordian.module.css";

function Accordion(props) {
  const [active, setActive] = useState(false);
  const content = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    console.log("Height for ", props.title, ": ", height);
  }, [height]);

  function toggleAccordion() {
    setActive(!active);
    setHeight(active ? "0px" : `${content.current.scrollHeight}px`);
  }

  return (
    <div className={styles.accordionsection}>
      <div
        className={active ? styles.accordionactive : {}}
        
      >
        <p className={styles.accordiontitle}><span onClick={toggleAccordion}>{props.title}</span><span>X</span> </p>
        {/* <span style={{ marginLeft: "20px" }}>{active ? "-" : "+"}</span> */}
      </div>
      <div
        ref={content}
        style={{ maxHeight: `${height}` }}
        className={styles.accordioncontent}
      >
       <>{props.content}</>
      </div>
    </div>
  );
}

export default Accordion;
