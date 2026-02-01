document.addEventListener("DOMContentLoaded", function () {

  const callbackChatBtn = document.querySelector("#callback-chat-btn");
  const callbackChat = document.querySelector("#callback-chat");
  const callbackChatCloseBtn = document.querySelector(
    "#callback-chat-close-btn",
  );

  callbackChatBtn.addEventListener("click", function (e) {
    e.preventDefault();

    callbackChat.classList.add("open");
  });

  callbackChatCloseBtn.addEventListener("click", function (e) {
    e.preventDefault();

    callbackChat.classList.remove("open");
  });
});
