import { Routes, Route } from "react-router-dom";
import Home from "./../../pages/Home";
import SignIn from "../../pages/SignInPage";
import UserProfile from "../../pages/UserProfile";
import EditUsername from "../../pages/EditProfile";
import { GuestRoute } from "./GuestRoute";
import { PrivateRoute } from "./PrivateRoute";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<GuestRoute />}>
        <Route index element={<SignIn />} />
      </Route>
      <Route path="/profile" element={<PrivateRoute />}>
        <Route index element={<UserProfile />} />
      </Route>
      <Route path="/edit" element={<EditUsername />} />
    </Routes>
  );
}
