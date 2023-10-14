import Emoji from "../Files/Emoji.svg";
import rc from "../Files/rc.png";
import bell from "../Files/bell.svg";
import search from "../Files/Search.svg";

export default function Navbar() {
  return (
    <div
      style={{
        width: "100%",
        // top: 0,
        paddingTop: 22,
        paddingBottom: 22,
        // paddingLeft: 19,
        paddingRight: 122.16,
        justifyContent: "flex-start",
        alignItems: "center",
        display: "inline-flex",
        gap: 30,
      }}
    >
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <h3
          style={{
            fontSize: 20,
            fontFamily: "Satoshi",
            fontWeight: "500",
            wordWrap: "break-word",
          }}
        >
          Hello, User
        </h3>
        <img style={{ width: 18.85, height: 20, paddingLeft: 5, }} src={Emoji} alt="" />
      </div>

      <div
        style={{
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 114,
          display: "flex",
        }}
      >
        <div
          style={{
            width: 442,
            height: 40,
            background:
              "linear-gradient(135deg, rgba(15, 85, 232, 0.10) 0%, rgba(157, 223, 243, 0.10) 100%)",
            borderRadius: 40,
            border: "none",
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button style={{ backgroundColor: "transparent" }}>
            <img src={search} alt="" />
          </button>
          <input
            style={{
              border: "none",
              height: 30,
              width: 400,
              borderRadius: 40,
              fontSize: 13,
              backgroundColor: "transparent",
              fontFamily: "Lato",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
            placeholder="Search"
          />
        </div>
        <div
          style={{
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 24,
            display: "flex",
          }}
        >
          <div
            style={{
              paddingLeft: 23,
              paddingRight: 23,
              paddingTop: 15,
              paddingBottom: 15,
              background: "#F6F6F6",
              borderRadius: 24,
              overflow: "hidden",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 10,
              display: "flex",
            }}
          >
            <div
              style={{
                color: "#201E1F",
                fontSize: 16,
                fontFamily: "Satoshi",
                fontWeight: "500",
                wordWrap: "break-word",
              }}
            >
              OXOre..yufgg
            </div>
          </div>
          <a
            href=""
            style={{
              padding: 10,
              background: "#EDF2F7",
              borderRadius: 100,
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 10,
              display: "flex",
            }}
          >
            <img src={bell} alt="" />
          </a>
          <a href="">
            <img src={rc} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
