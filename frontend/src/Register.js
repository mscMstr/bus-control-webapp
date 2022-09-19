import { useState } from "react";
import { Base64 } from "js-base64";
import { useHistory } from "react-router-dom";

const Register = ({ setToken }) => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phone, setPhone] = useState();
  const [postcode, setPostcode] = useState();

  const [isPending, setIsPending] = useState(false);

  let history = useHistory();

  function goLogin() {
    history.push("/login");
  }

  const baseUrl = "http://localhost:8080/api";

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { firstName, lastName, email, password, phone, postcode };

    setIsPending(true);
    fetch(baseUrl.concat("/user/register"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        phone: phone,
        postcode: postcode,
      }),
    }).then((response) => {
      if (response.ok) {
        console.log("registered");
        console.log({ firstName, lastName, email, password, phone, postcode });
        setIsPending(false);
        goLogin();
      } else {
        console.log("failed");
        setIsPending(false);
      }
      console.log(
        JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          phone,
          postcode,
        })
      );
    });
  };

  return (
    <div className="imgs background" id="view">
      <div className="whiteBox">
        <div className="register">
          <h2>Register for an Account</h2>
          <form onSubmit={handleSubmit}>
            <label>First Name* </label>
            <input
              type="text"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            ></input>
            <label>Last Name* </label>
            <input
              type="text"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            ></input>
            <label>Email* </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <label>Password* </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <label>Phone (Optional) </label>
            <input
              type="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            ></input>
            <label>Postcode (Optional) </label>
            <input
              type="postcode"
              value={postcode}
              onChange={(e) => setPostcode(e.target.value)}
            ></input>
            {!isPending && <button>Register</button>}
            {isPending && <button disabled>Loading...</button>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;