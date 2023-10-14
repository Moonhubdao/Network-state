import cover from "../Files/cover.png";
import dp from "../Files/dp.png";
import ArrowSlant from "../Files/arrow-up-right.svg";
import chevyRight from "../Files/chevron-right.svg";
import arrowUp from "../Files/arrow-up.svg";
import barChart from "../Files/bar-chart-2.svg";
import msgSqr from "../Files/message-square.svg";
import repeat from "../Files/repeat.svg";
import share from "../Files/share.svg";
import heart from "../Files/heart.svg";
import BigF from "../Files/Frame185.png";
import smallF from "../Files/Frame221.png";

export default function body() {
  return (
    <div>
      <div
        style={{
          marginBottom: 36,
          position: "relative",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 36,
          display: "inline-flex",
        }}
      >
        <img src={cover} alt="" />
        <img
          style={{
            position: "absolute",
            bottom: -20,
            left: 10,
          }}
          src={dp}
          alt=""
        />
      </div>

      <div
        style={{
          width: "100%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 32,
          display: "inline-flex",
        }}
      >
        <div
          style={{
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 445,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 8,
              display: "inline-flex",
            }}
          >
            <div
              style={{
                color: "white",
                fontSize: 24,
                fontFamily: "Satoshi",
                fontWeight: "500",
                wordWrap: "break-word",
              }}
            >
              User
            </div>
            <div
              style={{
                color: "rgba(255, 255, 255, 0.80)",
                fontSize: 16,
                fontFamily: "Satoshi",
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              @user67904566
            </div>
          </div>
        </div>
        <div
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: 24,
            display: "flex",
          }}
        >
          <div
            style={{
              color: "white",
              fontSize: 18,
              fontFamily: "Satoshi",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            Movie lover, talks about movie and recommend movies.
          </div>
        </div>
      </div>

      <div
        style={{
          width: 611,
          height: 42,
          gap: 24,
          display: "inline-flex",
          flexDirection: "row",
          
        }}
      >
        <button
          style={{
            color: "white",
            fontSize: 16,
            fontFamily: "Satoshi",
            fontWeight: "500",
            wordWrap: "break-word",
            width: 103,
            height: 42,
            padding: 10,
            background: "#B0186A",
            borderRadius: 8,
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            display: "inline-flex",
          }}
        >
          Feed
        </button>
        <button
          style={{
            color: "white",
            fontSize: 16,
            fontFamily: "Satoshi",
            fontWeight: "500",
            wordWrap: "break-word",
            width: 103,
            height: 42,
            padding: 10,
            background: "#1D9BF0",
            borderRadius: 8,
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            display: "inline-flex",
          }}
        >
          Voting
        </button>
        <button
          style={{
            color: "white",
            fontSize: 16,
            fontFamily: "Satoshi",
            fontWeight: "500",
            wordWrap: "break-word",
            width: 103,
            height: 42,
            padding: 10,
            background: "#261865",
            borderRadius: 8,
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            display: "inline-flex",
          }}
        >
          User Profile
        </button>
        <button
          style={{
            color: "white",
            fontSize: 16,
            fontFamily: "Satoshi",
            fontWeight: "500",
            wordWrap: "break-word",
            width: 103,
            height: 42,
            padding: 10,
            background: "#E50914",
            borderRadius: 8,
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            display: "inline-flex",
          }}
        >
          Voice room
        </button>
        <button
          style={{
            color: "white",
            fontSize: 16,
            fontFamily: "Satoshi",
            fontWeight: "500",
            wordWrap: "break-word",
            width: 103,
            height: 42,
            padding: 10,
            background: "#A627D2",
            borderRadius: 8,
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            display: "inline-flex",
          }}
        >
          Rewards
        </button>
      </div>

      <div
        style={{
          width: 936,
          height: 208,
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 80,
          display: "inline-flex",
        }}
      >
        <div
          style={{
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 32,
            display: "flex",
          }}
        >
          <div
            style={{
              color: "white",
              fontSize: 24,
              fontFamily: "Satoshi",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            Communities
          </div>
          <div
            style={{
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 24,
              display: "inline-flex",
            }}
          >
            <div
              style={{
                width: 296,
                padding: 24,
                borderRadius: 16,
                border: "1px rgba(255, 255, 255, 0.80) solid",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 24,
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  color: "white",
                  fontSize: 24,
                  fontFamily: "Satoshi",
                  fontWeight: "500",
                  wordWrap: "break-word",
                }}
              >
                RF DAO
              </div>
              <div style={{ width: 40, height: 40, position: "relative" }}>
                <img src={ArrowSlant} alt="" />
              </div>
            </div>
            <div
              style={{
                width: 296,
                padding: 24,
                borderRadius: 16,
                border: "1px rgba(255, 255, 255, 0.80) solid",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 24,
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  color: "white",
                  fontSize: 24,
                  fontFamily: "Satoshi",
                  fontWeight: "500",
                  wordWrap: "break-word",
                }}
              >
                BOOM CHAT
              </div>
              <div style={{ width: 40, height: 40, position: "relative" }}>
                <img src={ArrowSlant} alt="" />
              </div>
            </div>
            <div
              style={{
                width: 296,
                padding: 24,
                borderRadius: 16,
                border: "1px rgba(255, 255, 255, 0.80) solid",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 24,
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  color: "white",
                  fontSize: 24,
                  fontFamily: "Satoshi",
                  fontWeight: "500",
                  wordWrap: "break-word",
                }}
              >
                CRACK DAO
              </div>
              <div style={{ width: 40, height: 40, position: "relative" }}>
                <img src={ArrowSlant} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            alignSelf: "stretch",
            height: 202,
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 24,
            paddingBottom: 24,
            borderRadius: 16,
            border: "1px white solid",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 32,
            display: "flex",
          }}
        >
          <div
            style={{
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 32,
              display: "inline-flex",
            }}
          >
            <button
              style={{
                paddingLeft: 24,
                paddingRight: 24,
                paddingTop: 10,
                paddingBottom: 10,
                background: "#A627D2",
                borderRadius: 200,
                border: "1px solid",
                justifyContent: "center",
                alignItems: "center",
                gap: 10,
                display: "flex",
                color: "white",
                fontSize: 24,
                fontFamily: "Satoshi",
                fontWeight: "500",
                wordWrap: "break-word",
              }}
            >
              Create community
              <img src={chevyRight} alt="" />
            </button>

            <button
              style={{
                paddingLeft: 24,
                paddingRight: 24,
                paddingTop: 10,
                paddingBottom: 10,
                borderRadius: 200,
                background: "none",
                border: "1px rgba(255, 255, 255, 0.80) solid",
                justifyContent: "center",
                alignItems: "center",
                gap: 10,
                display: "flex",
                color: "white",
                fontSize: 24,
                fontFamily: "Satoshi",
                fontWeight: "500",
                wordWrap: "break-word",
              }}
            >
              Join community
              <img src={chevyRight} alt="" />
            </button>
          </div>
          <div
            style={{
              height: 70,
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 16,
              display: "flex",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                color: "white",
                fontSize: 24,
                fontFamily: "Satoshi",
                fontWeight: "500",
                wordWrap: "break-word",
              }}
            >
              Tokenized Messaging
            </div>
            <div
              style={{
                alignSelf: "stretch",
                color: "white",
                fontSize: 16,
                fontFamily: "Satoshi",
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              Decentralized community messaging, empolying incentivized
              engagement, and secure sharing of information
            </div>
          </div>
        </div>

        <div
          style={{
            width: "100%",
            height: "100%",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 32,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              color: "white",
              fontSize: 24,
              fontFamily: "Satoshi",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            Statics
          </div>
          <div
            style={{
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 32,
              display: "inline-flex",
            }}
          >
            <div
              style={{
                width: 227,
                padding: 24,
                borderRadius: 16,
                border: "1px rgba(255, 255, 255, 0.50) solid",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: 16,
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: 16,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    color: "white",
                    fontSize: 24,
                    fontFamily: "Satoshi",
                    fontWeight: "500",
                    wordWrap: "break-word",
                  }}
                >
                  3369
                </div>
                <div style={{ width: 32, height: 32, position: "relative" }}>
                  <img src={arrowUp} alt="" />
                </div>
              </div>
              <div
                style={{
                  color: "white",
                  fontSize: 18,
                  fontFamily: "Satoshi",
                  fontWeight: "500",
                  wordWrap: "break-word",
                }}
              >
                Sign ups
              </div>
            </div>
            <div
              style={{
                width: 227,
                padding: 24,
                borderRadius: 16,
                border: "1px rgba(255, 255, 255, 0.50) solid",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: 16,
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: 16,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    color: "white",
                    fontSize: 24,
                    fontFamily: "Satoshi",
                    fontWeight: "500",
                    wordWrap: "break-word",
                  }}
                >
                  505
                </div>
                <div style={{ width: 32, height: 32, position: "relative" }}>
                  <img src={arrowUp} alt="" />
                </div>
              </div>
              <div
                style={{
                  color: "white",
                  fontSize: 18,
                  fontFamily: "Satoshi",
                  fontWeight: "500",
                  wordWrap: "break-word",
                }}
              >
                Communities
              </div>
            </div>
            <div
              style={{
                padding: 24,
                borderRadius: 16,
                border: "1px rgba(255, 255, 255, 0.50) solid",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: 16,
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: 16,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    color: "white",
                    fontSize: 24,
                    fontFamily: "Satoshi",
                    fontWeight: "500",
                    wordWrap: "break-word",
                  }}
                >
                  1000000
                </div>
                <div style={{ width: 32, height: 32, position: "relative" }}>
                  <img src={arrowUp} alt="" />
                </div>
              </div>
              <div
                style={{
                  color: "white",
                  fontSize: 18,
                  fontFamily: "Satoshi",
                  fontWeight: "500",
                  wordWrap: "break-word",
                }}
              >
                Total points accuqired
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            width: "100%",
            height: "100%",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 32,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              color: "white",
              fontSize: 24,
              fontFamily: "Satoshi",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            News feed
          </div>
          <div
            style={{
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 24,
              display: "flex",
            }}
          >
            <div
              style={{
                paddingLeft: 10,
                paddingRight: 10,
                paddingTop: 20,
                paddingBottom: 20,
                border: "1px rgba(255, 255, 255, 0.15) solid",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 32,
                display: "flex",
              }}
            >
              <div
                style={{
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: 22,
                  display: "flex",
                }}
              >
                <div
                  style={{
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 24,
                    display: "inline-flex",
                  }}
                >
                  <img
                    style={{
                      width: 50,
                      height: 50,
                      position: "relative",
                      borderRadius: 100,
                    }}
                    src={smallF}
                  />
                  <div
                    style={{
                      width: 644,
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: 12,
                      display: "inline-flex",
                    }}
                  >
                    <div
                      style={{
                        alignSelf: "stretch",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: 12,
                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{
                          justifyContent: "flex-start",
                          alignItems: "center",
                          gap: 8,
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            color: "white",
                            fontSize: 20,
                            fontFamily: "Poppins",
                            fontWeight: "600",
                            wordWrap: "break-word",
                          }}
                        >
                          Celtus Wealth
                        </div>
                        <div
                          style={{
                            color: "rgba(255, 255, 255, 0.80)",
                            fontSize: 16,
                            fontFamily: "Poppins",
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                        >
                          @clectuswealth2023 *{" "}
                        </div>
                      </div>
                      <div
                        style={{
                          justifyContent: "flex-start",
                          alignItems: "flex-start",
                          gap: 220,
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            color: "rgba(255, 255, 255, 0.80)",
                            fontSize: 16,
                            fontFamily: "Poppins",
                            fontWeight: "500",
                            wordWrap: "break-word",
                          }}
                        >
                          2hr
                        </div>
                        <div
                          style={{
                            width: 24,
                            height: 24,
                            position: "relative",
                          }}
                        >
                          <div
                            style={{
                              width: 2,
                              height: 2,
                              left: 11,
                              top: 11,
                              position: "absolute",
                              border: "2px rgba(255, 255, 255, 0.80) solid",
                            }}
                          ></div>
                          <div
                            style={{
                              width: 2,
                              height: 2,
                              left: 18,
                              top: 11,
                              position: "absolute",
                              border: "2px rgba(255, 255, 255, 0.80) solid",
                            }}
                          ></div>
                          <div
                            style={{
                              width: 2,
                              height: 2,
                              left: 4,
                              top: 11,
                              position: "absolute",
                              border: "2px rgba(255, 255, 255, 0.80) solid",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        alignSelf: "stretch",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 10,
                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{
                          flex: "1 1 0",
                          color: "white",
                          fontSize: 16,
                          fontFamily: "Satoshi",
                          fontWeight: "400",
                          wordWrap: "break-word",
                        }}
                      >
                        Recently started seeing young sheldon movie, wow i
                        really love how shart shelodn is...thou pretty annoyning
                        bro.
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  style={{
                    width: 566,
                    height: 428,
                    position: "relative",
                    borderRadius: 8,
                  }}
                  src={BigF}
                />
              </div>
              <div
                style={{
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: 96,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 8,
                    display: "flex",
                  }}
                >
                  <a href="" style={{ width: 24, height: 24, position: "relative" }}>
                    <img src={msgSqr} alt="" />
                  </a>
                  <div
                    style={{
                      color: "rgba(255, 255, 255, 0.60)",
                      fontSize: 12,
                      fontFamily: "Poppins",
                      fontWeight: "500",
                      wordWrap: "break-word",
                    }}
                  >
                    20
                  </div>
                </div>
                <div
                  style={{
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 8,
                    display: "flex",
                  }}
                >
                  <a href="" style={{ width: 24, height: 24, position: "relative" }}>
                    <img src={repeat} alt="" />
                  </a>
                  <div
                    style={{
                      color: "rgba(255, 255, 255, 0.60)",
                      fontSize: 12,
                      fontFamily: "Poppins",
                      fontWeight: "500",
                      wordWrap: "break-word",
                    }}
                  >
                    5
                  </div>
                </div>
                <div
                  style={{
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 8,
                    display: "flex",
                  }}
                >
                  <a href="" style={{ width: 24, height: 24, position: "relative" }}>
                    <img src={heart} alt="" />
                  </a>
                  <div
                    style={{
                      color: "rgba(255, 255, 255, 0.60)",
                      fontSize: 12,
                      fontFamily: "Poppins",
                      fontWeight: "500",
                      wordWrap: "break-word",
                    }}
                  >
                    5
                  </div>
                </div>
                <div
                  style={{
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 8,
                    display: "flex",
                  }}
                >
                  <a href="" style={{ width: 24, height: 24, position: "relative" }}>
                    <img src={barChart} alt="" />
                  </a>
                  <div
                    style={{
                      color: "rgba(255, 255, 255, 0.60)",
                      fontSize: 12,
                      fontFamily: "Poppins",
                      fontWeight: "500",
                      wordWrap: "break-word",
                    }}
                  >
                    126
                  </div>
                </div>
                <a href="" style={{ width: 24, height: 24, position: "relative" }}>
                  <img src={share} alt="" />
                </a>
              </div>
            </div>
            <div
              style={{
                paddingLeft: 10,
                paddingRight: 10,
                paddingTop: 20,
                paddingBottom: 20,
                border: "1px rgba(255, 255, 255, 0.15) solid",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 32,
                display: "flex",
              }}
            >
              <div
                style={{
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: 22,
                  display: "flex",
                }}
              >
                <div
                  style={{
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 24,
                    display: "inline-flex",
                  }}
                >
                  <img
                    style={{
                      width: 50,
                      height: 50,
                      position: "relative",
                      borderRadius: 100,
                    }}
                    src={smallF}
                  />
                  <div
                    style={{
                      width: 644,
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: 12,
                      display: "inline-flex",
                    }}
                  >
                    <div
                      style={{
                        alignSelf: "stretch",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: 12,
                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{
                          justifyContent: "flex-start",
                          alignItems: "center",
                          gap: 8,
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            color: "white",
                            fontSize: 20,
                            fontFamily: "Poppins",
                            fontWeight: "600",
                            wordWrap: "break-word",
                          }}
                        >
                          Celtus Wealth
                        </div>
                        <div
                          style={{
                            color: "rgba(255, 255, 255, 0.80)",
                            fontSize: 16,
                            fontFamily: "Poppins",
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                        >
                          @clectuswealth2023 *{" "}
                        </div>
                      </div>
                      <div
                        style={{
                          justifyContent: "flex-start",
                          alignItems: "flex-start",
                          gap: 220,
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            color: "rgba(255, 255, 255, 0.80)",
                            fontSize: 16,
                            fontFamily: "Poppins",
                            fontWeight: "500",
                            wordWrap: "break-word",
                          }}
                        >
                          2hr
                        </div>
                        <div
                          style={{
                            width: 24,
                            height: 24,
                            position: "relative",
                          }}
                        >
                          <div
                            style={{
                              width: 2,
                              height: 2,
                              left: 11,
                              top: 11,
                              position: "absolute",
                              border: "2px rgba(255, 255, 255, 0.80) solid",
                            }}
                          ></div>
                          <div
                            style={{
                              width: 2,
                              height: 2,
                              left: 18,
                              top: 11,
                              position: "absolute",
                              border: "2px rgba(255, 255, 255, 0.80) solid",
                            }}
                          ></div>
                          <div
                            style={{
                              width: 2,
                              height: 2,
                              left: 4,
                              top: 11,
                              position: "absolute",
                              border: "2px rgba(255, 255, 255, 0.80) solid",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        alignSelf: "stretch",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 10,
                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{
                          flex: "1 1 0",
                          color: "white",
                          fontSize: 16,
                          fontFamily: "Satoshi",
                          fontWeight: "400",
                          wordWrap: "break-word",
                        }}
                      >
                        Recently started seeing young sheldon movie, wow i
                        really love how shart shelodn is...thou pretty annoyning
                        bro.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: 96,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 8,
                    display: "flex",
                  }}
                >
                  <a href="" style={{ width: 24, height: 24, position: "relative" }}>
                    <img src={msgSqr} alt="" />
                  </a>
                  <div
                    style={{
                      color: "rgba(255, 255, 255, 0.60)",
                      fontSize: 12,
                      fontFamily: "Poppins",
                      fontWeight: "500",
                      wordWrap: "break-word",
                    }}
                  >
                    20
                  </div>
                </div>
                <div
                  style={{
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 8,
                    display: "flex",
                  }}
                >
                  <a href="" style={{ width: 24, height: 24, position: "relative" }}>
                    <img src={repeat} alt="" />
                  </a>
                  <div
                    style={{
                      color: "rgba(255, 255, 255, 0.60)",
                      fontSize: 12,
                      fontFamily: "Poppins",
                      fontWeight: "500",
                      wordWrap: "break-word",
                    }}
                  >
                    5
                  </div>
                </div>
                <div
                  style={{
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 8,
                    display: "flex",
                  }}
                >
                  <a href="" style={{ width: 24, height: 24, position: "relative" }}>
                    <img src={heart} alt="" />
                  </a>
                  <div
                    style={{
                      color: "rgba(255, 255, 255, 0.60)",
                      fontSize: 12,
                      fontFamily: "Poppins",
                      fontWeight: "500",
                      wordWrap: "break-word",
                    }}
                  >
                    5
                  </div>
                </div>
                <div
                  style={{
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 8,
                    display: "flex",
                  }}
                >
                  <a href="" style={{ width: 24, height: 24, position: "relative" }}>
                    <img src={barChart} alt="" />
                  </a>
                  <div
                    style={{
                      color: "rgba(255, 255, 255, 0.60)",
                      fontSize: 12,
                      fontFamily: "Poppins",
                      fontWeight: "500",
                      wordWrap: "break-word",
                    }}
                  >
                    126
                  </div>
                </div>
                <a href="" style={{ width: 24, height: 24, position: "relative" }}>
                  <img src={share} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
