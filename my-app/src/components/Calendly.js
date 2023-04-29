import React from "react";
import { PopupWidget } from "react-calendly";

const Calendly = () => {
    return (
        <PopupWidget
        url="https://calendly.com/will_bennett/30min"
        /*
        * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
        * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
        */
        rootElement={document.getElementById("root")}
        text="Let's chat!"
        textColor="#ffffff"
        color="#00a2ff"
        />
    )
}

export default Calendly;