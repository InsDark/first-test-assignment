import { useState } from "react";

type variant = "button-default" | "button-variant2" | "button-variant3";

const Button = () => {
  const [classname, setClassName] = useState<variant>("button-default");
  return (
    <div className="button-container">
      <button
      onClick={() => alert('There was no functionality in the figma for the button so it just shows an alert')}
        onMouseEnter={() => setClassName("button-variant2")}
        onMouseLeave={() => setClassName("button-default")}
        onMouseDown={() => setClassName("button-variant3")}
        className={classname}
      >
        Done
      </button>
    </div>
  );
};

export default Button;
