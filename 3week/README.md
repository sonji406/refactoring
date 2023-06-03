<br>

<p align="center">
  <img src="/assets/vaco.png"  width="300">
</p>

<br>

> 바닐라코딩의 모든 과제는 실제 기업에서 주어지는 과제에 기반하여 제작되었으며, 저작권법의 보호를 받습니다. 개인 블로그 등의 공개된 장소에 관련 내용을 공유하거나 개인적으로 지인들과 공유하는 등의 행위는 삼가해주시기 바랍니다.

<br>

![Underdash](/assets/underdash.png)

<br>

# Underdash

[Lodash](https://lodash.com/) 라이브러리를 참고하여, 자바스크립트의 네이티브 함수와 비슷한 유틸리티 함수들을 직접 구현해보는 과제입니다.

<br>
<br>

## 작업 준비

과제를 시작하기 전, 아래 1-3 단계를 진행합니다. 매주 새로운 과제를 시작하는 단계에서 최초 1회만 진행하시면 됩니다.

<br>

### 1. 과제 클론받기

터미널에서 아래의 Git 명령어를 이용하여 과제를 클론(다운로드) 받으세요.

```sh
git clone 과제_GIT_URI
```

> 과제\_GIT_URI는 Github 과제 저장소의 메인 페이지에서 초록색 `<> Code` 버튼을 클릭하시면 확인할 수 있습니다.

<br>

### 2. 과제 디렉토리로 이동하기

다음 명령어를 이용하여 과제 디렉토리로 이동하세요.

```sh
cd 과제_저장소_이름
```

<br>

### 3. 관련 의존성 패키지를 설치하세요.

터미널의 과제 디렉토리 내에서 아래 명령어를 실행하세요.

```sh
npm install
```

> `package.json`의 `engines` 필드에 명시된 Node.js와 npm 버전을 확인하신 후, 동일한 버전을 사용해주세요.

<br>
<br>

## 작업 진행

<br>

### 1. VS Code 실행

터미널에서 과제 디렉토리로 이동하여 아래 명령어를 실행하면, VS Code에서 과제 파일이 열립니다.

```sh
code .
```

> [VS Code에서 `code` 명령어 설치하는 방법](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line)

<br>

### 2. 로컬 테스트 실행

터미널에서 과제 디렉토리로 이동하여 아래 명령어를 실행합니다.

```sh
npm test
```

> 실행 명령어는 과제에 따라 상이할 수 있으므로, 반드시 `README.md` 파일의 내용을 확인 후 진행해주세요.

<br>

### 4. 로컬 테스트 모드 중지

작업이 끝났을 경우, 터미널의 로컬 테스트 실행창에서 `ctrl + c`를 입력하여 실행 중이던 로컬 테스트를 중지합니다. 추후 작업 재개시, 로컬 테스트를 다시 실행하고, 작업 종료시 로컬 테스트를 중지시키는 행위를 매번 반복합니다.

> 로컬 테스트를 장시간 동안 켜놓을 경우, 컴퓨터의 리소스가 낭비될 수 있습니다. 장시간 작업을 중단하는 경우에는 로컬 테스트를 종료시키고 다시 재개하는 시점에 다시 로컬 테스트를 시작하세요.

<br>
<br>

## 과제 구현사항 TODO

과제를 제출하는 Pull Request의 description 입력 칸에 아래 목록을 복사/붙여넣기 하여 본인의 기능구현 완성도를 체크해주세요.

lodash 함수들은 객체나 기타 유사 배열에 대해서도 동작하지만, 여러분께서는 배열만을 고려하여 작업하세요.

<br>

이번 과제에서 아래 목록에 나열된 배열의 메소드는 사용할 수 없습니다.

```js
Array.prototype.map;
Array.prototype.indexOf;
Array.prototype.forEach;
Array.prototype.filter;
Array.prototype.reduce;
Array.prototype.every;
Array.prototype.some;
Array.prototype.flat;
Array.prototype.includes;
Array.prototype.find;
```

<br>

- [ ] `/spec/underdash.spec.js` 내용을 참고하여 `src/underdash.js`의 빈 함수들을 완성하세요.
