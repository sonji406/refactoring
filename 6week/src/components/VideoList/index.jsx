import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import VideoListEntry from "../VideoListEntry";

const Wrapper = styled.div`
  display: grid;
  padding: 2em 0 0;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-rows: 280px 280px 280px;
  column-gap: 20px;
  row-gap: 20px;

  .entry {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    padding : 10px;
  }
`;

export default function VideoList({ videos }) {
  return (
    <Wrapper>
      {videos &&
        videos.map((video) => (
          <div className="entry" key={video.id.videoId}>
            <Link to={`/videos/${video.id.videoId}`}>
              <VideoListEntry video={video} />
            </Link>
          </div>
        ))}
    </Wrapper>
  );
}

VideoList.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.object),
};
