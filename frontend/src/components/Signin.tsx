import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRef, useState } from "react";

const Signin = () => {
  const [isSignedin, setSignedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();
  const handleonClick = () => {
    if (!isSignedin) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          alert("user created Successfully");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  };
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
      <button onClick={() => handleonClick()}>Submit</button>
    </div>
  );
};

export default Signin;
