"use client";
import ThiyoLogo from "../assets/images/logofooter.25bbaa5d.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// import '././../style.css'
function PageHeader() {
  const [dropdown, setDropdown] = useState("");
  const handleOpen = (name) => {
    // console.log(name, "chckname----->>>>>");
    setDropdown((pre) => {
      return pre == name ? "" : name
    });
  };

  return (
    <div>
      <nav className=" navbar-expand-lg header ">
        <div className="navbar">
          <div className="container">
            <Link className="navbar-brand" href="/">
              <Image src={ThiyoLogo} alt="Thiyo Logo" width={120} height={30} />
            </Link>

            <div className="d-flex align-items-center">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon fs-6"></span>
              </button>
            </div>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mx-lg-auto mb-2 gap-2  mb-lg-0 align-items-start">
                <li className="nav-item border-0 relative top-10 dropdown Real_Estate">
                  <a
                    className="nav-link  gap-2  d-flex align-items-center"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    href="#"
                  >
                    <p
                      className="flex align-items-center justify-content-between w-100"
                      onClick={() => handleOpen(1)}
                    >
                      For Buyers
                    </p>
                    <div className="d-none d-lg-block">
                      <svg
                        width="10"
                        height="7"
                        viewBox="0 0 10 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.40678 0.847656L4.81641 4.25729L8.22604 0.847656L9.27344 1.90249L4.81641 6.35952L0.359375 1.90249L1.40678 0.847656Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <div className="d-block d-lg-none">
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 5 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.67934 4.65667L3.29181 3.0674L1.70254 1.45494L2.20136 0.966759L4.27883 3.07456L2.17104 5.15203L1.67934 4.65667Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M1.67934 4.65667L3.29181 3.0674L1.70254 1.45494L2.20136 0.966759L4.27883 3.07456L2.17104 5.15203L1.67934 4.65667Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M1.09922 3.76447L1.80746 3.06643L1.10941 2.35819L1.3285 2.14377L2.24098 3.06957L1.31519 3.98204L1.09922 3.76447Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M1.09922 3.76447L1.80746 3.06643L1.10941 2.35819L1.3285 2.14377L2.24098 3.06957L1.31519 3.98204L1.09922 3.76447Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M0.457905 3.45756L0.853242 3.06791L0.463593 2.67257L0.585891 2.55288L1.09524 3.06966L0.578456 3.579L0.457905 3.45756Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </a>
                  <ul className={`dropdown-menu ${dropdown == 1 && "d-block"}`}>
                    <li>
                      <a className="dropdown-item" href="#">
                        Property in Abu Dhabi
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Property in Sharjah
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Property in Ajman
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Property in Ras Al Khaimah
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Property in Al Ain
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Property in Umm Al Quwain
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Property in Fujairah
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Property in Jebel Ali
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Property in Hatta
                      </a>
                    </li>
                  </ul>
                </li>
                <li
                  className="nav-item border-0 dropdown Real_Estate"
                  onClick={() => handleOpen(2)}
                >
                  <a
                    className="nav-link  gap-2  d-flex align-items-center"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    href="#"
                  >
                    <p className="d-flex align-items-center justify-content-between w-100">
                      For Tenants
                    </p>
                    <div className="d-none d-lg-block">
                      <svg
                        width="10"
                        height="7"
                        viewBox="0 0 10 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.40678 0.847656L4.81641 4.25729L8.22604 0.847656L9.27344 1.90249L4.81641 6.35952L0.359375 1.90249L1.40678 0.847656Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <div className="d-block d-lg-none">
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 5 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.67934 4.65667L3.29181 3.0674L1.70254 1.45494L2.20136 0.966759L4.27883 3.07456L2.17104 5.15203L1.67934 4.65667Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M1.67934 4.65667L3.29181 3.0674L1.70254 1.45494L2.20136 0.966759L4.27883 3.07456L2.17104 5.15203L1.67934 4.65667Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M1.09922 3.76447L1.80746 3.06643L1.10941 2.35819L1.3285 2.14377L2.24098 3.06957L1.31519 3.98204L1.09922 3.76447Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M1.09922 3.76447L1.80746 3.06643L1.10941 2.35819L1.3285 2.14377L2.24098 3.06957L1.31519 3.98204L1.09922 3.76447Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M0.457905 3.45756L0.853242 3.06791L0.463593 2.67257L0.585891 2.55288L1.09524 3.06966L0.578456 3.579L0.457905 3.45756Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </a>
                  <ul className={`dropdown-menu ${dropdown == 2 && "d-block"}`}>
                    <li>
                      <a className="dropdown-item" href="#">
                        Tenants 01
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item border-0 dropdown Real_Estate">
                  <a
                    className="nav-link  gap-2  d-flex align-items-center"
                    href="/Insights"
                  >
                    <p className="d-flex align-items-center justify-content-between w-100">
                      Insights
                    </p>
                  </a>
                </li>
                <li className="nav-item border-0 dropdown Real_Estate">
                  <a
                    className="nav-link  gap-2  d-flex align-items-center"
                    href="/Holidayhomes"
                  >
                    <p className="d-flex align-items-center justify-content-between w-100">
                      Holiday Homes
                    </p>
                  </a>
                </li>
                <li className="nav-item d-flex d-lg-none dropdown">
                  <div
                    className="mobilelogin button p-0 d-flex px-2"
                    id="dropdownMenuButton1"
                    aria-expanded="false"
                  >
                    <div className="cursor-pointer">Log in </div>/
                    <div className="cursor-pointer">Register </div>
                  </div>
                </li>
              </ul>
              <div className="d-flex ">
                <Link href="/propertys">
                  <div className="listproperty d-none d-lg-block relative top-2 mr-3">
                    <button className="button gradient-hover-effect primary">
                      List Property
                    </button>
                    <div className="listnew flex align-items-center justify-content-center text-base">
                    free
                   {/* <span className="">
                    </span>    */}
                    </div>
                  </div>
                </Link>
                <form className="d-flex align-items-center" role="search">
                  <div
                    className="useractive button p-0 d-flex gap-2"
                    id="dropdownMenuButton1"
                    aria-expanded="false"
                  >
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.14332 9.58951H8.03378C6.57106 9.5444 5.47564 8.40387 5.47564 6.99915C5.47564 5.56865 6.64194 4.40234 8.07244 4.40234C9.50294 4.40234 10.6692 5.56865 10.6692 6.99915C10.6706 7.67218 10.4095 8.31922 9.94149 8.80288C9.47347 9.28654 8.83536 9.56872 8.16265 9.58951H8.14332ZM8.066 5.36245C7.16388 5.36245 6.43575 6.09703 6.43575 6.99271C6.4338 7.41462 6.59615 7.82072 6.88842 8.12501C7.18069 8.42931 7.57991 8.60789 8.00156 8.62296C8.05073 8.61616 8.1006 8.61616 8.14977 8.62296C8.56718 8.6007 8.96018 8.41926 9.24786 8.11599C9.53555 7.81273 9.69602 7.41071 9.69625 6.99271C9.69625 6.09703 8.96811 5.36245 8.066 5.36245ZM8.066 15.5306C6.33265 15.5306 4.67662 14.8862 3.39433 13.7135C3.33886 13.6624 3.29601 13.5992 3.26918 13.5287C3.24234 13.4583 3.23224 13.3825 3.23968 13.3075C3.32345 12.5407 3.80028 11.8255 4.59285 11.2971C6.51307 10.0212 9.62537 10.0212 11.5391 11.2971C12.3317 11.8319 12.8086 12.5407 12.8923 13.3075C12.9116 13.4622 12.8537 13.6104 12.7377 13.7135C11.4632 14.8833 9.79593 15.5318 8.066 15.5306ZM4.25134 13.1786C5.32052 14.0745 6.67113 14.565 8.066 14.564C9.46428 14.564 10.811 14.0743 11.8807 13.1786C11.7647 12.7856 11.4554 12.4054 10.9979 12.0961C9.41273 11.0393 6.72571 11.0393 5.12768 12.0961C4.67018 12.4054 4.36732 12.7856 4.25134 13.1786Z"
                        fill="black"
                      ></path>
                      <path
                        d="M8.06661 15.5297C4.2455 15.5297 1.13965 12.4238 1.13965 8.60274C1.13965 4.78164 4.2455 1.67578 8.06661 1.67578C11.8877 1.67578 14.9936 4.78164 14.9936 8.60274C14.9936 12.4238 11.8877 15.5297 8.06661 15.5297ZM8.06661 2.64233C4.78033 2.64233 2.1062 5.31646 2.1062 8.60274C2.1062 11.889 4.78033 14.5632 8.06661 14.5632C11.3529 14.5632 14.027 11.889 14.027 8.60274C14.027 5.31646 11.3529 2.64233 8.06661 2.64233Z"
                        fill="black"
                      ></path>
                    </svg>
                    <div className="d-flex text-capitalize">
                      <Link href="/login" className="loging" replace>
                        Log In
                      </Link>
                      /
                      <Link href="/register" className="loging" replace>
                        Register
                      </Link>
                    </div>

                    <div className="dropdown d-none d-lg-block">
                      <ul
                        className="dropdown-menu userlist"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <a
                            className="dropdown-item mb-3 py-0 viewprofile"
                            href="#"
                          >
                            You are viewing your personal profile
                          </a>
                        </li>
                        <li>
                          <div className="d-flex myprofile px-3">
                            <div>
                              <svg
                                width="25"
                                height="25"
                                viewBox="0 0 25 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12.5152 10.941C12.4152 10.931 12.2952 10.931 12.1852 10.941C11.0374 10.9021 9.94984 10.4179 9.15282 9.59099C8.35581 8.76412 7.91194 7.65949 7.9152 6.51103C7.9152 4.06103 9.8952 2.07103 12.3552 2.07103C12.9376 2.06053 13.5164 2.16484 14.0585 2.37801C14.6006 2.59119 15.0954 2.90905 15.5146 3.31345C15.9339 3.71785 16.2694 4.20086 16.502 4.73492C16.7346 5.26898 16.8597 5.84362 16.8702 6.42603C16.8807 7.00845 16.7764 7.58723 16.5632 8.12932C16.35 8.67142 16.0322 9.16623 15.6278 9.58548C15.2234 10.0047 14.7404 10.3402 14.2063 10.5728C13.6722 10.8054 13.0976 10.9305 12.5152 10.941ZM7.5152 14.631C5.0952 16.251 5.0952 18.891 7.5152 20.501C10.2652 22.341 14.7752 22.341 17.5252 20.501C19.9452 18.881 19.9452 16.241 17.5252 14.631C14.7852 12.801 10.2752 12.801 7.5152 14.631Z"
                                  stroke="black"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                            </div>
                            <div className="">
                              <a className="mb-2 fw-semibold" href="/dashboard">
                                My Profile
                              </a>
                              <p>
                                Manage your profile, traveller details, login
                                details and password
                              </p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="d-flex myprofile px-3">
                            <div>
                              <svg
                                width="25"
                                height="25"
                                viewBox="0 0 25 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M18.8555 12.6641C18.8555 10.9402 18.1706 9.28685 16.9517 8.06787C15.7327 6.84888 14.0794 6.16406 12.3555 6.16406C10.6316 6.16406 8.97826 6.84888 7.75927 8.06787C6.54029 9.28685 5.85547 10.9402 5.85547 12.6641"
                                  stroke="black"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M5.34547 5.65406L5.21547 5.52406M19.3655 5.65406L19.4955 5.52406M12.3555 2.74406V2.66406M2.43547 12.6641H2.35547M22.3555 12.6641H22.2755"
                                  stroke="black"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M4.35547 15.6641H20.3555M6.35547 18.6641H18.3555M9.35547 21.6641H15.3555"
                                  stroke="black"
                                  strokeWidth="1.5"
                                  strokeMiterlimit="10"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                            </div>
                            <div className="">
                              <h3 className="mb-2 cursor-pointer">My Trips</h3>
                              <p>
                                See booking details, Print e-ticket, Cancel
                                Booking, Modify Booking, Check Refund Status
                                &amp; more.
                              </p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="d-flex myprofile px-3">
                            <div>
                              <svg
                                width="25"
                                height="25"
                                viewBox="0 0 25 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M13.3555 11.8686H7.35547M2.35547 11.8686V7.24859C2.35547 5.20859 4.00547 3.55859 6.04547 3.55859H11.6655C13.7055 3.55859 15.3555 4.82859 15.3555 6.86859"
                                  stroke="black"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M17.8355 12.9172C17.3355 13.3972 17.0955 14.1372 17.2955 14.8972C17.5455 15.8272 18.4655 16.4172 19.4255 16.4172H20.3555V17.8672C20.3555 20.0772 18.5655 21.8672 16.3555 21.8672H6.35547C4.14547 21.8672 2.35547 20.0772 2.35547 17.8672V10.8672C2.35547 8.65719 4.14547 6.86719 6.35547 6.86719H16.3555C18.5555 6.86719 20.3555 8.66719 20.3555 10.8672V12.3172H19.2755C18.7155 12.3172 18.2055 12.5372 17.8355 12.9172Z"
                                  stroke="black"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M22.3557 13.3403V15.4003C22.3557 15.9603 21.8957 16.4203 21.3257 16.4203H19.3957C18.3157 16.4203 17.3257 15.6303 17.2357 14.5503C17.1757 13.9203 17.4157 13.3303 17.8357 12.9203C18.2057 12.5403 18.7157 12.3203 19.2757 12.3203H21.3257C21.8957 12.3203 22.3557 12.7803 22.3557 13.3403Z"
                                  stroke="black"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                            </div>
                            <div className="">
                              <h3 className="mb-2 cursor-pointer">My Wallet</h3>
                              <p>
                                See booking details, Print e-ticket, Cancel
                                Booking, Modify Booking, Check Refund Status
                                &amp; more.
                              </p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="d-flex myprofile px-3">
                            <div>
                              <svg
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.73535 11.9981L11.1454 14.4181L15.9754 9.57812"
                                  stroke="black"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M11.1054 2.45031C11.7954 1.86031 12.9254 1.86031 13.6254 2.45031L15.2054 3.81031C15.5054 4.07031 16.0654 4.28031 16.4654 4.28031H18.1654C19.2254 4.28031 20.0954 5.15031 20.0954 6.21031V7.91031C20.0954 8.30031 20.3054 8.87031 20.5654 9.17031L21.9254 10.7503C22.5154 11.4403 22.5154 12.5703 21.9254 13.2703L20.5654 14.8503C20.3054 15.1503 20.0954 15.7103 20.0954 16.1103V17.8103C20.0954 18.8703 19.2254 19.7403 18.1654 19.7403H16.4654C16.0754 19.7403 15.5054 19.9503 15.2054 20.2103L13.6254 21.5703C12.9354 22.1603 11.8054 22.1603 11.1054 21.5703L9.52535 20.2103C9.22535 19.9503 8.66535 19.7403 8.26535 19.7403H6.53535C5.47535 19.7403 4.60535 18.8703 4.60535 17.8103V16.1003C4.60535 15.7103 4.39535 15.1503 4.14535 14.8503L2.79535 13.2603C2.21535 12.5703 2.21535 11.4503 2.79535 10.7603L4.14535 9.17031C4.39535 8.87031 4.60535 8.31031 4.60535 7.92031V6.20031C4.60535 5.14031 5.47535 4.27031 6.53535 4.27031H8.26535C8.65535 4.27031 9.22535 4.06031 9.52535 3.80031L11.1054 2.45031Z"
                                  stroke="black"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                            </div>
                            <div className="">
                              <h3 className="mb-2 cursor-pointer">
                                Make a payment
                              </h3>
                              <p>Complete your pending payments here</p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="d-flex myprofile px-3">
                            <div>
                              <svg
                                width="25"
                                height="25"
                                viewBox="0 0 25 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12.3554 6.53766V9.86766M12.3754 2.09766C8.69537 2.09766 5.71537 5.07766 5.71537 8.75766V10.8577C5.71537 11.5377 5.43537 12.5577 5.08537 13.1377L3.81537 15.2577C3.03537 16.5677 3.57537 18.0277 5.01537 18.5077C9.79665 20.0976 14.9641 20.0976 19.7454 18.5077C20.0609 18.4024 20.3487 18.2276 20.5875 17.9962C20.8264 17.7648 21.0102 17.4827 21.1254 17.1707C21.2406 16.8587 21.2843 16.5248 21.2531 16.1937C21.2219 15.8626 21.1168 15.5427 20.9454 15.2577L19.6754 13.1377C19.3254 12.5577 19.0454 11.5277 19.0454 10.8577V8.75766C19.0354 5.09766 16.0354 2.09766 12.3754 2.09766Z"
                                  stroke="black"
                                  strokeWidth="1.5"
                                  strokeMiterlimit="10"
                                  strokeLinecap="round"
                                ></path>
                                <path
                                  d="M15.6854 18.918C15.6854 20.748 14.1854 22.248 12.3554 22.248C11.4454 22.248 10.6054 21.868 10.0054 21.268C9.40539 20.668 9.02539 19.828 9.02539 18.918"
                                  stroke="black"
                                  strokeWidth="1.5"
                                  strokeMiterlimit="10"
                                ></path>
                              </svg>
                            </div>
                            <div className="">
                              <h3 className="mb-2 cursor-pointer">
                                Manage Alerts
                              </h3>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="d-flex myprofile px-3">
                            <div>
                              <svg
                                width="25"
                                height="25"
                                viewBox="0 0 25 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M14.2422 8.83203H19.2422M15.2422 12.832H19.2422M17.2422 16.832H19.2422M17.2422 21.832H7.24219C3.24219 21.832 2.24219 20.832 2.24219 16.832V8.83203C2.24219 4.83203 3.24219 3.83203 7.24219 3.83203H17.2422C21.2422 3.83203 22.2422 4.83203 22.2422 8.83203V16.832C22.2422 20.832 21.2422 21.832 17.2422 21.832Z"
                                  stroke="black"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M12.2422 17.1639C12.1749 16.462 11.8641 15.8057 11.3636 15.3089C10.8631 14.8121 10.2046 14.5061 9.50219 14.4439C8.99675 14.3939 8.48762 14.3939 7.98219 14.4439C7.28045 14.5079 6.62297 14.8146 6.12288 15.311C5.62279 15.8074 5.31137 16.4627 5.24219 17.1639M8.74219 12.1239C9.22223 12.1239 9.68261 11.9332 10.0221 11.5938C10.3615 11.2543 10.5522 10.7939 10.5522 10.3139C10.5522 9.83386 10.3615 9.37348 10.0221 9.03404C9.68261 8.6946 9.22223 8.50391 8.74219 8.50391C8.26215 8.50391 7.80176 8.6946 7.46232 9.03404C7.12288 9.37348 6.93219 9.83386 6.93219 10.3139C6.93219 10.7939 7.12288 11.2543 7.46232 11.5938C7.80176 11.9332 8.26215 12.1239 8.74219 12.1239Z"
                                  stroke="black"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                            </div>
                            <div className="">
                              <h3 className="mb-2 cursor-pointer">
                                My Reviews
                              </h3>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="d-flex myprofile px-3 cursor-pointer">
                            <div>
                              <svg
                                width="25"
                                height="25"
                                viewBox="0 0 25 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M17.8011 15.3973L20.3611 12.8373L17.8011 10.2773M10.1211 12.8373H20.2911M12.1211 20.7773C7.70109 20.7773 4.12109 17.7773 4.12109 12.7773C4.12109 7.77734 7.70109 4.77734 12.1211 4.77734"
                                  stroke="black"
                                  strokeWidth="1.5"
                                  strokeMiterlimit="10"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                            </div>
                            <div className="">
                              <h3 className="mb-2">Logout</h3>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default PageHeader;
