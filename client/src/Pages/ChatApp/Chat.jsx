import { useState, useEffect } from "react";
import "./Chat.css";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import AuthPage from "./authPage";
// import ChatsPage from "./chatsPage";
import Dashboard from "../Dashboard/dashboard";

function Chats({ logout }) {
  const [user, setUser] = useState("");
  // const navigate = useNavigate();
  console.log({ user });
  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <Dashboard user={user} logout={logout} />;
  }
}

export default Chats;
