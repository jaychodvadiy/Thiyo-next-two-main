import Image from "next/image";
import Link from "next/link";
import React from "react";
import home from "../../assets/images/pexelsexpect.png"
function Sliders() {
  return (
    <div>
      <section className="pagerent">
        <div className="container h-100">
          <div className="row ">
            <div className="col-lg-6">
              <div className="contain">
                <h1 className="text-start  gloabe text-lg-start">
                  Discover properties globally for sale and to rent
                </h1>
                <div className="primary-tabs">
                  <ul className="nav nav-pills" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="pills-home-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-home"
                        type="button"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                      >
                        Property Search
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="pills-home"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                      tabIndex="0"
                    >
                      <div className="searchLayout">
                        <div className="searchLayoutTop align-items-baseline">
                          <div className="dropdown primary-dropdown">
                            <button
                              className="btn w-100 dropdown-toggle d-flex align-items-center gap-2"
                              type="button"
                            >
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M4.13654 1.31658L1.44786 3.41166C0.99891 3.76084 0.634766 4.50409 0.634766 5.06777V8.76408C0.634766 9.92136 1.57755 10.8691 2.73483 10.8691H8.51126C9.66854 10.8691 10.6113 9.92136 10.6113 8.76907V5.1376C10.6113 4.53402 10.2073 3.76084 9.71344 3.41664L6.63068 1.25672C5.93232 0.767867 4.80996 0.792809 4.13654 1.31658Z"
                                  stroke="#686868"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M7.86836 8.13086L5.77328 6.03578L4.97516 7.23297L3.37891 5.63672"
                                  stroke="#686868"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M6.86914 8.13047H7.8668V7.13281"
                                  stroke="#686868"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                              Rent
                            </button>
                            <div></div>
                          </div>
                          <div>
                            <div className="searchLocation">
                              <svg
                                width="10"
                                height="13"
                                viewBox="0 0 10 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5.22282 1.33464C6.50615 1.33464 7.55615 2.38464 7.55615 3.66797C7.55615 4.89297 6.33115 6.8763 5.22282 8.2763C4.11449 6.81797 2.88949 4.89297 2.88949 3.66797C2.88949 2.38464 3.93949 1.33464 5.22282 1.33464ZM5.22282 0.167969C3.29782 0.167969 1.72282 1.74297 1.72282 3.66797C1.72282 6.29297 5.22282 10.0846 5.22282 10.0846C5.22282 10.0846 8.72282 6.23464 8.72282 3.66797C8.72282 1.74297 7.14782 0.167969 5.22282 0.167969ZM5.22282 2.5013C4.58115 2.5013 4.05615 3.0263 4.05615 3.66797C4.05615 4.30964 4.58115 4.83464 5.22282 4.83464C5.86449 4.83464 6.38949 4.30964 6.38949 3.66797C6.38949 3.0263 5.86449 2.5013 5.22282 2.5013ZM9.88949 10.0846C9.88949 11.368 7.78949 12.418 5.22282 12.418C2.65615 12.418 0.556152 11.368 0.556152 10.0846C0.556152 9.3263 1.25615 8.68464 2.36449 8.21797L2.71449 8.74297C2.13115 9.03464 1.72282 9.38463 1.72282 9.79297C1.72282 10.6096 3.29782 11.2513 5.22282 11.2513C7.14782 11.2513 8.72282 10.6096 8.72282 9.79297C8.72282 9.38463 8.31449 9.03464 7.67282 8.74297L8.02282 8.21797C9.18948 8.68464 9.88949 9.3263 9.88949 10.0846Z"
                                  fill="#686868"
                                ></path>
                              </svg>
                              <div className="multi_select">
                                <div className="dropdown css-b62m3t-container">
                                  <span
                                    id="react-select-11-live-region"
                                    className="css-7pg0cj-a11yText"
                                  ></span>
                                  <span
                                    aria-live="polite"
                                    aria-atomic="false"
                                    aria-relevant="additions text"
                                    className="css-7pg0cj-a11yText"
                                  ></span>
                                  <div className=" css-13cymwt-control">
                                    <div className=" css-hlgwow">
                                      <div
                                        className=" css-1jqq78o-placeholder"
                                        id="react-select-11-placeholder"
                                      >
                                        Enter Location
                                      </div>
                                      <div
                                        className=" css-19bb58m"
                                        data-value=""
                                      >
                                        <input
                                          className=""
                                          autoCapitalize="none"
                                          autoComplete="off"
                                          autoCorrect="off"
                                          id="react-select-11-input"
                                          spellCheck="false"
                                          tabIndex="0"
                                          aria-autocomplete="list"
                                          aria-expanded="false"
                                          aria-haspopup="true"
                                          role="combobox"
                                          aria-describedby="react-select-11-placeholder"
                                          type="text"
                                          defaultValue=""
                                          style={{
                                            color: "inherit",
                                            background: "0px center",
                                            opacity: 1,
                                            width: "100%",
                                            gridArea: "1 / 2",
                                            font: "inherit",
                                            minWidth: "2px",
                                            border: "0px",
                                            margin: "0px",
                                            outline: "0px",
                                            padding: "0px",
                                          }}
                                        />
                                      </div>
                                    </div>
                                    <div className=" css-1wy0on6">
                                      <span className=" css-1u9des2-indicatorSeparator"></span>
                                      <div
                                        className=" css-1xc3v61-indicatorContainer"
                                        aria-hidden="true"
                                      >
                                        <svg
                                          height="20"
                                          width="20"
                                          viewBox="0 0 20 20"
                                          aria-hidden="true"
                                          focusable="false"
                                          className="css-8mmkcg"
                                        >
                                          <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <svg
                                className="SearchLocationDownArrow"
                                width="10"
                                height="6"
                                viewBox="0 0 10 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1.14016 0L4.85175 3.71159L8.56334 0L9.7035 1.14825L4.85175 6L0 1.14825L1.14016 0Z"
                                  fill="#69717E"
                                ></path>
                              </svg>
                            </div>
                          </div>
                          <div className="dropdown primary-dropdown primary-dropdown-lg">
                            <button
                              className="btn w-100 dropdown-toggle d-flex align-items-center gap-2"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <svg
                                width="12"
                                height="13"
                                viewBox="0 0 12 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5.98666 9.64882V8.10761M4.99515 1.85031L1.43496 4.70154C1.03424 5.02006 0.777374 5.69305 0.86471 6.19651L1.54798 10.2859C1.67128 11.0154 2.36996 11.6062 3.10974 11.6062H8.86358C9.59823 11.6062 10.302 11.0102 10.4253 10.2859L11.1086 6.19651C11.1908 5.69305 10.9339 5.02006 10.5384 4.70154L6.97817 1.85544C6.42847 1.41363 5.53971 1.41363 4.99515 1.85031Z"
                                  stroke="#686868"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                              Property
                            </button>
                            <ul className="dropdown-menu">
                              <div className="drop-title">Residential</div>
                              <div className="property-group">
                                <button
                                  className="outline-button-light w-100 outline-button-light-sm text-center
                           false"
                                >
                                  Apartment
                                </button>
                                <button
                                  className="outline-button-light w-100 outline-button-light-sm text-center
                           false"
                                >
                                  Villa
                                </button>
                                <button
                                  className="outline-button-light w-100 outline-button-light-sm text-center
                           false"
                                >
                                  Townhouse
                                </button>
                                <button
                                  className="outline-button-light w-100 outline-button-light-sm text-center
                           false"
                                >
                                  Penthouse
                                </button>
                                <button
                                  className="outline-button-light w-100 outline-button-light-sm text-center
                           false"
                                >
                                  Hotel Apartment
                                </button>
                              </div>
                              <hr />
                              <div className="drop-title">Commercial</div>
                              <div className="property-group">
                                <button
                                  className="outline-button-light w-100 outline-button-light-sm text-center
                           false"
                                >
                                  Office
                                </button>
                                <button
                                  className="outline-button-light w-100 outline-button-light-sm text-center
                           false"
                                >
                                  Warehouse
                                </button>
                                <button
                                  className="outline-button-light w-100 outline-button-light-sm text-center
                           false"
                                >
                                  Shop
                                </button>
                                <button
                                  className="outline-button-light w-100 outline-button-light-sm text-center
                           false"
                                >
                                  Hotel
                                </button>
                                <button
                                  className="outline-button-light w-100 outline-button-light-sm text-center
                           false"
                                >
                                  Mixed Use Land
                                </button>
                              </div>
                            </ul>
                          </div>
                        </div>
                        <div className="searchLayoutBottom">
                          <div className="dropdown primary-dropdown primary-dropdown-cs">
                            <button
                              className="btn w-100 dropdown-toggle d-flex align-items-center gap-2"
                              type="button"
                            >
                              <p className="ellipsis">
                                {" "}
                                &nbsp;beds&nbsp; &nbsp;baths&nbsp;
                              </p>
                            </button>
                            <div></div>
                          </div>
                          <div className="dropdown primary-dropdown ">
                            <button
                              className="01 btn w-100 dropdown-toggle dropdown-toggle-cs d-flex align-items-center gap-2"
                              type="button"
                            >
                              <svg
                                width="12"
                                height="13"
                                viewBox="0 0 12 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M4.42617 12.0313H7.65586C10.3473 12.0313 11.4238 10.9547 11.4238 8.26328V5.03359C11.4238 2.34219 10.3473 1.26562 7.65586 1.26562H4.42617C1.73477 1.26562 0.658203 2.34219 0.658203 5.03359V8.26328C0.658203 10.9547 1.73477 12.0313 4.42617 12.0313Z"
                                  stroke="#686868"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M6.04102 3.95703V9.33984M3.34961 6.64844H8.73242M4.96445 9.33984H7.11758C8.00574 9.33984 8.73242 8.61316 8.73242 7.725V5.57188C8.73242 4.68371 8.00574 3.95703 7.11758 3.95703H4.96445C4.07629 3.95703 3.34961 4.68371 3.34961 5.57188V7.725C3.34961 8.61316 4.07629 9.33984 4.96445 9.33984Z"
                                  stroke="#686868"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                              Area (Sq.ft.)
                            </button>
                            <div></div>
                          </div>
                          <div className="dropdown primary-dropdown ">
                            <button
                              className="01 btn w-100 dropdown-toggle dropdown-toggle-cs d-flex align-items-center gap-2"
                              type="button"
                            >
                              <svg
                                width="12"
                                height="13"
                                viewBox="0 0 12 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M4.42617 12.0313H7.65586C10.3473 12.0313 11.4238 10.9547 11.4238 8.26328V5.03359C11.4238 2.34219 10.3473 1.26562 7.65586 1.26562H4.42617C1.73477 1.26562 0.658203 2.34219 0.658203 5.03359V8.26328C0.658203 10.9547 1.73477 12.0313 4.42617 12.0313Z"
                                  stroke="#686868"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M6.04102 3.95703V9.33984M3.34961 6.64844H8.73242M4.96445 9.33984H7.11758C8.00574 9.33984 8.73242 8.61316 8.73242 7.725V5.57188C8.73242 4.68371 8.00574 3.95703 7.11758 3.95703H4.96445C4.07629 3.95703 3.34961 4.68371 3.34961 5.57188V7.725C3.34961 8.61316 4.07629 9.33984 4.96445 9.33984Z"
                                  stroke="#686868"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                              Price (AED)
                            </button>
                            <div></div>
                          </div>
                          <div className="listpropertysearch">
                            <div className="listproperty d-none d-lg-block position-relative">
                              <button className="button">
                                <svg
                                  width="18"
                                  height="18"
                                  viewBox="0 0 13 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M4.92578 1.79688C5.78773 1.79688 6.61439 2.11075 7.22388 2.66945C7.83337 3.22815 8.17578 3.98592 8.17578 4.77604C8.17578 5.51396 7.88078 6.19229 7.39578 6.71479L7.53078 6.83854H7.92578L10.4258 9.13021L9.67578 9.81771L7.17578 7.52604V7.16396L7.04078 7.04021C6.47078 7.48479 5.73078 7.75521 4.92578 7.75521C4.06383 7.75521 3.23718 7.44133 2.62768 6.88263C2.01819 6.32393 1.67578 5.56617 1.67578 4.77604C1.67578 3.98592 2.01819 3.22815 2.62768 2.66945C3.23718 2.11075 4.06383 1.79688 4.92578 1.79688ZM4.92578 2.71354C3.67578 2.71354 2.67578 3.63021 2.67578 4.77604C2.67578 5.92188 3.67578 6.83854 4.92578 6.83854C6.17578 6.83854 7.17578 5.92188 7.17578 4.77604C7.17578 3.63021 6.17578 2.71354 4.92578 2.71354Z"
                                    fill="white"
                                  ></path>
                                </svg>
                                <Link className="searchaa" href="/properties">
                                  Search
                                </Link>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-profile"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab"
                      tabIndex="0"
                    >
                      Two
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <Image
                src={home}
                alt="home"
                className="homes"
                width={424}
                height={407}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sliders;
