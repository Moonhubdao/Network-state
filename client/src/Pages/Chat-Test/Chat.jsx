import { useState } from "react";

import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";

const Chat = () => {
  const [user, setUser] = useState();

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
};

export default Chat;
