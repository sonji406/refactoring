import { CHAT_HISTORY } from './chat_history.js';

function generateHexCode() {
  const letters = "0123456789ABCDEF";
  let result = "#";

  for (let i = 0; i < 6; i++) {
    result += letters[(Math.floor(Math.random() * 16))];
  }
  return result;
}

function checkUserName() {
  const usernameInput = document.getElementById("usernameInput").value;
  const inputError = document.getElementById("inputError");
  const userNameForm = document.querySelector(".username-form");
  const chatForm = document.querySelector(".chat-form");
  const typedText = document.getElementById("typedText")
  if (usernameInput.length < 2 || usernameInput.length > 20 || /[^\w\sㄱ-힣()0-9]/.test(usernameInput)) {
    inputError.style.display = "block"
    inputError.innerHTML = "유효하지 않은 형식의 사용자 이름입니다.";
  } else {
    userNameForm.style.display = "none";
    showChatHistory();

    chatForm.style.display = "block";
    typedText.focus();
  }
}

const usernameForm = document.querySelector("#inputNameForm");
usernameForm.addEventListener("submit", function (event) {
  event.preventDefault();
  checkUserName();
});

const usernameInput = document.querySelector("#usernameInput");
usernameInput.addEventListener("input", function () {
  const inputError = document.getElementById("inputError");
  inputError.style.display = "none";
});

function showChatHistory() {
  const chat = document.querySelector('.chat');
  randomChatHistory(CHAT_HISTORY);

  for (let i = 0; i < CHAT_HISTORY.length; i++) {
    const message = CHAT_HISTORY[i];

    const messageElement = document.createElement('div');
    messageElement.classList.add('message');

    const username = document.createElement('span');
    username.className = "username message_item";
    username.textContent = message.username;
    username.style.color = message.colorCode;

    const textChat = document.createElement('span');
    textChat.id="textChat"
    textChat.className="message_item";
    textChat.textContent = message.text;

    const createdAtDate = document.createElement('span');
    createdAtDate.id="createdAtDate"
    createdAtDate.className="message_item";
    const createdAt = new Date(message.createdAt);
		formatDateTime(createdAt, createdAtDate);

		messageElement.appendChild(createdAtDate);
    messageElement.appendChild(username);
    messageElement.appendChild(textChat);
    messageElement.appendChild(createdAtDate);

    chat.appendChild(messageElement);
  }
}

function randomChatHistory(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const myChatForm = document.querySelector("#inputTextForm");
myChatForm.addEventListener("submit", function (event) {
  event.preventDefault();

	const typedText = document.getElementById("typedText").value;
	const blank = typedText.trim();

	if ( blank.length === 0) {
		console.log("공백 문자만 입력되었습니다.");
	} else {
		myChat();
	}
});

function myChat() {
	const hexCode = generateHexCode();
  const myChatElement = document.querySelector('.myChat');

  const inputText = document.getElementById("typedText");
  const typedText = document.getElementById("typedText").value;
  const usernameInput = document.getElementById("usernameInput").value;

  const myChatList = document.createElement('div');
  myChatList.className = "message";

  const myChatText = document.createElement('span');
  myChatText.id = "textChat";
  myChatText.textContent = typedText;

  const myChatName = document.createElement('span');
  myChatName.className = "username";
  myChatName.id = "nameBorder";
  myChatName.textContent = usernameInput;
  myChatName.style.color = hexCode;

  const myChatDateElement = document.createElement('span');
  myChatDateElement.id = "createdAtDate";
  myChatDateElement.className="message_item alignRight";
  const myChatDate = new Date();
	formatDateTime(myChatDate, myChatDateElement);

	myChatList.appendChild(myChatDateElement);
  myChatList.appendChild(myChatText);
  myChatList.appendChild(myChatName);
  myChatElement.appendChild(myChatList);

  inputText.value='';
}

function formatDateTime(date, element) {
	const formatDate = {
    date: date.getUTCDate(),
    months: date.getUTCMonth() + 1,
    year: date.getUTCFullYear(),
    hours: date.getUTCHours(),
    minutes: date.getUTCMinutes(),
    seconds: date.getUTCSeconds(),
  };

	let ampm = '오전';
	let halfHour = formatDate.hours;

	if (halfHour >= 12) {
		ampm = '오후';
		halfHour -= 12;
	}
	if (halfHour === 0) {
		halfHour = 12;
	}

	const setDate = `${formatDate.year}
									-${formatDate.months.toString().padStart(2,'0')}
									-${formatDate.date.toString().padStart(2,'0')}`;
	const setTime = `${ampm} ${halfHour.toString().padStart(2, '0')}
								:${formatDate.minutes.toString().padStart(2, '0')}
								:${formatDate.seconds.toString().padStart(2, '0')}`;
	const settingDateTime= `${setDate} ${setTime}`;

	element.textContent = settingDateTime;
}

