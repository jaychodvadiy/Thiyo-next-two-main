"use client";

import Image from "next/image";
import ThiyoLogo from "../../../assets/images/logofooter.25bbaa5d.png";
import beautiful from "../../../assets/images/beautiful-umbrella-chair-around-swimming-pool-hotel-resort 1.png";
import Googleicons from "../../../assets/images/googleicon.png";
import facebook from "../../../assets/images/facebook.png";
import Link from "next/link";
import PhoneInput from "react-phone-input-2";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const initialValues = { fullname: "", email: "", number: "" };
  const [value, setValue] = useState("+12133734253");
  const [fullName, SetFullName] = useState("");
  const [email, SetEmail] = useState("");
  const [number, SetNumber] = useState("");
  const [errors, setErrors] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [formValue, setFormValue] = useState();
  const [dropdown, setDropdown] = useState("");

  const handleClick = () => {
    const navigate = useNavigate();
    console.log(data?.current?.value, "initial value");
    const error = {};
    if (!fullName) {
      error.fullname = "fullname is reqiuer";
    }
    if (!email) {
      error.email = "Email is reqiuer";
    }
    if (!number) {
      error.number = "Email is reqiuer";
    }
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    localStorage.setItem("fullname", fullName);
    localStorage.setItem("email", email);
    localStorage.setItem("number", number);
    console.log(localStorage.getItem("inputvalue"), "-------->>>>>>>>>");
    setFormValue(initialValues);
    setFormErrors({});
    navigate("/login");
  };

  const handClick = (name) => {
    console.log(name, "checking------->>>>>");
    setDropdown((prev) => {
      return prev === name ? "" : name;
    });
  };
  console.log(`fullname:${fullName} email:${email} number:${number}`);

  const hendle = (e) => {
    e.preventDefault(); // Correct spelling here
    handleClick(e);
  };

  return (
    <div>
      <section>
        <div className="container ">
          <div className="row">
            <div className="col-sm-6 h-full w-3/6">
              <Image src={beautiful} alt="Beautiful Scene" />
            </div>
            <div className="col-sm-6 ">
              <div className=" row auth--content">
                <form className="staffform" onClick={hendle}>
                  <div className="thiyoiconsa my-5">
                    <Image
                      className="img-fluid"
                      src={ThiyoLogo}
                      alt="ThiyoLogo"
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <label htmlFor="userName" className="form-label">
                      Full Name
                    </label>
                    <input
                      className="form-control"
                      id="userName"
                      placeholder="Full Name"
                      type="text"
                      defaultValue=""
                      name="userName"
                      onChange={(e) => SetFullName(e.target.value)}
                    ></input>
                    {formErrors.fullName && (
                      <div id="fullname" className="text-dark">
                        {formErrors.fullname}
                      </div>
                    )}
                  </div>
                  <div className="col-12 mb-3">
                    <label
                      htmlFor="mobile"
                      className="form-label"
                      onChange={(e) => SetNumber(e.target.value)}
                      onClick={() => handClick(0)}
                    >
                      Mobile Number
                    </label>
                    <div className=" react-tel-input ">
                      <div className="special-label">Phone</div>
                      <PhoneInput
                        coun  try="US"
                        value={value}
                        onChange={setValue}
                      />
                      <div className="flag-dropdown ">
                        <div
                          className={`dropdow-menu ${
                            dropdown === 0 ? "d-block" : "d-none"
                          } selected-flag`}
                          title="India: + 91"
                          tabIndex="0"
                          role="button"
                          aria-haspopup="listbox"
                        >
                          <div className="flag in">
                            <div className="arrow"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {formErrors.number && (
                      <div id="number" className="text-dark">
                        {formErrors.number}
                      </div>
                    )}
                  </div>
                  <div className="col-12 mb-2">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-lalbe mb-3"
                      onChange={(e) => SetEmail(e.target.value)}
                    >
                      Email Address
                    </label>
                    <div className="emailadder relative sendotp">
                      <input
                        className="form-control"
                        id="email"
                        placeholder="Enter your email address"
                        type="email"
                        defaultValue=""
                        name="email"
                      />
                      <button type="submit" className="absolute lockicon">
                        Send OTP
                      </button>
                    </div>
                    {formErrors.email && (
                      <div id="email" className="text-red">
                        {formErrors.email}
                      </div>
                    )}
                  </div>

                  <div className="col-12 mb-3">
                    <label htmlFor="">
                      Enter OTP, Recieved on your Email ID
                    </label>
                    <br />
                    <div className="otp-verification-main">
                      <input
                        className="tab-class outline-none"
                        id=""
                        maxLength="1"
                        type="text"
                        name=""
                      />
                      <input
                        className="tab-class outline-none"
                        id=""
                        maxLength="1"
                        type="text"
                        name=""
                      />
                      <input
                        className="tab-class outline-none"
                        id=""
                        maxLength="1"
                        type="text"
                        name=""
                      />
                      <input
                        className="tab-class outline-none"
                        id=""
                        maxLength="1"
                        type="text"
                        name=""
                      />
                    </div>
                  </div>
                  <div className="col-12 text-end pb-2">
                    <a href="#" className="cursor-pointer ">
                      Resend OTP{" "}
                    </a>
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      className="button-primary-gradient gradient-hover-effect my-4 w-100"
                      onClick={handleClick}
                    >
                      REGISTER
                    </button>
                  </div>
                  <div className="th-divider">or</div>
                  <div className="row mb-4 pb-2">
                    <div className="col-md-6 col-12 mb-lg-0 mb-2">
                      <Link href="https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?gsiwebsdk=3&client_id=101759692646-0cibkjkj7a8msl4bhpgmk93apkk72jmk.apps.googleusercontent.com&scope=openid%20profile%20email&redirect_uri=storagerelay%3A%2F%2Fhttps%2Fthiyo-next-two.vercel.app%3Fid%3Dauth20933&prompt=select_account&response_type=token&include_granted_scopes=true&enable_granular_consent=true&service=lso&o2v=2&theme=glif&flowName=GeneralOAuthFlow">
                        <button className="social-btn">
                          <Image src={Googleicons} alt="Googleicons" />
                          REGISTER with Google
                        </button>
                      </Link>
                    </div>
                    <div className="col-md-6 col-12 mb-lg-0 mb-2">
                      <button className="social-btn">
                        <Image src={facebook} alt="facebook" />
                        REGISTER with Google
                      </button>
                    </div>
                  </div>
                  <h6 className="no-account text-center">
                    Already have an Account, Click to{" "}
                    <Link href="/login">
                      <span className="singup">LOGIN</span>
                    </Link>
                  </h6>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Register;
