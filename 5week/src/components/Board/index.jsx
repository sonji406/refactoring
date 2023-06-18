import { v4 as uuidv4 } from "uuid";
import React, { useEffect, useState, Suspense } from "react";
import BoardItem from "../BoardItem";
import "./styles.css";

export default function Board({ onClickItem }) {
  const [catsList, setCatsList] = useState([]);
  const dummyId = Array(9).fill().map(() => uuidv4());

  useEffect(() => {
    fetchCats();
  }, []);

  async function fetchCats() {
    try {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search?limit=9"
      );
      const result = await response.json();

      setCatsList(result);
    } catch (error) {
      console.log(error.message);
      alert("고양이 사진을 불러오지 못했습니다.");
    }
  }

  return (
    <>
      <div className="board">
        <Suspense fallback={<li></li>}>
          <ul>
            {catsList.length > 0
              ? catsList.slice(0, 9)
                .map((item) => (
                  <BoardItem
                    key={item.id}
                    url={item.url}
                    onClickItem={onClickItem}
                  />
                ))
              : dummyId
                .map((id) => (
                  <li key={id}></li>
                ))}
          </ul>
        </Suspense>
      </div>
      <div className="button-wrapper">
        <button onClick={fetchCats}>새로운 사진 가져오기</button>
      </div>
    </>
  );
}
