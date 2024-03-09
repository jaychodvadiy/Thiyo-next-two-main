import React from "react";

function Slider_Page() {
  return (
    <div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="property-detail-search">
                <div className="property-detail-search-top">
                  <div className="dropdown primary-dropdown ">
                    <div className="searchLocation dropdownlistproperty">
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
                      <div className="multi_select">
                        <div className="dropdown css-b62m3t-container">
                          <span
                            id="react-select-2-live-region"
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
                                id="react-select-2-placeholder"
                              >
                                Rent
                              </div>
                              <div className="css-19bb58m" data-defaultvalue="">
                                <input
                                  className=""
                                  autoCapitalize="none"
                                  autoComplete="off"
                                  autoCorrect="off"
                                  id="react-select-2-input"
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
                                  aria-describedby="react-select-2-placeholder"
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
                    </div>
                  </div>
                  <div className="dropdown primary-dropdown ">
                    <div className="searchLocation dropdownlistproperty">
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
                            id="react-select-2-live-region"
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
                                id="react-select-2-placeholder"
                              >
                                Enter Location
                              </div>
                              <div className=" css-19bb58m" defaultValue="">
                                <input
                                  className=""
                                  autoCapitalize="none"
                                  autoComplete="off"
                                  autoCorrect="off"
                                  id="react-select-2-input"
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
                                  aria-describedby="react-select-2-placeholder"
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
                    </div>
                  </div>
                  <div className="dropdown primary-dropdown ">
                    <div className="searchLocation dropdownlistproperty">
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

                      <div className="multi_select">
                        <div className="dropdown css-b62m3t-container">
                          <span
                            id="react-select-2-live-region"
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
                                id="react-select-2-placeholder"
                              >
                                Property
                              </div>
                              <div className="css-19bb58m" data-defaultvalue="">
                                <input
                                  className=""
                                  autoCapitalize="none"
                                  autoComplete="off"
                                  autoCorrect="off"
                                  id="react-select-2-input"
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
                                  aria-describedby="react-select-2-placeholder"
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
                    </div>
                  </div>
                  <div className="dropdown primary-dropdown ">
                    <div className="searchLocation dropdownlistproperty">
                      <div className="multi_select">
                        <div className="dropdown css-b62m3t-container">
                          <span
                            id="react-select-2-live-region"
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
                                id="react-select-2-placeholder"
                              >
                                <p className="ellipsis">
                                  {" "}
                                  &nbsp;beds&nbsp; &nbsp;baths&nbsp;
                                </p>
                              </div>
                              <div className="css-19bb58m" data-defaultvalue="">
                                <input
                                  className=""
                                  autoCapitalize="none"
                                  autoComplete="off"
                                  autoCorrect="off"
                                  id="react-select-2-input"
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
                                  aria-describedby="react-select-2-placeholder"
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
                    </div>
                  </div>
                </div>
                <div className="property-detail-search-bottom position-relative">
                  <div className="area selectproperty d-flex align-items-center gap-2">
                    <button className="search rounded d-flex align-items-center justify-content-center">
                      Search
                    </button>
                    <button className="rounded d-flex align-items-center justify-content-center">
                      Reset
                    </button>
                    <button className="rounded d-flex align-items-center justify-content-center">
                      Save Search
                    </button>
                  </div>
                  <div className="d-none d-xl-block"></div>
                  <div className="area selectproperty moredataproperty d-flex align-items-center justify-content-end gap-2 flex-row">
                    <p className="filter">More Filters</p>  
                    <span className="fs-5 d-flex align-items-center justify-content-center">
                      +
                    </span>
                  </div>
                </div>
              </div>
              <div className="countryFilter">
                <div className="title pt-3">
                  Properties for Rent in Your location
                </div>
                <div className="countryGroup">
                  <div className="countryItem">
                    <p>Dubai</p>
                    <span>(76,022)</span>
                  </div>
                  <div className="countryItem">
                    <p>Abu Dhabi</p>
                    <span>(76,022)</span>
                  </div>
                  <div className="countryItem">
                    <p>Sharjah</p>
                    <span>(76,022)</span>
                  </div>
                  <div className="countryItem">
                    <p>Dubai</p>
                    <span>(76,022)</span>
                  </div>
                  <div className="countryItem">
                    <p>Abu Dhabi</p>
                    <span>(76,022)</span>
                  </div>
                  <div className="countryItem">
                    <p>Sharjah</p>
                    <span>(76,022)</span>
                  </div>
                  <div className="countryItem">
                    <p className="text-uppercase">VIEW ALL LOCATIONS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Slider_Page;
