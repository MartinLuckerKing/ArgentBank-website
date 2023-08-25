import { Routes, Route } from "react-router-dom";
import Home from "./../../pages/Home"
import SignIn from "../../pages/SignInPage"
import UserProfile from "../../pages/UserProfile"


export function AppRoutes() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/profile" element={<UserProfile />}/>
        </Routes>
      </>
    );
  }