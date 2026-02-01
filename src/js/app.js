import Collapse from "./classes/Collapse";

document.addEventListener("DOMContentLoaded", function () {
  const collapse = new Collapse();

  const callbackChatBtn = document.querySelector("#callback-chat-btn");
  const callbackChat = document.querySelector("#callback-chat");
  const callbackChatCloseBtn = document.querySelector("#callback-chat-close-btn");

  if (callbackChatBtn) {
    callbackChatBtn.addEventListener("click", function (e) {
      e.preventDefault();
      callbackChat?.classList.add("open");
    });
  }

  if (callbackChatCloseBtn) {
    callbackChatCloseBtn.addEventListener("click", function (e) {
      e.preventDefault();
      callbackChat?.classList.remove("open");
    });
  }
});
