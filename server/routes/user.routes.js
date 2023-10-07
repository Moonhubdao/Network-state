import express from "express";

import {
  createChatUser,
  savePublicKey,
  updateUserInfo,
} from "../controller/user.controller.js";

const router = express.Router();

router.post("/api/authenticate", savePublicKey);

router.put("/api/updateUser", updateUserInfo);

router.post("/api/chat", createChatUser);

export default router;
