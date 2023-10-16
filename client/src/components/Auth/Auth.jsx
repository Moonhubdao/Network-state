import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from "../../assets/logo.png";

import {
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";
import { Web3Auth } from "@web3auth/modal";
import { SolanaWallet } from "@web3auth/solana-provider";
import { SolanaWalletConnectorPlugin } from "@web3auth/solana-wallet-connector-plugin";
import { SolflareAdapter } from "@web3auth/solflare-adapter";
import { SlopeAdapter } from "@web3auth/slope-adapter";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";
import { SolanaWalletAdapter } from "@web3auth/torus-solana-adapter";
import { SolanaPrivateKeyProvider } from "@web3auth/solana-provider";

import Dashboard from "../../Pages/Dashboard/dashboard";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Main from "../../components/Main/Main";
import Team from "../../components/Team/Team";
// import Chats from "../../Pages/ChatApp/Chat";
import "../NavBar/NavBar.CSS";
import Chats from "../../Pages/ChatApp/Chat";

// import "./NavBar.css";

const clientId =
  "BMlR-zIS_NDi6khlkx3S6Lkb-cATBhdS-srB7yHwUkY1WTHF0v3mRQ64nOcN05_88nDizTx0vwTtmIdIhiGnxCE";

export const Auth = () => {
  const [web3auth, setWeb3auth] = useState(null);
  const [provider, setProvider] = useState(null);
  const [userData, setUserData] = useState({});
  const [publik, setPublik] = useState({});
  const [solanaWallet, setSolanaWallet] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const init = async () => {
      try {
        const chainConfig = {
          chainNamespace: "solana",
          chainId: "0x3", // Please use 0x1 for Mainnet, 0x2 for Testnet, 0x3 for Devnet
          displayName: "Solana Devnet",
          blockExplorer: "https://explorer.solana.com",
          ticker: "SOL",
          tickerName: "Solana Token",
          rpcTarget: "https://api.devnet.solana.com",
        };

        const web3authInstance = new Web3Auth({
          clientId,
          chainConfig,
        });

        const privateKeyProvider = new SolanaPrivateKeyProvider({
          config: { chainConfig },
        });

        const torusPlugin = new SolanaWalletConnectorPlugin({
          torusWalletOpts: {
            TorusCtorArgs: {
              buttonPosition: "top-right",
            },
          },
          walletInitOptions: {
            whiteLabel: {
              name: "Whitelabel Demo",
              theme: { isDark: true, colors: { torusBrand1: "#6a040f" } },
              logoDark: "https://web3auth.io/images/w3a-L-Favicon-1.svg",
              logoLight: "https://web3auth.io/images/w3a-D-Favicon-1.svg",
              topupHide: true,
              defaultLanguage: "en",
            },
            enableLogging: true,
          },
        });

        await web3authInstance.addPlugin(torusPlugin);

        const solflareAdapter = new SolflareAdapter({
          clientId,
        });
        web3authInstance.configureAdapter(solflareAdapter);

        const slopeAdapter = new SlopeAdapter({
          clientId,
        });
        web3authInstance.configureAdapter(slopeAdapter);

        setWeb3auth(web3authInstance);

        // OPEN LOGIN CONFIG
        const openloginAdapter = new OpenloginAdapter({
          loginSettings: {
            mfaLevel: "default",
          },
          adapterSettings: {
            mfaSettings: {
              deviceShareFactor: {
                enable: true,
                priority: 1,
                mandatory: true,
              },
              backUpShareFactor: {
                enable: true,
                priority: 2,
                mandatory: false,
              },
              socialBackupFactor: {
                enable: true,
                priority: 3,
                mandatory: false,
              },
              passwordFactor: {
                enable: true,
                priority: 4,
                mandatory: false,
              },
            },
          },
          privateKeyProvider,
        });

        web3authInstance.configureAdapter(openloginAdapter);

        await web3authInstance.initModal();

        const solanaAdapter = new SolanaWalletAdapter({
          chainId: "0x3",
        });
        web3authInstance.configureAdapter(solanaAdapter);

        if (
          web3authInstance.connectedAdapterName &&
          web3authInstance.provider
        ) {
          setProvider(web3authInstance.provider);
          // Create a SolanaWallet instance using the connected provider
          const solanaWalletInstance = new SolanaWallet(
            web3authInstance.provider
          );
          setSolanaWallet(solanaWalletInstance);
        }
      } catch (error) {
        console.error(error);
      }
    };

    init();
  }, []);

  // Function to send wallet data to the backend.
  const sendWalletToBackend = async (name, email, wallet) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/authenticate",
        {
          name,
          email,
          wallet,
        }
      );
      if (response.status === 200) {
        console.log("Wallet already exists in the backend.");
      } else if (response.status === 201) {
        console.log("Wallet sent to backend successfully");
      }
    } catch (error) {
      console.error("Error sending wallet to backend:", error);
    }
  };

  // Function to Update wallet data to the backend
  const updateUserInfo = async (wallet, updatedName, updatedEmail) => {
    try {
      const response = await axios.put("http://localhost:8000/api/updateUser", {
        wallet,
        updatedName,
        updatedEmail,
      });
      if (response.status === 200) {
        console.log("User information updated successfully");
      }
    } catch (error) {
      console.error("Error updating user information:", error);
    }
  };

  const login = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }

    try {
      const web3authProvider = await web3auth.connect();
      // If you need to create a SolanaWallet instance, do it here.
      const solanaWalletInstance = new SolanaWallet(web3authProvider);

      const accounts = await solanaWalletInstance.requestAccounts();
      const wallet = accounts[0];

      const user = await web3auth.getUserInfo();
      const name = user.name;
      const email = user.email;

      // ... (existing login logic)
      if (wallet) {
        sendWalletToBackend(name, email, wallet);
        // Check if a username already exists for this wallet
        // axios
        //   .post("http://localhost:8000/api/checkUsername", { wallet })
        //   .then((response) => {
        //     setUsernameExists(response.data.exists);
        //   });
      }

      setSolanaWallet(solanaWalletInstance);

      setProvider(web3authProvider);
      setIsLoggedIn(true);
      updateUserInfo(wallet, name, email);
    } catch (error) {
      console.error("Error during login:", error);
      // Handle the error as needed
    }
  };

  // Function to fetch accounts from Solana Wallet
  const fetchAccounts = async () => {
    if (!solanaWallet) {
      console.log("Solana Wallet not initialized yet");
      return;
    }

    try {
      const accounts = await solanaWallet.requestAccounts();
      console.log("Solana accounts", accounts);

      const connectionConfig = await solanaWallet.request({
        method: "solana_provider_config",
        params: [],
      });

      const connection = new Connection(connectionConfig.rpcTarget);

      // Fetch the balance for the specified public key
      const balance = await connection.getBalance(new PublicKey(accounts[0]));
      setPublik(accounts);

      console.log("Solana balance", balance);
    } catch (error) {
      console.error("Error fetching accounts/balance", error);
    }
  };

  // Function to get the private key from the Solana Wallet
  const getPrivateKey = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }

    try {
      const privateKey = await web3auth.provider.request({
        method: "solanaPrivateKey",
      });
      // Do something with privateKey
      console.log(privateKey);
    } catch (error) {
      console.error("Error getting private key", error);
    }
  };

  const authenticateUser = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    const idToken = await web3auth.authenticateUser();
  };

  const getUserInfo = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    const user = await web3auth.getUserInfo();
    setUserData(user);
    console.log(user);
  };
  const logout = async () => {
    try {
      if (!web3auth) {
        console.log("web3auth not initialized yet");
        return;
      }
      await web3auth.logout();
      setProvider(null);
      setUserData({});
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <div>
      <div className="hidden">
        <Dashboard logout={logout} />
      </div>

      {provider ? <Chats logout={logout} /> : <Homepage login={login} />}
    </div>
  );
};

export const Homepage = ({ login }) => {
  return (
    <div>
      <div className="flex items-center justify-between p-5 px-12 navBar">
        <img src={logo} alt="Logo" className="w-20 lg:w-40" />
        <button
          onClick={login}
          className="flex items-center justify-center font-black text-white bg-[#2C0E23] px-6 py-2 rounded-3xl hover:bg-[#B0186A] hover:border-0"
        >
          Login
        </button>
      </div>
      <Hero />
      <Main />
      <About />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

// export const Dashboard = () => {

// }
