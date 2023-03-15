import express from "express";

// importing the controllers
import { getOneUser ,addOneUser} from "../controllers/_user.js";

// declearing the user router
const userRouter = express.Router();

userRouter.route("/:id").get(getOneUser); // to get one specific user from db
userRouter.route("/").post(addOneUser);
export default userRouter;