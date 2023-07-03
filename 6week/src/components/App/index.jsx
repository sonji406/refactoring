import { useEffect, useState} from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import _ from "lodash";
import styled from "styled-components";
import AppHeader from "../AppHeader";
import Container from "../shared/Container";
import VideoDetail from "../VideoDetail";
import VideoList from "../VideoList";
import { YOUTUBE_API_KEY } from "../../utils/youtube";

const Main = styled.main`
  margin-top: 110px;
  display: flex;
  flex-direction: column;
  background-color: black;

  a:link,
  a:visited,
  a:hover,
  a:active {
    color: black;
    text-decoration: none;
  }
`;

export default function App() {
  const [videos, setVideos] = useState(null);
  const [inputKeyword, setInputKeyword] = useState("");

  const fetchData = async (keyword) => {
    const youtubeUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${
        encodeURIComponent(keyword)}&maxResults=10&key=${YOUTUBE_API_KEY}`
    const response = await fetch(youtubeUrl);
    const data = await response.json();

    setVideos(data.items);
  };

  useEffect(() => {
    fetchData("");
  }, []);

  const onInput = _.throttle((value) => setInputKeyword(value), 500);

  const onSearch = (value) => {
    fetchData(value);
  };

  return (
    <>
      <AppHeader
        onInput={onInput}
        inputKeyword={inputKeyword}
        onSearch={onSearch}
      />
      <Main>
        <Container>
          <Routes>
            <Route
              path="/videos"
              exact
              element={<VideoList videos={videos} />}
            />
            <Route
              path="/videos/:videoId"
              element={<VideoDetail />}
            />
            <Route path="/" element={<Navigate to="/videos" replace />} />
          </Routes>
        </Container>
      </Main>
    </>
  );
}
