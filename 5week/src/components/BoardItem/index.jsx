export default function BoardItem({ url, onClickItem }) {
  return (
    <li className="boardItemImage" onClick={() => url && onClickItem(url)}>
      <img src={url} />
    </li>
  );
}
