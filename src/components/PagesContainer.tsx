import {  useState } from "react";
import PageItem from "./PageItem";
import PageHeader from "./PageHeader";

const PagesContainer = () => {
  const titles = ["Page 1", "Page 2", "Page 3", "Page 4"];
  const [pagesChecked, setPagesChecked] = useState<string[]>([]);

  const handleClick = () => {
    if (pagesChecked.length === titles.length) {
      setPagesChecked([]);
    } else {
      setPagesChecked(titles);
    }
  };

  const handlePageClick = (pageTitle: string) => {
    setPagesChecked((prevPagesChecked) => {
      const isPageChecked = prevPagesChecked.includes(pageTitle);
      if (isPageChecked) {
        return prevPagesChecked.filter((title) => title !== pageTitle);
      } else {
        return [...prevPagesChecked, pageTitle];
      }
    });
  };

  return (
    <div>
      <PageHeader
        handleClick={handleClick}
        isChecked={pagesChecked.length === titles.length}
      />
      <hr />
      {titles.map((title) => (
        <PageItem
          key={title}
          handleClick={handlePageClick}
          isChecked={pagesChecked.includes(title)}
          title={title}
        />
      ))}
      <hr />
    </div>
  );
};

export default PagesContainer;
