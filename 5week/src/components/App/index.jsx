import { useState } from "react";

import "./styles.css";
import PanelLeft from "../PanelLeft";
import PanelRight from "../PanelRight";

export default function App() {
  const [selectedList, setSelectedList] = useState([]);
  const hendelSelectListChange = (newList) => setSelectedList(newList);

  const panelLeftProps = {
    recentSelectList: selectedList,
    onRecentSelectList: hendelSelectListChange,
  };
  const panelRightProps = {
    recentSelectList: selectedList,
  };

  return (
    <>
      <h1>냥이천국</h1>
      <main className="flex">
        <PanelLeft {...panelLeftProps} />
        <PanelRight {...panelRightProps} />
      </main>
    </>
  );
}
