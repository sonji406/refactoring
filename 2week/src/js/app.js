import { ref, onValue, set, push, get, remove} from "firebase/database";
import { v4 as uuidv4 } from "uuid";
import database from "./firebase.js";

const state = {
  chatHistory: [],
  userId: uuidv4(),
  username: "",
  colorCode: generateHexCode(),
};

const chatHistoryRef = ref(database, "/");

get(chatHistoryRef).then((snapshot) => {
  const data = snapshot.val();

  onValue(chatHistoryRef, (snapshot) => {
    if (!snapshot?.exists()) return;

    const chatData = snapshot.val();

    if (!isCangeData(data, chatData)) return;

    const dataLastKey = Object.keys(chatData).pop();
    const newChatData = chatData[dataLastKey];

    const newChatList = document.querySelector(".chat-list");
    const newChatItem = document.createElement("li");

    console.log(state.userId, newChatData.userId);
    if (!isUserId(state, newChatData)) {
      newChatItem.innerHTML = createChatListItem(newChatData);
      newChatList.prepend(newChatItem);
      newChatItem.classList.add("value");

      if (isUserId(state, newChatData)) {
        newChatItem.classList.add("none");
      }
    }
  });

  if (!snapshot?.exists()) return;

  state.chatHistory =
    Object.values(data)
      .sort((a, b) => a.createdAt.localeCompare(b.createdAt))
      .reverse();

  const chatList = document.querySelector(".chat-list");

  for (let i = 0; i < state.chatHistory.length; i++) {
    const message = state.chatHistory[i];

    const chatItem = document.createElement("li");

    if (state.chatHistory[i].text !== "") {
      chatItem.innerHTML = createChatListItem(message);
      chatList.appendChild(chatItem);
      chatItem.classList.add("get");
    }
  }
});

function isUserId(beforeId, AfterId) {
  return beforeId.userId === AfterId.userId;
}

const usernameForm = document.querySelector("form");
const inputField = document.querySelector("input");
const chat = document.querySelector(".chat");

usernameForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const result = isUsernameValid(inputField.value);

  if (!result) {
    showUsernameValidationError();
    return;
  }

  state.username = inputField.value;

  hideUsernameForm();
  showChat();
});

inputField.addEventListener("input", function (event) {
  if (!isUsernameValid(event.target.value)) {
    return;
  }

  hideUsernameValidationError();
});

const chatInput = document.querySelector(".user-input");

chatInput.addEventListener("keydown", function (event) {
  if (event.keyCode !== 13) return;

  if (event.target.textContent.trim() === "") return;

  const data = {
    id: uuidv4(),
    userId: state.userId,
    username: state.username,
    colorCode: state.colorCode,
    text: event.target.textContent,
    createdAt: new Date().toISOString(),
  };

  const chatList = document.querySelector(".chat-list");

  const chatListItem = document.createElement("li");
  chatListItem.classList.add("right");

  chatListItem.innerHTML = createChatListItem(data);
  chatList.insertBefore(chatListItem, chatList.children[0]);

  const newChatRef = push(ref(database, "/"));
  set(newChatRef, data);

  setTimeout(() => (chatInput.innerHTML = ""), 0);
});

function createChatListItem(data) {
  return `
    <div class="chat-item">
      <p class="message" style="background-color: ${data.colorCode}">${
        data.text
      }</p>
      <div>
        <p class="time">${formatDate(data.createdAt)}</p>
        <p class="author">${data.username}</p>
      </div>
    </div>
  `;
}

function hideUsernameForm() {
  usernameForm.classList.add("none");
}

function showChat() {
  chat.classList.add("flex");
  chat.classList.remove("none");
}

function hideUsernameValidationError() {
  const errorText = document.querySelector(".error-message");

  errorText.classList.add("hidden");
  errorText.classList.remove("visible");
}

function showUsernameValidationError() {
  const errorText = document.querySelector(".error-message");

  errorText.classList.remove("hidden");
  errorText.classList.add("visible");
}

function isUsernameValid(value) {
  if (containsSpecialCharacters(value)) {
    return false;
  }

  const MIN_USERNAME_LENGTH = 2;
  const MAX_USERNAME_LENGTH = 19;

  return (
    !(value.length < MIN_USERNAME_LENGTH) &&
    !(value.length > MAX_USERNAME_LENGTH)
  );
}

/*
 * 랜덤 Hex code 생성 함수
 */
function generateHexCode() {
  const letters = "0123456789ABCDEF";

  return new Array(6)
    .fill(null)
    .reduce((acc) => (acc += letters[Math.floor(Math.random() * 16)]), "#");
}

function containsSpecialCharacters(str) {
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  return specialChars.test(str);
}

function formatDate(ISODate) {
  const d = new Date(ISODate);

  let hr = d.getHours();
  let min = d.getMinutes();

  if (hr < 10) {
    hr = "0" + hr;
  }

  if (min < 10) {
    min = "0" + min;
  }

  return `${d.getMonth() + 1}월 ${d.getDate()}일 ${hr}시 ${min}분`;
}

document.getElementById("resetBtn").addEventListener('click', messageDataReset);

function messageDataReset() {
  const chatList = document.querySelector(".chat-list");
  const chatHistoryRef = ref(database, "/");

  chatList.innerHTML = "";

  remove(chatHistoryRef);
}

function isCangeData(beforeData, afterData) {
  if (beforeData === null || typeof beforeData !== 'object') {
    beforeData = {};
    afterData = {};
  }

  return Object.keys(beforeData).length === Object.keys(afterData).length;
}
