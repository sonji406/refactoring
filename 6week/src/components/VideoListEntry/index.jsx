import PropTypes from "prop-types";
import styled from "styled-components";

const EntryWrapper = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  color: white;

  img {
    width: 100%;
  }

  .contents {
    flex-grow: 1;
    word-wrap: break-word;
  }

  .title {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    font-size: 18px;
    font-weight: bold;
  }

  .date {

  }

  .description {

  }
`;

export default function VideoListEntry({ video }) {
  const dateObj = new Date(video.snippet.publishedAt);
  const date = dateObj
    .toLocaleString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    })
    .replace(/\./g, "")
    .replace(/\s/g, "");

  const dateYear = date.slice(0, 4);
  const dateMonth = date.slice(4, 6);
  const dateDay = date.slice(6, 8);
  const dateTime = date.slice(8, 15);
  const videoDate = dateYear + "-" + dateMonth + "-" + dateDay + " " + dateTime;

  const description =
    video.snippet.description.length >= 30
    ? `${video.snippet.description.substring(0, 27)}...`
    : video.snippet.description;

  return (
    <EntryWrapper>
      <div>
        <img
          src={video.snippet.thumbnails.high.url}
          alt={video.snippet.title}
        />
      </div>
      <div className="contents">
        <div className="title">
          <div dangerouslySetInnerHTML={{ __html: video.snippet.title }}></div>
        </div>
        <div className="date">{videoDate}</div>
        <div className="description">{description}</div>
      </div>
    </EntryWrapper>
  );
}

VideoListEntry.propTypes = {
  video: PropTypes.object.isRequired,
};
