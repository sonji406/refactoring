export default function PanelRight({ recentSelectList }) {
  return (
    <div className="panel right">
      <h3>최근 선택한 고양이들</h3>
      <ul className="history">
        {recentSelectList.slice(0, 3).map((selectImage, index) => (
          <li key={selectImage.id}>
            {" "}
            {index + 1}.{" "}
            <a target="_blank" href={selectImage.url}>
              {selectImage.url}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
