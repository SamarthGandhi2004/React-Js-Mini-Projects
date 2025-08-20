import { auth, googleProvider } from "@/Firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearUser, settingUser } from "./redux/Slices/authSlice";
import { useNavigate } from "react-router-dom";

const UserSignInOut = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  console.log("useris", user);
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        //   // user is signed in
        dispatch(
          settingUser({ uid: currentUser.uid, email: currentUser.email })
        );
        navigate("/");
      } else {
        // user is signed out
        dispatch(clearUser());
      }
    });

    return () => unsubscribe();
  }, [dispatch,navigate]);

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const userInfo = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      //   console.log(userInfo);
      //    dispatch(settingUser(userInfo))
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const userInfo = await signInWithEmailAndPassword(auth, email, password);
      //   console.log(userInfo);
      //    dispatch(settingUser(userInfo))
    } catch (error) {
      console.log(error);
    }
  };

  const HandleGoogleSignin = async () => {
    try {
      const userInfo = await signInWithPopup(auth, googleProvider);
      //   console.log(userInfo);
      //   dispatch(settingUser(userInfo))
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      // dispatch(clearUser());  // clear Redux user
      // console.log("User logged out");
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 space-y-4 border rounded-lg shadow-md w-96 mx-auto">
      {!user ? (
        <>
          <h2 className="text-xl font-bold">Authentication</h2>

          {/* Email Input */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
          />

          {/* Password Input */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
          />

          {/* Buttons */}
          <div className="flex gap-2">
            <button
              onClick={handleSignUp}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Sign Up
            </button>
            <button
              onClick={handleSignIn}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Sign In
            </button>
          </div>

          <button
            onClick={HandleGoogleSignin}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Sign In with Google
          </button>
        </>
      ) : (
        <>
          <button
            onClick={handleLogout}
            className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
          >
            Logout
          </button>
        </>
      )}
    </div>
  );
};

export default UserSignInOut;
