import Link from 'next/link'
import React from 'react'

function Page() {
  return (
    <div>
     <section>
        <div className="container">
          <div className="py-5 listing_grid">
            <div className="listing_grid_left">
              <div className="propertylistsidebar d-flex align-items-center justify-content-start gap-3">
                <div className="sidebar z-99 position-relative">
                  <div className="sidebarstep d-flex gap-3">
                    <div className="sidebarstepline mt-1">
                      <span className="d-flex stepcomplte  align-items-center justify-content-center">
                        <svg
                          width="11"
                          height="8"
                          viewBox="0 0 11 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.71094 3.81437L4.54094 6.64437L10.2109 0.984375"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <div>
                      <h5 className="fw-normal">Basic Details</h5>
                      <span className="me-1">
                        Flat/Apartment for Sale
                        <button className="editBtn ms-1">Edit</button>
                      </span>
                    </div>
                  </div>
                  <div className="sidebarstep d-flex gap-3">
                    <div className="sidebarstepline mt-1">
                      <span className="d-flex stepcomplte align-items-center justify-content-center"></span>
                    </div>
                    <div>
                      <h5 className="fw-normal">Location Details</h5>
                      <span className="fw-normal">Step 2</span>
                    </div>
                  </div>
                  <div className="sidebarstep d-flex gap-3">
                    <div className="sidebarstepline mt-1">
                      <span className="d-flex pendingstep align-items-center justify-content-center"></span>
                    </div>
                    <div>
                      <h5 className="fw-normal">Property Profile</h5>
                      <span className="fw-normal">Step 3</span>
                    </div>
                  </div>
                  <div className="sidebarstep d-flex gap-3">
                    <div className="sidebarstepline mt-1">
                      <span className="d-flex pendingstep align-items-center justify-content-center"></span>
                    </div>
                    <div>
                      <h5 className="fw-normal">Photos </h5>
                      <span className="fw-normal">Step 4</span>
                    </div>
                  </div>
                  <div className="sidebarstep d-flex gap-3">
                    <div className="sidebarstepline mt-1">
                      <span className="d-flex pendingstep align-items-center justify-content-center"></span>
                    </div>
                    <div>
                      <h5 className="fw-normal">Floor Details</h5>
                      <span className="fw-normal">Step 5</span>
                    </div>
                  </div>
                  <div className="sidebarstep d-flex gap-3 mb-0">
                    <div className="sidebarstepline mt-1">
                      <span className="d-flex pendingstep align-items-center justify-content-center"></span>
                    </div>
                    <div>
                      <h5 className="fw-normal">Pricing &amp; Orders</h5>
                      <span className="fw-normal">Step 6</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="listing_grid_right">
              <div>
                <div className="propertyLogin propertyLocation">
                  <div className="PropertyBackArrow">
                    <Link href="/otpverify">
                      <svg
                        width="45"
                        height="45"
                        viewBox="0 0 45 45"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.0815 11.7539L6.95312 22.8822L18.0815 34.0106M38.1198 22.8822H7.26479"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                  <h2>Where is your propert located?</h2>
                  <p className="dics">
                    An accurate location helps you connect with the right buyers
                  </p>
                  <form>
                    <div className="listing-dropdown">
                      <div className="multi_select">
                        <div className="dropdown css-b62m3t-container">
                          <span
                            id="react-select-27-live-region"
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
                              <div className=" css-1dimb5e-singleValue">
                                Enter Location
                              </div>
                              <div className=" css-19bb58m" data-defaultvalue="">
                                <input
                                  className=""
                                  autoCapitalize="none"
                                  autoComplete="off"
                                  autoCorrect="off"
                                  id="react-select-27-input"
                                  spellCheck="false"
                                  tabIndex="0"
                                  aria-autocomplete="list"
                                  aria-expanded="false"
                                  aria-haspopup="true"
                                  role="combobox"
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
                    <input
                      placeholder="Apartment / Society"
                      type="text"
                      defaultValue=""
                      name="apartment"
                    />
                    <input
                      placeholder="Locality"
                      type="text"
                      defaultValue=""
                      name="locality"
                    />
                    <input
                      placeholder="House No. (optional)"
                      type="text"
                      defaultValue=""
                      name="houseNo"
                    />
                    <div className="row">
                      <div className="col-6">
                        <button
                          className="verify outline"
                          name="save"
                          type="button"
                        >
                          Save
                        </button>
                      </div>
                      <div className="col-6">
                        <Link href="/otpverify/Tellaboutproperty">
                          <button name="continue" className="verify" type="submit">
                            Continue
                          </button>
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Page
