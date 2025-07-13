import express from "express";

import { createUser ,deleteUser,getAllUsers,getUserById ,update} from "../controller/userController.js";

const route = express.Router();

route.post("/user", createUser);
route.get("/users",getAllUsers);
route.get("/user/:id", getUserById);
route.put("/update/user/:id", update);
route.delete("/delete/user/:id", deleteUser);
export default route;