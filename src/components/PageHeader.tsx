import PageHeaderCheckBox from "./PageHeaderCheckBox";

type PageHeaderProps = {
  isChecked: boolean;
  handleClick: () => void;
};

const PageHeader = ({ isChecked, handleClick }: PageHeaderProps) => {
  return (
    <div className="page-item">
      <span>All Pages</span>
      <PageHeaderCheckBox isChecked={isChecked} pageHeaderClick={handleClick} />
    </div>
  );
};

export default PageHeader;
