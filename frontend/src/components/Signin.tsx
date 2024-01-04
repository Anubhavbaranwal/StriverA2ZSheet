import { getAuth, signInWithPopup } from "firebase/auth";
import { useRef, useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";
import { auth } from "../App";

const provider = new GoogleAuthProvider();

const Signin = () => {
  const [isSignedin, setSignedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function onSignin() {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (!credential) {
          return;
        }
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch(() => {
        alert("erorr while signing in");
      });
  }
  return (
    <div className="">
      <input
        type="email"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        className="bg-black"
        placeholder="Email"
      />
      <input
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
        className="bg-black text-white"
        placeholder="Password"
      />
      <button onClick={() => onSignin()}>Submit</button>
    </div>
  );
};

export default Signin;
