import Input from "./components/Input/input";
import { useState } from "react";
import Button from "./components/Button/Button";
import Form from "./components/Form/Form";
import "./App.css";
import GitHub from "./components/GitHub/GitHub";
import { BounceLoader } from "react-spinners";
import Google from "./svg/google.svg";

function App() {
  const [spinner, setSpinner] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [userForm, setuserForm] = useState({
    userName: "",
    password: "",
  });

  const onValidation = () => {
    if (userForm.userName === "" || userForm.password === "") {
      alert("User Name or Password can not be blank!");
    } else if (
      userForm.userName === "Huseyin" &&
      userForm.password === "12345"
    ) {
      console.log(userForm);
      setSpinner(true);
      setTimeout(() => {
        setIsActive(true);
        setSpinner(false);
      }, 3000);
    } else {
      alert("User Name or Password is incorrect!");
    }
  };

  return (
    <div className="custom-page">
      {isActive ? (
        <Form>
          <GitHub name={userForm.userName} />
        </Form>
      ) : (
        <Form>
          <h2 style={{ color: "darkred" }}>Login</h2>
          {spinner ? (
            <>
              <BounceLoader
                cssOverride={{ margin: "30px auto" }}
                size="80"
                color="red"
              />
              <br />
              <h2>Checking in...</h2>
              <br />
              <p>Please wait...</p>
            </>
          ) : (
            <>
              <Input
                type="email"
                value={userForm.userName}
                placeholder={"User Name"}
                onChange={(e) => {
                  setuserForm({ ...userForm, userName: e.target.value });
                }}
              />
              <Input
                type="password"
                value={userForm.password}
                placeholder={"Password"}
                onChange={(e) => {
                  setuserForm({ ...userForm, password: e.target.value });
                }}
              />
              <Button type="submit" text="Submit" onClick={onValidation} />
              <br /> <br />
              <hr />
              <p style={{ color: "gray" }}>or login with</p>{" "}
              <button className="google">
                {" "}
                <img style={{ width: "30px" }} src={Google} alt="google" />
              </button>
            </>
          )}
        </Form>
      )}
    </div>
  );
}

export default App;
