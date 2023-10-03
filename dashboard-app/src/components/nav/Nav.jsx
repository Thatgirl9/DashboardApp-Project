import React, { useState } from "react";
import "./nav.css";
import Logo from "../../assets/dark-surface-with-chat-bubble.jpg";

function NavBar() {
  const [showSettingsDiv, setShowSettingsDiv] = useState(false);

  const toggleSettingsDiv = () => {
    setShowSettingsDiv(!showSettingsDiv);
  };

  return (
    <section className="nav-section bg-black w-1/5 p-5 ">
      <div className="flex items-center cursor-pointer">
        <img src={Logo} alt="logo" className="logo w-10 h-10 rounded-full " />
        <h2 className="font-bold text-xl">QuaaPay</h2>
      </div>

      {/* NAV LIST GENERAL DIV */}
      <div className="font-medium flex flex-col justify-around nav-div">
        <div>
          {/* Div for the first  nav */}
          <div className="first-nav-list flex flex-col gap-4">
            <div className="nav-list flex justify-between items-center p-2 cursor-pointer ">
              <p>Messages</p>
              <p className="nav-number rounded-lg px-2">12</p>
            </div>
            <div className="nav-list flex justify-between items-center p-2 cursor-pointer ">
              <p>Balances</p>
            </div>
          </div>

          {/* Div for the second  nav */}
          <div className="second-nav-list mt-6 mb-8 py-7 flex flex-col gap-4">
            <div className="nav-list flex justify-between items-center p-2 cursor-pointer ">
              <p>Issue Reporting</p>
              <p className="nav-number rounded-lg px-2">7</p>
            </div>
            <div className="nav-list flex justify-between items-center p-2 cursor-pointer ">
              <p>Inbox</p>
              <p className="nav-number rounded-lg px-2">10</p>
            </div>
          </div>

          {/* Div for the third  nav */}
          <div>
            <div className="nav-list flex justify-between items-center p-2 cursor-pointer ">
              <p>Message Admin</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div
            className="nav-list flex justify-between items-center p-2 cursor-pointer "
            onClick={toggleSettingsDiv}
          >
            <p>Settings</p>
          </div>

          {/* SETTINGS DROPDOWN */}
          {showSettingsDiv && (
            <div className="absolute bg-purple-900 left-60 bottom-8 p-4 rounded-lg">
              <ul className="list-none">
                <li className="hover:bg-purple-600 p-1 rounded-md">
                  <a href="#">Update your name</a>
                </li>
                <li className="hover:bg-purple-600 p-1 rounded-md">
                  <a href="#">
                    Turn on two factor <br></br>authentication
                  </a>
                </li>
                <li className="hover:bg-purple-600 p-1 rounded-md">
                  <a href="#">Upload new profile photo</a>
                </li>
                <li className="hover:bg-purple-600 p-1 rounded-md">
                  <a href="#">Update descriptions</a>
                </li>
              </ul>
            </div>
          )}

          <div className="nav-list flex justify-between items-center p-2 cursor-pointer ">
            <p>Profile</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NavBar;
