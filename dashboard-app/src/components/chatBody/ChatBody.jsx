import React, { useState, useEffect } from "react";
import "./chatBody.css";
import moment from "moment";
import UIface1 from "../../assets/jurica-koletic-7YVZYZeITc8-unsplash.jpg";

function ChatBody() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [showDotsDiv, setShowDotsDiv] = useState(false);

  // Used the UseEffect hook and Local Storage to store the message.
  useEffect(() => {
    // Load chat messages from localStorage on component mount
    const lastChat = JSON.parse(localStorage.getItem("chat"));
    if (lastChat) {
      setChat(lastChat);
    }
  }, []);

  useEffect(() => {
    // Save chat messages to localStorage whenever the chat state changes.
    localStorage.setItem("chat", JSON.stringify(chat));
  }, [chat]);

  // Event Functions.
  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      // Used the Moment Library for the Time of the message it was sent
      const timeStamp = moment().format("h:mm a");
      const newMessage = { text: message, time: timeStamp };
      setChat([...chat, newMessage]);
      setMessage("");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  const toggleDotsDiv = () => {
    setShowDotsDiv(!showDotsDiv);
  };

  return (
    <section className="p-6 flex-1 chatBody-section relative">
      {/* CHAT-HEADER */}
      <div className="flex justify-between items-center chat-header pb-5">
        {/* Picture + HEADER */}
        <div className="flex gap-3 items-center cursor-pointer">
          <img
            src={UIface1}
            alt="UIface"
            className="w-12 h-12 rounded-full"
          ></img>
          <p className="font-bold">Fahzeez Lawal</p>
        </div>
        {/* Little Dots */}
        <div
          className="flex flex-col gap-1 cursor-pointer p-1"
          onClick={toggleDotsDiv}
        >
          <div className="rounded-full w-1 h-1 bg-black"></div>
          <div className="rounded-full w-1 h-1 bg-black"></div>
          <div className="rounded-full w-1 h-1 bg-black"></div>
        </div>
      </div>

      {/* Dots Dropdown */}
      {showDotsDiv && (
        <div className="absolute bg-slate-700 text-white right-5 top-20 p-4 rounded-lg">
          <ul className="list-none">
            <li className="hover:bg-purple-600 p-1 rounded-md">
              <a href="#">Report users issue</a>
            </li>
            <li className="hover:bg-purple-600 p-1 rounded-md">
              <a href="#">End session with users</a>
            </li>
            <li className="hover:bg-purple-600 p-1 rounded-md">
              <a href="#">
                Transfer user to another <br></br>customer service
              </a>
            </li>
            <li className="hover:bg-purple-600 p-1 rounded-md">
              <a href="#">Report users</a>
            </li>
          </ul>
        </div>
      )}

      {/* CHAT-BODY */}
      {/* CHAT BODY MAIN DIV */}
      <div className="mt-4 chat-body px-6 py-4">
        <div className="text-center">
          <h5 className="text-gray-700 font-medium text-sm">Friday</h5>
        </div>

        {/* Chat-box Div */}
        <div className="mt-5 flex gap-4 flex-col">
          {/* 1ST PERSON */}

          {/* 1ST TEXT */}
          <div className="bg-blue-200 px-3 py-2 rounded-lg  max-w-xs">
            <p className="">Hey brother... Wagwan?</p>
            <p className="text-sm text-right text-gray-500 font-medium">
              12:24pm
            </p>
          </div>

          {/* 2ND TEXT */}
          <div className="bg-blue-200 px-3 py-2 rounded-lg  max-w-xs">
            <p className="">
              We as a family should be doing everything within our reach to keep
              the support for the team and the project at an all time high.
            </p>
            <p className="text-sm text-right text-gray-500 font-medium">
              12:24pm
            </p>
          </div>

          {/* 3RD TEXT */}
          <div className="bg-blue-200 px-3 py-2 rounded-lg  max-w-xs">
            <p className="">After work maybe?</p>
            <p className="text-sm text-right text-gray-500 font-medium">
              12:26pm
            </p>
          </div>

          {/* 2ND PERSON */}
          <div className="m-6 flex gap-4 flex-col justify-end items-end">
            {/* 1ST TEXT */}
            <div className="bg-slate-700 px-3 py-2 rounded-lg  max-w-xs text-white">
              <p className="">Hello brother &#128512; &#128512; &#128512;</p>
              <p className="text-sm text-right text-gray-200 font-medium">
                12:30pm
              </p>
            </div>

            {/* 2ND TEXT */}
            <div className="bg-slate-700 px-3 py-2 rounded-lg  max-w-xs text-white">
              <p className="">
                According to official sources, a complete emission was made, and
                according to data from the documents was not. Everything is very
                confusing
              </p>
              <p className="text-sm text-right text-gray-200 font-medium">
                12:31 pm
              </p>
            </div>

            {/* 3RD TEXT */}

            <div className="bg-slate-700 px-3 py-2 rounded-lg  max-w-xs text-white">
              <p className="">So it's left to be seen</p>
              <p className="text-sm text-right text-gray-200 font-medium">
                12:31 am
              </p>
            </div>

            {/* 2ND PERSON ENDING */}
          </div>

          <div className="bg-blue-200 px-3 py-2 rounded-lg  max-w-xs">
            <p className="">Sure GG lets goo🚀🚀🚀🚀🚀</p>
            <p className="text-sm text-right text-gray-500 font-medium">
              12:38am
            </p>
          </div>

          {/* USER INPUT  */}
          <div className="m-6 flex gap-4 flex-col justify-end items-end">
            {/* <div className="bg-slate-500 px-3 py-2 rounded-lg  max-w-xs text-white"> */}
            {chat.map((msg, index) => (
              <div
                key={index}
                className="bg-slate-700 px-3 py-2 rounded-lg  max-w-xs text-white"
              >
                {/* <div> */}
                <p>{msg.text}</p>
                <p className="text-sm text-right text-gray-200 font-medium">
                  {msg.time}
                </p>
                {/* </div> */}
              </div>
            ))}
            {/* </div> */}
          </div>

          {/* Chat-box ending div */}
        </div>

        {/* Chat body ending div */}
      </div>

      {/* TEXT-AREA */}
      <div className="mt-5 flex flex-col gap-1">
        <textarea
          className="flex-1 px-4 py-2 min-h-4 text-area rounded-lg"
          name="textarea"
          placeholder="Type a message..."
          value={message}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
        ></textarea>
        <div className="flex justify-end items-end">
          <button
            className="bg-purple-500 text-white justify-end items-end px-4 py-1 font-medium rounded-md"
            onClick={handleSendMessage}
          >
            Send {">"}
          </button>
          {/* <button>
            <i className="bi bi-chevron-right bg-black"></i>
          </button> */}
        </div>
      </div>
    </section>
  );
}

export default ChatBody;
