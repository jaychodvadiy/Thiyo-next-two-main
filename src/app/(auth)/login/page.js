"use client";
// Loging.js
import React from "react";
// import "../../../style/thiyo.css";
import Image from "next/image";
import ThiyoLogo from "../../../assets/images/logofooter.25bbaa5d.png";
import Googleicons from "../../../assets/images/googleicon.png";
import beautiful from "../../../assets/images/beautiful-umbrella-chair-around-swimming-pool-hotel-resort 1.png";
import facebook from "../../../assets/images/facebook.png";
import Link from "next/link";

function Loging() {
  
  return (
    <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 h-full auth">
              <div className="left--img">
                <div className="img">
                <Image  src={beautiful} alt="Beautiful Scene" />
                </div>
              </div>
            </div>
            <div className="col-sm-6 ">
              <div className=" row auth--content">
                <form>
                  <div className="auth--logo d-flex justify-content-center my-5">
                    <Image
                      className="img-fluid"
                      src={ThiyoLogo}
                      alt="ThiyoLogo"
                    />
                  </div>
                  <div className="col-12 mb-4 ">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-lalbe mb-3"
                    >
                      Email Address
                    </label>
                    <div className="emailadder position-relative sendotp">
                      <input
                        className="form-controles"
                        id="email"
                        placeholder="Enter your email address"
                        type="email"
                        defaultValue=""
                        name="email"
                      />
                      <button
                        type="submit"
                        className="position-position-absolute LockIcon"
                      >
                        Send OTP
                      </button>
                    </div>
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
                    >
                      LOGIN
                    </button>
                  </div>
                  <div className="th-divider">or</div>
                  <div className="row mb-4 pb-2">
                    <div className="col-md-6 col-12 mb-lg-0 mb-2">
                      <button className="social-btn">
                        <Image src={Googleicons} alt="Googleicons" />
                        Loging with Google
                      </button>
                    </div>
                    <div className="col-md-6 col-12 mb-lg-0 mb-2">
                      <button className="social-btn">
                        <Image src={facebook} alt="Googleicons" />
                        Loging with Google
                      </button>
                    </div>
                  </div>
                  <h6 className="no-account text-center">
                    Already have an Account, Click to
                    <Link href="/register">
                      <span className="singup">Sing UP </span>
                    </Link>
                  </h6>
                </form>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Loging;
