import { Routes, Route } from "react-router-dom";
import Home from "./../../pages/Home"
import SignIn from "../../pages/SignInPage"


export function AppRoutes() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </>
    );
  }