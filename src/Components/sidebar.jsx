import "./sidebar.css";
import logo from "../Files/logo.svg";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

export default function Sidebar() {
  return (
    <div className="head">
      <div className="logo">
        <img src={logo} alt="" />
        <h2
          style={{
            color: "white",
            fontSize: 24,
            fontFamily: "Satoshi",
            fontWeight: "700",
            wordWrap: "break-word",
          }}
        >
          MoonHub
        </h2>
      </div>
    </div>
  );
}
