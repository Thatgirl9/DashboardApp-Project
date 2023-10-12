import React, { useState, useEffect } from "react";
import "./chatList.css";
import UIface1 from "../../assets/jurica-koletic-7YVZYZeITc8-unsplash.jpg";
import UIface2 from "../../assets/aiony-haust-3TLl_97HNJo-unsplash.jpg";
import UIface3 from "../../assets/ayo-ogunseinde-6W4F62sN_yI-unsplash.jpg";
import UIface4 from "../../assets/cesar-rincon-XHVpWcr5grQ-unsplash.jpg";
import UIface5 from "../../assets/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg";
import UIface6 from "../../assets/michael-dam-mEZ3PoFGs_k-unsplash.jpg";
import UIface7 from "../../assets/prince-akachi-J1OScm_uHUQ-unsplash.jpg";

function ChatList({ onSelectChat }) {
  const preventDefault = (e) => {
    e.preventDefault();
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [chatsData, setChatsData] = useState([
    {
      name: "Fahzeez Lawal",
      image: UIface1,
      time: "10 mins ago",
      message:
        "Hey Wildin! You good? Can we link up later in the week? I think I like you...",
    },
    {
      name: "Shaine T",
      image: UIface2,
      time: "10 mins ago",
      message:
        "Hey Wildin! You good? Can we link up later in the week? I think I like you...",
    },
    {
      name: "Alexa Jane",
      image: UIface3,
      time: "10 mins ago",
      message:
        "Hey Wildin! You good? Can we link up later in the week? I think I like you...",
    },

    {
      name: "Alexa Jane",
      image: UIface4,
      time: "10 mins ago",
      message:
        "Hey Wildin! You good? Can we link up later in the week? I think I like you...",
    },

    {
      name: "Alexa Jane",
      image: UIface5,
      time: "10 mins ago",
      message:
        "Hey Wildin! You good? Can we link up later in the week? I think I like you...",
    },

    {
      name: "Alexa Jane",
      image: UIface6,
      time: "10 mins ago",
      message:
        "Hey Wildin! You good? Can we link up later in the week? I think I like you...",
    },

    {
      name: "Alexa Jane",
      image: UIface7,
      time: "10 mins ago",
      message:
        "Hey Wildin! You good? Can we link up later in the week? I think I like you...",
    },

    // Add more chat data here...
  ]);

  const [selectedChat, setSelectedChat] = useState(null);
  const [isEditingName, setIsEditingName] = useState(false);
  const [newChatName, setNewChatName] = useState("New Chat User"); // Default new chat name

  // Save chat data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("chatsData", JSON.stringify(chatsData));
  }, [chatsData]);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // const addNewChat = () => {
  //   setIsEditingName(true);
  // };

  const saveNewChat = () => {
    // Create a new chat object with the edited name and add it to the chatsData state
    const newChat = {
      name: newChatName,
      image: UIface7, // You can set the default image for new chats
      time: "Just now",
      message: "Welcome to the chat!",
    };

    setChatsData((prevChats) => [...prevChats, newChat]);
    setIsEditingName(false);
    setNewChatName("New Chat User"); // Reset the new chat name for the next addition
  };

  // const openChatBody = (index) => {
  //   setSelectedChat(index);
  // };

  const openChatBody = (index) => {
    // Pass the selected chat data to the parent component
    onSelectChat(chatsData[index]);
  };

  // Filter the chat list items based on the search query
  const filteredChats = chatsData.filter((chat) => {
    return chat.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <section className="chat-list-section w-1/3 p-7">
      <div>
        <div className="flex justify-between items-center cursor-pointer mb-7 ">
          <p className="text-3xl font-bold ">Messages</p>
          <div className="flex gap-1">
            <div className="rounded-full w-2 h-2 bg-black"></div>
            <div className="rounded-full w-2 h-2 bg-black"></div>
            <div className="rounded-full w-2 h-2 bg-black"></div>
          </div>
        </div>

        <form className="flex input-search">
          <button
            type="submit"
            className="search-icon pl-2"
            onClick={preventDefault}
          >
            <i className="fa fa-search"></i>
          </button>
          <input
            className="input h-10 flex-1 p-2"
            placeholder="Search"
            type="text"
            name="search"
            autoComplete="on"
            value={searchQuery}
            onChange={handleInputChange}
          ></input>
        </form>
      </div>

      {/* Add New Chat */}
      {/* <div className="flex justify-end items-end mt-4 text-sm">
        <button
          className="add-chat-button border-2 border-purple-500 p-1 rounded-md"
          onClick={addNewChat}
        >
          Add New Chat
          <i className="fa-solid fa-plus" style={{ color: "#000000" }}></i>
        </button>
      </div> */}

      {/* ChatList Main Div */}
      <div className="chat-list-main mt-9 px-2 py-5 mb-5 flex flex-col gap-5">
        {filteredChats.map((chat, index) => (
          <div
            key={index}
            className={`flex flex-col gap-5 border-b-2 cursor-pointer chat-box p-1 ${
              selectedChat === index ? "active-chat" : ""
            }`}
            onClick={() => openChatBody(index)}
          >
            {/* Picture + HEADER */}
            <div className="flex justify-between items-center">
              <div className="flex gap-3 items-center">
                <img
                  src={chat.image}
                  className="w-12 h-12 rounded-full"
                  alt={`Profile of ${chat.name}`}
                />
                <p className="font-bold">{chat.name}</p>
              </div>
              <div>
                <p className="font-medium text-sm text-gray-400">{chat.time}</p>
              </div>
            </div>
            {/* Text Div */}
            <div className="pb-5">
              <p className="text-sm font-medium text-gray-600">
                {chat.message}
              </p>
            </div>
          </div>
        ))}

        {/* Add New Chat */}
        {/* <button className="add-chat-button border-2 bg-" onClick={addNewChat}>
          Add New Chat
        </button> */}

        {/* Edit Chat Name Modal */}
        {isEditingName && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-md">
              <h2 className="text-xl font-semibold mb-2">Edit Chat Name</h2>
              <input
                type="text"
                className="border border-gray-300 p-2 rounded w-full mb-4"
                placeholder="New Chat Name"
                value={newChatName}
                onChange={(e) => setNewChatName(e.target.value)}
              />
              <div className="flex justify-end">
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mr-2"
                  onClick={saveNewChat}
                >
                  Save
                </button>
                <button
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                  onClick={() => setIsEditingName(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default ChatList;
