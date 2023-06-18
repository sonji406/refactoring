import { v4 as uuidv4 } from "uuid";

import Board from "../Board";
import SelectedCat from "../selectedCat";

export default function PanelLeft({ recentSelectList, onRecentSelectList }) {
  function onClickCat(url) {
    const clickedCatImage = { id: uuidv4(), url };
    const isAlreadySelected = recentSelectList
      .slice(0, 1)
      .some((selectImage) => selectImage.url === url);

    if (!isAlreadySelected) {
      onRecentSelectList([clickedCatImage, ...recentSelectList]);
    }
  }

  return (
    <div className="panel left">
      <SelectedCat selectedCatList={recentSelectList} />
      <Board onClickItem={onClickCat} />
    </div>
  );
}
