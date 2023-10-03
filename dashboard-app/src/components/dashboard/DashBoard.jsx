import React, { useState } from "react";
import "./dashboard.css";
import UIface1 from "../../assets/jurica-koletic-7YVZYZeITc8-unsplash.jpg";
import NavBar from "../nav/Nav";
import ChatList from "../chatList/ChatList";
import ChatBody from "../chatBody/ChatBody";

function Dashboard() {
  const [selectedChat, setSelectedChat] = useState(null);

  // Define your chat data here, including the profile images
  const chatsData = [
    {
      name: "Fahzeez Lawal",
      profileImage: UIface1, // Provide the appropriate image
      messages: [],
    },
    // Add more chat objects as needed
  ];

  // Function to handle chat selection from ChatList
  // const handleSelectChat = (chatData) => {
  //   setSelectedChat(chatData);
  // };

  return (
    <section className="flex flex-1 relative">
      <NavBar />
      <ChatList
        chatsData={chatsData}
        selectedChat={selectedChat}
        setSelectedChat={setSelectedChat}
      />
      <ChatBody chat={chatsData[selectedChat]} />
    </section>
  );
}

export default Dashboard;
