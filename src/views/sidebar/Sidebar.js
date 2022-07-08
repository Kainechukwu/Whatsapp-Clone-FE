import { Component } from "react";
import SidebarHeader from "./SidebarHeader";
import FilterSvg from "../svg/FilterSvg.js";
import ChatList from "./ChatList";
// import { useState } from "react";

class Sidebar extends Component {
  // const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
  chats = [
    {
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      phoneNumber: "09049074491",
      date: "08/07/2022",
      lastMsg: "This was the last message",
      id: 1,
    },
    {
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      phoneNumber: "09049486950",
      date: "08/07/2022",
      lastMsg: "Whats Up",
      id: 2,
    },
    {
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      phoneNumber: "09045074491",
      date: "08/07/2022",
      lastMsg:
        "You should always be optimistic and hopeful that one day things will get better.",
      id: 3,
    },
    {
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      phoneNumber: "09045667491",
      date: "08/07/2022",
      lastMsg: "Happy Birthday",
      id: 4,
    },
    {
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      phoneNumber: "09049874491",
      date: "08/07/2022",
      lastMsg: "Remember you are going out on saturday yeah?",
      id: 5,
    },
  ];
  render() {
    return (
      <div className="fixed dark2  h-full overflow-y-auto sidebar border-r borderGray">
        <div className="sticky top-0 flex flex-col ">
          <SidebarHeader />
          <div className="dark2 border-b borderGray flex items-center px-4 py-2">
            <div className="dark1 flex-grow rounded-md h-10 mr-2">
              <input
                type="text"
                className="dark1 border-none rounded-md h-full w-full"
              />
            </div>
            <FilterSvg />
          </div>
        </div>
        <div className="pr-3 dark2">
          {!this.chats.length ? (
            <div className="dark2 p-4 Inter fs-20 fw-400 text-white">
              No active chat.
            </div>
          ) : (
            this.chats.map((chat) => (
              <ChatList
                img={chat.img}
                id={chat.id}
                key={chat.id}
                phoneNumber={chat.phoneNumber}
                date={chat.date}
                lastMsg={chat.lastMsg}
              />
            ))
          )}
        </div>
      </div>
    );
  }
}

export default Sidebar;
