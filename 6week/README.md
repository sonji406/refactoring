<br>

<p align="center">
  <img src="/src/assets/vaco.png"  width="300">
</p>

<br>

# Youtube Viewer

![Youtube](/youtube.jpg)

<br>

## Installation

```sh
npm install
```

<br>

## Development

```sh
npm run dev # localhost:5173
```

<br>

## Youtube API

[Youtube API](https://developers.google.com/youtube/v3/docs/search/list?hl=ko)를 이용하여 구현하세요.

### Youtube API Key 발급받기

- [Youtube API Console](https://console.developers.google.com/)로 접속하세요.
- **CREATE PROJECT**를 선택하세요.
- 프로젝트 이름을 입력하고, 생성하세요.
- **+ ENABLE APIS AND SERVICES** 를 선택하세요.
- "Youtube" 검색 후, **YouTube Data API v3**를 선택하세요.
- Youtube Data API v3를 **ENABLE** 하세요.
- **좌측 Credentials 메뉴**를 선택하세요.
- **Create Credentials**를 선택하세요.
- 본인의 API KEY를 확인하고, `/src/utils/youtube.js`에 붙여넣어 사용하세요.

> 짧은 시간 내에 너무 많은 API 요청을 보내게 되면, 잠시동안 요청이 거부당할 수 있습니다. 최초 요청시 받은 응답 데이터를 별도로 보관해놓고, 요청 거부시 Mock data로 사용하세요.

<br>

## TODO

- 반드시 [Thinking in React](https://ko.react.dev/learn/thinking-in-react)에서 권장하는 방식으로 작업하세요.
- 네트워크 요청은 async/await 기반의 [`Fetch API`](https://developer.mozilla.org/ko/docs/Web/API/Fetch_API)를 이용하세요.

<br>

- [ ] 첫 페이지에는 랜덤한 비디오 정보 목록을 10개 보여주어야 합니다.
- [ ] 사용자가 검색을 할 경우, 검색어에 대한 비디오 목록을 10개 보여주어야 합니다.
- [ ] 비디오 목록의 각 비디오는 최소한 아래의 정보를 보여주어야 합니다.
  - [ ] 제목
  - [ ] 썸네일 이미지
  - [ ] 비디오 발행 날짜
  - [ ] 비디오 설명 글 (단, 30글자 이상일 경우 ellipsis로 나머지 부분은 생략 처리해야 합니다.)
- [ ] 사용자는 비디오 목록에서 비디오를 선택할 수 있어야 합니다.
- [ ] 사용자가 선택한 비디오의 정보를 비디오 상세 페이지(`/videos/:videoId`)에서 보여주어야 합니다. 비디오 정보는 위에 나열된 정보와 함께 아래 정보들을 추가로 보여주어야 합니다.
  - [ ] 전체 비디오 설명
  - [ ] 재생 가능한 비디오 영상
  - [ ] 그 외 개인적으로 추가하고 싶은 사항
- [ ] 비디오 목록은 무한 스크롤 방식으로 추가 비디오 목록을 더해주어야 합니다.
  - `Intersection Observer`, `throttle`, `debounce` 등에 대해 조사해보고 적용해보시면 좋습니다. (`lodash`가 설치되어 있습니다.)
  - 디테일한 사항은 자유롭게 결정하셔도 괜찮습니다.
- [ ] 구 React 문서의 [파일 구조 페이지](https://ko.legacy.reactjs.org/docs/faq-structure.html)나 기타 인터넷의 자료를 조사해보시고 파일 구조에 대해서도 필요하다면 많은 시도를 해보세요.
