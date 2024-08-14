import CheckBox from "./CheckBox";

type PageItemTypes = {
  title: string;
  isChecked: boolean;
  handleClick: (pageTitle: string) => void;
};

const PageItem = ({ title, isChecked, handleClick }: PageItemTypes) => {
  return (
    <div className="page-item">
      <span>{title}</span>
      <CheckBox
        isChecked={isChecked}
        pageItemClick={() => handleClick(title)}
      />
    </div>
  );
};

export default PageItem;
