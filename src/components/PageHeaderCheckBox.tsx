import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

type CheckBoxVariants =
  | "default"
  | "variant2"
  | "variant3"
  | "variant4"
  | "variant5";

type CheckBoxParams = {
  isChecked: boolean;
  pageHeaderClick: () => void;
};

const PageHeaderCheckBox = ({ isChecked, pageHeaderClick }: CheckBoxParams) => {
  const [className, setClassName] = useState<CheckBoxVariants>("default");
  useEffect(() => {
    if (isChecked) {
      setClassName("variant5");
    } else {
      setClassName("default");
    }
  }, [isChecked]);
  return (
    <div
      onMouseLeave={() =>
        className === "variant4"
          ? setClassName("variant5")
          : className == "variant5"
          ? setClassName("variant5")
          : setClassName("default")
      }
      onMouseDown={() => setClassName("variant3")}
      onClick={pageHeaderClick}
      className={`checkbox checkbox-${className}`}
    >
      <div
        style={{ opacity: className === "default" ? 0.6 : 1 }}
        className={`checkbox-shadow`}
      >
        <FontAwesomeIcon
          icon={faCheck}
          size="lg"
          className={`checkbox-icon-${className} icon`}
        />
      </div>
    </div>
  );
};

export default PageHeaderCheckBox;
