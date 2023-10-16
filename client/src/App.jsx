// import Chat from "./Pages/Chat-Test/Chat";
import Dashboard from "./Pages/Dashboard/dashboard";
// import Homepage from "./Pages/Homepage/Homepage";
import { Auth } from "./components/Auth/Auth";
import Chat from "./Pages/ChatApp/Chat";
import Video from "./Pages/videosdk/video";
import ChatsPage from "./Pages/ChatApp/chatsPage";
import PointSystem from "./Pages/Rewards/Points";
// import { NavBar } from "./components/Auth/Auth";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="overflow-hidden">
      <Router>
        <Routes>
          <Route path="/" exact element={<Auth />} />
        </Routes>
        <Routes>
          <Route path="/dashboard" exact element={<Dashboard />} />
        </Routes>
        <Routes>
          <Route path="/chat" exact element={<Chat />} />
        </Routes>
        <Routes>
          <Route path="/video" exact element={<Video />} />
        </Routes>
        <Routes>
          <Route path="/chatroom" exact element={<ChatsPage />} />
        </Routes>
        <Routes>
          <Route path="/points" exact element={<PointSystem />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
