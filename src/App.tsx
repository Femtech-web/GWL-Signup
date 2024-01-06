/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineMailOutline } from "react-icons/md";
import { AiFillFacebook } from "react-icons/ai";
import { FaYahoo } from "react-icons/fa";

interface BtnProps {
  icon: any;
  text: string;
}

const Button = ({ icon, text }: BtnProps) => {
  return (
    <button>
      <span>{icon}</span>
      <p>{text}</p>
    </button>
  );
};

function App() {
  const [currentTab, setCurrentTab] = useState("sign_in");
  const isSignIn = currentTab === "sign_in";
  const isRegister = currentTab === "register";

  const handleSwitch = () => {
    if (isSignIn) {
      setCurrentTab("register");
    } else {
      setCurrentTab("sign_in");
    }
  };

  return (
    <div className="page_container">
      <div className="inner_container">
        <div className="header_contents">
          <span>
            <img src="/GWL_Full_black.png" alt="company logo" />
          </span>
          <h2>Welcome!</h2>
          <div className="tab_switch_cont">
            <div onClick={() => setCurrentTab("sign_in")}>
              <p>Sign In</p>
              {isSignIn && <span className="switch"></span>}
            </div>
            <div onClick={() => setCurrentTab("register")}>
              <p>Register</p>
              {isRegister && <span className="switch"></span>}
            </div>
          </div>
        </div>
        <div className="btns_container">
          <Button
            icon={<FcGoogle fontSize={22} />}
            text={isSignIn ? "Sign in with Google" : "Register with Google"}
          />
          <Button
            icon={<MdOutlineMailOutline fontSize={20} />}
            text={isSignIn ? "Sign in with Email" : "Register with Email"}
          />
          {isSignIn && (
            <Button
              icon={<AiFillFacebook fontSize={20} />}
              text="Sign in with Facebook"
            />
          )}
          {isSignIn && (
            <Button
              icon={<FaYahoo fontSize={20} />}
              text="Sign in with Yahoo"
            />
          )}
          <div className="login_switch">
            <p>
              {isSignIn ? "Don't have an account? " : "Have an account? "}
              <span onClick={handleSwitch} className="link">
                {isSignIn ? "create one" : "sign in"}
              </span>
            </p>
          </div>
        </div>
      </div>
      {isRegister && (
        <div className="agreement">
          <p>
            When you link your Facebook, Google, or Yahoo account, GWL collects
            certain information stored in that account that you have configured
            to make available. By linking your accounts, you authorize GWL to
            access and use your account on the third party service in connection
            with your use of GWL.com.
          </p>
        </div>
      )}
      <div className="login_switch">
        <p className="link">Contact Us/Support</p>
      </div>
    </div>
  );
}

export default App;
