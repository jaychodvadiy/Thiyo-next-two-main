"use client";

import Image from "next/image";
import ThiyoLogo from "../../../assets/images/logofooter.25bbaa5d.png";
import beautiful from "../../../assets/images/beautiful-umbrella-chair-around-swimming-pool-hotel-resort 1.png";
import Googleicons from "../../../assets/images/googleicon.png";
import facebook from "../../../assets/images/facebook.png";
import Link from "next/link";
import PhoneInput from "react-phone-input-2";
import { useState } from "react";
import "react-phone-input-2/lib/style.css";
import * as Yup from "yup";
import { useFormik } from "formik";
import axios from "axios";

function Register() {
  const [submitted, setSubmitted] = useState();
  const formik = useFormik({
    initialValues: {
      fullName: "",
      number: "",
      email: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Full Name is required"),
      number: Yup.string().required("Mobile number is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
    }),

    onSubmit: (values, action) => {
      console.log(values); 
      setSubmitted(false);
      action.resetForm();
      axios
        .post("", {})
        .then((response) => {
          if (response.status === 200) {
            toust.success("Register Successfully");
            history.push("/login");
          }
          else{}
          console.log(response)
        })
        .catch((error) => {
          console.log(error,"henadlclick------>>>>>>>")
        });
    },
  });
  console.log(formik.values); 
  console.log(formik.errors); 
  console.log(formik.touched); 
  return (
    <div>
      <section>
        <div className="container ">
          <div className="row">
            <div className="col-sm-6 h-full auth">
              <div className="left--img">
                <div className="img">
                  <Image
                    className="img-fluid"
                    src={beautiful}
                    alt="Beautiful Scene"
                  />
                </div>
              </div>
            </div>

            <div className="col-sm-6 ">
              <div className=" row auth--content">
                <form className="staffform" onSubmit={formik.handleSubmit}>
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
                      id="fullName"
                      name="fullName"
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.fullName}
                    />
                    {formik.touched.fullName && formik.errors.fullName ? (
                      <div style={{ color: "red" }}>
                        {formik.errors.fullName}
                      </div>
                    ) : null}
                  </div>
                  <div className="col-12 mb-3">
                    <label htmlFor="mobile" className="form-label">
                      Mobile Number
                    </label>

                    <PhoneInput
                      // defdefaultCountry={"in"}
                      country={"us"}
                      id="number"
                      name="number"
                      type="text"
                      onChange={(phone) =>
                        formik.setFieldValue("number", phone)
                      }
                      // onBlur={formik.handleBlur}
                      value={formik.values.number}
                      // onClick={hendleClick}
                      inputProps={{
                        number: "",
                      }}
                    />
                    <div className="flag-dropdown ">
                      <div
                        className="selected-flag"
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
                    <div className=" react-tel-input ">
                      <div className="special-label">Phone</div>
                    </div>
                    {formik.touched.number && formik.errors.number ? (
                      <div style={{ color: "red" }}>{formik.errors.number}</div>
                    ) : null}
                  </div>

                  <div className="col-12 mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-lalbe mb-3"
                    >
                      Email Address
                    </label>
                    <div className="sendOtp">
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        className="form-control"
                        id="email"
                        name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                      />
                      <button type="submit" className="absolute lockicon">
                        Send OTP
                      </button>
                    </div>
                    {formik.touched.email && formik.errors.email ? (
                      <div style={{ color: "red" }}>{formik.errors.email}</div>
                    ) : null}
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
                        maxLength={1}
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
                      // onClick={handleClick}
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
                    Already have an Account, Click to
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
