import User from "../models/user.model.js";
import axios from "axios";

// @desc Svae User Profile
// @route POST /api/authenticate
// @access Public
export const savePublicKey = async (req, res) => {
  const { name, email, wallet } = req.body;

  if (!wallet) {
    return res.status(400).send("Wallet information is missing");
  }

  // Check if the wallet already exists in the database
  const existingUser = await User.findOne({ wallet });

  if (existingUser) {
    return res.status(200).send("Wallet already exists");
  }
  const user = new User({
    name,
    email,
    wallet,
  });

  await user.save();
  res.status(201).send("Wallet stored successfully");
};

// //////////////////////////////////////////////////////////////////////////

// @desc Updating User Profile
// @route PUT /api/updateUser
// @access Private
export const updateUserInfo = async (req, res) => {
  const { wallet, updatedName, updatedEmail } = req.body;

  if (!wallet) {
    return res.status(400).send("Wallet information is missing");
  }

  try {
    const updatedUser = await User.findOneAndUpdate(
      { wallet },
      { name: updatedName, email: updatedEmail },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).send("User not found");
    }

    res.status(200).send("User information updated successfully");
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

// //////////////////////////////////////////////////////////////////
//  @desc Creating a Chat Profile
// @route PUT /api/createChatUser
// access Private
export const createChatUser = async (req, res) => {
  const { username, secret } = req.body;

  try {

    console.log(username, secret)
    const response = await axios.post(
      "https://api.chatengine.io/users/",
      {
        username: username,
        secret: secret,
        first_name: username,
      },
      {
        headers: {
          'PRIVATE-KEY': 'bdafe1a7-564f-408b-be0c-27bc61f51b4d', 
        },
      }
    );

    console.log("ChatEngine API Response:", response.data); // Optional: Log the API response for debugging

    return res.status(201).json(response.data);
  } catch (error) {
    console.error("Error creating chat user:", error); // Log the error for debugging
    return res.status(403).json({ error: error.message });
  }
};
