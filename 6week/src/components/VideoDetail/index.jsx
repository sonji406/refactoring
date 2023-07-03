import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";
import { YOUTUBE_API_KEY } from "../../utils/youtube";

const DetailWrapper = styled.div`
  margin-top: 10px;
  width: 560px;
  color: white;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 18px;
  padding : 20px;
`;

export default function VideoDetail() {
  let { videoId } = useParams();
  const [video, setVideo] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${YOUTUBE_API_KEY}`
      );
      const data = await response.json();
      setVideo(data.items[0]);
    };
    fetchData();
  }, []);

  const videoUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <DetailWrapper>
      {video && (
        <>
					<iframe width="560" height="315" src={videoUrl}></iframe>
          <h2>{video.snippet.title}</h2>
          <p>{video.snippet.description}</p>
        </>
      )}
    </DetailWrapper>
  );
}

VideoDetail.propTypes = {
  YOUTUBE_API_KEY: PropTypes.string,
}
