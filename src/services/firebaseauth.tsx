import { getAuth } from "firebase/auth";
import { app } from "../configs/firebaseConfigs";

const auth = getAuth(app);

export { auth };
