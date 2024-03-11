"use client";
import React, { useState } from "react";
import aroundpool from "../../../../assets/images/umbrella-chair-around-swimming-pool.jpg";
import gardenlight from "../../../../assets/images/light-garden-luxury-pool-nature.jpg";
import colonial from "../../../../assets/images/colonial-style-house-night-scene.jpg";
import relaxation from "../../../../assets/images/relaxation-pool-umbrella-lounge-sky.jpg";
import pooles from "../../../../assets/images/pool.jpg";
import night from "../../../../assets/images/night-city-view.jpg";
import emercan from "../../../../assets/images/images_12fdb56f-7772-4e51-90eb-f529de4254a4_ELEVATED-HOUSE-DESIGN-FEATURE-compressed.jpg";
import hotelmaineu from "../../../../assets/images/43147.jpg";
import hotelsas from "../../../../assets/images/150095.jpg";
import luxury from "../../../../assets/images/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge (1).jpg";
import architecture from "../../../../assets/images/urban-city-architecture.jpg";
import mercanotes from "../../../../assets/images/30998.jpg";
import Attribute from "../../../../assets/images/127680.jpg";
import quebeccity from "../../../../assets/images/chateau-frontenac-dusk-quebec-city.jpg";
import buildings from "../../../../assets/images/large-buildings-connected-by-roof.jpg";
import beadroom from "../../../../assets/images/beadroom.svg";
import Bathroom from "../../../../assets/images/Bathroom.svg";
import beautiful from "../../../../assets/images/beautiful-streets-switzerland.jpg";
import puvoor from "../../../../assets/images/5627.jpg";
import eruohouseing from "../../../../assets/images/5206.jpg";
import houseingpuvoor from "../../../../assets/images/5392.jpg";
import houseingcanada from "../../../../assets/images/7219.jpg";
import Image from "next/image";
const Verified = () => {
  const [dropdown, setDropdown] = useState("");

  const handleClick = (name) => {
    // console.log(name, "checking------->>>>>");
    setDropdown((prev) => {
      return prev == name ? "" : name;
    });
  };

  // function PageHeader() {
  //   const [dropdown, setDropdown] = useState("");
  //   const handleOpen = (name) => {
  //     console.log(name, "chckname----->>>>>");
  //     setDropdown((pre) => {
  //       return pre == name ? "" : name;
  //     });
  //   };
  return (
    <div>
      <section>
        <div className="container">
          <div className="row">
            <div className="rentproperty rentproperty-main">
              <div className="completionstatus rentproperty-left">
                <div className="d-none d-lg-block">
                  <div className="selectsheet">
                    <div className="card mb-2">
                      <div>
                        <div className="form-check form-switch">
                          <label htmlFor="flexSwitchCheckChecked cursor-pointer">
                            <p className="selectcircle">Verified Properties</p>
                          </label>
                          <input
                            className="form-check-input float-end cursor-pointer chekboxs"
                            role="switch"
                            id="flexSwitchCheckChecked"
                            type="checkbox"
                          />
                        </div>
                      </div>
                      <div className="verifed d-flex gap-2 align-items-center justify-between">
                        <span className="text-white">Verified</span>
                        <div>
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 9 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="4.78027"
                              cy="4.27637"
                              r="3.83887"
                              fill="white"
                            ></circle>
                            <path
                              d="M5.12305 3.19434V6.4375H4.43457V3.19434H5.12305ZM4.7832 1.95215C4.88867 1.95215 4.97949 1.98047 5.05566 2.03711C5.13379 2.09375 5.17285 2.19141 5.17285 2.33008C5.17285 2.4668 5.13379 2.56445 5.05566 2.62305C4.97949 2.67969 4.88867 2.70801 4.7832 2.70801C4.67383 2.70801 4.58105 2.67969 4.50488 2.62305C4.43066 2.56445 4.39355 2.4668 4.39355 2.33008C4.39355 2.19141 4.43066 2.09375 4.50488 2.03711C4.58105 1.98047 4.67383 1.95215 4.7832 1.95215Z"
                              fill="#20AC3F"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="card mb-2 p-0">
                      <div
                        className="accordion"
                        id="accordionPanelsStayOpenExample"
                      >
                        <div className="accordion-item">
                          <h2
                            className="accordion-header"
                            id="panelsStayOpen-headingOne"
                          >
                            <button
                              className="accordion-button select-option-btn title"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#panelsStayOpen-collapseOne"
                              aria-expanded="true"
                              aria-controls="panelsStayOpen-collapseOne"
                              onClick={() => handleClick(1)}
                            >
                              Budget
                            </button>
                          </h2>
                          <div
                            id="panelsStayOpen-collapseOne"
                            className={`dropdow-menu ${
                              dropdown == 1 ? "d-block" : "d-none"
                            } accordion-collapse collapse show`}
                            aria-labelledby="panelsStayOpen-headingOne"
                            style={{}}
                          >
                            <div className="accordion-body">
                              <div className="filterPrice">
                                <div className="multi-range-slider ">
                                  <div className="bar">
                                    <div
                                      className="bar-left"
                                      style={{ width: 0 }}
                                    ></div>
                                    <input
                                      placeholder="min-value"
                                      className="input-type-range input-type-range-min"
                                      min="0"
                                      max="35000"
                                      step="5"
                                      type="range"
                                      defaultValue="0"
                                    />
                                    <div className="thumb thumb-left">
                                      <div className="caption">
                                        <span className="min-caption">0</span>
                                      </div>
                                    </div>
                                    <div className="bar-inner">
                                      <div className="bar-inner-left"></div>
                                      <div className="bar-inner-right"></div>
                                    </div>
                                    <input
                                      placeholder="max-value"
                                      className="input-type-range input-type-range-max"
                                      min="0"
                                      max="35000"
                                      step="5"
                                      type="range"
                                      defaultValue="30000"
                                    />
                                    <div className="thumb thumb-right">
                                      <div className="caption">
                                        <span className="max-caption">
                                          35000
                                        </span>
                                      </div>
                                    </div>
                                    <div
                                      className="bar-right"
                                      style={{ width: 14.2857 }}
                                    ></div>
                                  </div>
                                  <div className="ruler">
                                    <div className="ruler-rule"></div>
                                    <div className="ruler-rule"></div>
                                    <div className="ruler-rule"></div>
                                    <div className="ruler-rule"></div>
                                    <div className="ruler-rule"></div>
                                    <div className="ruler-rule"></div>
                                    <div className="ruler-rule"></div>
                                  </div>
                                  <div className="labels">
                                    <div className="label">0</div>
                                    <div className="label">35000</div>
                                  </div>
                                </div>
                              </div>
                              <div className="priceRange priceRange-cs">
                                <div className="areaInput areaInput-cs row">
                                  <div className="col-6 pe-0">
                                    <input
                                      placeholder="Minimum"
                                      className="form-control"
                                      max="30000"
                                      defaultValue="0"
                                    />
                                  </div>
                                  <div className="col-6">
                                    <input
                                      className="form-control"
                                      placeholder="Maximum"
                                      min="0"
                                      defaultValue="30000"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card mb-2 p-0">
                      <div
                        className="accordion"
                        id="accordionPanelsStayOpenExample"
                      >
                        <div className="accordion-item">
                          <h2
                            className="accordion-header"
                            id="panelsStayOpen-headingTwo"
                          >
                            <button
                              className="accordion-button selectoptionbtn title"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#panelsStayOpen-collapseTwo"
                              aria-expanded="true"
                              aria-controls="panelsStayOpen-collapseTwo"
                              onClick={() => handleClick(2)}
                            >
                              Property Type
                            </button>
                          </h2>
                          <div
                            id="panelsStayOpen-collapseOne"
                            className={`dropdow-menu ${
                              dropdown == 2 ? "d-block" : "d-none"
                            } accordion-collapse collapse show`}
                            aria-labelledby="panelsStayOpen-headingOne"
                            style={{}}
                          >
                            <div className="accordion-body">
                              <ul
                                className="nav border-bottom nav-pills mb-2"
                                id="pills-tab"
                                role="tablist"
                              >
                                <li className="nav-item" role="presentation">
                                  <button
                                    className="nav-link active w-100 rounded-0"
                                    id="pills-home-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-home"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-home"
                                    aria-selected="true"
                                  >
                                    Residential
                                  </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                  <button
                                    className="nav-link w-100 rounded-0"
                                    id="pills-profile-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-profile"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-profile"
                                    aria-selected="false"
                                  >
                                    Commercial
                                  </button>
                                </li>
                              </ul>
                              <div
                                className="tab-content"
                                id="pills-tabContent"
                              >
                                <div
                                  className="tab-pane selectcircle fade show active"
                                  id="pills-home"
                                  role="tabpanel"
                                  aria-labelledby="pills-home-tab"
                                  tabIndex="0"
                                >
                                  <div className="d-flex flex-wrap gap-2">
                                    <button className="active">
                                      Apartment
                                    </button>
                                    <button className="false">Villa</button>
                                    <button className="false">Townhouse</button>
                                    <button className="false">Penthouse</button>
                                    <button className="false">
                                      Hotel Apartment
                                    </button>
                                  </div>
                                </div>
                                <div
                                  className="tab-pane selectcircle fade"
                                  id="pills-profile"
                                  role="tabpanel"
                                  aria-labelledby="pills-profile-tab"
                                  tabIndex="0"
                                >
                                  <div className="d-flex flex-wrap gap-2">
                                    <button className="active">Office</button>
                                    <button className="false">Warehouse</button>
                                    <button className="false">Shop</button>
                                    <button className="false">Hotel</button>
                                    <button className="false">
                                      Mixed Use Land
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card mb-2 p-0">
                      <div
                        className="accordion"
                        id="accordionPanelsStayOpenExample"
                      >
                        <div className="accordion-item">
                          <h2
                            className="accordion-header"
                            id="panelsStayOpen-headingThree"
                          >
                            <button
                              className="accordion-button selectoptionbtn title collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#panelsStayOpen-collapseThree"
                              aria-expanded="false"
                              aria-controls="panelsStayOpen-collapseThree"
                              onClick={() => handleClick(3)}
                            >
                              Beds &amp; Baths
                            </button>
                          </h2>
                          <div
                            id="panelsStayOpen-collapseOne"
                            className={`dropdow-menu ${
                              dropdown == 3 ? "d-block" : "d-none"
                            } accordion-collapse collapse show`}
                            aria-labelledby="panelsStayOpen-headingOne"
                            style={{}}
                          >
                            <div className="accordion-body">
                              <div className="selectcircle d-flex flex-wrap align-items-center gap-2"></div>
                              <div className="selectcircle d-flex flex-wrap align-items-center gap-2">
                                <div className="drop-title">beds</div>
                                <div className="d-flex align-items-center gap-1 flex-wrap mb-2">
                                  <button className="w-auto h-auto active">
                                    Studio
                                  </button>
                                  <button className="w-auto h-auto ">1</button>
                                  <button className="w-auto h-auto ">2</button>
                                  <button className="w-auto h-auto ">3</button>
                                  <button className="w-auto h-auto ">4</button>
                                  <button className="w-auto h-auto ">5</button>
                                  <button className="w-auto h-auto ">6</button>
                                  <button className="w-auto h-auto ">7</button>
                                  <button className="w-auto h-auto ">8+</button>
                                </div>
                                <hr />
                                <div className="drop-title">baths</div>
                                <div className="d-flex align-items-center gap-1 flex-wrap mb-2">
                                  <button className="w-auto h-auto ">1</button>
                                  <button className="w-auto h-auto ">2</button>
                                  <button className="w-auto h-auto ">3</button>
                                  <button className="w-auto h-auto ">4</button>
                                  <button className="w-auto h-auto ">5</button>
                                  <button className="w-auto h-auto ">6+</button>
                                </div>
                                <hr />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card mb-2 p-0">
                      <div
                        className="accordion"
                        id="accordionPanelsStayOpenExample"
                      >
                        <div className="accordion-item">
                          <h2
                            className="accordion-header"
                            id="panelsStayOpen-headingFive"
                          >
                            <button
                              className="accordion-button selectoptionbtn title collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#panelsStayOpen-collapseFive"
                              aria-expanded="false"
                              aria-controls="panelsStayOpen-collapseFive"
                              onClick={() => handleClick(4)}
                            >
                              Posted By
                            </button>
                          </h2>
                          <div
                            id="panelsStayOpen-collapseOne"
                            className={`dropdow-menu ${
                              dropdown == 4 ? "d-block" : "d-none"
                            } accordion-collapse collapse show`}
                            aria-labelledby="panelsStayOpen-headingOne"
                            style={{}}
                          >
                            <div className="accordion-body">
                              <div className="constrtuctiuonbtn gap-2 d-flex align-items-center flex-wrap">
                                <button className="active">
                                  <svg
                                    width="8"
                                    height="9"
                                    viewBox="0 0 8 9"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M4.40332 3.82422H7.62207V4.88672H4.40332V8.19922H3.33301V4.88672H0.114258V3.82422H3.33301V0.496094H4.40332V3.82422Z"
                                      fill="#939393"
                                    ></path>
                                  </svg>
                                  Owner
                                </button>
                                <button className="">
                                  <svg
                                    width="8"
                                    height="9"
                                    viewBox="0 0 8 9"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M4.40332 3.82422H7.62207V4.88672H4.40332V8.19922H3.33301V4.88672H0.114258V3.82422H3.33301V0.496094H4.40332V3.82422Z"
                                      fill="#939393"
                                    ></path>
                                  </svg>
                                  Agent
                                </button>
                                <button className="">
                                  <svg
                                    width="8"
                                    height="9"
                                    viewBox="0 0 8 9"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M4.40332 3.82422H7.62207V4.88672H4.40332V8.19922H3.33301V4.88672H0.114258V3.82422H3.33301V0.496094H4.40332V3.82422Z"
                                      fill="#939393"
                                    ></path>
                                  </svg>
                                  Developer
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card mb-2 p-0">
                      <div
                        className="accordion"
                        id="accordionPanelsStayOpenExample"
                      >
                        <div className="accordion-item">
                          <h2
                            className="accordion-header"
                            id="panelsStayOpen-headingOne"
                          >
                            <button
                              className="accordion-button selectoptionbtn title"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#panelsStayOpen-collapseOnelogo"
                              aria-expanded="true"
                              aria-controls="panelsStayOpen-collapseOnelogo"
                              onClick={() => handleClick(5)}
                            >
                              Aera
                            </button>
                          </h2>
                          <div
                            id="panelsStayOpen-collapseOne"
                            className={`dropdow-menu ${
                              dropdown == 5 ? "d-block" : "d-none"
                            } accordion-collapse collapse show`}
                            aria-labelledby="panelsStayOpen-headingOne"
                            style={{}}
                          >
                            <div className="accordion-body">
                              <div className="filterPrice">
                                <div className="multi-range-slider ">
                                  <div className="bar">
                                    <div
                                      className="bar-left"
                                      style={{ width: 0 }}
                                    ></div>
                                    <input
                                      placeholder="min-value"
                                      className="input-type-range input-type-range-min"
                                      min="0"
                                      max="35000"
                                      step="5"
                                      type="range"
                                      defaultValue="0"
                                    />
                                    <div className="thumb thumb-left">
                                      <div className="caption">
                                        <span className="min-caption">0</span>
                                      </div>
                                    </div>
                                    <div className="bar-inner">
                                      <div className="bar-inner-left"></div>
                                      <div className="bar-inner-right"></div>
                                    </div>
                                    <input
                                      placeholder="max-value"
                                      className="input-type-range input-type-range-max"
                                      min="0"
                                      max="35000"
                                      step="5"
                                      type="range"
                                      defaultValue="30000"
                                    />
                                    <div className="thumb thumb-right">
                                      <div className="caption">
                                        <span className="max-caption">
                                          35000
                                        </span>
                                      </div>
                                    </div>
                                    <div
                                      className="bar-right"
                                      style={{ width: 14.2857 }}
                                    ></div>
                                  </div>
                                  <div className="ruler">
                                    <div className="ruler-rule"></div>
                                    <div className="ruler-rule"></div>
                                    <div className="ruler-rule"></div>
                                    <div className="ruler-rule"></div>
                                    <div className="ruler-rule"></div>
                                    <div className="ruler-rule"></div>
                                    <div className="ruler-rule"></div>
                                  </div>
                                  <div className="labels">
                                    <div className="label">0</div>
                                    <div className="label">35000</div>
                                  </div>
                                </div>
                              </div>
                              <div className="priceRange priceRange-cs">
                                <div className="areaInput areaInput-cs row">
                                  <div className="col-6 pe-0">
                                    <input
                                      placeholder="Minimum"
                                      className="form-control"
                                      max="30000"
                                      defaultValue="0"
                                    />
                                  </div>
                                  <div className="col-6">
                                    <input
                                      className="form-control"
                                      placeholder="Maximum"
                                      min="0"
                                      defaultValue="30000"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card mb-2 p-0">
                      <div
                        className="accordion"
                        id="accordionPanelsStayOpenExample"
                      >
                        <div className="accordion-item">
                          <h2
                            className="accordion-header"
                            id="panelsStayOpen-headingn"
                          >
                            <button
                              className="accordion-button selectoptionbtn title collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#panelsStayOpen-collapsen"
                              aria-expanded="false"
                              aria-controls="panelsStayOpen-collapsen"
                              onClick={() => handleClick(6)}
                            >
                              Purchase Type
                            </button>
                          </h2>
                          <div
                            id="panelsStayOpen-collapseOne"
                            className={`dropdow-menu ${
                              dropdown == 6 ? "d-block" : "d-none"
                            } accordion-collapse collapse show`}
                            aria-labelledby="panelsStayOpen-headingOne"
                            style={{}}
                          >
                            <div className="accordion-body">
                              <div className="constrtuctiuonbtn gap-2 d-flex align-items-cente flex-wrap">
                                <button className="">
                                  <svg
                                    width="8"
                                    height="9"
                                    viewBox="0 0 8 9"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M4.40332 3.82422H7.62207V4.88672H4.40332V8.19922H3.33301V4.88672H0.114258V3.82422H3.33301V0.496094H4.40332V3.82422Z"
                                      fill="#939393"
                                    ></path>
                                  </svg>
                                  Resale
                                </button>
                                <button className="">
                                  <svg
                                    width="8"
                                    height="9"
                                    viewBox="0 0 8 9"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M4.40332 3.82422H7.62207V4.88672H4.40332V8.19922H3.33301V4.88672H0.114258V3.82422H3.33301V0.496094H4.40332V3.82422Z"
                                      fill="#939393"
                                    ></path>
                                  </svg>
                                  New Booking
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card mb-2 p-0">
                      <div
                        className="accordion"
                        id="accordionPanelsStayOpenExample"
                      >
                        <div className="accordion-item">
                          <h2
                            className="accordion-header"
                            id="panelsStayOpen-headingten"
                          >
                            <button
                              className="accordion-button selectoptionbtn title collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#panelsStayOpen-collapseten"
                              aria-expanded="false"
                              aria-controls="panelsStayOpen-collapseten"
                              onClick={() => handleClick(7)}
                            >
                              Amenities
                            </button>
                          </h2>
                          <div
                            id="panelsStayOpen-collapseOne"
                            className={`dropdow-menu ${
                              dropdown == 7 ? "d-block" : "d-none"
                            } accordion-collapse collapse show`}
                            aria-labelledby="panelsStayOpen-headingOne"
                            style={{}}
                          >
                            <div className="accordion-body">
                              <div className="constrtuctiuonbtn gap-2 d-flex align-items-cente flex-wrap">
                                <button className=" false">
                                  <svg
                                    width="8"
                                    height="9"
                                    viewBox="0 0 8 9"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M4.40332 3.82422H7.62207V4.88672H4.40332V8.19922H3.33301V4.88672H0.114258V3.82422H3.33301V0.496094H4.40332V3.82422Z"
                                      fill="#939393"
                                    ></path>
                                  </svg>
                                  Bedrooms
                                </button>
                                <button className=" false">
                                  <svg
                                    width="8"
                                    height="9"
                                    viewBox="0 0 8 9"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M4.40332 3.82422H7.62207V4.88672H4.40332V8.19922H3.33301V4.88672H0.114258V3.82422H3.33301V0.496094H4.40332V3.82422Z"
                                      fill="#939393"
                                    ></path>
                                  </svg>
                                  Bathrooms
                                </button>
                                <button className=" false">
                                  <svg
                                    width="8"
                                    height="9"
                                    viewBox="0 0 8 9"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M4.40332 3.82422H7.62207V4.88672H4.40332V8.19922H3.33301V4.88672H0.114258V3.82422H3.33301V0.496094H4.40332V3.82422Z"
                                      fill="#939393"
                                    ></path>
                                  </svg>
                                  Square Footage
                                </button>
                                <button className=" false">
                                  <svg
                                    width="8"
                                    height="9"
                                    viewBox="0 0 8 9"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M4.40332 3.82422H7.62207V4.88672H4.40332V8.19922H3.33301V4.88672H0.114258V3.82422H3.33301V0.496094H4.40332V3.82422Z"
                                      fill="#939393"
                                    ></path>
                                  </svg>
                                  Lot Size
                                </button>
                              </div>
                              <p className="mt-2">+ 6 more</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card mb-2 p-0">
                      <div
                        className="accordion"
                        id="accordionPanelsStayOpenExample"
                      >
                        <div className="accordion-item">
                          <h2
                            className="accordion-header"
                            id="panelsStayOpen-headingnine"
                          >
                            <button
                              className="accordion-button selectoptionbtn title collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#panelsStayOpen-collapsenine"
                              aria-expanded="false"
                              aria-controls="panelsStayOpen-collapsenine"
                              onClick={() => handleClick(8)}
                            >
                              Furnishing Status
                            </button>
                          </h2>
                          <div
                            id="panelsStayOpen-collapseOne"
                            className={`dropdow-menu ${
                              dropdown == 8 ? "d-block" : "d-none"
                            } accordion-collapse collapse show`}
                            aria-labelledby="panelsStayOpen-headingOne"
                            style={{}}
                          >
                            <div className="accordion-body">
                              <div className="constrtuctiuonbtn gap-2 d-flex align-items-cente flex-wrap">
                                <button className="">
                                  <svg
                                    width="8"
                                    height="9"
                                    viewBox="0 0 8 9"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M4.40332 3.82422H7.62207V4.88672H4.40332V8.19922H3.33301V4.88672H0.114258V3.82422H3.33301V0.496094H4.40332V3.82422Z"
                                      fill="#939393"
                                    ></path>
                                  </svg>
                                  Furnished
                                </button>
                                <button className="">
                                  <svg
                                    width="8"
                                    height="9"
                                    viewBox="0 0 8 9"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M4.40332 3.82422H7.62207V4.88672H4.40332V8.19922H3.33301V4.88672H0.114258V3.82422H3.33301V0.496094H4.40332V3.82422Z"
                                      fill="#939393"
                                    ></path>
                                  </svg>
                                  Semi-furnished
                                </button>
                                <button className="">
                                  <svg
                                    width="8"
                                    height="9"
                                    viewBox="0 0 8 9"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M4.40332 3.82422H7.62207V4.88672H4.40332V8.19922H3.33301V4.88672H0.114258V3.82422H3.33301V0.496094H4.40332V3.82422Z"
                                      fill="#939393"
                                    ></path>
                                  </svg>
                                  un-furnished
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rentproperty-right">
                <div className="propertyslider ">
                  <div className="propertyslider">
                    <div className="cs-main align-items-end">
                      <div className="cs-tab flex-wrap">
                        <p>Furnishing Status </p>
                        <div className="completion-product-view-tab">
                          <ul className="nav nav-pills nav-fill" role="tablist">
                            <li className="nav-item" role="presentation">
                              <button type="button" className="nav-link active">
                                All
                              </button>
                            </li>
                            <li className="nav-item" role="presentation">
                              <button type="button" className="nav-link ">
                                Furnished
                              </button>
                            </li>
                            <li className="nav-item" role="presentation">
                              <button type="button" className="nav-link ">
                                Semi-furnished
                              </button>
                            </li>
                            <li className="nav-item" role="presentation">
                              <button type="button" className="nav-link ">
                                un-furnished
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="cs-filter-option">
                        <div
                          className="sm-filter d-lg-none"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvasExample"
                          aria-controls="offcanvasExample"
                        >
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_83_2)">
                              <path
                                d="M0.46875 2.64431H7.60562C7.82071 3.62338 8.69505 4.35841 9.73778 4.35841C10.7805 4.35841 11.6549 3.62341 11.87 2.64431H14.5312C14.7901 2.64431 15 2.43442 15 2.17556C15 1.91669 14.7901 1.70681 14.5312 1.70681H11.8697C11.6542 0.728231 10.7787 -0.007267 9.73778 -0.007267C8.69634 -0.007267 7.82121 0.728114 7.60579 1.70681H0.46875C0.209883 1.70681 0 1.91669 0 2.17556C0 2.43442 0.209883 2.64431 0.46875 2.64431ZM8.49249 2.17679L8.49252 2.17175C8.49457 1.48717 9.05317 0.930262 9.73778 0.930262C10.4214 0.930262 10.9801 1.4864 10.983 2.17066L10.9831 2.17755C10.982 2.8633 10.4238 3.42094 9.73778 3.42094C9.05206 3.42094 8.49401 2.86386 8.49246 2.17851L8.49249 2.17679ZM14.5312 12.3557H11.8697C11.6542 11.3771 10.7787 10.6416 9.73778 10.6416C8.69634 10.6416 7.82121 11.377 7.60579 12.3557H0.46875C0.209883 12.3557 0 12.5655 0 12.8244C0 13.0833 0.209883 13.2932 0.46875 13.2932H7.60562C7.82071 14.2722 8.69505 15.0073 9.73778 15.0073C10.7805 15.0073 11.6549 14.2722 11.87 13.2932H14.5312C14.7901 13.2932 15 13.0833 15 12.8244C15 12.5655 14.7901 12.3557 14.5312 12.3557ZM9.73778 14.0698C9.05206 14.0698 8.49401 13.5127 8.49246 12.8273L8.49249 12.8256L8.49252 12.8206C8.49457 12.136 9.05317 11.5791 9.73778 11.5791C10.4214 11.5791 10.9801 12.1352 10.983 12.8195L10.9831 12.8263C10.9821 13.5122 10.4239 14.0698 9.73778 14.0698ZM14.5312 7.03125H7.39438C7.17929 6.05218 6.30495 5.31718 5.26222 5.31718C4.21948 5.31718 3.34515 6.05218 3.13005 7.03125H0.46875C0.209883 7.03125 0 7.24113 0 7.5C0 7.75889 0.209883 7.96875 0.46875 7.96875H3.13028C3.34582 8.94729 4.22133 9.68282 5.26222 9.68282C6.30366 9.68282 7.17879 8.94741 7.39421 7.96875H14.5312C14.7901 7.96875 15 7.75889 15 7.5C15 7.24113 14.7901 7.03125 14.5312 7.03125ZM6.50751 7.49877L6.50748 7.50381C6.50543 8.18839 5.94683 8.74529 5.26222 8.74529C4.57857 8.74529 4.01994 8.18915 4.01698 7.50492L4.01689 7.49807C4.01792 6.81223 4.57617 6.25468 5.26222 6.25468C5.94794 6.25468 6.50599 6.81173 6.50754 7.4971L6.50751 7.49877Z"
                                fill="black"
                              ></path>
                            </g>
                          </svg>
                        </div>
                        <div className="popularmain">
                          <div className="popularicon">
                            <svg
                              width="13"
                              height="12"
                              viewBox="0 0 13 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_8952_3030)">
                                <path
                                  d="M2.44164 1.66406H6.58744C6.93215 1.66406 7.2163 1.94821 7.2163 2.29292V2.98233C7.2163 3.23388 7.05792 3.54598 6.9042 3.70436L5.55332 4.89686C5.36699 5.05523 5.24122 5.36733 5.24122 5.61888V6.96976C5.24122 7.15608 5.11545 7.40763 4.95707 7.50545L4.5192 7.7896C4.10928 8.04114 3.54563 7.75699 3.54563 7.25391V5.59093C3.54563 5.37199 3.41986 5.08784 3.29409 4.92946L2.10159 3.67175C1.94321 3.51337 1.81744 3.23388 1.81744 3.04289V2.32087C1.81278 1.94821 2.09693 1.66406 2.44164 1.66406Z"
                                  stroke="black"
                                  strokeMiterlimit="10"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M1.8125 6.32375V7.72121C1.8125 10.0503 2.74414 10.982 5.07324 10.982H7.86816C10.1973 10.982 11.1289 10.0503 11.1289 7.72121V4.92629C11.1289 3.47293 10.7656 2.55992 9.92243 2.08479C9.68486 1.9497 9.20973 1.84722 8.77651 1.77734M6.93652 6.78957H9.26562M6.00488 8.65285H9.26562"
                                  stroke="black"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </g>
                              <defs>
                                <clipPath id="clip0_8952_3030">
                                  <rect
                                    width="11.1797"
                                    height="11.1797"
                                    fill="white"
                                    transform="translate(0.880859 0.734375)"
                                  ></rect>
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                          <select
                            className="form-select"
                            aria-label="Default select example"
                          >
                            <option defaultValue="">Sort By</option>
                            <option defaultValue="LtoH">
                              Price Low to High
                            </option>
                            <option defaultValue="HtoL">
                              Price High to Low
                            </option>
                          </select>
                        </div>
                        <nav className="productgridcard">
                          <div
                            className="nav border-bottom-0 nav-tabs"
                            id="nav-tab"
                            role="tablist"
                          >
                            <button
                              className="active"
                              id="nav-home-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#nav-home"
                              type="button"
                              role="tab"
                              aria-controls="nav-home"
                              aria-selected="true"
                            >
                              <svg
                                width="13"
                                height="14"
                                viewBox="0 0 13 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M6.00098 10.8893H11.001M6.00098 7.09766H11.001M6.00098 3.30599H11.001M2.00098 3.30599L2.50098 3.84766L4.00098 2.22266M2.00098 7.09766L2.50098 7.63932L4.00098 6.01432M2.00098 10.8893L2.50098 11.431L4.00098 9.80599"
                                  stroke="black"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                            </button>
                            <button
                              className="border-0 bg-transparent nav-link"
                              id="nav-profile-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#nav-profile"
                              type="button"
                              role="tab"
                              aria-controls="nav-profile"
                              aria-selected="false"
                              tabIndex="-1"
                            >
                              <svg
                                width="14"
                                height="13"
                                viewBox="0 0 14 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(#clip0_8952_3033)">
                                  <path
                                    d="M12.6019 4.58813V2.31813C12.6019 1.61313 12.2552 1.32812 11.394 1.32812H9.20564C8.34439 1.32812 7.99772 1.61313 7.99772 2.31813V4.58313C7.99772 5.29313 8.34439 5.57312 9.20564 5.57312H11.394C12.2552 5.57812 12.6019 5.29313 12.6019 4.58813ZM12.6019 10.2131V8.19312C12.6019 7.39812 12.2552 7.07812 11.394 7.07812H9.20564C8.34439 7.07812 7.99772 7.39812 7.99772 8.19312V10.2131C7.99772 11.0081 8.34439 11.3281 9.20564 11.3281H11.394C12.2552 11.3281 12.6019 11.0081 12.6019 10.2131ZM6.37272 4.58813V2.31813C6.37272 1.61313 6.02605 1.32812 5.1648 1.32812H2.97647C2.11522 1.32812 1.76855 1.61313 1.76855 2.31813V4.58313C1.76855 5.29313 2.11522 5.57312 2.97647 5.57312H5.1648C6.02605 5.57812 6.37272 5.29313 6.37272 4.58813ZM6.37272 10.2131V8.19312C6.37272 7.39812 6.02605 7.07812 5.1648 7.07812H2.97647C2.11522 7.07812 1.76855 7.39812 1.76855 8.19312V10.2131C1.76855 11.0081 2.11522 11.3281 2.97647 11.3281H5.1648C6.02605 11.3281 6.37272 11.0081 6.37272 10.2131Z"
                                    stroke="black"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                </g>
                                <defs>
                                  <clipPath id="clip0_8952_3033">
                                    <rect
                                      width="13"
                                      height="12"
                                      fill="white"
                                      transform="translate(0.685547 0.328125)"
                                    ></rect>
                                  </clipPath>
                                </defs>
                              </svg>
                            </button>
                          </div>
                        </nav>
                      </div>
                    </div>
                    <div className="tab-content" id="nav-tabContent">
                      <div
                        className="tab-pane fade active show"
                        id="nav-home"
                        role="tabpanel"
                        aria-labelledby="nav-home-tab"
                        tabIndex="0"
                      >
                        <div className="mb-3">
                          <div className="carddeatil carddeatil-sm">
                            <div className="carddeatil-sm-left">
                              <div className="position-relative h-100">
                                <div className="swiper swiper-creative swiper-3d swiper-initialized swiper-horizontal swiper-watch-progress mySwiper6">
                                  <div
                                    className="swiper-wrapper"
                                    style={{ cursor: "grab" }}
                                  >
                                    <div
                                      className="swiper-slide swiper-slide-visible swiper-slide-active"
                                      style={{
                                        width: "335px",
                                        zIndex: 6,
                                        transform:
                                          "translate3d(calc(0px), calc(0px), calc(0px)) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1)",
                                        opacity: 1,
                                      }}
                                    >
                                      <div className="productslider h-100 position-relative">
                                        <Image
                                          src={aroundpool}
                                          alt="aroundpool"
                                          className="w-100 h-100"
                                        />
                                      </div>
                                    </div>
                                    <div
                                      className="swiper-slide swiper-slide-next"
                                      style={{
                                        width: "335px",
                                        zIndex: 5,
                                        transform:
                                          "translate3d(calc(5% - 300px), 0px, -200px) rotateX(0deg) rotateY(-100deg) rotateZ(0deg) scale(1)",
                                        opacity: 1,
                                        transformOrigin: "right center",
                                      }}
                                    >
                                      <div className="productslider h-100 position-relative">
                                        <Image
                                          src={emercan}
                                          alt="emercan"
                                          className="w-100 h-100"
                                        />
                                      </div>
                                    </div>
                                    <div
                                      className="swiper-slide"
                                      style={{
                                        width: "335px",
                                        zIndex: 4,
                                        transform:
                                          "translate3d(calc(5% - 600px), 0px, -200px) rotateX(0deg) rotateY(-100deg) rotateZ(0deg) scale(1)",
                                        opacity: 1,
                                        transformOrigin: "right center",
                                      }}
                                    >
                                      <div className="productslider h-100 position-relative">
                                        <Image
                                          src={emercan}
                                          alt="emercan"
                                          className="w-100 h-100"
                                        />
                                      </div>
                                    </div>
                                    <div
                                      className="swiper-slide"
                                      style={{
                                        width: "335px",
                                        zIndex: 3,
                                        transform:
                                          "translate3d(calc(5% - 900px), 0px, -200px) rotateX(0deg) rotateY(-100deg) rotateZ(0deg) scale(1)",
                                        opacity: 1,
                                        transformOrigin: "right center",
                                      }}
                                    >
                                      <div className="productslider h-100 position-relative">
                                        <Image
                                          src={emercan}
                                          alt="emercan"
                                          className="w-100 h-100"
                                        />
                                      </div>
                                    </div>
                                    <div
                                      className="swiper-slide"
                                      style={{
                                        width: "335px",
                                        zIndex: 2,
                                        transform:
                                          "translate3d(calc(5% - 1200px), 0px, -200px) rotateX(0deg) rotateY(-100deg) rotateZ(0deg) scale(1)",
                                        opacity: 1,
                                        transformOrigin: "right center",
                                      }}
                                    >
                                      <div className="productslider h-100 position-relative">
                                        <Image
                                          src={emercan}
                                          alt="emercan"
                                          className="w-100 h-100"
                                        />
                                      </div>
                                    </div>
                                    <div
                                      className="swiper-slide"
                                      style={{
                                        width: "335px",
                                        zIndex: 1,
                                        transform:
                                          "translate3d(calc(5% - 1500px), 0px, -200px) rotateX(0deg) rotateY(-100deg) rotateZ(0deg) scale(1)",
                                        opacity: 1,
                                        transformOrigin: "right center",
                                      }}
                                    >
                                      <div className="productslider h-100 position-relative">
                                        <Image
                                          src={emercan}
                                          alt="emercan"
                                          className="w-100 h-100"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="swiper-button-prev swiper-button-disabled"></div>
                                  <div className="swiper-button-next"></div>
                                </div>
                                <div className="gallery cursor-pointer">
                                  <svg
                                    width="13"
                                    height="13"
                                    viewBox="0 0 13 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g clipPath="url(#clip0_8952_3543)">
                                      <path
                                        d="M5.23104 11.4587H8.16121C10.603 11.4587 11.5798 10.4819 11.5798 8.04012V5.10994C11.5798 2.66813 10.603 1.69141 8.16121 1.69141H5.23104C2.78923 1.69141 1.8125 2.66813 1.8125 5.10994V8.04012C1.8125 10.4819 2.78923 11.4587 5.23104 11.4587Z"
                                        stroke="black"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      ></path>
                                      <path
                                        d="M2.13965 9.96883L4.54728 8.35235C4.93308 8.09352 5.48982 8.12282 5.83655 8.42072L5.99771 8.56234C6.37864 8.88955 6.99397 8.88955 7.3749 8.56234L9.40648 6.81889C9.78741 6.49169 10.4027 6.49169 10.7837 6.81889L11.5797 7.5026M5.23098 5.59798C5.49003 5.59798 5.73846 5.49508 5.92163 5.31191C6.1048 5.12873 6.20771 4.8803 6.20771 4.62126C6.20771 4.36221 6.1048 4.11378 5.92163 3.93061C5.73846 3.74744 5.49003 3.64453 5.23098 3.64453C4.97194 3.64453 4.72351 3.74744 4.54033 3.93061C4.35716 4.11378 4.25426 4.36221 4.25426 4.62126C4.25426 4.8803 4.35716 5.12873 4.54033 5.31191C4.72351 5.49508 4.97194 5.59798 5.23098 5.59798Z"
                                        stroke="black"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      ></path>
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_8952_3543">
                                        <rect
                                          width="11.7207"
                                          height="11.7207"
                                          fill="white"
                                          transform="translate(0.835938 0.714844)"
                                        ></rect>
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  <span>6</span>
                                </div>
                                <div className="verified cursor-pointer">
                                  <span>
                                    <svg
                                      width="14"
                                      height="14"
                                      viewBox="0 0 14 14"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g clipPath="url(#clip0_8952_1986)">
                                        <path
                                          d="M5.48218 12.4697H8.78833C11.5435 12.4697 12.6455 11.3677 12.6455 8.61255V5.3064C12.6455 2.55127 11.5435 1.44922 8.78833 1.44922H5.48218C2.72705 1.44922 1.625 2.55127 1.625 5.3064V8.61255C1.625 11.3677 2.72705 12.4697 5.48218 12.4697Z"
                                          stroke="black"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                        <path
                                          d="M4.79297 6.96175L6.35237 8.52115L9.47668 5.40234"
                                          stroke="black"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_8952_1986">
                                          <rect
                                            width="13.2246"
                                            height="13.2246"
                                            fill="white"
                                            transform="translate(0.522461 0.347656)"
                                          ></rect>
                                        </clipPath>
                                      </defs>
                                    </svg>
                                    Verified
                                  </span>
                                </div>
                                <div className="card-like cursor-pointer">
                                  <svg
                                    width="21"
                                    height="21"
                                    viewBox="-2.4 -2.4 28.80 28.80"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0">
                                      <rect
                                        x="-2.4"
                                        y="-2.4"
                                        width="28.80"
                                        height="28.80"
                                        rx="14.4"
                                        fill="#ffffff"
                                        strokeWidth="0"
                                      ></rect>
                                    </g>
                                    <g
                                      id="SVGRepo_tracerCarrier"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></g>
                                    <g id="SVGRepo_iconCarrier">
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M11.993 5.09691C11.0387 4.25883 9.78328 3.75 8.40796 3.75C5.42122 3.75 3 6.1497 3 9.10988C3 10.473 3.50639 11.7242 4.35199 12.67L12 20.25L19.4216 12.8944L19.641 12.6631C20.4866 11.7172 21 10.473 21 9.10988C21 6.1497 18.5788 3.75 15.592 3.75C14.2167 3.75 12.9613 4.25883 12.007 5.09692L12 5.08998L11.993 5.09691ZM12 7.09938L12.0549 7.14755L12.9079 6.30208L12.9968 6.22399C13.6868 5.61806 14.5932 5.25 15.592 5.25C17.763 5.25 19.5 6.99073 19.5 9.10988C19.5 10.0813 19.1385 10.9674 18.5363 11.6481L18.3492 11.8453L12 18.1381L5.44274 11.6391C4.85393 10.9658 4.5 10.0809 4.5 9.10988C4.5 6.99073 6.23699 5.25 8.40796 5.25C9.40675 5.25 10.3132 5.61806 11.0032 6.22398L11.0921 6.30203L11.9452 7.14752L12 7.09938Z"
                                        fill="#af824a "
                                      ></path>
                                    </g>
                                  </svg>
                                </div>
                                <div className="hometype font-bold">
                                  AED 6000
                                </div>
                              </div>
                            </div>
                            <div className="carddeatil-sm-right">
                              <div className="apartment">
                                <div className="d-flex align-items-start justify-content-between h-100">
                                  <div className="d-flex align-items-start justify-content-start flex-column">
                                    <div>
                                      <span> villa</span>
                                      <h4 className="cursor-pointer prod-title">
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting indus...
                                      </h4>
                                      <p className="downtown prod-location">
                                        <svg
                                          width="15"
                                          height="15"
                                          viewBox="0 0 15 15"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <g clipPath="url(#clip0_8952_2013)">
                                            <path
                                              d="M7.52508 8.12828C7.76408 8.12828 8.00075 8.08121 8.22156 7.98974C8.44237 7.89828 8.64301 7.76422 8.81201 7.59522C8.98101 7.42621 9.11508 7.22558 9.20654 7.00476C9.298 6.78395 9.34508 6.54729 9.34508 6.30828C9.34508 6.06928 9.298 5.83261 9.20654 5.6118C9.11508 5.39098 8.98101 5.19035 8.81201 5.02135C8.64301 4.85234 8.44237 4.71828 8.22156 4.62682C8.00075 4.53536 7.76408 4.48828 7.52508 4.48828C7.04238 4.48828 6.57946 4.68003 6.23814 5.02135C5.89683 5.36266 5.70508 5.82559 5.70508 6.30828C5.70508 6.79098 5.89683 7.2539 6.23814 7.59522C6.57946 7.93653 7.04238 8.12828 7.52508 8.12828Z"
                                              stroke="#4C4A4A"
                                            ></path>
                                            <path
                                              d="M2.63672 5.24677C3.78589 0.195105 11.2701 0.200939 12.4134 5.25261C13.0842 8.21594 11.2409 10.7243 9.62506 12.2759C9.06044 12.8205 8.30658 13.1248 7.52214 13.1248C6.7377 13.1248 5.98385 12.8205 5.41922 12.2759C3.80923 10.7243 1.96589 8.21011 2.63672 5.24677Z"
                                              stroke="#4C4A4A"
                                            ></path>
                                          </g>
                                        </svg>
                                        Tredunlisted Villa
                                      </p>
                                      <div className="mb-3 d-flex gap-3 align-items-center flex-wrap">
                                        {/* <div className="bathdetailitems">
                                          <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M13.377 9.50781V10.1328C13.377 11.3266 12.7082 12.3641 11.7207 12.8891L12.127 14.5078H10.877L10.5645 13.2578C10.4582 13.2578 10.3582 13.2578 10.252 13.2578H5.25195C5.1457 13.2578 5.0457 13.2578 4.93945 13.2578L4.62695 14.5078H3.37695L3.7832 12.8891C2.7957 12.3641 2.12695 11.3266 2.12695 10.1328V9.50781H1.50195V8.25781H12.752V3.88281C12.752 3.71705 12.6861 3.55808 12.5689 3.44087C12.4517 3.32366 12.2927 3.25781 12.127 3.25781C11.8145 3.25781 11.577 3.47031 11.502 3.75156C11.8957 4.08906 12.127 4.58906 12.127 5.13281H8.37695C8.37695 4.63553 8.5745 4.15862 8.92613 3.80699C9.27776 3.45536 9.75467 3.25781 10.252 3.25781C10.2895 3.25781 10.3207 3.25781 10.3582 3.25781C10.6145 2.53281 11.3082 2.00781 12.127 2.00781C12.6242 2.00781 13.1011 2.20536 13.4528 2.55699C13.8044 2.90862 14.002 3.38553 14.002 3.88281V9.50781H13.377ZM12.127 9.50781H3.37695V10.1328C3.37695 10.6301 3.5745 11.107 3.92613 11.4586C4.27776 11.8103 4.75467 12.0078 5.25195 12.0078H10.252C10.7492 12.0078 11.2261 11.8103 11.5778 11.4586C11.9294 11.107 12.127 10.6301 12.127 10.1328V9.50781Z"
                                              fill="#0F0F0F"
                                            ></path>
                                          </svg>
                                          <span>2</span>
                                        </div>
                                        <div className="bathdetailitems">
                                          <svg
                                            width="12"
                                            height="12"
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <rect
                                              x="1.45508"
                                              y="1.21094"
                                              width="9.70215"
                                              height="9.70215"
                                              stroke="#1B1B1B"
                                            ></rect>
                                            <path
                                              d="M6.26562 1.17188V11.0887"
                                              stroke="#1B1B1B"
                                            ></path>
                                            <path
                                              d="M1.30664 6.12891L11.2235 6.12891"
                                              stroke="#1B1B1B"
                                            ></path>
                                          </svg>
                                          <span> 5000 Sqft</span>
                                        </div>
                                        <div className="bathdetailitems">
                                          <Image
                                            src="/_next/static/media/parking.86354047.png"
                                            alt=""
                                            className="w-72"
                                          />
                                          <span>Parking</span>
                                        </div> */}
                                      </div>
                                    </div>
                                    <div className="d-flex align-items-center md:gap-3 gap-1 flex-wrap">
                                      <button className="d-flex align-items-center justify-content-center">
                                        <svg
                                          width="16"
                                          height="16"
                                          viewBox="0 0 16 16"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <g clipPath="url(#clip0_8952_2064)">
                                            <path
                                              d="M14.5711 12.1281C14.5711 12.3531 14.5211 12.5844 14.4148 12.8094C14.3086 13.0344 14.1711 13.2469 13.9898 13.4469C13.6836 13.7844 13.3461 14.0281 12.9648 14.1844C12.5898 14.3406 12.1836 14.4219 11.7461 14.4219C11.1086 14.4219 10.4273 14.2719 9.70859 13.9656C8.98984 13.6594 8.27109 13.2469 7.55859 12.7281C6.83241 12.1969 6.14715 11.612 5.50859 10.9781C4.87657 10.3419 4.29366 9.65868 3.76484 8.93438C3.25234 8.22188 2.83984 7.50938 2.53984 6.80313C2.23984 6.09063 2.08984 5.40937 2.08984 4.75937C2.08984 4.33437 2.16484 3.92813 2.31484 3.55313C2.46484 3.17188 2.70234 2.82188 3.03359 2.50938C3.43359 2.11563 3.87109 1.92188 4.33359 1.92188C4.50859 1.92188 4.68359 1.95938 4.83984 2.03438C5.00234 2.10938 5.14609 2.22188 5.25859 2.38438L6.70859 4.42813C6.82109 4.58438 6.90234 4.72813 6.95859 4.86563C7.01484 4.99688 7.04609 5.12813 7.04609 5.24688C7.04609 5.39688 7.00234 5.54687 6.91484 5.69062C6.83359 5.83437 6.71484 5.98437 6.56484 6.13437L6.08984 6.62812C6.02109 6.69687 5.98984 6.77813 5.98984 6.87813C5.98984 6.92813 5.99609 6.97187 6.00859 7.02187C6.02734 7.07187 6.04609 7.10937 6.05859 7.14687C6.17109 7.35312 6.36484 7.62188 6.63984 7.94688C6.92109 8.27188 7.22109 8.60313 7.54609 8.93438C7.88359 9.26563 8.20859 9.57187 8.53984 9.85312C8.86484 10.1281 9.13359 10.3156 9.34609 10.4281C9.37734 10.4406 9.41484 10.4594 9.45859 10.4781C9.50859 10.4969 9.55859 10.5031 9.61484 10.5031C9.72109 10.5031 9.80234 10.4656 9.87109 10.3969L10.3461 9.92813C10.5023 9.77188 10.6523 9.65312 10.7961 9.57812C10.9398 9.49062 11.0836 9.44687 11.2398 9.44687C11.3586 9.44687 11.4836 9.47188 11.6211 9.52813C11.7586 9.58438 11.9023 9.66563 12.0586 9.77188L14.1273 11.2406C14.2898 11.3531 14.4023 11.4844 14.4711 11.6406C14.5336 11.7969 14.5711 11.9531 14.5711 12.1281Z"
                                              stroke="white"
                                              strokeMiterlimit="10"
                                            ></path>
                                          </g>
                                          <defs>
                                            <clipPath id="clip0_8952_2064">
                                              <rect
                                                width="15"
                                                height="15"
                                                fill="white"
                                                transform="translate(0.839844 0.671875)"
                                              ></rect>
                                            </clipPath>
                                          </defs>
                                        </svg>
                                        Call
                                      </button>
                                      <a
                                        target="_blank"
                                        href="mailto:contactus@thiyo.com"
                                      >
                                        <button className="d-flex align-items-center">
                                          <svg
                                            width="16"
                                            height="13"
                                            viewBox="0 0 16 13"
                                            fill="#000"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M15.5527 1.59162C15.5527 0.720524 14.8777 0.0078125 14.0527 0.0078125H2.05273C1.22773 0.0078125 0.552734 0.720524 0.552734 1.59162V11.0944C0.552734 11.9655 1.22773 12.6782 2.05273 12.6782H14.0527C14.8777 12.6782 15.5527 11.9655 15.5527 11.0944V1.59162ZM14.0527 1.59162L8.05273 5.55113L2.05273 1.59162H14.0527ZM14.0527 11.0944H2.05273V3.17542L8.05273 7.13493L14.0527 3.17542V11.0944Z"
                                              fill="white"
                                            ></path>
                                          </svg>
                                          Email
                                        </button>
                                      </a>
                                      <a
                                        target="_blank"
                                        href="https://wa.me/8238376353?text=Hello%20there!"
                                      >
                                        <button className="whatsapp d-flex align-items-center">
                                          <svg
                                            width="17"
                                            height="18"
                                            viewBox="0 0 17 18"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M8.57749 0.804688C4.13181 0.804688 0.508498 4.63043 0.508498 9.32449C0.508498 10.829 0.883042 12.2905 1.58328 13.5801L0.443359 17.999L4.71805 16.8126C5.89868 17.4918 7.22587 17.8529 8.57749 17.8529C13.0232 17.8529 16.6465 14.0271 16.6465 9.33309C16.6465 7.05484 15.8078 4.91414 14.2852 3.30647C12.7626 1.6902 10.7352 0.804688 8.57749 0.804688ZM8.58563 2.24042C10.3769 2.24042 12.0542 2.97977 13.3244 4.32093C14.5865 5.66209 15.2867 7.44171 15.2867 9.33309C15.2867 13.2362 12.2741 16.4086 8.57749 16.4086C7.37243 16.4086 6.1918 16.0733 5.16588 15.4199L4.92161 15.2737L2.38122 15.9787L3.05703 13.3652L2.89418 13.0901C2.22652 11.981 1.86826 10.6657 1.86826 9.32449C1.8764 5.42137 4.8809 2.24042 8.58563 2.24042ZM5.71955 5.38698C5.58928 5.38698 5.36943 5.43857 5.18216 5.6535C5.00303 5.86843 4.47378 6.39285 4.47378 7.43311C4.47378 8.48197 5.19845 9.48784 5.28801 9.63399C5.402 9.78014 6.72105 11.9294 8.74848 12.8407C9.22887 13.0729 9.60342 13.2018 9.89654 13.2964C10.3769 13.4597 10.8166 13.4339 11.1667 13.3824C11.5576 13.3222 12.3555 12.8665 12.5265 12.3679C12.6975 11.8693 12.6975 11.448 12.6486 11.3534C12.5916 11.2675 12.4614 11.2159 12.2578 11.1213C12.0542 11.0009 11.0609 10.4851 10.8818 10.4163C10.6945 10.3476 10.5805 10.3132 10.4258 10.5195C10.2955 10.7344 9.90468 11.2159 9.79069 11.3534C9.66856 11.4996 9.55456 11.5168 9.35915 11.4136C9.14745 11.3018 8.49607 11.0783 7.73069 10.3562C7.12817 9.78874 6.72919 9.09237 6.60706 8.87744C6.50935 8.67111 6.59892 8.54215 6.69662 8.44758C6.78619 8.35301 6.91647 8.19826 6.99789 8.0693C7.10374 7.94894 7.13631 7.85437 7.20145 7.71682C7.26658 7.57067 7.23401 7.45031 7.18516 7.34714C7.13631 7.25257 6.72919 6.18652 6.55821 5.76526C6.39536 5.35259 6.23252 5.40418 6.10224 5.39558C5.98825 5.39558 5.85797 5.38698 5.71955 5.38698Z"
                                              fill="white"
                                            ></path>
                                          </svg>
                                          WhatsApp
                                        </button>
                                      </a>
                                    </div>
                                  </div>
                                  <div className="sendIcon">
                                    <svg
                                      width="26"
                                      height="26"
                                      viewBox="0 0 26 26"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g clipPath="url(#clip0_8952_6971)">
                                        <path
                                          d="M9.2473 16.2664L12.1683 13.461M7.41227 9.94896L14.2661 7.8171C17.3408 6.86076 18.9721 8.55928 17.8924 11.5928L15.4855 18.355C13.8659 22.9053 11.3687 22.8496 9.93938 18.243L9.51123 16.8552C9.40165 16.5029 9.02241 16.108 8.67482 15.9843L7.30025 15.4951C2.75517 13.8809 2.80572 11.3783 7.41227 9.94896Z"
                                          stroke="#595959"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mb-3">
                          <div className="carddeatil carddeatil-sm">
                            <div className="carddeatil-sm-left">
                              <div className="position-relative h-100">
                                <div className="swiper swiper-creative swiper-3d swiper-initialized swiper-horizontal swiper-watch-progress mySwiper6">
                                  <div
                                    className="swiper-wrapper"
                                    style={{ cursor: "grab" }}
                                  >
                                    <div
                                      className="swiper-slide swiper-slide-visible swiper-slide-active"
                                      style={{
                                        width: "335px",
                                        zIndex: 6,
                                        transform:
                                          "translate3d(calc(0px), calc(0px), calc(0px)) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1)",
                                        opacity: 1,
                                      }}
                                    >
                                      <div className="productslider h-100 position-relative">
                                        <Image
                                          src={hotelsas}
                                          alt="emercan"
                                          className="w-100 h-100"
                                        />
                                      </div>
                                    </div>
                                    <div
                                      className="swiper-slide swiper-slide-next"
                                      style={{
                                        width: "335px",
                                        zIndex: 5,
                                        transform:
                                          "translate3d(calc(5% - 300px), 0px, -200px) rotateX(0deg) rotateY(-100deg) rotateZ(0deg) scale(1)",
                                        opacity: 1,
                                        transformOrigin: "right center",
                                      }}
                                    >
                                      <div className="productslider h-100 position-relative">
                                        <Image
                                          src={luxury}
                                          alt="luxury"
                                          className="w-100 h-100"
                                        />
                                      </div>
                                    </div>
                                    <div
                                      className="swiper-slide"
                                      style={{
                                        width: "335px",
                                        zIndex: 4,
                                        transform:
                                          "translate3d(calc(5% - 600px), 0px, -200px) rotateX(0deg) rotateY(-100deg) rotateZ(0deg) scale(1)",
                                        opacity: 1,
                                        transformOrigin: "right center",
                                      }}
                                    >
                                      <div className="productslider h-100 position-relative">
                                        <Image
                                          src={architecture}
                                          alt="architecture"
                                          className="w-100 h-100"
                                        />
                                      </div>
                                    </div>
                                    <div
                                      className="swiper-slide"
                                      style={{
                                        width: "335px",
                                        zIndex: 3,
                                        transform:
                                          "translate3d(calc(5% - 900px), 0px, -200px) rotateX(0deg) rotateY(-100deg) rotateZ(0deg) scale(1)",
                                        opacity: 1,
                                        transformOrigin: "right center",
                                      }}
                                    >
                                      <div className="productslider h-100 position-relative">
                                        <Image
                                          src={luxury}
                                          alt="luxury"
                                          className="w-100 h-100"
                                        />
                                      </div>
                                    </div>
                                    <div
                                      className="swiper-slide"
                                      style={{
                                        width: "335px",
                                        zIndex: 2,
                                        transform:
                                          "translate3d(calc(5% - 1200px), 0px, -200px) rotateX(0deg) rotateY(-100deg) rotateZ(0deg) scale(1)",
                                        opacity: 1,
                                        transformOrigin: "right center",
                                      }}
                                    >
                                      <div className="productslider h-100 position-relative">
                                        <Image
                                          src={architecture}
                                          alt="architecture"
                                          className="w-100 h-100"
                                        />
                                      </div>
                                    </div>
                                    <div
                                      className="swiper-slide"
                                      style={{
                                        width: "335px",
                                        zIndex: 1,
                                        transform:
                                          "translate3d(calc(5% - 1500px), 0px, -200px) rotateX(0deg) rotateY(-100deg) rotateZ(0deg) scale(1)",
                                        opacity: 1,
                                        transformOrigin: "right center",
                                      }}
                                    >
                                      <div className="productslider h-100 position-relative">
                                        <Image
                                          src={luxury}
                                          alt="luxury"
                                          className="w-100 h-100"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="swiper-button-prev swiper-button-disabled"></div>
                                  <div className="swiper-button-next"></div>
                                </div>
                                <div className="gallery cursor-pointer">
                                  <svg
                                    width="13"
                                    height="13"
                                    viewBox="0 0 13 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g clipPath="url(#clip0_8952_3543)">
                                      <path
                                        d="M5.23104 11.4587H8.16121C10.603 11.4587 11.5798 10.4819 11.5798 8.04012V5.10994C11.5798 2.66813 10.603 1.69141 8.16121 1.69141H5.23104C2.78923 1.69141 1.8125 2.66813 1.8125 5.10994V8.04012C1.8125 10.4819 2.78923 11.4587 5.23104 11.4587Z"
                                        stroke="black"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      ></path>
                                      <path
                                        d="M2.13965 9.96883L4.54728 8.35235C4.93308 8.09352 5.48982 8.12282 5.83655 8.42072L5.99771 8.56234C6.37864 8.88955 6.99397 8.88955 7.3749 8.56234L9.40648 6.81889C9.78741 6.49169 10.4027 6.49169 10.7837 6.81889L11.5797 7.5026M5.23098 5.59798C5.49003 5.59798 5.73846 5.49508 5.92163 5.31191C6.1048 5.12873 6.20771 4.8803 6.20771 4.62126C6.20771 4.36221 6.1048 4.11378 5.92163 3.93061C5.73846 3.74744 5.49003 3.64453 5.23098 3.64453C4.97194 3.64453 4.72351 3.74744 4.54033 3.93061C4.35716 4.11378 4.25426 4.36221 4.25426 4.62126C4.25426 4.8803 4.35716 5.12873 4.54033 5.31191C4.72351 5.49508 4.97194 5.59798 5.23098 5.59798Z"
                                        stroke="black"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      ></path>
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_8952_3543">
                                        <rect
                                          width="11.7207"
                                          height="11.7207"
                                          fill="white"
                                          transform="translate(0.835938 0.714844)"
                                        ></rect>
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  <span>6</span>
                                </div>
                                <div className="verified cursor-pointer">
                                  <span>
                                    <svg
                                      width="14"
                                      height="14"
                                      viewBox="0 0 14 14"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g clipPath="url(#clip0_8952_1986)">
                                        <path
                                          d="M5.48218 12.4697H8.78833C11.5435 12.4697 12.6455 11.3677 12.6455 8.61255V5.3064C12.6455 2.55127 11.5435 1.44922 8.78833 1.44922H5.48218C2.72705 1.44922 1.625 2.55127 1.625 5.3064V8.61255C1.625 11.3677 2.72705 12.4697 5.48218 12.4697Z"
                                          stroke="black"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                        <path
                                          d="M4.79297 6.96175L6.35237 8.52115L9.47668 5.40234"
                                          stroke="black"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_8952_1986">
                                          <rect
                                            width="13.2246"
                                            height="13.2246"
                                            fill="white"
                                            transform="translate(0.522461 0.347656)"
                                          ></rect>
                                        </clipPath>
                                      </defs>
                                    </svg>
                                    Verified
                                  </span>
                                </div>
                                <div className="card-like cursor-pointer">
                                  <svg
                                    width="21"
                                    height="21"
                                    viewBox="-2.4 -2.4 28.80 28.80"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0">
                                      <rect
                                        x="-2.4"
                                        y="-2.4"
                                        width="28.80"
                                        height="28.80"
                                        rx="14.4"
                                        fill="#ffffff"
                                        strokeWidth="0"
                                      ></rect>
                                    </g>
                                    <g
                                      id="SVGRepo_tracerCarrier"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></g>
                                    <g id="SVGRepo_iconCarrier">
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M11.993 5.09691C11.0387 4.25883 9.78328 3.75 8.40796 3.75C5.42122 3.75 3 6.1497 3 9.10988C3 10.473 3.50639 11.7242 4.35199 12.67L12 20.25L19.4216 12.8944L19.641 12.6631C20.4866 11.7172 21 10.473 21 9.10988C21 6.1497 18.5788 3.75 15.592 3.75C14.2167 3.75 12.9613 4.25883 12.007 5.09692L12 5.08998L11.993 5.09691ZM12 7.09938L12.0549 7.14755L12.9079 6.30208L12.9968 6.22399C13.6868 5.61806 14.5932 5.25 15.592 5.25C17.763 5.25 19.5 6.99073 19.5 9.10988C19.5 10.0813 19.1385 10.9674 18.5363 11.6481L18.3492 11.8453L12 18.1381L5.44274 11.6391C4.85393 10.9658 4.5 10.0809 4.5 9.10988C4.5 6.99073 6.23699 5.25 8.40796 5.25C9.40675 5.25 10.3132 5.61806 11.0032 6.22398L11.0921 6.30203L11.9452 7.14752L12 7.09938Z"
                                        fill="#af824a "
                                      ></path>
                                    </g>
                                  </svg>
                                </div>
                                <div className="hometype font-bold">
                                  AED 6000
                                </div>
                              </div>
                            </div>
                            <div className="carddeatil-sm-right">
                              <div className="apartment">
                                <div className="d-flex align-items-start justify-content-between h-100">
                                  <div className="d-flex align-items-start justify-content-start flex-column">
                                    <div>
                                      <span> villa</span>
                                      <h4 className="cursor-pointer prod-title">
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting indus...
                                      </h4>
                                      <p className="downtown prod-location">
                                        <svg
                                          width="15"
                                          height="15"
                                          viewBox="0 0 15 15"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <g clipPath="url(#clip0_8952_2013)">
                                            <path
                                              d="M7.52508 8.12828C7.76408 8.12828 8.00075 8.08121 8.22156 7.98974C8.44237 7.89828 8.64301 7.76422 8.81201 7.59522C8.98101 7.42621 9.11508 7.22558 9.20654 7.00476C9.298 6.78395 9.34508 6.54729 9.34508 6.30828C9.34508 6.06928 9.298 5.83261 9.20654 5.6118C9.11508 5.39098 8.98101 5.19035 8.81201 5.02135C8.64301 4.85234 8.44237 4.71828 8.22156 4.62682C8.00075 4.53536 7.76408 4.48828 7.52508 4.48828C7.04238 4.48828 6.57946 4.68003 6.23814 5.02135C5.89683 5.36266 5.70508 5.82559 5.70508 6.30828C5.70508 6.79098 5.89683 7.2539 6.23814 7.59522C6.57946 7.93653 7.04238 8.12828 7.52508 8.12828Z"
                                              stroke="#4C4A4A"
                                            ></path>
                                            <path
                                              d="M2.63672 5.24677C3.78589 0.195105 11.2701 0.200939 12.4134 5.25261C13.0842 8.21594 11.2409 10.7243 9.62506 12.2759C9.06044 12.8205 8.30658 13.1248 7.52214 13.1248C6.7377 13.1248 5.98385 12.8205 5.41922 12.2759C3.80923 10.7243 1.96589 8.21011 2.63672 5.24677Z"
                                              stroke="#4C4A4A"
                                            ></path>
                                          </g>
                                        </svg>
                                        Tredunlisted Villa
                                      </p>
                                      <div className="mb-3 d-flex gap-3 align-items-center flex-wrap">
                                        <div className="bathdetailitems">
                                          <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M13.377 9.50781V10.1328C13.377 11.3266 12.7082 12.3641 11.7207 12.8891L12.127 14.5078H10.877L10.5645 13.2578C10.4582 13.2578 10.3582 13.2578 10.252 13.2578H5.25195C5.1457 13.2578 5.0457 13.2578 4.93945 13.2578L4.62695 14.5078H3.37695L3.7832 12.8891C2.7957 12.3641 2.12695 11.3266 2.12695 10.1328V9.50781H1.50195V8.25781H12.752V3.88281C12.752 3.71705 12.6861 3.55808 12.5689 3.44087C12.4517 3.32366 12.2927 3.25781 12.127 3.25781C11.8145 3.25781 11.577 3.47031 11.502 3.75156C11.8957 4.08906 12.127 4.58906 12.127 5.13281H8.37695C8.37695 4.63553 8.5745 4.15862 8.92613 3.80699C9.27776 3.45536 9.75467 3.25781 10.252 3.25781C10.2895 3.25781 10.3207 3.25781 10.3582 3.25781C10.6145 2.53281 11.3082 2.00781 12.127 2.00781C12.6242 2.00781 13.1011 2.20536 13.4528 2.55699C13.8044 2.90862 14.002 3.38553 14.002 3.88281V9.50781H13.377ZM12.127 9.50781H3.37695V10.1328C3.37695 10.6301 3.5745 11.107 3.92613 11.4586C4.27776 11.8103 4.75467 12.0078 5.25195 12.0078H10.252C10.7492 12.0078 11.2261 11.8103 11.5778 11.4586C11.9294 11.107 12.127 10.6301 12.127 10.1328V9.50781Z"
                                              fill="#0F0F0F"
                                            ></path>
                                          </svg>
                                          <span>2</span>
                                        </div>
                                        <div className="bathdetailitems">
                                          <svg
                                            width="12"
                                            height="12"
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <rect
                                              x="1.45508"
                                              y="1.21094"
                                              width="9.70215"
                                              height="9.70215"
                                              stroke="#1B1B1B"
                                            ></rect>
                                            <path
                                              d="M6.26562 1.17188V11.0887"
                                              stroke="#1B1B1B"
                                            ></path>
                                            <path
                                              d="M1.30664 6.12891L11.2235 6.12891"
                                              stroke="#1B1B1B"
                                            ></path>
                                          </svg>
                                          <span> 5000 Sqft</span>
                                        </div>
                                        {/* <div className="bathdetailitems">
                                          <Image
                                            src="/_next/static/media/parking.86354047.png"
                                            alt=""
                                            className="w-72"
                                          />
                                          <span>Parking</span>
                                        </div> */}
                                      </div>
                                    </div>
                                    <div className="d-flex align-items-center md:gap-3 gap-1 flex-wrap">
                                      <button className="d-flex align-items-center justify-content-center">
                                        <svg
                                          width="16"
                                          height="16"
                                          viewBox="0 0 16 16"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <g clipPath="url(#clip0_8952_2064)">
                                            <path
                                              d="M14.5711 12.1281C14.5711 12.3531 14.5211 12.5844 14.4148 12.8094C14.3086 13.0344 14.1711 13.2469 13.9898 13.4469C13.6836 13.7844 13.3461 14.0281 12.9648 14.1844C12.5898 14.3406 12.1836 14.4219 11.7461 14.4219C11.1086 14.4219 10.4273 14.2719 9.70859 13.9656C8.98984 13.6594 8.27109 13.2469 7.55859 12.7281C6.83241 12.1969 6.14715 11.612 5.50859 10.9781C4.87657 10.3419 4.29366 9.65868 3.76484 8.93438C3.25234 8.22188 2.83984 7.50938 2.53984 6.80313C2.23984 6.09063 2.08984 5.40937 2.08984 4.75937C2.08984 4.33437 2.16484 3.92813 2.31484 3.55313C2.46484 3.17188 2.70234 2.82188 3.03359 2.50938C3.43359 2.11563 3.87109 1.92188 4.33359 1.92188C4.50859 1.92188 4.68359 1.95938 4.83984 2.03438C5.00234 2.10938 5.14609 2.22188 5.25859 2.38438L6.70859 4.42813C6.82109 4.58438 6.90234 4.72813 6.95859 4.86563C7.01484 4.99688 7.04609 5.12813 7.04609 5.24688C7.04609 5.39688 7.00234 5.54687 6.91484 5.69062C6.83359 5.83437 6.71484 5.98437 6.56484 6.13437L6.08984 6.62812C6.02109 6.69687 5.98984 6.77813 5.98984 6.87813C5.98984 6.92813 5.99609 6.97187 6.00859 7.02187C6.02734 7.07187 6.04609 7.10937 6.05859 7.14687C6.17109 7.35312 6.36484 7.62188 6.63984 7.94688C6.92109 8.27188 7.22109 8.60313 7.54609 8.93438C7.88359 9.26563 8.20859 9.57187 8.53984 9.85312C8.86484 10.1281 9.13359 10.3156 9.34609 10.4281C9.37734 10.4406 9.41484 10.4594 9.45859 10.4781C9.50859 10.4969 9.55859 10.5031 9.61484 10.5031C9.72109 10.5031 9.80234 10.4656 9.87109 10.3969L10.3461 9.92813C10.5023 9.77188 10.6523 9.65312 10.7961 9.57812C10.9398 9.49062 11.0836 9.44687 11.2398 9.44687C11.3586 9.44687 11.4836 9.47188 11.6211 9.52813C11.7586 9.58438 11.9023 9.66563 12.0586 9.77188L14.1273 11.2406C14.2898 11.3531 14.4023 11.4844 14.4711 11.6406C14.5336 11.7969 14.5711 11.9531 14.5711 12.1281Z"
                                              stroke="white"
                                              strokeMiterlimit="10"
                                            ></path>
                                          </g>
                                          <defs>
                                            <clipPath id="clip0_8952_2064">
                                              <rect
                                                width="15"
                                                height="15"
                                                fill="white"
                                                transform="translate(0.839844 0.671875)"
                                              ></rect>
                                            </clipPath>
                                          </defs>
                                        </svg>
                                        Call
                                      </button>
                                      <a
                                        target="_blank"
                                        href="mailto:contactus@thiyo.com"
                                      >
                                        <button className="d-flex align-items-center">
                                          <svg
                                            width="16"
                                            height="13"
                                            viewBox="0 0 16 13"
                                            fill="#000"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M15.5527 1.59162C15.5527 0.720524 14.8777 0.0078125 14.0527 0.0078125H2.05273C1.22773 0.0078125 0.552734 0.720524 0.552734 1.59162V11.0944C0.552734 11.9655 1.22773 12.6782 2.05273 12.6782H14.0527C14.8777 12.6782 15.5527 11.9655 15.5527 11.0944V1.59162ZM14.0527 1.59162L8.05273 5.55113L2.05273 1.59162H14.0527ZM14.0527 11.0944H2.05273V3.17542L8.05273 7.13493L14.0527 3.17542V11.0944Z"
                                              fill="white"
                                            ></path>
                                          </svg>
                                          Email
                                        </button>
                                      </a>
                                      <a
                                        target="_blank"
                                        href="https://wa.me/8238376353?text=Hello%20there!"
                                      >
                                        <button className="whatsapp d-flex align-items-center">
                                          <svg
                                            width="17"
                                            height="18"
                                            viewBox="0 0 17 18"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M8.57749 0.804688C4.13181 0.804688 0.508498 4.63043 0.508498 9.32449C0.508498 10.829 0.883042 12.2905 1.58328 13.5801L0.443359 17.999L4.71805 16.8126C5.89868 17.4918 7.22587 17.8529 8.57749 17.8529C13.0232 17.8529 16.6465 14.0271 16.6465 9.33309C16.6465 7.05484 15.8078 4.91414 14.2852 3.30647C12.7626 1.6902 10.7352 0.804688 8.57749 0.804688ZM8.58563 2.24042C10.3769 2.24042 12.0542 2.97977 13.3244 4.32093C14.5865 5.66209 15.2867 7.44171 15.2867 9.33309C15.2867 13.2362 12.2741 16.4086 8.57749 16.4086C7.37243 16.4086 6.1918 16.0733 5.16588 15.4199L4.92161 15.2737L2.38122 15.9787L3.05703 13.3652L2.89418 13.0901C2.22652 11.981 1.86826 10.6657 1.86826 9.32449C1.8764 5.42137 4.8809 2.24042 8.58563 2.24042ZM5.71955 5.38698C5.58928 5.38698 5.36943 5.43857 5.18216 5.6535C5.00303 5.86843 4.47378 6.39285 4.47378 7.43311C4.47378 8.48197 5.19845 9.48784 5.28801 9.63399C5.402 9.78014 6.72105 11.9294 8.74848 12.8407C9.22887 13.0729 9.60342 13.2018 9.89654 13.2964C10.3769 13.4597 10.8166 13.4339 11.1667 13.3824C11.5576 13.3222 12.3555 12.8665 12.5265 12.3679C12.6975 11.8693 12.6975 11.448 12.6486 11.3534C12.5916 11.2675 12.4614 11.2159 12.2578 11.1213C12.0542 11.0009 11.0609 10.4851 10.8818 10.4163C10.6945 10.3476 10.5805 10.3132 10.4258 10.5195C10.2955 10.7344 9.90468 11.2159 9.79069 11.3534C9.66856 11.4996 9.55456 11.5168 9.35915 11.4136C9.14745 11.3018 8.49607 11.0783 7.73069 10.3562C7.12817 9.78874 6.72919 9.09237 6.60706 8.87744C6.50935 8.67111 6.59892 8.54215 6.69662 8.44758C6.78619 8.35301 6.91647 8.19826 6.99789 8.0693C7.10374 7.94894 7.13631 7.85437 7.20145 7.71682C7.26658 7.57067 7.23401 7.45031 7.18516 7.34714C7.13631 7.25257 6.72919 6.18652 6.55821 5.76526C6.39536 5.35259 6.23252 5.40418 6.10224 5.39558C5.98825 5.39558 5.85797 5.38698 5.71955 5.38698Z"
                                              fill="white"
                                            ></path>
                                          </svg>
                                          WhatsApp
                                        </button>
                                      </a>
                                    </div>
                                  </div>
                                  <div className="sendIcon">
                                    <svg
                                      width="26"
                                      height="26"
                                      viewBox="0 0 26 26"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g clipPath="url(#clip0_8952_6971)">
                                        <path
                                          d="M9.2473 16.2664L12.1683 13.461M7.41227 9.94896L14.2661 7.8171C17.3408 6.86076 18.9721 8.55928 17.8924 11.5928L15.4855 18.355C13.8659 22.9053 11.3687 22.8496 9.93938 18.243L9.51123 16.8552C9.40165 16.5029 9.02241 16.108 8.67482 15.9843L7.30025 15.4951C2.75517 13.8809 2.80572 11.3783 7.41227 9.94896Z"
                                          stroke="#595959"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mb-3">
                          <div className="carddeatil carddeatil-sm">
                            <div className="carddeatil-sm-left">
                              <div className="position-relative h-100">
                                <div className="swiper swiper-creative swiper-3d swiper-initialized swiper-horizontal swiper-watch-progress mySwiper6">
                                  <div
                                    className="swiper-wrapper"
                                    style={{ cursor: "grab" }}
                                  >
                                    <div
                                      className="swiper-slide swiper-slide-visible swiper-slide-active"
                                      style={{
                                        width: "335px",
                                        zIndex: 6,
                                        transform:
                                          "translate3d(calc(0px), calc(0px), calc(0px)) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1)",
                                        opacity: 1,
                                      }}
                                    >
                                      <div className="productslider h-100 position-relative">
                                        <Image
                                          src={beautiful}
                                          alt="beautiful"
                                          className="w-100 h-100"
                                        />
                                      </div>
                                    </div>
                                    <div
                                      className="swiper-slide swiper-slide-next"
                                      style={{
                                        width: "335px",
                                        zIndex: 5,
                                        transform:
                                          "translate3d(calc(5% - 300px), 0px, -200px) rotateX(0deg) rotateY(-100deg) rotateZ(0deg) scale(1)",
                                        opacity: 1,
                                        transformOrigin: "right center",
                                      }}
                                    >
                                      <div className="productslider h-100 position-relative">
                                        <Image
                                          src={emercan}
                                          alt="emercan"
                                          className="w-100 h-100"
                                        />
                                      </div>
                                    </div>
                                    <div
                                      className="swiper-slide"
                                      style={{
                                        width: "335px",
                                        zIndex: 4,
                                        transform:
                                          "translate3d(calc(5% - 600px), 0px, -200px) rotateX(0deg) rotateY(-100deg) rotateZ(0deg) scale(1)",
                                        opacity: 1,
                                        transformOrigin: "right center",
                                      }}
                                    >
                                      <div className="productslider h-100 position-relative">
                                        <Image
                                          src={emercan}
                                          alt="emercan"
                                          className="w-100 h-100"
                                        />
                                      </div>
                                    </div>
                                    <div
                                      className="swiper-slide"
                                      style={{
                                        width: "335px",
                                        zIndex: 3,
                                        transform:
                                          "translate3d(calc(5% - 900px), 0px, -200px) rotateX(0deg) rotateY(-100deg) rotateZ(0deg) scale(1)",
                                        opacity: 1,
                                        transformOrigin: "right center",
                                      }}
                                    >
                                      <div className="productslider h-100 position-relative">
                                        <Image
                                          src={emercan}
                                          alt="emercan"
                                          className="w-100 h-100"
                                        />
                                      </div>
                                    </div>
                                    <div
                                      className="swiper-slide"
                                      style={{
                                        width: "335px",
                                        zIndex: 2,
                                        transform:
                                          "translate3d(calc(5% - 1200px), 0px, -200px) rotateX(0deg) rotateY(-100deg) rotateZ(0deg) scale(1)",
                                        opacity: 1,
                                        transformOrigin: "right center",
                                      }}
                                    >
                                      <div className="productslider h-100 position-relative">
                                        <Image
                                          src={emercan}
                                          alt="emercan"
                                          className="w-100 h-100"
                                        />
                                      </div>
                                    </div>
                                    <div
                                      className="swiper-slide"
                                      style={{
                                        width: "335px",
                                        zIndex: 1,
                                        transform:
                                          "translate3d(calc(5% - 1500px), 0px, -200px) rotateX(0deg) rotateY(-100deg) rotateZ(0deg) scale(1)",
                                        opacity: 1,
                                        transformOrigin: "right center",
                                      }}
                                    >
                                      <div className="productslider h-100 position-relative">
                                        <Image
                                          src={emercan}
                                          alt="emercan"
                                          className="w-100 h-100"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="swiper-button-prev swiper-button-disabled"></div>
                                  <div className="swiper-button-next"></div>
                                </div>
                                <div className="gallery cursor-pointer">
                                  <svg
                                    width="13"
                                    height="13"
                                    viewBox="0 0 13 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g clipPath="url(#clip0_8952_3543)">
                                      <path
                                        d="M5.23104 11.4587H8.16121C10.603 11.4587 11.5798 10.4819 11.5798 8.04012V5.10994C11.5798 2.66813 10.603 1.69141 8.16121 1.69141H5.23104C2.78923 1.69141 1.8125 2.66813 1.8125 5.10994V8.04012C1.8125 10.4819 2.78923 11.4587 5.23104 11.4587Z"
                                        stroke="black"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      ></path>
                                      <path
                                        d="M2.13965 9.96883L4.54728 8.35235C4.93308 8.09352 5.48982 8.12282 5.83655 8.42072L5.99771 8.56234C6.37864 8.88955 6.99397 8.88955 7.3749 8.56234L9.40648 6.81889C9.78741 6.49169 10.4027 6.49169 10.7837 6.81889L11.5797 7.5026M5.23098 5.59798C5.49003 5.59798 5.73846 5.49508 5.92163 5.31191C6.1048 5.12873 6.20771 4.8803 6.20771 4.62126C6.20771 4.36221 6.1048 4.11378 5.92163 3.93061C5.73846 3.74744 5.49003 3.64453 5.23098 3.64453C4.97194 3.64453 4.72351 3.74744 4.54033 3.93061C4.35716 4.11378 4.25426 4.36221 4.25426 4.62126C4.25426 4.8803 4.35716 5.12873 4.54033 5.31191C4.72351 5.49508 4.97194 5.59798 5.23098 5.59798Z"
                                        stroke="black"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      ></path>
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_8952_3543">
                                        <rect
                                          width="11.7207"
                                          height="11.7207"
                                          fill="white"
                                          transform="translate(0.835938 0.714844)"
                                        ></rect>
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  <span>6</span>
                                </div>
                                <div className="verified cursor-pointer">
                                  <span>
                                    <svg
                                      width="14"
                                      height="14"
                                      viewBox="0 0 14 14"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g clipPath="url(#clip0_8952_1986)">
                                        <path
                                          d="M5.48218 12.4697H8.78833C11.5435 12.4697 12.6455 11.3677 12.6455 8.61255V5.3064C12.6455 2.55127 11.5435 1.44922 8.78833 1.44922H5.48218C2.72705 1.44922 1.625 2.55127 1.625 5.3064V8.61255C1.625 11.3677 2.72705 12.4697 5.48218 12.4697Z"
                                          stroke="black"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                        <path
                                          d="M4.79297 6.96175L6.35237 8.52115L9.47668 5.40234"
                                          stroke="black"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_8952_1986">
                                          <rect
                                            width="13.2246"
                                            height="13.2246"
                                            fill="white"
                                            transform="translate(0.522461 0.347656)"
                                          ></rect>
                                        </clipPath>
                                      </defs>
                                    </svg>
                                    Verified
                                  </span>
                                </div>
                                <div className="card-like cursor-pointer">
                                  <svg
                                    width="21"
                                    height="21"
                                    viewBox="-2.4 -2.4 28.80 28.80"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0">
                                      <rect
                                        x="-2.4"
                                        y="-2.4"
                                        width="28.80"
                                        height="28.80"
                                        rx="14.4"
                                        fill="#ffffff"
                                        strokeWidth="0"
                                      ></rect>
                                    </g>
                                    <g
                                      id="SVGRepo_tracerCarrier"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></g>
                                    <g id="SVGRepo_iconCarrier">
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M11.993 5.09691C11.0387 4.25883 9.78328 3.75 8.40796 3.75C5.42122 3.75 3 6.1497 3 9.10988C3 10.473 3.50639 11.7242 4.35199 12.67L12 20.25L19.4216 12.8944L19.641 12.6631C20.4866 11.7172 21 10.473 21 9.10988C21 6.1497 18.5788 3.75 15.592 3.75C14.2167 3.75 12.9613 4.25883 12.007 5.09692L12 5.08998L11.993 5.09691ZM12 7.09938L12.0549 7.14755L12.9079 6.30208L12.9968 6.22399C13.6868 5.61806 14.5932 5.25 15.592 5.25C17.763 5.25 19.5 6.99073 19.5 9.10988C19.5 10.0813 19.1385 10.9674 18.5363 11.6481L18.3492 11.8453L12 18.1381L5.44274 11.6391C4.85393 10.9658 4.5 10.0809 4.5 9.10988C4.5 6.99073 6.23699 5.25 8.40796 5.25C9.40675 5.25 10.3132 5.61806 11.0032 6.22398L11.0921 6.30203L11.9452 7.14752L12 7.09938Z"
                                        fill="#af824a "
                                      ></path>
                                    </g>
                                  </svg>
                                </div>
                                <div className="hometype font-bold">
                                  AED 6000
                                </div>
                              </div>
                            </div>
                            <div className="carddeatil-sm-right">
                              <div className="apartment">
                                <div className="d-flex align-items-start justify-content-between h-100">
                                  <div className="d-flex align-items-start justify-content-start flex-column">
                                    <div>
                                      <span> villa</span>
                                      <h4 className="cursor-pointer prod-title">
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting indus...
                                      </h4>
                                      <p className="downtown prod-location">
                                        <svg
                                          width="15"
                                          height="15"
                                          viewBox="0 0 15 15"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <g clipPath="url(#clip0_8952_2013)">
                                            <path
                                              d="M7.52508 8.12828C7.76408 8.12828 8.00075 8.08121 8.22156 7.98974C8.44237 7.89828 8.64301 7.76422 8.81201 7.59522C8.98101 7.42621 9.11508 7.22558 9.20654 7.00476C9.298 6.78395 9.34508 6.54729 9.34508 6.30828C9.34508 6.06928 9.298 5.83261 9.20654 5.6118C9.11508 5.39098 8.98101 5.19035 8.81201 5.02135C8.64301 4.85234 8.44237 4.71828 8.22156 4.62682C8.00075 4.53536 7.76408 4.48828 7.52508 4.48828C7.04238 4.48828 6.57946 4.68003 6.23814 5.02135C5.89683 5.36266 5.70508 5.82559 5.70508 6.30828C5.70508 6.79098 5.89683 7.2539 6.23814 7.59522C6.57946 7.93653 7.04238 8.12828 7.52508 8.12828Z"
                                              stroke="#4C4A4A"
                                            ></path>
                                            <path
                                              d="M2.63672 5.24677C3.78589 0.195105 11.2701 0.200939 12.4134 5.25261C13.0842 8.21594 11.2409 10.7243 9.62506 12.2759C9.06044 12.8205 8.30658 13.1248 7.52214 13.1248C6.7377 13.1248 5.98385 12.8205 5.41922 12.2759C3.80923 10.7243 1.96589 8.21011 2.63672 5.24677Z"
                                              stroke="#4C4A4A"
                                            ></path>
                                          </g>
                                        </svg>
                                        Tredunlisted Villa
                                      </p>
                                      <div className="mb-3 d-flex gap-3 align-items-center flex-wrap">
                                        <div className="bathdetailitems">
                                          <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M13.377 9.50781V10.1328C13.377 11.3266 12.7082 12.3641 11.7207 12.8891L12.127 14.5078H10.877L10.5645 13.2578C10.4582 13.2578 10.3582 13.2578 10.252 13.2578H5.25195C5.1457 13.2578 5.0457 13.2578 4.93945 13.2578L4.62695 14.5078H3.37695L3.7832 12.8891C2.7957 12.3641 2.12695 11.3266 2.12695 10.1328V9.50781H1.50195V8.25781H12.752V3.88281C12.752 3.71705 12.6861 3.55808 12.5689 3.44087C12.4517 3.32366 12.2927 3.25781 12.127 3.25781C11.8145 3.25781 11.577 3.47031 11.502 3.75156C11.8957 4.08906 12.127 4.58906 12.127 5.13281H8.37695C8.37695 4.63553 8.5745 4.15862 8.92613 3.80699C9.27776 3.45536 9.75467 3.25781 10.252 3.25781C10.2895 3.25781 10.3207 3.25781 10.3582 3.25781C10.6145 2.53281 11.3082 2.00781 12.127 2.00781C12.6242 2.00781 13.1011 2.20536 13.4528 2.55699C13.8044 2.90862 14.002 3.38553 14.002 3.88281V9.50781H13.377ZM12.127 9.50781H3.37695V10.1328C3.37695 10.6301 3.5745 11.107 3.92613 11.4586C4.27776 11.8103 4.75467 12.0078 5.25195 12.0078H10.252C10.7492 12.0078 11.2261 11.8103 11.5778 11.4586C11.9294 11.107 12.127 10.6301 12.127 10.1328V9.50781Z"
                                              fill="#0F0F0F"
                                            ></path>
                                          </svg>
                                          <span>2</span>
                                        </div>
                                        <div className="bathdetailitems">
                                          <svg
                                            width="12"
                                            height="12"
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <rect
                                              x="1.45508"
                                              y="1.21094"
                                              width="9.70215"
                                              height="9.70215"
                                              stroke="#1B1B1B"
                                            ></rect>
                                            <path
                                              d="M6.26562 1.17188V11.0887"
                                              stroke="#1B1B1B"
                                            ></path>
                                            <path
                                              d="M1.30664 6.12891L11.2235 6.12891"
                                              stroke="#1B1B1B"
                                            ></path>
                                          </svg>
                                          <span> 5000 Sqft</span>
                                        </div>
                                        {/* <div className="bathdetailitems">
                                          <Image
                                            src="/_next/static/media/parking.86354047.png"
                                            alt=""
                                            className="w-72"
                                          />
                                          <span>Parking</span>
                                        </div> */}
                                      </div>
                                    </div>
                                    <div className="d-flex align-items-center md:gap-3 gap-1 flex-wrap">
                                      <button className="d-flex align-items-center justify-content-center">
                                        <svg
                                          width="16"
                                          height="16"
                                          viewBox="0 0 16 16"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <g clipPath="url(#clip0_8952_2064)">
                                            <path
                                              d="M14.5711 12.1281C14.5711 12.3531 14.5211 12.5844 14.4148 12.8094C14.3086 13.0344 14.1711 13.2469 13.9898 13.4469C13.6836 13.7844 13.3461 14.0281 12.9648 14.1844C12.5898 14.3406 12.1836 14.4219 11.7461 14.4219C11.1086 14.4219 10.4273 14.2719 9.70859 13.9656C8.98984 13.6594 8.27109 13.2469 7.55859 12.7281C6.83241 12.1969 6.14715 11.612 5.50859 10.9781C4.87657 10.3419 4.29366 9.65868 3.76484 8.93438C3.25234 8.22188 2.83984 7.50938 2.53984 6.80313C2.23984 6.09063 2.08984 5.40937 2.08984 4.75937C2.08984 4.33437 2.16484 3.92813 2.31484 3.55313C2.46484 3.17188 2.70234 2.82188 3.03359 2.50938C3.43359 2.11563 3.87109 1.92188 4.33359 1.92188C4.50859 1.92188 4.68359 1.95938 4.83984 2.03438C5.00234 2.10938 5.14609 2.22188 5.25859 2.38438L6.70859 4.42813C6.82109 4.58438 6.90234 4.72813 6.95859 4.86563C7.01484 4.99688 7.04609 5.12813 7.04609 5.24688C7.04609 5.39688 7.00234 5.54687 6.91484 5.69062C6.83359 5.83437 6.71484 5.98437 6.56484 6.13437L6.08984 6.62812C6.02109 6.69687 5.98984 6.77813 5.98984 6.87813C5.98984 6.92813 5.99609 6.97187 6.00859 7.02187C6.02734 7.07187 6.04609 7.10937 6.05859 7.14687C6.17109 7.35312 6.36484 7.62188 6.63984 7.94688C6.92109 8.27188 7.22109 8.60313 7.54609 8.93438C7.88359 9.26563 8.20859 9.57187 8.53984 9.85312C8.86484 10.1281 9.13359 10.3156 9.34609 10.4281C9.37734 10.4406 9.41484 10.4594 9.45859 10.4781C9.50859 10.4969 9.55859 10.5031 9.61484 10.5031C9.72109 10.5031 9.80234 10.4656 9.87109 10.3969L10.3461 9.92813C10.5023 9.77188 10.6523 9.65312 10.7961 9.57812C10.9398 9.49062 11.0836 9.44687 11.2398 9.44687C11.3586 9.44687 11.4836 9.47188 11.6211 9.52813C11.7586 9.58438 11.9023 9.66563 12.0586 9.77188L14.1273 11.2406C14.2898 11.3531 14.4023 11.4844 14.4711 11.6406C14.5336 11.7969 14.5711 11.9531 14.5711 12.1281Z"
                                              stroke="white"
                                              strokeMiterlimit="10"
                                            ></path>
                                          </g>
                                          <defs>
                                            <clipPath id="clip0_8952_2064">
                                              <rect
                                                width="15"
                                                height="15"
                                                fill="white"
                                                transform="translate(0.839844 0.671875)"
                                              ></rect>
                                            </clipPath>
                                          </defs>
                                        </svg>
                                        Call
                                      </button>
                                      <a
                                        target="_blank"
                                        href="mailto:contactus@thiyo.com"
                                      >
                                        <button className="d-flex align-items-center">
                                          <svg
                                            width="16"
                                            height="13"
                                            viewBox="0 0 16 13"
                                            fill="#000"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M15.5527 1.59162C15.5527 0.720524 14.8777 0.0078125 14.0527 0.0078125H2.05273C1.22773 0.0078125 0.552734 0.720524 0.552734 1.59162V11.0944C0.552734 11.9655 1.22773 12.6782 2.05273 12.6782H14.0527C14.8777 12.6782 15.5527 11.9655 15.5527 11.0944V1.59162ZM14.0527 1.59162L8.05273 5.55113L2.05273 1.59162H14.0527ZM14.0527 11.0944H2.05273V3.17542L8.05273 7.13493L14.0527 3.17542V11.0944Z"
                                              fill="white"
                                            ></path>
                                          </svg>
                                          Email
                                        </button>
                                      </a>
                                      <a
                                        target="_blank"
                                        href="https://wa.me/8238376353?text=Hello%20there!"
                                      >
                                        <button className="whatsapp d-flex align-items-center">
                                          <svg
                                            width="17"
                                            height="18"
                                            viewBox="0 0 17 18"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M8.57749 0.804688C4.13181 0.804688 0.508498 4.63043 0.508498 9.32449C0.508498 10.829 0.883042 12.2905 1.58328 13.5801L0.443359 17.999L4.71805 16.8126C5.89868 17.4918 7.22587 17.8529 8.57749 17.8529C13.0232 17.8529 16.6465 14.0271 16.6465 9.33309C16.6465 7.05484 15.8078 4.91414 14.2852 3.30647C12.7626 1.6902 10.7352 0.804688 8.57749 0.804688ZM8.58563 2.24042C10.3769 2.24042 12.0542 2.97977 13.3244 4.32093C14.5865 5.66209 15.2867 7.44171 15.2867 9.33309C15.2867 13.2362 12.2741 16.4086 8.57749 16.4086C7.37243 16.4086 6.1918 16.0733 5.16588 15.4199L4.92161 15.2737L2.38122 15.9787L3.05703 13.3652L2.89418 13.0901C2.22652 11.981 1.86826 10.6657 1.86826 9.32449C1.8764 5.42137 4.8809 2.24042 8.58563 2.24042ZM5.71955 5.38698C5.58928 5.38698 5.36943 5.43857 5.18216 5.6535C5.00303 5.86843 4.47378 6.39285 4.47378 7.43311C4.47378 8.48197 5.19845 9.48784 5.28801 9.63399C5.402 9.78014 6.72105 11.9294 8.74848 12.8407C9.22887 13.0729 9.60342 13.2018 9.89654 13.2964C10.3769 13.4597 10.8166 13.4339 11.1667 13.3824C11.5576 13.3222 12.3555 12.8665 12.5265 12.3679C12.6975 11.8693 12.6975 11.448 12.6486 11.3534C12.5916 11.2675 12.4614 11.2159 12.2578 11.1213C12.0542 11.0009 11.0609 10.4851 10.8818 10.4163C10.6945 10.3476 10.5805 10.3132 10.4258 10.5195C10.2955 10.7344 9.90468 11.2159 9.79069 11.3534C9.66856 11.4996 9.55456 11.5168 9.35915 11.4136C9.14745 11.3018 8.49607 11.0783 7.73069 10.3562C7.12817 9.78874 6.72919 9.09237 6.60706 8.87744C6.50935 8.67111 6.59892 8.54215 6.69662 8.44758C6.78619 8.35301 6.91647 8.19826 6.99789 8.0693C7.10374 7.94894 7.13631 7.85437 7.20145 7.71682C7.26658 7.57067 7.23401 7.45031 7.18516 7.34714C7.13631 7.25257 6.72919 6.18652 6.55821 5.76526C6.39536 5.35259 6.23252 5.40418 6.10224 5.39558C5.98825 5.39558 5.85797 5.38698 5.71955 5.38698Z"
                                              fill="white"
                                            ></path>
                                          </svg>
                                          WhatsApp
                                        </button>
                                      </a>
                                    </div>
                                  </div>
                                  <div className="sendIcon">
                                    <svg
                                      width="26"
                                      height="26"
                                      viewBox="0 0 26 26"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g clipPath="url(#clip0_8952_6971)">
                                        <path
                                          d="M9.2473 16.2664L12.1683 13.461M7.41227 9.94896L14.2661 7.8171C17.3408 6.86076 18.9721 8.55928 17.8924 11.5928L15.4855 18.355C13.8659 22.9053 11.3687 22.8496 9.93938 18.243L9.51123 16.8552C9.40165 16.5029 9.02241 16.108 8.67482 15.9843L7.30025 15.4951C2.75517 13.8809 2.80572 11.3783 7.41227 9.94896Z"
                                          stroke="#595959"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mb-3">
                          <div className="carddeatil carddeatil-sm">
                            <div className="carddeatil-sm-left">
                              <div className="position-relative h-100">
                                <div className="swiper swiper-creative swiper-3d swiper-initialized swiper-horizontal swiper-watch-progress mySwiper6">
                                  <div
                                    className="swiper-wrapper"
                                    style={{ cursor: "grab" }}
                                  >
                                    <div
                                      className="swiper-slide swiper-slide-visible swiper-slide-active"
                                      style={{
                                        width: "335px",
                                        zIndex: 6,
                                        transform:
                                          "translate3d(calc(0px), calc(0px), calc(0px)) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1)",
                                        opacity: 1,
                                      }}
                                    >
                                      <div className="productslider h-100 position-relative">
                                        <Image
                                          src={puvoor}
                                          alt="puvoor"
                                          className="w-100 h-100"
                                        />
                                      </div>
                                    </div>
                                    <div
                                      className="swiper-slide swiper-slide-next"
                                      style={{
                                        width: "335px",
                                        zIndex: 5,
                                        transform:
                                          "translate3d(calc(5% - 300px), 0px, -200px) rotateX(0deg) rotateY(-100deg) rotateZ(0deg) scale(1)",
                                        opacity: 1,
                                        transformOrigin: "right center",
                                      }}
                                    >
                                      <div className="productslider h-100 position-relative">
                                        <Image
                                          src={emercan}
                                          alt="emercan"
                                          className="w-100 h-100"
                                        />
                                      </div>
                                    </div>
                                    <div
                                      className="swiper-slide"
                                      style={{
                                        width: "335px",
                                        zIndex: 4,
                                        transform:
                                          "translate3d(calc(5% - 600px), 0px, -200px) rotateX(0deg) rotateY(-100deg) rotateZ(0deg) scale(1)",
                                        opacity: 1,
                                        transformOrigin: "right center",
                                      }}
                                    >
                                      <div className="productslider h-100 position-relative">
                                        <Image
                                          src={emercan}
                                          alt="emercan"
                                          className="w-100 h-100"
                                        />
                                      </div>
                                    </div>
                                    <div
                                      className="swiper-slide"
                                      style={{
                                        width: "335px",
                                        zIndex: 3,
                                        transform:
                                          "translate3d(calc(5% - 900px), 0px, -200px) rotateX(0deg) rotateY(-100deg) rotateZ(0deg) scale(1)",
                                        opacity: 1,
                                        transformOrigin: "right center",
                                      }}
                                    >
                                      <div className="productslider h-100 position-relative">
                                        <Image
                                          src={emercan}
                                          alt="emercan"
                                          className="w-100 h-100"
                                        />
                                      </div>
                                    </div>
                                    <div
                                      className="swiper-slide"
                                      style={{
                                        width: "335px",
                                        zIndex: 2,
                                        transform:
                                          "translate3d(calc(5% - 1200px), 0px, -200px) rotateX(0deg) rotateY(-100deg) rotateZ(0deg) scale(1)",
                                        opacity: 1,
                                        transformOrigin: "right center",
                                      }}
                                    >
                                      <div className="productslider h-100 position-relative">
                                        <Image
                                          src={emercan}
                                          alt="emercan"
                                          className="w-100 h-100"
                                        />
                                      </div>
                                    </div>
                                    <div
                                      className="swiper-slide"
                                      style={{
                                        width: "335px",
                                        zIndex: 1,
                                        transform:
                                          "translate3d(calc(5% - 1500px), 0px, -200px) rotateX(0deg) rotateY(-100deg) rotateZ(0deg) scale(1)",
                                        opacity: 1,
                                        transformOrigin: "right center",
                                      }}
                                    >
                                      <div className="productslider h-100 position-relative">
                                        <Image
                                          src={emercan}
                                          alt="emercan"
                                          className="w-100 h-100"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="swiper-button-prev swiper-button-disabled"></div>
                                  <div className="swiper-button-next"></div>
                                </div>
                                <div className="gallery cursor-pointer">
                                  <svg
                                    width="13"
                                    height="13"
                                    viewBox="0 0 13 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g clipPath="url(#clip0_8952_3543)">
                                      <path
                                        d="M5.23104 11.4587H8.16121C10.603 11.4587 11.5798 10.4819 11.5798 8.04012V5.10994C11.5798 2.66813 10.603 1.69141 8.16121 1.69141H5.23104C2.78923 1.69141 1.8125 2.66813 1.8125 5.10994V8.04012C1.8125 10.4819 2.78923 11.4587 5.23104 11.4587Z"
                                        stroke="black"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      ></path>
                                      <path
                                        d="M2.13965 9.96883L4.54728 8.35235C4.93308 8.09352 5.48982 8.12282 5.83655 8.42072L5.99771 8.56234C6.37864 8.88955 6.99397 8.88955 7.3749 8.56234L9.40648 6.81889C9.78741 6.49169 10.4027 6.49169 10.7837 6.81889L11.5797 7.5026M5.23098 5.59798C5.49003 5.59798 5.73846 5.49508 5.92163 5.31191C6.1048 5.12873 6.20771 4.8803 6.20771 4.62126C6.20771 4.36221 6.1048 4.11378 5.92163 3.93061C5.73846 3.74744 5.49003 3.64453 5.23098 3.64453C4.97194 3.64453 4.72351 3.74744 4.54033 3.93061C4.35716 4.11378 4.25426 4.36221 4.25426 4.62126C4.25426 4.8803 4.35716 5.12873 4.54033 5.31191C4.72351 5.49508 4.97194 5.59798 5.23098 5.59798Z"
                                        stroke="black"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      ></path>
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_8952_3543">
                                        <rect
                                          width="11.7207"
                                          height="11.7207"
                                          fill="white"
                                          transform="translate(0.835938 0.714844)"
                                        ></rect>
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  <span>6</span>
                                </div>
                                <div className="verified cursor-pointer">
                                  <span>
                                    <svg
                                      width="14"
                                      height="14"
                                      viewBox="0 0 14 14"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g clipPath="url(#clip0_8952_1986)">
                                        <path
                                          d="M5.48218 12.4697H8.78833C11.5435 12.4697 12.6455 11.3677 12.6455 8.61255V5.3064C12.6455 2.55127 11.5435 1.44922 8.78833 1.44922H5.48218C2.72705 1.44922 1.625 2.55127 1.625 5.3064V8.61255C1.625 11.3677 2.72705 12.4697 5.48218 12.4697Z"
                                          stroke="black"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                        <path
                                          d="M4.79297 6.96175L6.35237 8.52115L9.47668 5.40234"
                                          stroke="black"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_8952_1986">
                                          <rect
                                            width="13.2246"
                                            height="13.2246"
                                            fill="white"
                                            transform="translate(0.522461 0.347656)"
                                          ></rect>
                                        </clipPath>
                                      </defs>
                                    </svg>
                                    Verified
                                  </span>
                                </div>
                                <div className="card-like cursor-pointer">
                                  <svg
                                    width="21"
                                    height="21"
                                    viewBox="-2.4 -2.4 28.80 28.80"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0">
                                      <rect
                                        x="-2.4"
                                        y="-2.4"
                                        width="28.80"
                                        height="28.80"
                                        rx="14.4"
                                        fill="#ffffff"
                                        strokeWidth="0"
                                      ></rect>
                                    </g>
                                    <g
                                      id="SVGRepo_tracerCarrier"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></g>
                                    <g id="SVGRepo_iconCarrier">
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M11.993 5.09691C11.0387 4.25883 9.78328 3.75 8.40796 3.75C5.42122 3.75 3 6.1497 3 9.10988C3 10.473 3.50639 11.7242 4.35199 12.67L12 20.25L19.4216 12.8944L19.641 12.6631C20.4866 11.7172 21 10.473 21 9.10988C21 6.1497 18.5788 3.75 15.592 3.75C14.2167 3.75 12.9613 4.25883 12.007 5.09692L12 5.08998L11.993 5.09691ZM12 7.09938L12.0549 7.14755L12.9079 6.30208L12.9968 6.22399C13.6868 5.61806 14.5932 5.25 15.592 5.25C17.763 5.25 19.5 6.99073 19.5 9.10988C19.5 10.0813 19.1385 10.9674 18.5363 11.6481L18.3492 11.8453L12 18.1381L5.44274 11.6391C4.85393 10.9658 4.5 10.0809 4.5 9.10988C4.5 6.99073 6.23699 5.25 8.40796 5.25C9.40675 5.25 10.3132 5.61806 11.0032 6.22398L11.0921 6.30203L11.9452 7.14752L12 7.09938Z"
                                        fill="#af824a "
                                      ></path>
                                    </g>
                                  </svg>
                                </div>
                                <div className="hometype font-bold">
                                  AED 6000
                                </div>
                              </div>
                            </div>
                            <div className="carddeatil-sm-right">
                              <div className="apartment">
                                <div className="d-flex align-items-start justify-content-between h-100">
                                  <div className="d-flex align-items-start justify-content-start flex-column">
                                    <div>
                                      <span> villa</span>
                                      <h4 className="cursor-pointer prod-title">
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting indus...
                                      </h4>
                                      <p className="downtown prod-location">
                                        <svg
                                          width="15"
                                          height="15"
                                          viewBox="0 0 15 15"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <g clipPath="url(#clip0_8952_2013)">
                                            <path
                                              d="M7.52508 8.12828C7.76408 8.12828 8.00075 8.08121 8.22156 7.98974C8.44237 7.89828 8.64301 7.76422 8.81201 7.59522C8.98101 7.42621 9.11508 7.22558 9.20654 7.00476C9.298 6.78395 9.34508 6.54729 9.34508 6.30828C9.34508 6.06928 9.298 5.83261 9.20654 5.6118C9.11508 5.39098 8.98101 5.19035 8.81201 5.02135C8.64301 4.85234 8.44237 4.71828 8.22156 4.62682C8.00075 4.53536 7.76408 4.48828 7.52508 4.48828C7.04238 4.48828 6.57946 4.68003 6.23814 5.02135C5.89683 5.36266 5.70508 5.82559 5.70508 6.30828C5.70508 6.79098 5.89683 7.2539 6.23814 7.59522C6.57946 7.93653 7.04238 8.12828 7.52508 8.12828Z"
                                              stroke="#4C4A4A"
                                            ></path>
                                            <path
                                              d="M2.63672 5.24677C3.78589 0.195105 11.2701 0.200939 12.4134 5.25261C13.0842 8.21594 11.2409 10.7243 9.62506 12.2759C9.06044 12.8205 8.30658 13.1248 7.52214 13.1248C6.7377 13.1248 5.98385 12.8205 5.41922 12.2759C3.80923 10.7243 1.96589 8.21011 2.63672 5.24677Z"
                                              stroke="#4C4A4A"
                                            ></path>
                                          </g>
                                        </svg>
                                        Tredunlisted Villa
                                      </p>
                                      <div className="mb-3 d-flex gap-3 align-items-center flex-wrap">
                                        <div className="bathdetailitems">
                                          <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M13.377 9.50781V10.1328C13.377 11.3266 12.7082 12.3641 11.7207 12.8891L12.127 14.5078H10.877L10.5645 13.2578C10.4582 13.2578 10.3582 13.2578 10.252 13.2578H5.25195C5.1457 13.2578 5.0457 13.2578 4.93945 13.2578L4.62695 14.5078H3.37695L3.7832 12.8891C2.7957 12.3641 2.12695 11.3266 2.12695 10.1328V9.50781H1.50195V8.25781H12.752V3.88281C12.752 3.71705 12.6861 3.55808 12.5689 3.44087C12.4517 3.32366 12.2927 3.25781 12.127 3.25781C11.8145 3.25781 11.577 3.47031 11.502 3.75156C11.8957 4.08906 12.127 4.58906 12.127 5.13281H8.37695C8.37695 4.63553 8.5745 4.15862 8.92613 3.80699C9.27776 3.45536 9.75467 3.25781 10.252 3.25781C10.2895 3.25781 10.3207 3.25781 10.3582 3.25781C10.6145 2.53281 11.3082 2.00781 12.127 2.00781C12.6242 2.00781 13.1011 2.20536 13.4528 2.55699C13.8044 2.90862 14.002 3.38553 14.002 3.88281V9.50781H13.377ZM12.127 9.50781H3.37695V10.1328C3.37695 10.6301 3.5745 11.107 3.92613 11.4586C4.27776 11.8103 4.75467 12.0078 5.25195 12.0078H10.252C10.7492 12.0078 11.2261 11.8103 11.5778 11.4586C11.9294 11.107 12.127 10.6301 12.127 10.1328V9.50781Z"
                                              fill="#0F0F0F"
                                            ></path>
                                          </svg>
                                          <span>2</span>
                                        </div>
                                        <div className="bathdetailitems">
                                          <svg
                                            width="12"
                                            height="12"
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <rect
                                              x="1.45508"
                                              y="1.21094"
                                              width="9.70215"
                                              height="9.70215"
                                              stroke="#1B1B1B"
                                            ></rect>
                                            <path
                                              d="M6.26562 1.17188V11.0887"
                                              stroke="#1B1B1B"
                                            ></path>
                                            <path
                                              d="M1.30664 6.12891L11.2235 6.12891"
                                              stroke="#1B1B1B"
                                            ></path>
                                          </svg>
                                          <span> 5000 Sqft</span>
                                        </div>
                                        {/* <div className="bathdetailitems">
                                          <Image
                                            src="/_next/static/media/parking.86354047.png"
                                            alt=""
                                            className="w-72"
                                          />
                                          <span>Parking</span>
                                        </div> */}
                                      </div>
                                    </div>
                                    <div className="d-flex align-items-center md:gap-3 gap-1 flex-wrap">
                                      <button className="d-flex align-items-center justify-content-center">
                                        <svg
                                          width="16"
                                          height="16"
                                          viewBox="0 0 16 16"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <g clipPath="url(#clip0_8952_2064)">
                                            <path
                                              d="M14.5711 12.1281C14.5711 12.3531 14.5211 12.5844 14.4148 12.8094C14.3086 13.0344 14.1711 13.2469 13.9898 13.4469C13.6836 13.7844 13.3461 14.0281 12.9648 14.1844C12.5898 14.3406 12.1836 14.4219 11.7461 14.4219C11.1086 14.4219 10.4273 14.2719 9.70859 13.9656C8.98984 13.6594 8.27109 13.2469 7.55859 12.7281C6.83241 12.1969 6.14715 11.612 5.50859 10.9781C4.87657 10.3419 4.29366 9.65868 3.76484 8.93438C3.25234 8.22188 2.83984 7.50938 2.53984 6.80313C2.23984 6.09063 2.08984 5.40937 2.08984 4.75937C2.08984 4.33437 2.16484 3.92813 2.31484 3.55313C2.46484 3.17188 2.70234 2.82188 3.03359 2.50938C3.43359 2.11563 3.87109 1.92188 4.33359 1.92188C4.50859 1.92188 4.68359 1.95938 4.83984 2.03438C5.00234 2.10938 5.14609 2.22188 5.25859 2.38438L6.70859 4.42813C6.82109 4.58438 6.90234 4.72813 6.95859 4.86563C7.01484 4.99688 7.04609 5.12813 7.04609 5.24688C7.04609 5.39688 7.00234 5.54687 6.91484 5.69062C6.83359 5.83437 6.71484 5.98437 6.56484 6.13437L6.08984 6.62812C6.02109 6.69687 5.98984 6.77813 5.98984 6.87813C5.98984 6.92813 5.99609 6.97187 6.00859 7.02187C6.02734 7.07187 6.04609 7.10937 6.05859 7.14687C6.17109 7.35312 6.36484 7.62188 6.63984 7.94688C6.92109 8.27188 7.22109 8.60313 7.54609 8.93438C7.88359 9.26563 8.20859 9.57187 8.53984 9.85312C8.86484 10.1281 9.13359 10.3156 9.34609 10.4281C9.37734 10.4406 9.41484 10.4594 9.45859 10.4781C9.50859 10.4969 9.55859 10.5031 9.61484 10.5031C9.72109 10.5031 9.80234 10.4656 9.87109 10.3969L10.3461 9.92813C10.5023 9.77188 10.6523 9.65312 10.7961 9.57812C10.9398 9.49062 11.0836 9.44687 11.2398 9.44687C11.3586 9.44687 11.4836 9.47188 11.6211 9.52813C11.7586 9.58438 11.9023 9.66563 12.0586 9.77188L14.1273 11.2406C14.2898 11.3531 14.4023 11.4844 14.4711 11.6406C14.5336 11.7969 14.5711 11.9531 14.5711 12.1281Z"
                                              stroke="white"
                                              strokeMiterlimit="10"
                                            ></path>
                                          </g>
                                          <defs>
                                            <clipPath id="clip0_8952_2064">
                                              <rect
                                                width="15"
                                                height="15"
                                                fill="white"
                                                transform="translate(0.839844 0.671875)"
                                              ></rect>
                                            </clipPath>
                                          </defs>
                                        </svg>
                                        Call
                                      </button>
                                      <a
                                        target="_blank"
                                        href="mailto:contactus@thiyo.com"
                                      >
                                        <button className="d-flex align-items-center">
                                          <svg
                                            width="16"
                                            height="13"
                                            viewBox="0 0 16 13"
                                            fill="#000"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M15.5527 1.59162C15.5527 0.720524 14.8777 0.0078125 14.0527 0.0078125H2.05273C1.22773 0.0078125 0.552734 0.720524 0.552734 1.59162V11.0944C0.552734 11.9655 1.22773 12.6782 2.05273 12.6782H14.0527C14.8777 12.6782 15.5527 11.9655 15.5527 11.0944V1.59162ZM14.0527 1.59162L8.05273 5.55113L2.05273 1.59162H14.0527ZM14.0527 11.0944H2.05273V3.17542L8.05273 7.13493L14.0527 3.17542V11.0944Z"
                                              fill="white"
                                            ></path>
                                          </svg>
                                          Email
                                        </button>
                                      </a>
                                      <a
                                        target="_blank"
                                        href="https://wa.me/8238376353?text=Hello%20there!"
                                      >
                                        <button className="whatsapp d-flex align-items-center">
                                          <svg
                                            width="17"
                                            height="18"
                                            viewBox="0 0 17 18"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M8.57749 0.804688C4.13181 0.804688 0.508498 4.63043 0.508498 9.32449C0.508498 10.829 0.883042 12.2905 1.58328 13.5801L0.443359 17.999L4.71805 16.8126C5.89868 17.4918 7.22587 17.8529 8.57749 17.8529C13.0232 17.8529 16.6465 14.0271 16.6465 9.33309C16.6465 7.05484 15.8078 4.91414 14.2852 3.30647C12.7626 1.6902 10.7352 0.804688 8.57749 0.804688ZM8.58563 2.24042C10.3769 2.24042 12.0542 2.97977 13.3244 4.32093C14.5865 5.66209 15.2867 7.44171 15.2867 9.33309C15.2867 13.2362 12.2741 16.4086 8.57749 16.4086C7.37243 16.4086 6.1918 16.0733 5.16588 15.4199L4.92161 15.2737L2.38122 15.9787L3.05703 13.3652L2.89418 13.0901C2.22652 11.981 1.86826 10.6657 1.86826 9.32449C1.8764 5.42137 4.8809 2.24042 8.58563 2.24042ZM5.71955 5.38698C5.58928 5.38698 5.36943 5.43857 5.18216 5.6535C5.00303 5.86843 4.47378 6.39285 4.47378 7.43311C4.47378 8.48197 5.19845 9.48784 5.28801 9.63399C5.402 9.78014 6.72105 11.9294 8.74848 12.8407C9.22887 13.0729 9.60342 13.2018 9.89654 13.2964C10.3769 13.4597 10.8166 13.4339 11.1667 13.3824C11.5576 13.3222 12.3555 12.8665 12.5265 12.3679C12.6975 11.8693 12.6975 11.448 12.6486 11.3534C12.5916 11.2675 12.4614 11.2159 12.2578 11.1213C12.0542 11.0009 11.0609 10.4851 10.8818 10.4163C10.6945 10.3476 10.5805 10.3132 10.4258 10.5195C10.2955 10.7344 9.90468 11.2159 9.79069 11.3534C9.66856 11.4996 9.55456 11.5168 9.35915 11.4136C9.14745 11.3018 8.49607 11.0783 7.73069 10.3562C7.12817 9.78874 6.72919 9.09237 6.60706 8.87744C6.50935 8.67111 6.59892 8.54215 6.69662 8.44758C6.78619 8.35301 6.91647 8.19826 6.99789 8.0693C7.10374 7.94894 7.13631 7.85437 7.20145 7.71682C7.26658 7.57067 7.23401 7.45031 7.18516 7.34714C7.13631 7.25257 6.72919 6.18652 6.55821 5.76526C6.39536 5.35259 6.23252 5.40418 6.10224 5.39558C5.98825 5.39558 5.85797 5.38698 5.71955 5.38698Z"
                                              fill="white"
                                            ></path>
                                          </svg>
                                          WhatsApp
                                        </button>
                                      </a>
                                    </div>
                                  </div>
                                  <div className="sendIcon">
                                    <svg
                                      width="26"
                                      height="26"
                                      viewBox="0 0 26 26"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g clipPath="url(#clip0_8952_6971)">
                                        <path
                                          d="M9.2473 16.2664L12.1683 13.461M7.41227 9.94896L14.2661 7.8171C17.3408 6.86076 18.9721 8.55928 17.8924 11.5928L15.4855 18.355C13.8659 22.9053 11.3687 22.8496 9.93938 18.243L9.51123 16.8552C9.40165 16.5029 9.02241 16.108 8.67482 15.9843L7.30025 15.4951C2.75517 13.8809 2.80572 11.3783 7.41227 9.94896Z"
                                          stroke="#595959"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mb-3">
                          <div className="carddeatil carddeatil-sm">
                            <div className="carddeatil-sm-left">
                              <div className="position-relative h-100">
                                <div className="swiper swiper-creative swiper-3d swiper-initialized swiper-horizontal swiper-watch-progress mySwiper6">
                                  <div
                                    className="swiper-wrapper"
                                    style={{ cursor: "grab" }}
                                  >
                                    <div
                                      className="swiper-slide swiper-slide-visible swiper-slide-active"
                                      style={{
                                        width: "335px",
                                        zIndex: 6,
                                        transform:
                                          "translate3d(calc(0px), calc(0px), calc(0px)) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1)",
                                        opacity: 1,
                                      }}
                                    >
                                      <div className="productslider h-100 position-relative">
                                        <Image
                                          src={eruohouseing}
                                          alt="eruohouseing"
                                          className="w-100 h-100"
                                        />
                                      </div>
                                    </div>
                                    <div
                                      className="swiper-slide swiper-slide-next"
                                      style={{
                                        width: "335px",
                                        zIndex: 5,
                                        transform:
                                          "translate3d(calc(5% - 300px), 0px, -200px) rotateX(0deg) rotateY(-100deg) rotateZ(0deg) scale(1)",
                                        opacity: 1,
                                        transformOrigin: "right center",
                                      }}
                                    >
                                      <div className="productslider h-100 position-relative">
                                        <Image
                                          src={emercan}
                                          alt="emercan"
                                          className="w-100 h-100"
                                        />
                                      </div>
                                    </div>
                                    <div
                                      className="swiper-slide"
                                      style={{
                                        width: "335px",
                                        zIndex: 4,
                                        transform:
                                          "translate3d(calc(5% - 600px), 0px, -200px) rotateX(0deg) rotateY(-100deg) rotateZ(0deg) scale(1)",
                                        opacity: 1,
                                        transformOrigin: "right center",
                                      }}
                                    >
                                      <div className="productslider h-100 position-relative">
                                        <Image
                                          src={emercan}
                                          alt="emercan"
                                          className="w-100 h-100"
                                        />
                                      </div>
                                    </div>
                                    <div
                                      className="swiper-slide"
                                      style={{
                                        width: "335px",
                                        zIndex: 3,
                                        transform:
                                          "translate3d(calc(5% - 900px), 0px, -200px) rotateX(0deg) rotateY(-100deg) rotateZ(0deg) scale(1)",
                                        opacity: 1,
                                        transformOrigin: "right center",
                                      }}
                                    >
                                      <div className="productslider h-100 position-relative">
                                        <Image
                                          src={emercan}
                                          alt="emercan"
                                          className="w-100 h-100"
                                        />
                                      </div>
                                    </div>
                                    <div
                                      className="swiper-slide"
                                      style={{
                                        width: "335px",
                                        zIndex: 2,
                                        transform:
                                          "translate3d(calc(5% - 1200px), 0px, -200px) rotateX(0deg) rotateY(-100deg) rotateZ(0deg) scale(1)",
                                        opacity: 1,
                                        transformOrigin: "right center",
                                      }}
                                    >
                                      <div className="productslider h-100 position-relative">
                                        <Image
                                          src={emercan}
                                          alt="emercan"
                                          className="w-100 h-100"
                                        />
                                      </div>
                                    </div>
                                    <div
                                      className="swiper-slide"
                                      style={{
                                        width: "335px",
                                        zIndex: 1,
                                        transform:
                                          "translate3d(calc(5% - 1500px), 0px, -200px) rotateX(0deg) rotateY(-100deg) rotateZ(0deg) scale(1)",
                                        opacity: 1,
                                        transformOrigin: "right center",
                                      }}
                                    >
                                      <div className="productslider h-100 position-relative">
                                        <Image
                                          src={emercan}
                                          alt="emercan"
                                          className="w-100 h-100"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="swiper-button-prev swiper-button-disabled"></div>
                                  <div className="swiper-button-next"></div>
                                </div>
                                <div className="gallery cursor-pointer">
                                  <svg
                                    width="13"
                                    height="13"
                                    viewBox="0 0 13 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g clipPath="url(#clip0_8952_3543)">
                                      <path
                                        d="M5.23104 11.4587H8.16121C10.603 11.4587 11.5798 10.4819 11.5798 8.04012V5.10994C11.5798 2.66813 10.603 1.69141 8.16121 1.69141H5.23104C2.78923 1.69141 1.8125 2.66813 1.8125 5.10994V8.04012C1.8125 10.4819 2.78923 11.4587 5.23104 11.4587Z"
                                        stroke="black"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      ></path>
                                      <path
                                        d="M2.13965 9.96883L4.54728 8.35235C4.93308 8.09352 5.48982 8.12282 5.83655 8.42072L5.99771 8.56234C6.37864 8.88955 6.99397 8.88955 7.3749 8.56234L9.40648 6.81889C9.78741 6.49169 10.4027 6.49169 10.7837 6.81889L11.5797 7.5026M5.23098 5.59798C5.49003 5.59798 5.73846 5.49508 5.92163 5.31191C6.1048 5.12873 6.20771 4.8803 6.20771 4.62126C6.20771 4.36221 6.1048 4.11378 5.92163 3.93061C5.73846 3.74744 5.49003 3.64453 5.23098 3.64453C4.97194 3.64453 4.72351 3.74744 4.54033 3.93061C4.35716 4.11378 4.25426 4.36221 4.25426 4.62126C4.25426 4.8803 4.35716 5.12873 4.54033 5.31191C4.72351 5.49508 4.97194 5.59798 5.23098 5.59798Z"
                                        stroke="black"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      ></path>
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_8952_3543">
                                        <rect
                                          width="11.7207"
                                          height="11.7207"
                                          fill="white"
                                          transform="translate(0.835938 0.714844)"
                                        ></rect>
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  <span>6</span>
                                </div>
                                <div className="verified cursor-pointer">
                                  <span>
                                    <svg
                                      width="14"
                                      height="14"
                                      viewBox="0 0 14 14"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g clipPath="url(#clip0_8952_1986)">
                                        <path
                                          d="M5.48218 12.4697H8.78833C11.5435 12.4697 12.6455 11.3677 12.6455 8.61255V5.3064C12.6455 2.55127 11.5435 1.44922 8.78833 1.44922H5.48218C2.72705 1.44922 1.625 2.55127 1.625 5.3064V8.61255C1.625 11.3677 2.72705 12.4697 5.48218 12.4697Z"
                                          stroke="black"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                        <path
                                          d="M4.79297 6.96175L6.35237 8.52115L9.47668 5.40234"
                                          stroke="black"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_8952_1986">
                                          <rect
                                            width="13.2246"
                                            height="13.2246"
                                            fill="white"
                                            transform="translate(0.522461 0.347656)"
                                          ></rect>
                                        </clipPath>
                                      </defs>
                                    </svg>
                                    Verified
                                  </span>
                                </div>
                                <div className="card-like cursor-pointer">
                                  <svg
                                    width="21"
                                    height="21"
                                    viewBox="-2.4 -2.4 28.80 28.80"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0">
                                      <rect
                                        x="-2.4"
                                        y="-2.4"
                                        width="28.80"
                                        height="28.80"
                                        rx="14.4"
                                        fill="#ffffff"
                                        strokeWidth="0"
                                      ></rect>
                                    </g>
                                    <g
                                      id="SVGRepo_tracerCarrier"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></g>
                                    <g id="SVGRepo_iconCarrier">
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M11.993 5.09691C11.0387 4.25883 9.78328 3.75 8.40796 3.75C5.42122 3.75 3 6.1497 3 9.10988C3 10.473 3.50639 11.7242 4.35199 12.67L12 20.25L19.4216 12.8944L19.641 12.6631C20.4866 11.7172 21 10.473 21 9.10988C21 6.1497 18.5788 3.75 15.592 3.75C14.2167 3.75 12.9613 4.25883 12.007 5.09692L12 5.08998L11.993 5.09691ZM12 7.09938L12.0549 7.14755L12.9079 6.30208L12.9968 6.22399C13.6868 5.61806 14.5932 5.25 15.592 5.25C17.763 5.25 19.5 6.99073 19.5 9.10988C19.5 10.0813 19.1385 10.9674 18.5363 11.6481L18.3492 11.8453L12 18.1381L5.44274 11.6391C4.85393 10.9658 4.5 10.0809 4.5 9.10988C4.5 6.99073 6.23699 5.25 8.40796 5.25C9.40675 5.25 10.3132 5.61806 11.0032 6.22398L11.0921 6.30203L11.9452 7.14752L12 7.09938Z"
                                        fill="#af824a "
                                      ></path>
                                    </g>
                                  </svg>
                                </div>
                                <div className="hometype font-bold">
                                  AED 6000
                                </div>
                              </div>
                            </div>
                            <div className="carddeatil-sm-right">
                              <div className="apartment">
                                <div className="d-flex align-items-start justify-content-between h-100">
                                  <div className="d-flex align-items-start justify-content-start flex-column">
                                    <div>
                                      <span> villa</span>
                                      <h4 className="cursor-pointer prod-title">
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting indus...
                                      </h4>
                                      <p className="downtown prod-location">
                                        <svg
                                          width="15"
                                          height="15"
                                          viewBox="0 0 15 15"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <g clipPath="url(#clip0_8952_2013)">
                                            <path
                                              d="M7.52508 8.12828C7.76408 8.12828 8.00075 8.08121 8.22156 7.98974C8.44237 7.89828 8.64301 7.76422 8.81201 7.59522C8.98101 7.42621 9.11508 7.22558 9.20654 7.00476C9.298 6.78395 9.34508 6.54729 9.34508 6.30828C9.34508 6.06928 9.298 5.83261 9.20654 5.6118C9.11508 5.39098 8.98101 5.19035 8.81201 5.02135C8.64301 4.85234 8.44237 4.71828 8.22156 4.62682C8.00075 4.53536 7.76408 4.48828 7.52508 4.48828C7.04238 4.48828 6.57946 4.68003 6.23814 5.02135C5.89683 5.36266 5.70508 5.82559 5.70508 6.30828C5.70508 6.79098 5.89683 7.2539 6.23814 7.59522C6.57946 7.93653 7.04238 8.12828 7.52508 8.12828Z"
                                              stroke="#4C4A4A"
                                            ></path>
                                            <path
                                              d="M2.63672 5.24677C3.78589 0.195105 11.2701 0.200939 12.4134 5.25261C13.0842 8.21594 11.2409 10.7243 9.62506 12.2759C9.06044 12.8205 8.30658 13.1248 7.52214 13.1248C6.7377 13.1248 5.98385 12.8205 5.41922 12.2759C3.80923 10.7243 1.96589 8.21011 2.63672 5.24677Z"
                                              stroke="#4C4A4A"
                                            ></path>
                                          </g>
                                        </svg>
                                        Tredunlisted Villa
                                      </p>
                                      <div className="mb-3 d-flex gap-3 align-items-center flex-wrap">
                                        <div className="bathdetailitems">
                                          <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M13.377 9.50781V10.1328C13.377 11.3266 12.7082 12.3641 11.7207 12.8891L12.127 14.5078H10.877L10.5645 13.2578C10.4582 13.2578 10.3582 13.2578 10.252 13.2578H5.25195C5.1457 13.2578 5.0457 13.2578 4.93945 13.2578L4.62695 14.5078H3.37695L3.7832 12.8891C2.7957 12.3641 2.12695 11.3266 2.12695 10.1328V9.50781H1.50195V8.25781H12.752V3.88281C12.752 3.71705 12.6861 3.55808 12.5689 3.44087C12.4517 3.32366 12.2927 3.25781 12.127 3.25781C11.8145 3.25781 11.577 3.47031 11.502 3.75156C11.8957 4.08906 12.127 4.58906 12.127 5.13281H8.37695C8.37695 4.63553 8.5745 4.15862 8.92613 3.80699C9.27776 3.45536 9.75467 3.25781 10.252 3.25781C10.2895 3.25781 10.3207 3.25781 10.3582 3.25781C10.6145 2.53281 11.3082 2.00781 12.127 2.00781C12.6242 2.00781 13.1011 2.20536 13.4528 2.55699C13.8044 2.90862 14.002 3.38553 14.002 3.88281V9.50781H13.377ZM12.127 9.50781H3.37695V10.1328C3.37695 10.6301 3.5745 11.107 3.92613 11.4586C4.27776 11.8103 4.75467 12.0078 5.25195 12.0078H10.252C10.7492 12.0078 11.2261 11.8103 11.5778 11.4586C11.9294 11.107 12.127 10.6301 12.127 10.1328V9.50781Z"
                                              fill="#0F0F0F"
                                            ></path>
                                          </svg>
                                          <span>2</span>
                                        </div>
                                        <div className="bathdetailitems">
                                          <svg
                                            width="12"
                                            height="12"
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <rect
                                              x="1.45508"
                                              y="1.21094"
                                              width="9.70215"
                                              height="9.70215"
                                              stroke="#1B1B1B"
                                            ></rect>
                                            <path
                                              d="M6.26562 1.17188V11.0887"
                                              stroke="#1B1B1B"
                                            ></path>
                                            <path
                                              d="M1.30664 6.12891L11.2235 6.12891"
                                              stroke="#1B1B1B"
                                            ></path>
                                          </svg>
                                          <span> 5000 Sqft</span>
                                        </div>
                                        {/* <div className="bathdetailitems">
                                          <Image
                                            src="/_next/static/media/parking.86354047.png"
                                            alt=""
                                            className="w-72"
                                          />
                                          <span>Parking</span>
                                        </div> */}
                                      </div>
                                    </div>
                                    <div className="d-flex align-items-center md:gap-3 gap-1 flex-wrap">
                                      <button className="d-flex align-items-center justify-content-center">
                                        <svg
                                          width="16"
                                          height="16"
                                          viewBox="0 0 16 16"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <g clipPath="url(#clip0_8952_2064)">
                                            <path
                                              d="M14.5711 12.1281C14.5711 12.3531 14.5211 12.5844 14.4148 12.8094C14.3086 13.0344 14.1711 13.2469 13.9898 13.4469C13.6836 13.7844 13.3461 14.0281 12.9648 14.1844C12.5898 14.3406 12.1836 14.4219 11.7461 14.4219C11.1086 14.4219 10.4273 14.2719 9.70859 13.9656C8.98984 13.6594 8.27109 13.2469 7.55859 12.7281C6.83241 12.1969 6.14715 11.612 5.50859 10.9781C4.87657 10.3419 4.29366 9.65868 3.76484 8.93438C3.25234 8.22188 2.83984 7.50938 2.53984 6.80313C2.23984 6.09063 2.08984 5.40937 2.08984 4.75937C2.08984 4.33437 2.16484 3.92813 2.31484 3.55313C2.46484 3.17188 2.70234 2.82188 3.03359 2.50938C3.43359 2.11563 3.87109 1.92188 4.33359 1.92188C4.50859 1.92188 4.68359 1.95938 4.83984 2.03438C5.00234 2.10938 5.14609 2.22188 5.25859 2.38438L6.70859 4.42813C6.82109 4.58438 6.90234 4.72813 6.95859 4.86563C7.01484 4.99688 7.04609 5.12813 7.04609 5.24688C7.04609 5.39688 7.00234 5.54687 6.91484 5.69062C6.83359 5.83437 6.71484 5.98437 6.56484 6.13437L6.08984 6.62812C6.02109 6.69687 5.98984 6.77813 5.98984 6.87813C5.98984 6.92813 5.99609 6.97187 6.00859 7.02187C6.02734 7.07187 6.04609 7.10937 6.05859 7.14687C6.17109 7.35312 6.36484 7.62188 6.63984 7.94688C6.92109 8.27188 7.22109 8.60313 7.54609 8.93438C7.88359 9.26563 8.20859 9.57187 8.53984 9.85312C8.86484 10.1281 9.13359 10.3156 9.34609 10.4281C9.37734 10.4406 9.41484 10.4594 9.45859 10.4781C9.50859 10.4969 9.55859 10.5031 9.61484 10.5031C9.72109 10.5031 9.80234 10.4656 9.87109 10.3969L10.3461 9.92813C10.5023 9.77188 10.6523 9.65312 10.7961 9.57812C10.9398 9.49062 11.0836 9.44687 11.2398 9.44687C11.3586 9.44687 11.4836 9.47188 11.6211 9.52813C11.7586 9.58438 11.9023 9.66563 12.0586 9.77188L14.1273 11.2406C14.2898 11.3531 14.4023 11.4844 14.4711 11.6406C14.5336 11.7969 14.5711 11.9531 14.5711 12.1281Z"
                                              stroke="white"
                                              strokeMiterlimit="10"
                                            ></path>
                                          </g>
                                          <defs>
                                            <clipPath id="clip0_8952_2064">
                                              <rect
                                                width="15"
                                                height="15"
                                                fill="white"
                                                transform="translate(0.839844 0.671875)"
                                              ></rect>
                                            </clipPath>
                                          </defs>
                                        </svg>
                                        Call
                                      </button>
                                      <a
                                        target="_blank"
                                        href="mailto:contactus@thiyo.com"
                                      >
                                        <button className="d-flex align-items-center">
                                          <svg
                                            width="16"
                                            height="13"
                                            viewBox="0 0 16 13"
                                            fill="#000"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M15.5527 1.59162C15.5527 0.720524 14.8777 0.0078125 14.0527 0.0078125H2.05273C1.22773 0.0078125 0.552734 0.720524 0.552734 1.59162V11.0944C0.552734 11.9655 1.22773 12.6782 2.05273 12.6782H14.0527C14.8777 12.6782 15.5527 11.9655 15.5527 11.0944V1.59162ZM14.0527 1.59162L8.05273 5.55113L2.05273 1.59162H14.0527ZM14.0527 11.0944H2.05273V3.17542L8.05273 7.13493L14.0527 3.17542V11.0944Z"
                                              fill="white"
                                            ></path>
                                          </svg>
                                          Email
                                        </button>
                                      </a>
                                      <a
                                        target="_blank"
                                        href="https://wa.me/8238376353?text=Hello%20there!"
                                      >
                                        <button className="whatsapp d-flex align-items-center">
                                          <svg
                                            width="17"
                                            height="18"
                                            viewBox="0 0 17 18"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M8.57749 0.804688C4.13181 0.804688 0.508498 4.63043 0.508498 9.32449C0.508498 10.829 0.883042 12.2905 1.58328 13.5801L0.443359 17.999L4.71805 16.8126C5.89868 17.4918 7.22587 17.8529 8.57749 17.8529C13.0232 17.8529 16.6465 14.0271 16.6465 9.33309C16.6465 7.05484 15.8078 4.91414 14.2852 3.30647C12.7626 1.6902 10.7352 0.804688 8.57749 0.804688ZM8.58563 2.24042C10.3769 2.24042 12.0542 2.97977 13.3244 4.32093C14.5865 5.66209 15.2867 7.44171 15.2867 9.33309C15.2867 13.2362 12.2741 16.4086 8.57749 16.4086C7.37243 16.4086 6.1918 16.0733 5.16588 15.4199L4.92161 15.2737L2.38122 15.9787L3.05703 13.3652L2.89418 13.0901C2.22652 11.981 1.86826 10.6657 1.86826 9.32449C1.8764 5.42137 4.8809 2.24042 8.58563 2.24042ZM5.71955 5.38698C5.58928 5.38698 5.36943 5.43857 5.18216 5.6535C5.00303 5.86843 4.47378 6.39285 4.47378 7.43311C4.47378 8.48197 5.19845 9.48784 5.28801 9.63399C5.402 9.78014 6.72105 11.9294 8.74848 12.8407C9.22887 13.0729 9.60342 13.2018 9.89654 13.2964C10.3769 13.4597 10.8166 13.4339 11.1667 13.3824C11.5576 13.3222 12.3555 12.8665 12.5265 12.3679C12.6975 11.8693 12.6975 11.448 12.6486 11.3534C12.5916 11.2675 12.4614 11.2159 12.2578 11.1213C12.0542 11.0009 11.0609 10.4851 10.8818 10.4163C10.6945 10.3476 10.5805 10.3132 10.4258 10.5195C10.2955 10.7344 9.90468 11.2159 9.79069 11.3534C9.66856 11.4996 9.55456 11.5168 9.35915 11.4136C9.14745 11.3018 8.49607 11.0783 7.73069 10.3562C7.12817 9.78874 6.72919 9.09237 6.60706 8.87744C6.50935 8.67111 6.59892 8.54215 6.69662 8.44758C6.78619 8.35301 6.91647 8.19826 6.99789 8.0693C7.10374 7.94894 7.13631 7.85437 7.20145 7.71682C7.26658 7.57067 7.23401 7.45031 7.18516 7.34714C7.13631 7.25257 6.72919 6.18652 6.55821 5.76526C6.39536 5.35259 6.23252 5.40418 6.10224 5.39558C5.98825 5.39558 5.85797 5.38698 5.71955 5.38698Z"
                                              fill="white"
                                            ></path>
                                          </svg>
                                          WhatsApp
                                        </button>
                                      </a>
                                    </div>
                                  </div>
                                  <div className="sendIcon">
                                    <svg
                                      width="26"
                                      height="26"
                                      viewBox="0 0 26 26"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g clipPath="url(#clip0_8952_6971)">
                                        <path
                                          d="M9.2473 16.2664L12.1683 13.461M7.41227 9.94896L14.2661 7.8171C17.3408 6.86076 18.9721 8.55928 17.8924 11.5928L15.4855 18.355C13.8659 22.9053 11.3687 22.8496 9.93938 18.243L9.51123 16.8552C9.40165 16.5029 9.02241 16.108 8.67482 15.9843L7.30025 15.4951C2.75517 13.8809 2.80572 11.3783 7.41227 9.94896Z"
                                          stroke="#595959"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mb-3">
                          <div className="carddeatil carddeatil-sm">
                            <div className="carddeatil-sm-left">
                              <div className="position-relative h-100">
                                <div className="swiper swiper-creative swiper-3d swiper-initialized swiper-horizontal swiper-watch-progress mySwiper6">
                                  <div
                                    className="swiper-wrapper"
                                    style={{ cursor: "grab" }}
                                  >
                                    <div
                                      className="swiper-slide swiper-slide-visible swiper-slide-active"
                                      style={{
                                        width: "335px",
                                        zIndex: 6,
                                        transform:
                                          "translate3d(calc(0px), calc(0px), calc(0px)) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1)",
                                        opacity: 1,
                                      }}
                                    >
                                      <div className="productslider h-100 position-relative">
                                        <Image
                                          src={houseingpuvoor}
                                          alt="houseingpuvoor"
                                          className="w-100 h-100"
                                        />
                                      </div>
                                    </div>
                                    <div
                                      className="swiper-slide swiper-slide-next"
                                      style={{
                                        width: "335px",
                                        zIndex: 5,
                                        transform:
                                          "translate3d(calc(5% - 300px), 0px, -200px) rotateX(0deg) rotateY(-100deg) rotateZ(0deg) scale(1)",
                                        opacity: 1,
                                        transformOrigin: "right center",
                                      }}
                                    >
                                      <div className="productslider h-100 position-relative">
                                        <Image
                                          src={emercan}
                                          alt="emercan"
                                          className="w-100 h-100"
                                        />
                                      </div>
                                    </div>
                                    <div
                                      className="swiper-slide"
                                      style={{
                                        width: "335px",
                                        zIndex: 4,
                                        transform:
                                          "translate3d(calc(5% - 600px), 0px, -200px) rotateX(0deg) rotateY(-100deg) rotateZ(0deg) scale(1)",
                                        opacity: 1,
                                        transformOrigin: "right center",
                                      }}
                                    >
                                      <div className="productslider h-100 position-relative">
                                        <Image
                                          src={emercan}
                                          alt="emercan"
                                          className="w-100 h-100"
                                        />
                                      </div>
                                    </div>
                                    <div
                                      className="swiper-slide"
                                      style={{
                                        width: "335px",
                                        zIndex: 3,
                                        transform:
                                          "translate3d(calc(5% - 900px), 0px, -200px) rotateX(0deg) rotateY(-100deg) rotateZ(0deg) scale(1)",
                                        opacity: 1,
                                        transformOrigin: "right center",
                                      }}
                                    >
                                      <div className="productslider h-100 position-relative">
                                        <Image
                                          src={emercan}
                                          alt="emercan"
                                          className="w-100 h-100"
                                        />
                                      </div>
                                    </div>
                                    <div
                                      className="swiper-slide"
                                      style={{
                                        width: "335px",
                                        zIndex: 2,
                                        transform:
                                          "translate3d(calc(5% - 1200px), 0px, -200px) rotateX(0deg) rotateY(-100deg) rotateZ(0deg) scale(1)",
                                        opacity: 1,
                                        transformOrigin: "right center",
                                      }}
                                    >
                                      <div className="productslider h-100 position-relative">
                                        <Image
                                          src={emercan}
                                          alt="emercan"
                                          className="w-100 h-100"
                                        />
                                      </div>
                                    </div>
                                    <div
                                      className="swiper-slide"
                                      style={{
                                        width: "335px",
                                        zIndex: 1,
                                        transform:
                                          "translate3d(calc(5% - 1500px), 0px, -200px) rotateX(0deg) rotateY(-100deg) rotateZ(0deg) scale(1)",
                                        opacity: 1,
                                        transformOrigin: "right center",
                                      }}
                                    >
                                      <div className="productslider h-100 position-relative">
                                        <Image
                                          src={emercan}
                                          alt="emercan"
                                          className="w-100 h-100"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="swiper-button-prev swiper-button-disabled"></div>
                                  <div className="swiper-button-next"></div>
                                </div>
                                <div className="gallery cursor-pointer">
                                  <svg
                                    width="13"
                                    height="13"
                                    viewBox="0 0 13 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g clipPath="url(#clip0_8952_3543)">
                                      <path
                                        d="M5.23104 11.4587H8.16121C10.603 11.4587 11.5798 10.4819 11.5798 8.04012V5.10994C11.5798 2.66813 10.603 1.69141 8.16121 1.69141H5.23104C2.78923 1.69141 1.8125 2.66813 1.8125 5.10994V8.04012C1.8125 10.4819 2.78923 11.4587 5.23104 11.4587Z"
                                        stroke="black"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      ></path>
                                      <path
                                        d="M2.13965 9.96883L4.54728 8.35235C4.93308 8.09352 5.48982 8.12282 5.83655 8.42072L5.99771 8.56234C6.37864 8.88955 6.99397 8.88955 7.3749 8.56234L9.40648 6.81889C9.78741 6.49169 10.4027 6.49169 10.7837 6.81889L11.5797 7.5026M5.23098 5.59798C5.49003 5.59798 5.73846 5.49508 5.92163 5.31191C6.1048 5.12873 6.20771 4.8803 6.20771 4.62126C6.20771 4.36221 6.1048 4.11378 5.92163 3.93061C5.73846 3.74744 5.49003 3.64453 5.23098 3.64453C4.97194 3.64453 4.72351 3.74744 4.54033 3.93061C4.35716 4.11378 4.25426 4.36221 4.25426 4.62126C4.25426 4.8803 4.35716 5.12873 4.54033 5.31191C4.72351 5.49508 4.97194 5.59798 5.23098 5.59798Z"
                                        stroke="black"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      ></path>
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_8952_3543">
                                        <rect
                                          width="11.7207"
                                          height="11.7207"
                                          fill="white"
                                          transform="translate(0.835938 0.714844)"
                                        ></rect>
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  <span>6</span>
                                </div>
                                <div className="verified cursor-pointer">
                                  <span>
                                    <svg
                                      width="14"
                                      height="14"
                                      viewBox="0 0 14 14"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g clipPath="url(#clip0_8952_1986)">
                                        <path
                                          d="M5.48218 12.4697H8.78833C11.5435 12.4697 12.6455 11.3677 12.6455 8.61255V5.3064C12.6455 2.55127 11.5435 1.44922 8.78833 1.44922H5.48218C2.72705 1.44922 1.625 2.55127 1.625 5.3064V8.61255C1.625 11.3677 2.72705 12.4697 5.48218 12.4697Z"
                                          stroke="black"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                        <path
                                          d="M4.79297 6.96175L6.35237 8.52115L9.47668 5.40234"
                                          stroke="black"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_8952_1986">
                                          <rect
                                            width="13.2246"
                                            height="13.2246"
                                            fill="white"
                                            transform="translate(0.522461 0.347656)"
                                          ></rect>
                                        </clipPath>
                                      </defs>
                                    </svg>
                                    Verified
                                  </span>
                                </div>
                                <div className="card-like cursor-pointer">
                                  <svg
                                    width="21"
                                    height="21"
                                    viewBox="-2.4 -2.4 28.80 28.80"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0">
                                      <rect
                                        x="-2.4"
                                        y="-2.4"
                                        width="28.80"
                                        height="28.80"
                                        rx="14.4"
                                        fill="#ffffff"
                                        strokeWidth="0"
                                      ></rect>
                                    </g>
                                    <g
                                      id="SVGRepo_tracerCarrier"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></g>
                                    <g id="SVGRepo_iconCarrier">
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M11.993 5.09691C11.0387 4.25883 9.78328 3.75 8.40796 3.75C5.42122 3.75 3 6.1497 3 9.10988C3 10.473 3.50639 11.7242 4.35199 12.67L12 20.25L19.4216 12.8944L19.641 12.6631C20.4866 11.7172 21 10.473 21 9.10988C21 6.1497 18.5788 3.75 15.592 3.75C14.2167 3.75 12.9613 4.25883 12.007 5.09692L12 5.08998L11.993 5.09691ZM12 7.09938L12.0549 7.14755L12.9079 6.30208L12.9968 6.22399C13.6868 5.61806 14.5932 5.25 15.592 5.25C17.763 5.25 19.5 6.99073 19.5 9.10988C19.5 10.0813 19.1385 10.9674 18.5363 11.6481L18.3492 11.8453L12 18.1381L5.44274 11.6391C4.85393 10.9658 4.5 10.0809 4.5 9.10988C4.5 6.99073 6.23699 5.25 8.40796 5.25C9.40675 5.25 10.3132 5.61806 11.0032 6.22398L11.0921 6.30203L11.9452 7.14752L12 7.09938Z"
                                        fill="#af824a "
                                      ></path>
                                    </g>
                                  </svg>
                                </div>
                                <div className="hometype font-bold">
                                  AED 6000
                                </div>
                              </div>
                            </div>
                            <div className="carddeatil-sm-right">
                              <div className="apartment">
                                <div className="d-flex align-items-start justify-content-between h-100">
                                  <div className="d-flex align-items-start justify-content-start flex-column">
                                    <div>
                                      <span> villa</span>
                                      <h4 className="cursor-pointer prod-title">
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting indus...
                                      </h4>
                                      <p className="downtown prod-location">
                                        <svg
                                          width="15"
                                          height="15"
                                          viewBox="0 0 15 15"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <g clipPath="url(#clip0_8952_2013)">
                                            <path
                                              d="M7.52508 8.12828C7.76408 8.12828 8.00075 8.08121 8.22156 7.98974C8.44237 7.89828 8.64301 7.76422 8.81201 7.59522C8.98101 7.42621 9.11508 7.22558 9.20654 7.00476C9.298 6.78395 9.34508 6.54729 9.34508 6.30828C9.34508 6.06928 9.298 5.83261 9.20654 5.6118C9.11508 5.39098 8.98101 5.19035 8.81201 5.02135C8.64301 4.85234 8.44237 4.71828 8.22156 4.62682C8.00075 4.53536 7.76408 4.48828 7.52508 4.48828C7.04238 4.48828 6.57946 4.68003 6.23814 5.02135C5.89683 5.36266 5.70508 5.82559 5.70508 6.30828C5.70508 6.79098 5.89683 7.2539 6.23814 7.59522C6.57946 7.93653 7.04238 8.12828 7.52508 8.12828Z"
                                              stroke="#4C4A4A"
                                            ></path>
                                            <path
                                              d="M2.63672 5.24677C3.78589 0.195105 11.2701 0.200939 12.4134 5.25261C13.0842 8.21594 11.2409 10.7243 9.62506 12.2759C9.06044 12.8205 8.30658 13.1248 7.52214 13.1248C6.7377 13.1248 5.98385 12.8205 5.41922 12.2759C3.80923 10.7243 1.96589 8.21011 2.63672 5.24677Z"
                                              stroke="#4C4A4A"
                                            ></path>
                                          </g>
                                        </svg>
                                        Tredunlisted Villa
                                      </p>
                                      <div className="mb-3 d-flex gap-3 align-items-center flex-wrap">
                                        <div className="bathdetailitems">
                                          <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M13.377 9.50781V10.1328C13.377 11.3266 12.7082 12.3641 11.7207 12.8891L12.127 14.5078H10.877L10.5645 13.2578C10.4582 13.2578 10.3582 13.2578 10.252 13.2578H5.25195C5.1457 13.2578 5.0457 13.2578 4.93945 13.2578L4.62695 14.5078H3.37695L3.7832 12.8891C2.7957 12.3641 2.12695 11.3266 2.12695 10.1328V9.50781H1.50195V8.25781H12.752V3.88281C12.752 3.71705 12.6861 3.55808 12.5689 3.44087C12.4517 3.32366 12.2927 3.25781 12.127 3.25781C11.8145 3.25781 11.577 3.47031 11.502 3.75156C11.8957 4.08906 12.127 4.58906 12.127 5.13281H8.37695C8.37695 4.63553 8.5745 4.15862 8.92613 3.80699C9.27776 3.45536 9.75467 3.25781 10.252 3.25781C10.2895 3.25781 10.3207 3.25781 10.3582 3.25781C10.6145 2.53281 11.3082 2.00781 12.127 2.00781C12.6242 2.00781 13.1011 2.20536 13.4528 2.55699C13.8044 2.90862 14.002 3.38553 14.002 3.88281V9.50781H13.377ZM12.127 9.50781H3.37695V10.1328C3.37695 10.6301 3.5745 11.107 3.92613 11.4586C4.27776 11.8103 4.75467 12.0078 5.25195 12.0078H10.252C10.7492 12.0078 11.2261 11.8103 11.5778 11.4586C11.9294 11.107 12.127 10.6301 12.127 10.1328V9.50781Z"
                                              fill="#0F0F0F"
                                            ></path>
                                          </svg>
                                          <span>2</span>
                                        </div>
                                        <div className="bathdetailitems">
                                          <svg
                                            width="12"
                                            height="12"
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <rect
                                              x="1.45508"
                                              y="1.21094"
                                              width="9.70215"
                                              height="9.70215"
                                              stroke="#1B1B1B"
                                            ></rect>
                                            <path
                                              d="M6.26562 1.17188V11.0887"
                                              stroke="#1B1B1B"
                                            ></path>
                                            <path
                                              d="M1.30664 6.12891L11.2235 6.12891"
                                              stroke="#1B1B1B"
                                            ></path>
                                          </svg>
                                          <span> 5000 Sqft</span>
                                        </div>
                                        {/* <div className="bathdetailitems">
                                          <Image
                                            src="/_next/static/media/parking.86354047.png"
                                            alt=""
                                            className="w-72"
                                          />
                                          <span>Parking</span>
                                        </div> */}
                                      </div>
                                    </div>
                                    <div className="d-flex align-items-center md:gap-3 gap-1 flex-wrap">
                                      <button className="d-flex align-items-center justify-content-center">
                                        <svg
                                          width="16"
                                          height="16"
                                          viewBox="0 0 16 16"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <g clipPath="url(#clip0_8952_2064)">
                                            <path
                                              d="M14.5711 12.1281C14.5711 12.3531 14.5211 12.5844 14.4148 12.8094C14.3086 13.0344 14.1711 13.2469 13.9898 13.4469C13.6836 13.7844 13.3461 14.0281 12.9648 14.1844C12.5898 14.3406 12.1836 14.4219 11.7461 14.4219C11.1086 14.4219 10.4273 14.2719 9.70859 13.9656C8.98984 13.6594 8.27109 13.2469 7.55859 12.7281C6.83241 12.1969 6.14715 11.612 5.50859 10.9781C4.87657 10.3419 4.29366 9.65868 3.76484 8.93438C3.25234 8.22188 2.83984 7.50938 2.53984 6.80313C2.23984 6.09063 2.08984 5.40937 2.08984 4.75937C2.08984 4.33437 2.16484 3.92813 2.31484 3.55313C2.46484 3.17188 2.70234 2.82188 3.03359 2.50938C3.43359 2.11563 3.87109 1.92188 4.33359 1.92188C4.50859 1.92188 4.68359 1.95938 4.83984 2.03438C5.00234 2.10938 5.14609 2.22188 5.25859 2.38438L6.70859 4.42813C6.82109 4.58438 6.90234 4.72813 6.95859 4.86563C7.01484 4.99688 7.04609 5.12813 7.04609 5.24688C7.04609 5.39688 7.00234 5.54687 6.91484 5.69062C6.83359 5.83437 6.71484 5.98437 6.56484 6.13437L6.08984 6.62812C6.02109 6.69687 5.98984 6.77813 5.98984 6.87813C5.98984 6.92813 5.99609 6.97187 6.00859 7.02187C6.02734 7.07187 6.04609 7.10937 6.05859 7.14687C6.17109 7.35312 6.36484 7.62188 6.63984 7.94688C6.92109 8.27188 7.22109 8.60313 7.54609 8.93438C7.88359 9.26563 8.20859 9.57187 8.53984 9.85312C8.86484 10.1281 9.13359 10.3156 9.34609 10.4281C9.37734 10.4406 9.41484 10.4594 9.45859 10.4781C9.50859 10.4969 9.55859 10.5031 9.61484 10.5031C9.72109 10.5031 9.80234 10.4656 9.87109 10.3969L10.3461 9.92813C10.5023 9.77188 10.6523 9.65312 10.7961 9.57812C10.9398 9.49062 11.0836 9.44687 11.2398 9.44687C11.3586 9.44687 11.4836 9.47188 11.6211 9.52813C11.7586 9.58438 11.9023 9.66563 12.0586 9.77188L14.1273 11.2406C14.2898 11.3531 14.4023 11.4844 14.4711 11.6406C14.5336 11.7969 14.5711 11.9531 14.5711 12.1281Z"
                                              stroke="white"
                                              strokeMiterlimit="10"
                                            ></path>
                                          </g>
                                          <defs>
                                            <clipPath id="clip0_8952_2064">
                                              <rect
                                                width="15"
                                                height="15"
                                                fill="white"
                                                transform="translate(0.839844 0.671875)"
                                              ></rect>
                                            </clipPath>
                                          </defs>
                                        </svg>
                                        Call
                                      </button>
                                      <a
                                        target="_blank"
                                        href="mailto:contactus@thiyo.com"
                                      >
                                        <button className="d-flex align-items-center">
                                          <svg
                                            width="16"
                                            height="13"
                                            viewBox="0 0 16 13"
                                            fill="#000"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M15.5527 1.59162C15.5527 0.720524 14.8777 0.0078125 14.0527 0.0078125H2.05273C1.22773 0.0078125 0.552734 0.720524 0.552734 1.59162V11.0944C0.552734 11.9655 1.22773 12.6782 2.05273 12.6782H14.0527C14.8777 12.6782 15.5527 11.9655 15.5527 11.0944V1.59162ZM14.0527 1.59162L8.05273 5.55113L2.05273 1.59162H14.0527ZM14.0527 11.0944H2.05273V3.17542L8.05273 7.13493L14.0527 3.17542V11.0944Z"
                                              fill="white"
                                            ></path>
                                          </svg>
                                          Email
                                        </button>
                                      </a>
                                      <a
                                        target="_blank"
                                        href="https://wa.me/8238376353?text=Hello%20there!"
                                      >
                                        <button className="whatsapp d-flex align-items-center">
                                          <svg
                                            width="17"
                                            height="18"
                                            viewBox="0 0 17 18"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M8.57749 0.804688C4.13181 0.804688 0.508498 4.63043 0.508498 9.32449C0.508498 10.829 0.883042 12.2905 1.58328 13.5801L0.443359 17.999L4.71805 16.8126C5.89868 17.4918 7.22587 17.8529 8.57749 17.8529C13.0232 17.8529 16.6465 14.0271 16.6465 9.33309C16.6465 7.05484 15.8078 4.91414 14.2852 3.30647C12.7626 1.6902 10.7352 0.804688 8.57749 0.804688ZM8.58563 2.24042C10.3769 2.24042 12.0542 2.97977 13.3244 4.32093C14.5865 5.66209 15.2867 7.44171 15.2867 9.33309C15.2867 13.2362 12.2741 16.4086 8.57749 16.4086C7.37243 16.4086 6.1918 16.0733 5.16588 15.4199L4.92161 15.2737L2.38122 15.9787L3.05703 13.3652L2.89418 13.0901C2.22652 11.981 1.86826 10.6657 1.86826 9.32449C1.8764 5.42137 4.8809 2.24042 8.58563 2.24042ZM5.71955 5.38698C5.58928 5.38698 5.36943 5.43857 5.18216 5.6535C5.00303 5.86843 4.47378 6.39285 4.47378 7.43311C4.47378 8.48197 5.19845 9.48784 5.28801 9.63399C5.402 9.78014 6.72105 11.9294 8.74848 12.8407C9.22887 13.0729 9.60342 13.2018 9.89654 13.2964C10.3769 13.4597 10.8166 13.4339 11.1667 13.3824C11.5576 13.3222 12.3555 12.8665 12.5265 12.3679C12.6975 11.8693 12.6975 11.448 12.6486 11.3534C12.5916 11.2675 12.4614 11.2159 12.2578 11.1213C12.0542 11.0009 11.0609 10.4851 10.8818 10.4163C10.6945 10.3476 10.5805 10.3132 10.4258 10.5195C10.2955 10.7344 9.90468 11.2159 9.79069 11.3534C9.66856 11.4996 9.55456 11.5168 9.35915 11.4136C9.14745 11.3018 8.49607 11.0783 7.73069 10.3562C7.12817 9.78874 6.72919 9.09237 6.60706 8.87744C6.50935 8.67111 6.59892 8.54215 6.69662 8.44758C6.78619 8.35301 6.91647 8.19826 6.99789 8.0693C7.10374 7.94894 7.13631 7.85437 7.20145 7.71682C7.26658 7.57067 7.23401 7.45031 7.18516 7.34714C7.13631 7.25257 6.72919 6.18652 6.55821 5.76526C6.39536 5.35259 6.23252 5.40418 6.10224 5.39558C5.98825 5.39558 5.85797 5.38698 5.71955 5.38698Z"
                                              fill="white"
                                            ></path>
                                          </svg>
                                          WhatsApp
                                        </button>
                                      </a>
                                    </div>
                                  </div>
                                  <div className="sendIcon">
                                    <svg
                                      width="26"
                                      height="26"
                                      viewBox="0 0 26 26"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g clipPath="url(#clip0_8952_6971)">
                                        <path
                                          d="M9.2473 16.2664L12.1683 13.461M7.41227 9.94896L14.2661 7.8171C17.3408 6.86076 18.9721 8.55928 17.8924 11.5928L15.4855 18.355C13.8659 22.9053 11.3687 22.8496 9.93938 18.243L9.51123 16.8552C9.40165 16.5029 9.02241 16.108 8.67482 15.9843L7.30025 15.4951C2.75517 13.8809 2.80572 11.3783 7.41227 9.94896Z"
                                          stroke="#595959"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mb-3">
                          <div className="carddeatil carddeatil-sm">
                            <div className="carddeatil-sm-left">
                              <div className="position-relative h-100">
                                <div className="swiper swiper-creative swiper-3d swiper-initialized swiper-horizontal swiper-watch-progress mySwiper6">
                                  <div
                                    className="swiper-wrapper"
                                    style={{ cursor: "grab" }}
                                  >
                                    <div
                                      className="swiper-slide swiper-slide-visible swiper-slide-active"
                                      style={{
                                        width: "335px",
                                        zIndex: 6,
                                        transform:
                                          "translate3d(calc(0px), calc(0px), calc(0px)) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1)",
                                        opacity: 1,
                                      }}
                                    >
                                      <div className="productslider h-100 position-relative">
                                        <Image
                                          src={houseingcanada}
                                          alt="houseingcanada"
                                          className="w-100 h-100"
                                        />
                                      </div>
                                    </div>
                                    <div
                                      className="swiper-slide swiper-slide-next"
                                      style={{
                                        width: "335px",
                                        zIndex: 5,
                                        transform:
                                          "translate3d(calc(5% - 300px), 0px, -200px) rotateX(0deg) rotateY(-100deg) rotateZ(0deg) scale(1)",
                                        opacity: 1,
                                        transformOrigin: "right center",
                                      }}
                                    >
                                      <div className="productslider h-100 position-relative">
                                        <Image
                                          src={emercan}
                                          alt="emercan"
                                          className="w-100 h-100"
                                        />
                                      </div>
                                    </div>
                                    <div
                                      className="swiper-slide"
                                      style={{
                                        width: "335px",
                                        zIndex: 4,
                                        transform:
                                          "translate3d(calc(5% - 600px), 0px, -200px) rotateX(0deg) rotateY(-100deg) rotateZ(0deg) scale(1)",
                                        opacity: 1,
                                        transformOrigin: "right center",
                                      }}
                                    >
                                      <div className="productslider h-100 position-relative">
                                        <Image
                                          src={emercan}
                                          alt="emercan"
                                          className="w-100 h-100"
                                        />
                                      </div>
                                    </div>
                                    <div
                                      className="swiper-slide"
                                      style={{
                                        width: "335px",
                                        zIndex: 3,
                                        transform:
                                          "translate3d(calc(5% - 900px), 0px, -200px) rotateX(0deg) rotateY(-100deg) rotateZ(0deg) scale(1)",
                                        opacity: 1,
                                        transformOrigin: "right center",
                                      }}
                                    >
                                      <div className="productslider h-100 position-relative">
                                        <Image
                                          src={emercan}
                                          alt="emercan"
                                          className="w-100 h-100"
                                        />
                                      </div>
                                    </div>
                                    <div
                                      className="swiper-slide"
                                      style={{
                                        width: "335px",
                                        zIndex: 2,
                                        transform:
                                          "translate3d(calc(5% - 1200px), 0px, -200px) rotateX(0deg) rotateY(-100deg) rotateZ(0deg) scale(1)",
                                        opacity: 1,
                                        transformOrigin: "right center",
                                      }}
                                    >
                                      <div className="productslider h-100 position-relative">
                                        <Image
                                          src={emercan}
                                          alt="emercan"
                                          className="w-100 h-100"
                                        />
                                      </div>
                                    </div>
                                    <div
                                      className="swiper-slide"
                                      style={{
                                        width: "335px",
                                        zIndex: 1,
                                        transform:
                                          "translate3d(calc(5% - 1500px), 0px, -200px) rotateX(0deg) rotateY(-100deg) rotateZ(0deg) scale(1)",
                                        opacity: 1,
                                        transformOrigin: "right center",
                                      }}
                                    >
                                      <div className="productslider h-100 position-relative">
                                        <Image
                                          src={emercan}
                                          alt="emercan"
                                          className="w-100 h-100"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="swiper-button-prev swiper-button-disabled"></div>
                                  <div className="swiper-button-next"></div>
                                </div>
                                <div className="gallery cursor-pointer">
                                  <svg
                                    width="13"
                                    height="13"
                                    viewBox="0 0 13 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g clipPath="url(#clip0_8952_3543)">
                                      <path
                                        d="M5.23104 11.4587H8.16121C10.603 11.4587 11.5798 10.4819 11.5798 8.04012V5.10994C11.5798 2.66813 10.603 1.69141 8.16121 1.69141H5.23104C2.78923 1.69141 1.8125 2.66813 1.8125 5.10994V8.04012C1.8125 10.4819 2.78923 11.4587 5.23104 11.4587Z"
                                        stroke="black"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      ></path>
                                      <path
                                        d="M2.13965 9.96883L4.54728 8.35235C4.93308 8.09352 5.48982 8.12282 5.83655 8.42072L5.99771 8.56234C6.37864 8.88955 6.99397 8.88955 7.3749 8.56234L9.40648 6.81889C9.78741 6.49169 10.4027 6.49169 10.7837 6.81889L11.5797 7.5026M5.23098 5.59798C5.49003 5.59798 5.73846 5.49508 5.92163 5.31191C6.1048 5.12873 6.20771 4.8803 6.20771 4.62126C6.20771 4.36221 6.1048 4.11378 5.92163 3.93061C5.73846 3.74744 5.49003 3.64453 5.23098 3.64453C4.97194 3.64453 4.72351 3.74744 4.54033 3.93061C4.35716 4.11378 4.25426 4.36221 4.25426 4.62126C4.25426 4.8803 4.35716 5.12873 4.54033 5.31191C4.72351 5.49508 4.97194 5.59798 5.23098 5.59798Z"
                                        stroke="black"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      ></path>
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_8952_3543">
                                        <rect
                                          width="11.7207"
                                          height="11.7207"
                                          fill="white"
                                          transform="translate(0.835938 0.714844)"
                                        ></rect>
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  <span>6</span>
                                </div>
                                <div className="verified cursor-pointer">
                                  <span>
                                    <svg
                                      width="14"
                                      height="14"
                                      viewBox="0 0 14 14"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g clipPath="url(#clip0_8952_1986)">
                                        <path
                                          d="M5.48218 12.4697H8.78833C11.5435 12.4697 12.6455 11.3677 12.6455 8.61255V5.3064C12.6455 2.55127 11.5435 1.44922 8.78833 1.44922H5.48218C2.72705 1.44922 1.625 2.55127 1.625 5.3064V8.61255C1.625 11.3677 2.72705 12.4697 5.48218 12.4697Z"
                                          stroke="black"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                        <path
                                          d="M4.79297 6.96175L6.35237 8.52115L9.47668 5.40234"
                                          stroke="black"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_8952_1986">
                                          <rect
                                            width="13.2246"
                                            height="13.2246"
                                            fill="white"
                                            transform="translate(0.522461 0.347656)"
                                          ></rect>
                                        </clipPath>
                                      </defs>
                                    </svg>
                                    Verified
                                  </span>
                                </div>
                                <div className="card-like cursor-pointer">
                                  <svg
                                    width="21"
                                    height="21"
                                    viewBox="-2.4 -2.4 28.80 28.80"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0">
                                      <rect
                                        x="-2.4"
                                        y="-2.4"
                                        width="28.80"
                                        height="28.80"
                                        rx="14.4"
                                        fill="#ffffff"
                                        strokeWidth="0"
                                      ></rect>
                                    </g>
                                    <g
                                      id="SVGRepo_tracerCarrier"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></g>
                                    <g id="SVGRepo_iconCarrier">
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M11.993 5.09691C11.0387 4.25883 9.78328 3.75 8.40796 3.75C5.42122 3.75 3 6.1497 3 9.10988C3 10.473 3.50639 11.7242 4.35199 12.67L12 20.25L19.4216 12.8944L19.641 12.6631C20.4866 11.7172 21 10.473 21 9.10988C21 6.1497 18.5788 3.75 15.592 3.75C14.2167 3.75 12.9613 4.25883 12.007 5.09692L12 5.08998L11.993 5.09691ZM12 7.09938L12.0549 7.14755L12.9079 6.30208L12.9968 6.22399C13.6868 5.61806 14.5932 5.25 15.592 5.25C17.763 5.25 19.5 6.99073 19.5 9.10988C19.5 10.0813 19.1385 10.9674 18.5363 11.6481L18.3492 11.8453L12 18.1381L5.44274 11.6391C4.85393 10.9658 4.5 10.0809 4.5 9.10988C4.5 6.99073 6.23699 5.25 8.40796 5.25C9.40675 5.25 10.3132 5.61806 11.0032 6.22398L11.0921 6.30203L11.9452 7.14752L12 7.09938Z"
                                        fill="#af824a "
                                      ></path>
                                    </g>
                                  </svg>
                                </div>
                                <div className="hometype font-bold">
                                  AED 6000
                                </div>
                              </div>
                            </div>
                            <div className="carddeatil-sm-right">
                              <div className="apartment">
                                <div className="d-flex align-items-start justify-content-between h-100">
                                  <div className="d-flex align-items-start justify-content-start flex-column">
                                    <div>
                                      <span> villa</span>
                                      <h4 className="cursor-pointer prod-title">
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting indus...
                                      </h4>
                                      <p className="downtown prod-location">
                                        <svg
                                          width="15"
                                          height="15"
                                          viewBox="0 0 15 15"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <g clipPath="url(#clip0_8952_2013)">
                                            <path
                                              d="M7.52508 8.12828C7.76408 8.12828 8.00075 8.08121 8.22156 7.98974C8.44237 7.89828 8.64301 7.76422 8.81201 7.59522C8.98101 7.42621 9.11508 7.22558 9.20654 7.00476C9.298 6.78395 9.34508 6.54729 9.34508 6.30828C9.34508 6.06928 9.298 5.83261 9.20654 5.6118C9.11508 5.39098 8.98101 5.19035 8.81201 5.02135C8.64301 4.85234 8.44237 4.71828 8.22156 4.62682C8.00075 4.53536 7.76408 4.48828 7.52508 4.48828C7.04238 4.48828 6.57946 4.68003 6.23814 5.02135C5.89683 5.36266 5.70508 5.82559 5.70508 6.30828C5.70508 6.79098 5.89683 7.2539 6.23814 7.59522C6.57946 7.93653 7.04238 8.12828 7.52508 8.12828Z"
                                              stroke="#4C4A4A"
                                            ></path>
                                            <path
                                              d="M2.63672 5.24677C3.78589 0.195105 11.2701 0.200939 12.4134 5.25261C13.0842 8.21594 11.2409 10.7243 9.62506 12.2759C9.06044 12.8205 8.30658 13.1248 7.52214 13.1248C6.7377 13.1248 5.98385 12.8205 5.41922 12.2759C3.80923 10.7243 1.96589 8.21011 2.63672 5.24677Z"
                                              stroke="#4C4A4A"
                                            ></path>
                                          </g>
                                        </svg>
                                        Tredunlisted Villa
                                      </p>
                                      <div className="mb-3 d-flex gap-3 align-items-center flex-wrap">
                                        <div className="bathdetailitems">
                                          <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M13.377 9.50781V10.1328C13.377 11.3266 12.7082 12.3641 11.7207 12.8891L12.127 14.5078H10.877L10.5645 13.2578C10.4582 13.2578 10.3582 13.2578 10.252 13.2578H5.25195C5.1457 13.2578 5.0457 13.2578 4.93945 13.2578L4.62695 14.5078H3.37695L3.7832 12.8891C2.7957 12.3641 2.12695 11.3266 2.12695 10.1328V9.50781H1.50195V8.25781H12.752V3.88281C12.752 3.71705 12.6861 3.55808 12.5689 3.44087C12.4517 3.32366 12.2927 3.25781 12.127 3.25781C11.8145 3.25781 11.577 3.47031 11.502 3.75156C11.8957 4.08906 12.127 4.58906 12.127 5.13281H8.37695C8.37695 4.63553 8.5745 4.15862 8.92613 3.80699C9.27776 3.45536 9.75467 3.25781 10.252 3.25781C10.2895 3.25781 10.3207 3.25781 10.3582 3.25781C10.6145 2.53281 11.3082 2.00781 12.127 2.00781C12.6242 2.00781 13.1011 2.20536 13.4528 2.55699C13.8044 2.90862 14.002 3.38553 14.002 3.88281V9.50781H13.377ZM12.127 9.50781H3.37695V10.1328C3.37695 10.6301 3.5745 11.107 3.92613 11.4586C4.27776 11.8103 4.75467 12.0078 5.25195 12.0078H10.252C10.7492 12.0078 11.2261 11.8103 11.5778 11.4586C11.9294 11.107 12.127 10.6301 12.127 10.1328V9.50781Z"
                                              fill="#0F0F0F"
                                            ></path>
                                          </svg>
                                          <span>2</span>
                                        </div>
                                        <div className="bathdetailitems">
                                          <svg
                                            width="12"
                                            height="12"
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <rect
                                              x="1.45508"
                                              y="1.21094"
                                              width="9.70215"
                                              height="9.70215"
                                              stroke="#1B1B1B"
                                            ></rect>
                                            <path
                                              d="M6.26562 1.17188V11.0887"
                                              stroke="#1B1B1B"
                                            ></path>
                                            <path
                                              d="M1.30664 6.12891L11.2235 6.12891"
                                              stroke="#1B1B1B"
                                            ></path>
                                          </svg>
                                          <span> 5000 Sqft</span>
                                        </div>
                                        {/* <div className="bathdetailitems">
                                          <Image
                                            src="/_next/static/media/parking.86354047.png"
                                            alt=""
                                            className="w-72"
                                          />
                                          <span>Parking</span>
                                        </div> */}
                                      </div>
                                    </div>
                                    <div className="d-flex align-items-center md:gap-3 gap-1 flex-wrap">
                                      <button className="d-flex align-items-center justify-content-center">
                                        <svg
                                          width="16"
                                          height="16"
                                          viewBox="0 0 16 16"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <g clipPath="url(#clip0_8952_2064)">
                                            <path
                                              d="M14.5711 12.1281C14.5711 12.3531 14.5211 12.5844 14.4148 12.8094C14.3086 13.0344 14.1711 13.2469 13.9898 13.4469C13.6836 13.7844 13.3461 14.0281 12.9648 14.1844C12.5898 14.3406 12.1836 14.4219 11.7461 14.4219C11.1086 14.4219 10.4273 14.2719 9.70859 13.9656C8.98984 13.6594 8.27109 13.2469 7.55859 12.7281C6.83241 12.1969 6.14715 11.612 5.50859 10.9781C4.87657 10.3419 4.29366 9.65868 3.76484 8.93438C3.25234 8.22188 2.83984 7.50938 2.53984 6.80313C2.23984 6.09063 2.08984 5.40937 2.08984 4.75937C2.08984 4.33437 2.16484 3.92813 2.31484 3.55313C2.46484 3.17188 2.70234 2.82188 3.03359 2.50938C3.43359 2.11563 3.87109 1.92188 4.33359 1.92188C4.50859 1.92188 4.68359 1.95938 4.83984 2.03438C5.00234 2.10938 5.14609 2.22188 5.25859 2.38438L6.70859 4.42813C6.82109 4.58438 6.90234 4.72813 6.95859 4.86563C7.01484 4.99688 7.04609 5.12813 7.04609 5.24688C7.04609 5.39688 7.00234 5.54687 6.91484 5.69062C6.83359 5.83437 6.71484 5.98437 6.56484 6.13437L6.08984 6.62812C6.02109 6.69687 5.98984 6.77813 5.98984 6.87813C5.98984 6.92813 5.99609 6.97187 6.00859 7.02187C6.02734 7.07187 6.04609 7.10937 6.05859 7.14687C6.17109 7.35312 6.36484 7.62188 6.63984 7.94688C6.92109 8.27188 7.22109 8.60313 7.54609 8.93438C7.88359 9.26563 8.20859 9.57187 8.53984 9.85312C8.86484 10.1281 9.13359 10.3156 9.34609 10.4281C9.37734 10.4406 9.41484 10.4594 9.45859 10.4781C9.50859 10.4969 9.55859 10.5031 9.61484 10.5031C9.72109 10.5031 9.80234 10.4656 9.87109 10.3969L10.3461 9.92813C10.5023 9.77188 10.6523 9.65312 10.7961 9.57812C10.9398 9.49062 11.0836 9.44687 11.2398 9.44687C11.3586 9.44687 11.4836 9.47188 11.6211 9.52813C11.7586 9.58438 11.9023 9.66563 12.0586 9.77188L14.1273 11.2406C14.2898 11.3531 14.4023 11.4844 14.4711 11.6406C14.5336 11.7969 14.5711 11.9531 14.5711 12.1281Z"
                                              stroke="white"
                                              strokeMiterlimit="10"
                                            ></path>
                                          </g>
                                          <defs>
                                            <clipPath id="clip0_8952_2064">
                                              <rect
                                                width="15"
                                                height="15"
                                                fill="white"
                                                transform="translate(0.839844 0.671875)"
                                              ></rect>
                                            </clipPath>
                                          </defs>
                                        </svg>
                                        Call
                                      </button>
                                      <a
                                        target="_blank"
                                        href="mailto:contactus@thiyo.com"
                                      >
                                        <button className="d-flex align-items-center">
                                          <svg
                                            width="16"
                                            height="13"
                                            viewBox="0 0 16 13"
                                            fill="#000"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M15.5527 1.59162C15.5527 0.720524 14.8777 0.0078125 14.0527 0.0078125H2.05273C1.22773 0.0078125 0.552734 0.720524 0.552734 1.59162V11.0944C0.552734 11.9655 1.22773 12.6782 2.05273 12.6782H14.0527C14.8777 12.6782 15.5527 11.9655 15.5527 11.0944V1.59162ZM14.0527 1.59162L8.05273 5.55113L2.05273 1.59162H14.0527ZM14.0527 11.0944H2.05273V3.17542L8.05273 7.13493L14.0527 3.17542V11.0944Z"
                                              fill="white"
                                            ></path>
                                          </svg>
                                          Email
                                        </button>
                                      </a>
                                      <a
                                        target="_blank"
                                        href="https://wa.me/8238376353?text=Hello%20there!"
                                      >
                                        <button className="whatsapp d-flex align-items-center">
                                          <svg
                                            width="17"
                                            height="18"
                                            viewBox="0 0 17 18"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M8.57749 0.804688C4.13181 0.804688 0.508498 4.63043 0.508498 9.32449C0.508498 10.829 0.883042 12.2905 1.58328 13.5801L0.443359 17.999L4.71805 16.8126C5.89868 17.4918 7.22587 17.8529 8.57749 17.8529C13.0232 17.8529 16.6465 14.0271 16.6465 9.33309C16.6465 7.05484 15.8078 4.91414 14.2852 3.30647C12.7626 1.6902 10.7352 0.804688 8.57749 0.804688ZM8.58563 2.24042C10.3769 2.24042 12.0542 2.97977 13.3244 4.32093C14.5865 5.66209 15.2867 7.44171 15.2867 9.33309C15.2867 13.2362 12.2741 16.4086 8.57749 16.4086C7.37243 16.4086 6.1918 16.0733 5.16588 15.4199L4.92161 15.2737L2.38122 15.9787L3.05703 13.3652L2.89418 13.0901C2.22652 11.981 1.86826 10.6657 1.86826 9.32449C1.8764 5.42137 4.8809 2.24042 8.58563 2.24042ZM5.71955 5.38698C5.58928 5.38698 5.36943 5.43857 5.18216 5.6535C5.00303 5.86843 4.47378 6.39285 4.47378 7.43311C4.47378 8.48197 5.19845 9.48784 5.28801 9.63399C5.402 9.78014 6.72105 11.9294 8.74848 12.8407C9.22887 13.0729 9.60342 13.2018 9.89654 13.2964C10.3769 13.4597 10.8166 13.4339 11.1667 13.3824C11.5576 13.3222 12.3555 12.8665 12.5265 12.3679C12.6975 11.8693 12.6975 11.448 12.6486 11.3534C12.5916 11.2675 12.4614 11.2159 12.2578 11.1213C12.0542 11.0009 11.0609 10.4851 10.8818 10.4163C10.6945 10.3476 10.5805 10.3132 10.4258 10.5195C10.2955 10.7344 9.90468 11.2159 9.79069 11.3534C9.66856 11.4996 9.55456 11.5168 9.35915 11.4136C9.14745 11.3018 8.49607 11.0783 7.73069 10.3562C7.12817 9.78874 6.72919 9.09237 6.60706 8.87744C6.50935 8.67111 6.59892 8.54215 6.69662 8.44758C6.78619 8.35301 6.91647 8.19826 6.99789 8.0693C7.10374 7.94894 7.13631 7.85437 7.20145 7.71682C7.26658 7.57067 7.23401 7.45031 7.18516 7.34714C7.13631 7.25257 6.72919 6.18652 6.55821 5.76526C6.39536 5.35259 6.23252 5.40418 6.10224 5.39558C5.98825 5.39558 5.85797 5.38698 5.71955 5.38698Z"
                                              fill="white"
                                            ></path>
                                          </svg>
                                          WhatsApp
                                        </button>
                                      </a>
                                    </div>
                                  </div>
                                  <div className="sendIcon">
                                    <svg
                                      width="26"
                                      height="26"
                                      viewBox="0 0 26 26"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g clipPath="url(#clip0_8952_6971)">
                                        <path
                                          d="M9.2473 16.2664L12.1683 13.461M7.41227 9.94896L14.2661 7.8171C17.3408 6.86076 18.9721 8.55928 17.8924 11.5928L15.4855 18.355C13.8659 22.9053 11.3687 22.8496 9.93938 18.243L9.51123 16.8552C9.40165 16.5029 9.02241 16.108 8.67482 15.9843L7.30025 15.4951C2.75517 13.8809 2.80572 11.3783 7.41227 9.94896Z"
                                          stroke="#595959"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="nav-profile"
                        role="tabpanel"
                        aria-labelledby="nav-profile-tab"
                        tabIndex="0"
                      >
                        <div className="row pb-3">
                          <div className="col-12 col-sm-6 col-xl-4 col-xxxl-3 mb-3">
                            <div className="card cstm-card-main cstm-card-main-cs">
                              <div className="position-relative">
                                <Image
                                  src={colonial}
                                  alt="colonial"
                                  className="Image-fluid pro-Image w-100"
                                />

                                <div className=" gallery">
                                  <svg
                                    width="13"
                                    height="13"
                                    viewBox="0 0 13 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g clipPath="url(#clip0_8952_3543)">
                                      <path
                                        d="M5.23104 11.4587H8.16121C10.603 11.4587 11.5798 10.4819 11.5798 8.04012V5.10994C11.5798 2.66813 10.603 1.69141 8.16121 1.69141H5.23104C2.78923 1.69141 1.8125 2.66813 1.8125 5.10994V8.04012C1.8125 10.4819 2.78923 11.4587 5.23104 11.4587Z"
                                        stroke="black"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      ></path>
                                      <path
                                        d="M2.13965 9.96883L4.54728 8.35235C4.93308 8.09352 5.48982 8.12282 5.83655 8.42072L5.99771 8.56234C6.37864 8.88955 6.99397 8.88955 7.3749 8.56234L9.40648 6.81889C9.78741 6.49169 10.4027 6.49169 10.7837 6.81889L11.5797 7.5026M5.23098 5.59798C5.49003 5.59798 5.73846 5.49508 5.92163 5.31191C6.1048 5.12873 6.20771 4.8803 6.20771 4.62126C6.20771 4.36221 6.1048 4.11378 5.92163 3.93061C5.73846 3.74744 5.49003 3.64453 5.23098 3.64453C4.97194 3.64453 4.72351 3.74744 4.54033 3.93061C4.35716 4.11378 4.25426 4.36221 4.25426 4.62126C4.25426 4.8803 4.35716 5.12873 4.54033 5.31191C4.72351 5.49508 4.97194 5.59798 5.23098 5.59798Z"
                                        stroke="black"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      ></path>
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_8952_3543">
                                        <rect
                                          width="11.7207"
                                          height="11.7207"
                                          fill="white"
                                          transform="translate(0.835938 0.714844)"
                                        ></rect>
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  <span>6</span>
                                </div>
                                <div className="verified">
                                  <span>
                                    <svg
                                      width="14"
                                      height="14"
                                      viewBox="0 0 14 14"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g clipPath="url(#clip0_8952_1986)">
                                        <path
                                          d="M5.48218 12.4697H8.78833C11.5435 12.4697 12.6455 11.3677 12.6455 8.61255V5.3064C12.6455 2.55127 11.5435 1.44922 8.78833 1.44922H5.48218C2.72705 1.44922 1.625 2.55127 1.625 5.3064V8.61255C1.625 11.3677 2.72705 12.4697 5.48218 12.4697Z"
                                          stroke="black"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                        <path
                                          d="M4.79297 6.96175L6.35237 8.52115L9.47668 5.40234"
                                          stroke="black"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_8952_1986">
                                          <rect
                                            width="13.2246"
                                            height="13.2246"
                                            fill="white"
                                            transform="translate(0.522461 0.347656)"
                                          ></rect>
                                        </clipPath>
                                      </defs>
                                    </svg>
                                    Verified
                                  </span>
                                </div>
                                <div className="verified apartment">
                                  <span>Apartment</span>
                                </div>
                                <div className="card-like cursor-pointer">
                                  <svg
                                    width="21"
                                    height="21"
                                    viewBox="-2.4 -2.4 28.80 28.80"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0">
                                      <rect
                                        x="-2.4"
                                        y="-2.4"
                                        width="28.80"
                                        height="28.80"
                                        rx="14.4"
                                        fill="#ffffff"
                                        strokeWidth="0"
                                      ></rect>
                                    </g>
                                    <g
                                      id="SVGRepo_tracerCarrier"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></g>
                                    <g id="SVGRepo_iconCarrier">
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M11.993 5.09691C11.0387 4.25883 9.78328 3.75 8.40796 3.75C5.42122 3.75 3 6.1497 3 9.10988C3 10.473 3.50639 11.7242 4.35199 12.67L12 20.25L19.4216 12.8944L19.641 12.6631C20.4866 11.7172 21 10.473 21 9.10988C21 6.1497 18.5788 3.75 15.592 3.75C14.2167 3.75 12.9613 4.25883 12.007 5.09692L12 5.08998L11.993 5.09691ZM12 7.09938L12.0549 7.14755L12.9079 6.30208L12.9968 6.22399C13.6868 5.61806 14.5932 5.25 15.592 5.25C17.763 5.25 19.5 6.99073 19.5 9.10988C19.5 10.0813 19.1385 10.9674 18.5363 11.6481L18.3492 11.8453L12 18.1381L5.44274 11.6391C4.85393 10.9658 4.5 10.0809 4.5 9.10988C4.5 6.99073 6.23699 5.25 8.40796 5.25C9.40675 5.25 10.3132 5.61806 11.0032 6.22398L11.0921 6.30203L11.9452 7.14752L12 7.09938Z"
                                        fill="#af824a "
                                      ></path>
                                    </g>
                                  </svg>
                                </div>
                              </div>
                              <div className="card-body cstm-card-body-main">
                                <p className="cursor-pointer title">
                                  Tredunlisted Villa
                                </p>
                                <div className="d-flex pb-2 pb-lg-0 my-1 my-lg-2 gap-1 align-items-center">
                                  <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 13 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g clipPath="url(#clip0_5761_881)">
                                      <path
                                        d="M6.68465 1.29492C8.28191 1.29492 9.57998 2.57852 9.57998 4.16612C9.57998 6.31831 6.68465 9.49835 6.68465 9.49835C6.68465 9.49835 3.78933 6.31831 3.78933 4.16612C3.78933 2.57852 5.0874 1.29492 6.68465 1.29492ZM6.68465 3.22514C6.42869 3.22514 6.18321 3.32682 6.00222 3.50781C5.82123 3.68881 5.71954 3.93429 5.71954 4.19025C5.71954 4.44621 5.82123 4.69169 6.00222 4.87268C6.18321 5.05368 6.42869 5.15536 6.68465 5.15536C6.94062 5.15536 7.18609 5.05368 7.36709 4.87268C7.54808 4.69169 7.64976 4.44621 7.64976 4.19025C7.64976 3.93429 7.54808 3.68881 7.36709 3.50781C7.18609 3.32682 6.94062 3.22514 6.68465 3.22514ZM10.5451 9.49835C10.5451 10.5648 8.81754 11.4286 6.68465 11.4286C4.55176 11.4286 2.82422 10.5648 2.82422 9.49835C2.82422 8.87585 3.41294 8.32091 4.32496 7.96865L4.6338 8.40777C4.11264 8.62492 3.78933 8.92411 3.78933 9.25707C3.78933 9.92299 5.0874 10.4635 6.68465 10.4635C8.28191 10.4635 9.57998 9.92299 9.57998 9.25707C9.57998 8.92411 9.25667 8.62492 8.73551 8.40777L9.04434 7.96865C9.95637 8.32091 10.5451 8.87585 10.5451 9.49835Z"
                                        fill="#737D8C"
                                      ></path>
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_5761_881">
                                        <rect
                                          width="11.5813"
                                          height="11.5813"
                                          fill="white"
                                          transform="translate(0.894531 0.330078)"
                                        ></rect>
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  <p className="card-title ">
                                    2BHK,&nbsp;&nbsp;Tredunlisted Villa
                                  </p>
                                </div>
                                <div className="d-flex justify-content-between gap-2 flex-wrap house-main align-items-center">
                                  <a href="#">
                                    <Image src={beadroom} alt="beadroom" />3
                                    Bedroom
                                  </a>
                                  <a href="#">
                                    <Image src={Bathroom} alt="Bathroom" />2
                                    Bathroom
                                  </a>
                                </div>
                                <div className="btn-main">
                                  <p>AED 6000</p>
                                  <div className="w-50 d-flex align-items-center gap-2 justify-content-end">
                                    <div className="cursor-pointer">
                                      <svg
                                        width="16"
                                        height="15"
                                        viewBox="0 0 16 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <g clipPath="url(#clip0_8952_3529)">
                                          <path
                                            d="M13.7645 11.4562C13.7645 11.6812 13.7145 11.9125 13.6082 12.1375C13.502 12.3625 13.3645 12.575 13.1832 12.775C12.877 13.1125 12.5395 13.3563 12.1582 13.5125C11.7832 13.6688 11.377 13.75 10.9395 13.75C10.302 13.75 9.6207 13.6 8.90195 13.2938C8.1832 12.9875 7.46445 12.575 6.75195 12.0563C6.02577 11.5251 5.34051 10.9401 4.70195 10.3062C4.06993 9.67001 3.48702 8.9868 2.9582 8.2625C2.4457 7.55 2.0332 6.8375 1.7332 6.13125C1.4332 5.41875 1.2832 4.7375 1.2832 4.0875C1.2832 3.6625 1.3582 3.25625 1.5082 2.88125C1.6582 2.5 1.8957 2.15 2.22695 1.8375C2.62695 1.44375 3.06445 1.25 3.52695 1.25C3.70195 1.25 3.87695 1.2875 4.0332 1.3625C4.1957 1.4375 4.33945 1.55 4.45195 1.7125L5.90195 3.75625C6.01445 3.9125 6.0957 4.05625 6.15195 4.19375C6.2082 4.325 6.23945 4.45625 6.23945 4.575C6.23945 4.725 6.1957 4.875 6.1082 5.01875C6.02695 5.1625 5.9082 5.3125 5.7582 5.4625L5.2832 5.95625C5.21445 6.025 5.1832 6.10625 5.1832 6.20625C5.1832 6.25625 5.18945 6.3 5.20195 6.35C5.2207 6.4 5.23945 6.4375 5.25195 6.475C5.36445 6.68125 5.5582 6.95 5.8332 7.275C6.11445 7.6 6.41445 7.93125 6.73945 8.2625C7.07695 8.59375 7.40195 8.9 7.7332 9.18125C8.0582 9.45625 8.32695 9.64375 8.53945 9.75625C8.5707 9.76875 8.6082 9.7875 8.65195 9.80625C8.70195 9.825 8.75195 9.83125 8.8082 9.83125C8.91445 9.83125 8.9957 9.79375 9.06445 9.725L9.53945 9.25625C9.6957 9.1 9.8457 8.98125 9.98945 8.90625C10.1332 8.81875 10.277 8.775 10.4332 8.775C10.552 8.775 10.677 8.8 10.8145 8.85625C10.952 8.9125 11.0957 8.99375 11.252 9.1L13.3207 10.5687C13.4832 10.6812 13.5957 10.8125 13.6645 10.9687C13.727 11.125 13.7645 11.2812 13.7645 11.4562Z"
                                            stroke="#AF824A"
                                            strokeWidth="1.5"
                                            strokeMiterlimit="10"
                                          ></path>
                                        </g>
                                      </svg>
                                    </div>
                                    <div>
                                      <a
                                        target="_blank"
                                        href="mailto:contactus@thiyo.com"
                                      >
                                        <svg
                                          width="16"
                                          height="12"
                                          viewBox="0 0 16 12"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M15.3857 1.5C15.3857 0.675 14.7107 0 13.8857 0H1.88574C1.06074 0 0.385742 0.675 0.385742 1.5V10.5C0.385742 11.325 1.06074 12 1.88574 12H13.8857C14.7107 12 15.3857 11.325 15.3857 10.5V1.5ZM13.8857 1.5L7.88574 5.25L1.88574 1.5H13.8857ZM13.8857 10.5H1.88574V3L7.88574 6.75L13.8857 3V10.5Z"
                                            fill="#AF824A"
                                          ></path>
                                        </svg>
                                      </a>
                                    </div>
                                    <div>
                                      <a
                                        target="_blank"
                                        href="https://wa.me/8238376353?text=Hello%20there!"
                                      >
                                        <svg
                                          width="17"
                                          height="18"
                                          viewBox="0 0 17 18"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M8.57749 0.804688C4.13181 0.804688 0.508498 4.63043 0.508498 9.32449C0.508498 10.829 0.883042 12.2905 1.58328 13.5801L0.443359 17.999L4.71805 16.8126C5.89868 17.4918 7.22587 17.8529 8.57749 17.8529C13.0232 17.8529 16.6465 14.0271 16.6465 9.33309C16.6465 7.05484 15.8078 4.91414 14.2852 3.30647C12.7626 1.6902 10.7352 0.804688 8.57749 0.804688ZM8.58563 2.24042C10.3769 2.24042 12.0542 2.97977 13.3244 4.32093C14.5865 5.66209 15.2867 7.44171 15.2867 9.33309C15.2867 13.2362 12.2741 16.4086 8.57749 16.4086C7.37243 16.4086 6.1918 16.0733 5.16588 15.4199L4.92161 15.2737L2.38122 15.9787L3.05703 13.3652L2.89418 13.0901C2.22652 11.981 1.86826 10.6657 1.86826 9.32449C1.8764 5.42137 4.8809 2.24042 8.58563 2.24042ZM5.71955 5.38698C5.58928 5.38698 5.36943 5.43857 5.18216 5.6535C5.00303 5.86843 4.47378 6.39285 4.47378 7.43311C4.47378 8.48197 5.19845 9.48784 5.28801 9.63399C5.402 9.78014 6.72105 11.9294 8.74848 12.8407C9.22887 13.0729 9.60342 13.2018 9.89654 13.2964C10.3769 13.4597 10.8166 13.4339 11.1667 13.3824C11.5576 13.3222 12.3555 12.8665 12.5265 12.3679C12.6975 11.8693 12.6975 11.448 12.6486 11.3534C12.5916 11.2675 12.4614 11.2159 12.2578 11.1213C12.0542 11.0009 11.0609 10.4851 10.8818 10.4163C10.6945 10.3476 10.5805 10.3132 10.4258 10.5195C10.2955 10.7344 9.90468 11.2159 9.79069 11.3534C9.66856 11.4996 9.55456 11.5168 9.35915 11.4136C9.14745 11.3018 8.49607 11.0783 7.73069 10.3562C7.12817 9.78874 6.72919 9.09237 6.60706 8.87744C6.50935 8.67111 6.59892 8.54215 6.69662 8.44758C6.78619 8.35301 6.91647 8.19826 6.99789 8.0693C7.10374 7.94894 7.13631 7.85437 7.20145 7.71682C7.26658 7.57067 7.23401 7.45031 7.18516 7.34714C7.13631 7.25257 6.72919 6.18652 6.55821 5.76526C6.39536 5.35259 6.23252 5.40418 6.10224 5.39558C5.98825 5.39558 5.85797 5.38698 5.71955 5.38698Z"
                                            fill="#1DB171"
                                          ></path>
                                        </svg>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-6 col-xl-4 col-xxxl-3 mb-3">
                            <div className="card cstm-card-main cstm-card-main-cs">
                              <div className="position-relative">
                                <Image
                                  src={gardenlight}
                                  alt="gardenlight"
                                  className="Image-fluid pro-Image w-100"
                                />
                                <div className=" gallery">
                                  <svg
                                    width="13"
                                    height="13"
                                    viewBox="0 0 13 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g clipPath="url(#clip0_8952_3543)">
                                      <path
                                        d="M5.23104 11.4587H8.16121C10.603 11.4587 11.5798 10.4819 11.5798 8.04012V5.10994C11.5798 2.66813 10.603 1.69141 8.16121 1.69141H5.23104C2.78923 1.69141 1.8125 2.66813 1.8125 5.10994V8.04012C1.8125 10.4819 2.78923 11.4587 5.23104 11.4587Z"
                                        stroke="black"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      ></path>
                                      <path
                                        d="M2.13965 9.96883L4.54728 8.35235C4.93308 8.09352 5.48982 8.12282 5.83655 8.42072L5.99771 8.56234C6.37864 8.88955 6.99397 8.88955 7.3749 8.56234L9.40648 6.81889C9.78741 6.49169 10.4027 6.49169 10.7837 6.81889L11.5797 7.5026M5.23098 5.59798C5.49003 5.59798 5.73846 5.49508 5.92163 5.31191C6.1048 5.12873 6.20771 4.8803 6.20771 4.62126C6.20771 4.36221 6.1048 4.11378 5.92163 3.93061C5.73846 3.74744 5.49003 3.64453 5.23098 3.64453C4.97194 3.64453 4.72351 3.74744 4.54033 3.93061C4.35716 4.11378 4.25426 4.36221 4.25426 4.62126C4.25426 4.8803 4.35716 5.12873 4.54033 5.31191C4.72351 5.49508 4.97194 5.59798 5.23098 5.59798Z"
                                        stroke="black"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      ></path>
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_8952_3543">
                                        <rect
                                          width="11.7207"
                                          height="11.7207"
                                          fill="white"
                                          transform="translate(0.835938 0.714844)"
                                        ></rect>
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  <span>6</span>
                                </div>
                                <div className="verified">
                                  <span>
                                    <svg
                                      width="14"
                                      height="14"
                                      viewBox="0 0 14 14"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g clipPath="url(#clip0_8952_1986)">
                                        <path
                                          d="M5.48218 12.4697H8.78833C11.5435 12.4697 12.6455 11.3677 12.6455 8.61255V5.3064C12.6455 2.55127 11.5435 1.44922 8.78833 1.44922H5.48218C2.72705 1.44922 1.625 2.55127 1.625 5.3064V8.61255C1.625 11.3677 2.72705 12.4697 5.48218 12.4697Z"
                                          stroke="black"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                        <path
                                          d="M4.79297 6.96175L6.35237 8.52115L9.47668 5.40234"
                                          stroke="black"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_8952_1986">
                                          <rect
                                            width="13.2246"
                                            height="13.2246"
                                            fill="white"
                                            transform="translate(0.522461 0.347656)"
                                          ></rect>
                                        </clipPath>
                                      </defs>
                                    </svg>
                                    Verified
                                  </span>
                                </div>
                                <div className="verified apartment">
                                  <span>Apartment</span>
                                </div>
                                <div className="card-like cursor-pointer">
                                  <svg
                                    width="21"
                                    height="21"
                                    viewBox="-2.4 -2.4 28.80 28.80"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0">
                                      <rect
                                        x="-2.4"
                                        y="-2.4"
                                        width="28.80"
                                        height="28.80"
                                        rx="14.4"
                                        fill="#ffffff"
                                        strokeWidth="0"
                                      ></rect>
                                    </g>
                                    <g
                                      id="SVGRepo_tracerCarrier"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></g>
                                    <g id="SVGRepo_iconCarrier">
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M11.993 5.09691C11.0387 4.25883 9.78328 3.75 8.40796 3.75C5.42122 3.75 3 6.1497 3 9.10988C3 10.473 3.50639 11.7242 4.35199 12.67L12 20.25L19.4216 12.8944L19.641 12.6631C20.4866 11.7172 21 10.473 21 9.10988C21 6.1497 18.5788 3.75 15.592 3.75C14.2167 3.75 12.9613 4.25883 12.007 5.09692L12 5.08998L11.993 5.09691ZM12 7.09938L12.0549 7.14755L12.9079 6.30208L12.9968 6.22399C13.6868 5.61806 14.5932 5.25 15.592 5.25C17.763 5.25 19.5 6.99073 19.5 9.10988C19.5 10.0813 19.1385 10.9674 18.5363 11.6481L18.3492 11.8453L12 18.1381L5.44274 11.6391C4.85393 10.9658 4.5 10.0809 4.5 9.10988C4.5 6.99073 6.23699 5.25 8.40796 5.25C9.40675 5.25 10.3132 5.61806 11.0032 6.22398L11.0921 6.30203L11.9452 7.14752L12 7.09938Z"
                                        fill="#af824a "
                                      ></path>
                                    </g>
                                  </svg>
                                </div>
                              </div>
                              <div className="card-body cstm-card-body-main">
                                <p className="cursor-pointer title">
                                  Tredunlisted Villa
                                </p>
                                <div className="d-flex pb-2 pb-lg-0 my-1 my-lg-2 gap-1 align-items-center">
                                  <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 13 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g clipPath="url(#clip0_5761_881)">
                                      <path
                                        d="M6.68465 1.29492C8.28191 1.29492 9.57998 2.57852 9.57998 4.16612C9.57998 6.31831 6.68465 9.49835 6.68465 9.49835C6.68465 9.49835 3.78933 6.31831 3.78933 4.16612C3.78933 2.57852 5.0874 1.29492 6.68465 1.29492ZM6.68465 3.22514C6.42869 3.22514 6.18321 3.32682 6.00222 3.50781C5.82123 3.68881 5.71954 3.93429 5.71954 4.19025C5.71954 4.44621 5.82123 4.69169 6.00222 4.87268C6.18321 5.05368 6.42869 5.15536 6.68465 5.15536C6.94062 5.15536 7.18609 5.05368 7.36709 4.87268C7.54808 4.69169 7.64976 4.44621 7.64976 4.19025C7.64976 3.93429 7.54808 3.68881 7.36709 3.50781C7.18609 3.32682 6.94062 3.22514 6.68465 3.22514ZM10.5451 9.49835C10.5451 10.5648 8.81754 11.4286 6.68465 11.4286C4.55176 11.4286 2.82422 10.5648 2.82422 9.49835C2.82422 8.87585 3.41294 8.32091 4.32496 7.96865L4.6338 8.40777C4.11264 8.62492 3.78933 8.92411 3.78933 9.25707C3.78933 9.92299 5.0874 10.4635 6.68465 10.4635C8.28191 10.4635 9.57998 9.92299 9.57998 9.25707C9.57998 8.92411 9.25667 8.62492 8.73551 8.40777L9.04434 7.96865C9.95637 8.32091 10.5451 8.87585 10.5451 9.49835Z"
                                        fill="#737D8C"
                                      ></path>
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_5761_881">
                                        <rect
                                          width="11.5813"
                                          height="11.5813"
                                          fill="white"
                                          transform="translate(0.894531 0.330078)"
                                        ></rect>
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  <p className="card-title ">
                                    2BHK,&nbsp;&nbsp;Tredunlisted Villa
                                  </p>
                                </div>
                                <div className="d-flex justify-content-between gap-2 flex-wrap house-main align-items-center">
                                  <a href="#">
                                    <Image src={beadroom} alt="beadroom" />3
                                    Bedroom
                                  </a>
                                  <a href="#">
                                    <Image src={Bathroom} alt="Bathroom" />2
                                    Bathroom
                                  </a>
                                </div>
                                <div className="btn-main">
                                  <p>AED 6000</p>
                                  <div className="w-50 d-flex align-items-center gap-2 justify-content-end">
                                    <div className="cursor-pointer">
                                      <svg
                                        width="16"
                                        height="15"
                                        viewBox="0 0 16 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <g clipPath="url(#clip0_8952_3529)">
                                          <path
                                            d="M13.7645 11.4562C13.7645 11.6812 13.7145 11.9125 13.6082 12.1375C13.502 12.3625 13.3645 12.575 13.1832 12.775C12.877 13.1125 12.5395 13.3563 12.1582 13.5125C11.7832 13.6688 11.377 13.75 10.9395 13.75C10.302 13.75 9.6207 13.6 8.90195 13.2938C8.1832 12.9875 7.46445 12.575 6.75195 12.0563C6.02577 11.5251 5.34051 10.9401 4.70195 10.3062C4.06993 9.67001 3.48702 8.9868 2.9582 8.2625C2.4457 7.55 2.0332 6.8375 1.7332 6.13125C1.4332 5.41875 1.2832 4.7375 1.2832 4.0875C1.2832 3.6625 1.3582 3.25625 1.5082 2.88125C1.6582 2.5 1.8957 2.15 2.22695 1.8375C2.62695 1.44375 3.06445 1.25 3.52695 1.25C3.70195 1.25 3.87695 1.2875 4.0332 1.3625C4.1957 1.4375 4.33945 1.55 4.45195 1.7125L5.90195 3.75625C6.01445 3.9125 6.0957 4.05625 6.15195 4.19375C6.2082 4.325 6.23945 4.45625 6.23945 4.575C6.23945 4.725 6.1957 4.875 6.1082 5.01875C6.02695 5.1625 5.9082 5.3125 5.7582 5.4625L5.2832 5.95625C5.21445 6.025 5.1832 6.10625 5.1832 6.20625C5.1832 6.25625 5.18945 6.3 5.20195 6.35C5.2207 6.4 5.23945 6.4375 5.25195 6.475C5.36445 6.68125 5.5582 6.95 5.8332 7.275C6.11445 7.6 6.41445 7.93125 6.73945 8.2625C7.07695 8.59375 7.40195 8.9 7.7332 9.18125C8.0582 9.45625 8.32695 9.64375 8.53945 9.75625C8.5707 9.76875 8.6082 9.7875 8.65195 9.80625C8.70195 9.825 8.75195 9.83125 8.8082 9.83125C8.91445 9.83125 8.9957 9.79375 9.06445 9.725L9.53945 9.25625C9.6957 9.1 9.8457 8.98125 9.98945 8.90625C10.1332 8.81875 10.277 8.775 10.4332 8.775C10.552 8.775 10.677 8.8 10.8145 8.85625C10.952 8.9125 11.0957 8.99375 11.252 9.1L13.3207 10.5687C13.4832 10.6812 13.5957 10.8125 13.6645 10.9687C13.727 11.125 13.7645 11.2812 13.7645 11.4562Z"
                                            stroke="#AF824A"
                                            strokeWidth="1.5"
                                            strokeMiterlimit="10"
                                          ></path>
                                        </g>
                                      </svg>
                                    </div>
                                    <div>
                                      <a
                                        target="_blank"
                                        href="mailto:contactus@thiyo.com"
                                      >
                                        <svg
                                          width="16"
                                          height="12"
                                          viewBox="0 0 16 12"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M15.3857 1.5C15.3857 0.675 14.7107 0 13.8857 0H1.88574C1.06074 0 0.385742 0.675 0.385742 1.5V10.5C0.385742 11.325 1.06074 12 1.88574 12H13.8857C14.7107 12 15.3857 11.325 15.3857 10.5V1.5ZM13.8857 1.5L7.88574 5.25L1.88574 1.5H13.8857ZM13.8857 10.5H1.88574V3L7.88574 6.75L13.8857 3V10.5Z"
                                            fill="#AF824A"
                                          ></path>
                                        </svg>
                                      </a>
                                    </div>
                                    <div>
                                      <a
                                        target="_blank"
                                        href="https://wa.me/8238376353?text=Hello%20there!"
                                      >
                                        <svg
                                          width="17"
                                          height="18"
                                          viewBox="0 0 17 18"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M8.57749 0.804688C4.13181 0.804688 0.508498 4.63043 0.508498 9.32449C0.508498 10.829 0.883042 12.2905 1.58328 13.5801L0.443359 17.999L4.71805 16.8126C5.89868 17.4918 7.22587 17.8529 8.57749 17.8529C13.0232 17.8529 16.6465 14.0271 16.6465 9.33309C16.6465 7.05484 15.8078 4.91414 14.2852 3.30647C12.7626 1.6902 10.7352 0.804688 8.57749 0.804688ZM8.58563 2.24042C10.3769 2.24042 12.0542 2.97977 13.3244 4.32093C14.5865 5.66209 15.2867 7.44171 15.2867 9.33309C15.2867 13.2362 12.2741 16.4086 8.57749 16.4086C7.37243 16.4086 6.1918 16.0733 5.16588 15.4199L4.92161 15.2737L2.38122 15.9787L3.05703 13.3652L2.89418 13.0901C2.22652 11.981 1.86826 10.6657 1.86826 9.32449C1.8764 5.42137 4.8809 2.24042 8.58563 2.24042ZM5.71955 5.38698C5.58928 5.38698 5.36943 5.43857 5.18216 5.6535C5.00303 5.86843 4.47378 6.39285 4.47378 7.43311C4.47378 8.48197 5.19845 9.48784 5.28801 9.63399C5.402 9.78014 6.72105 11.9294 8.74848 12.8407C9.22887 13.0729 9.60342 13.2018 9.89654 13.2964C10.3769 13.4597 10.8166 13.4339 11.1667 13.3824C11.5576 13.3222 12.3555 12.8665 12.5265 12.3679C12.6975 11.8693 12.6975 11.448 12.6486 11.3534C12.5916 11.2675 12.4614 11.2159 12.2578 11.1213C12.0542 11.0009 11.0609 10.4851 10.8818 10.4163C10.6945 10.3476 10.5805 10.3132 10.4258 10.5195C10.2955 10.7344 9.90468 11.2159 9.79069 11.3534C9.66856 11.4996 9.55456 11.5168 9.35915 11.4136C9.14745 11.3018 8.49607 11.0783 7.73069 10.3562C7.12817 9.78874 6.72919 9.09237 6.60706 8.87744C6.50935 8.67111 6.59892 8.54215 6.69662 8.44758C6.78619 8.35301 6.91647 8.19826 6.99789 8.0693C7.10374 7.94894 7.13631 7.85437 7.20145 7.71682C7.26658 7.57067 7.23401 7.45031 7.18516 7.34714C7.13631 7.25257 6.72919 6.18652 6.55821 5.76526C6.39536 5.35259 6.23252 5.40418 6.10224 5.39558C5.98825 5.39558 5.85797 5.38698 5.71955 5.38698Z"
                                            fill="#1DB171"
                                          ></path>
                                        </svg>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-6 col-xl-4 col-xxxl-3 mb-3">
                            <div className="card cstm-card-main cstm-card-main-cs">
                              <div className="position-relative">
                                <Image
                                  src={relaxation}
                                  alt="relaxation"
                                  className="Image-fluid pro-Image w-100"
                                />
                                <div className=" gallery">
                                  <svg
                                    width="13"
                                    height="13"
                                    viewBox="0 0 13 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g clipPath="url(#clip0_8952_3543)">
                                      <path
                                        d="M5.23104 11.4587H8.16121C10.603 11.4587 11.5798 10.4819 11.5798 8.04012V5.10994C11.5798 2.66813 10.603 1.69141 8.16121 1.69141H5.23104C2.78923 1.69141 1.8125 2.66813 1.8125 5.10994V8.04012C1.8125 10.4819 2.78923 11.4587 5.23104 11.4587Z"
                                        stroke="black"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      ></path>
                                      <path
                                        d="M2.13965 9.96883L4.54728 8.35235C4.93308 8.09352 5.48982 8.12282 5.83655 8.42072L5.99771 8.56234C6.37864 8.88955 6.99397 8.88955 7.3749 8.56234L9.40648 6.81889C9.78741 6.49169 10.4027 6.49169 10.7837 6.81889L11.5797 7.5026M5.23098 5.59798C5.49003 5.59798 5.73846 5.49508 5.92163 5.31191C6.1048 5.12873 6.20771 4.8803 6.20771 4.62126C6.20771 4.36221 6.1048 4.11378 5.92163 3.93061C5.73846 3.74744 5.49003 3.64453 5.23098 3.64453C4.97194 3.64453 4.72351 3.74744 4.54033 3.93061C4.35716 4.11378 4.25426 4.36221 4.25426 4.62126C4.25426 4.8803 4.35716 5.12873 4.54033 5.31191C4.72351 5.49508 4.97194 5.59798 5.23098 5.59798Z"
                                        stroke="black"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      ></path>
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_8952_3543">
                                        <rect
                                          width="11.7207"
                                          height="11.7207"
                                          fill="white"
                                          transform="translate(0.835938 0.714844)"
                                        ></rect>
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  <span>6</span>
                                </div>
                                <div className="verified">
                                  <span>
                                    <svg
                                      width="14"
                                      height="14"
                                      viewBox="0 0 14 14"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g clipPath="url(#clip0_8952_1986)">
                                        <path
                                          d="M5.48218 12.4697H8.78833C11.5435 12.4697 12.6455 11.3677 12.6455 8.61255V5.3064C12.6455 2.55127 11.5435 1.44922 8.78833 1.44922H5.48218C2.72705 1.44922 1.625 2.55127 1.625 5.3064V8.61255C1.625 11.3677 2.72705 12.4697 5.48218 12.4697Z"
                                          stroke="black"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                        <path
                                          d="M4.79297 6.96175L6.35237 8.52115L9.47668 5.40234"
                                          stroke="black"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_8952_1986">
                                          <rect
                                            width="13.2246"
                                            height="13.2246"
                                            fill="white"
                                            transform="translate(0.522461 0.347656)"
                                          ></rect>
                                        </clipPath>
                                      </defs>
                                    </svg>
                                    Verified
                                  </span>
                                </div>
                                <div className="verified apartment">
                                  <span>Apartment</span>
                                </div>
                                <div className="card-like cursor-pointer">
                                  <svg
                                    width="21"
                                    height="21"
                                    viewBox="-2.4 -2.4 28.80 28.80"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0">
                                      <rect
                                        x="-2.4"
                                        y="-2.4"
                                        width="28.80"
                                        height="28.80"
                                        rx="14.4"
                                        fill="#ffffff"
                                        strokeWidth="0"
                                      ></rect>
                                    </g>
                                    <g
                                      id="SVGRepo_tracerCarrier"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></g>
                                    <g id="SVGRepo_iconCarrier">
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M11.993 5.09691C11.0387 4.25883 9.78328 3.75 8.40796 3.75C5.42122 3.75 3 6.1497 3 9.10988C3 10.473 3.50639 11.7242 4.35199 12.67L12 20.25L19.4216 12.8944L19.641 12.6631C20.4866 11.7172 21 10.473 21 9.10988C21 6.1497 18.5788 3.75 15.592 3.75C14.2167 3.75 12.9613 4.25883 12.007 5.09692L12 5.08998L11.993 5.09691ZM12 7.09938L12.0549 7.14755L12.9079 6.30208L12.9968 6.22399C13.6868 5.61806 14.5932 5.25 15.592 5.25C17.763 5.25 19.5 6.99073 19.5 9.10988C19.5 10.0813 19.1385 10.9674 18.5363 11.6481L18.3492 11.8453L12 18.1381L5.44274 11.6391C4.85393 10.9658 4.5 10.0809 4.5 9.10988C4.5 6.99073 6.23699 5.25 8.40796 5.25C9.40675 5.25 10.3132 5.61806 11.0032 6.22398L11.0921 6.30203L11.9452 7.14752L12 7.09938Z"
                                        fill="#af824a "
                                      ></path>
                                    </g>
                                  </svg>
                                </div>
                              </div>
                              <div className="card-body cstm-card-body-main">
                                <p className="cursor-pointer title">
                                  Jenish Villa
                                </p>
                                <div className="d-flex pb-2 pb-lg-0 my-1 my-lg-2 gap-1 align-items-center">
                                  <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 13 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g clipPath="url(#clip0_5761_881)">
                                      <path
                                        d="M6.68465 1.29492C8.28191 1.29492 9.57998 2.57852 9.57998 4.16612C9.57998 6.31831 6.68465 9.49835 6.68465 9.49835C6.68465 9.49835 3.78933 6.31831 3.78933 4.16612C3.78933 2.57852 5.0874 1.29492 6.68465 1.29492ZM6.68465 3.22514C6.42869 3.22514 6.18321 3.32682 6.00222 3.50781C5.82123 3.68881 5.71954 3.93429 5.71954 4.19025C5.71954 4.44621 5.82123 4.69169 6.00222 4.87268C6.18321 5.05368 6.42869 5.15536 6.68465 5.15536C6.94062 5.15536 7.18609 5.05368 7.36709 4.87268C7.54808 4.69169 7.64976 4.44621 7.64976 4.19025C7.64976 3.93429 7.54808 3.68881 7.36709 3.50781C7.18609 3.32682 6.94062 3.22514 6.68465 3.22514ZM10.5451 9.49835C10.5451 10.5648 8.81754 11.4286 6.68465 11.4286C4.55176 11.4286 2.82422 10.5648 2.82422 9.49835C2.82422 8.87585 3.41294 8.32091 4.32496 7.96865L4.6338 8.40777C4.11264 8.62492 3.78933 8.92411 3.78933 9.25707C3.78933 9.92299 5.0874 10.4635 6.68465 10.4635C8.28191 10.4635 9.57998 9.92299 9.57998 9.25707C9.57998 8.92411 9.25667 8.62492 8.73551 8.40777L9.04434 7.96865C9.95637 8.32091 10.5451 8.87585 10.5451 9.49835Z"
                                        fill="#737D8C"
                                      ></path>
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_5761_881">
                                        <rect
                                          width="11.5813"
                                          height="11.5813"
                                          fill="white"
                                          transform="translate(0.894531 0.330078)"
                                        ></rect>
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  <p className="card-title ">
                                    2BHK,&nbsp;&nbsp;Jenish Villa
                                  </p>
                                </div>
                                <div className="d-flex justify-content-between gap-2 flex-wrap house-main align-items-center">
                                  <a href="#">
                                    <Image src={beadroom} alt="beadroom" />3
                                    Bedroom
                                  </a>
                                  <a href="#">
                                    <Image src={Bathroom} alt="Bathroom" />2
                                    Bathroom
                                  </a>
                                </div>
                                <div className="btn-main">
                                  <p>AED 6000</p>
                                  <div className="w-50 d-flex align-items-center gap-2 justify-content-end">
                                    <div className="cursor-pointer">
                                      <svg
                                        width="16"
                                        height="15"
                                        viewBox="0 0 16 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <g clipPath="url(#clip0_8952_3529)">
                                          <path
                                            d="M13.7645 11.4562C13.7645 11.6812 13.7145 11.9125 13.6082 12.1375C13.502 12.3625 13.3645 12.575 13.1832 12.775C12.877 13.1125 12.5395 13.3563 12.1582 13.5125C11.7832 13.6688 11.377 13.75 10.9395 13.75C10.302 13.75 9.6207 13.6 8.90195 13.2938C8.1832 12.9875 7.46445 12.575 6.75195 12.0563C6.02577 11.5251 5.34051 10.9401 4.70195 10.3062C4.06993 9.67001 3.48702 8.9868 2.9582 8.2625C2.4457 7.55 2.0332 6.8375 1.7332 6.13125C1.4332 5.41875 1.2832 4.7375 1.2832 4.0875C1.2832 3.6625 1.3582 3.25625 1.5082 2.88125C1.6582 2.5 1.8957 2.15 2.22695 1.8375C2.62695 1.44375 3.06445 1.25 3.52695 1.25C3.70195 1.25 3.87695 1.2875 4.0332 1.3625C4.1957 1.4375 4.33945 1.55 4.45195 1.7125L5.90195 3.75625C6.01445 3.9125 6.0957 4.05625 6.15195 4.19375C6.2082 4.325 6.23945 4.45625 6.23945 4.575C6.23945 4.725 6.1957 4.875 6.1082 5.01875C6.02695 5.1625 5.9082 5.3125 5.7582 5.4625L5.2832 5.95625C5.21445 6.025 5.1832 6.10625 5.1832 6.20625C5.1832 6.25625 5.18945 6.3 5.20195 6.35C5.2207 6.4 5.23945 6.4375 5.25195 6.475C5.36445 6.68125 5.5582 6.95 5.8332 7.275C6.11445 7.6 6.41445 7.93125 6.73945 8.2625C7.07695 8.59375 7.40195 8.9 7.7332 9.18125C8.0582 9.45625 8.32695 9.64375 8.53945 9.75625C8.5707 9.76875 8.6082 9.7875 8.65195 9.80625C8.70195 9.825 8.75195 9.83125 8.8082 9.83125C8.91445 9.83125 8.9957 9.79375 9.06445 9.725L9.53945 9.25625C9.6957 9.1 9.8457 8.98125 9.98945 8.90625C10.1332 8.81875 10.277 8.775 10.4332 8.775C10.552 8.775 10.677 8.8 10.8145 8.85625C10.952 8.9125 11.0957 8.99375 11.252 9.1L13.3207 10.5687C13.4832 10.6812 13.5957 10.8125 13.6645 10.9687C13.727 11.125 13.7645 11.2812 13.7645 11.4562Z"
                                            stroke="#AF824A"
                                            strokeWidth="1.5"
                                            strokeMiterlimit="10"
                                          ></path>
                                        </g>
                                      </svg>
                                    </div>
                                    <div>
                                      <a
                                        target="_blank"
                                        href="mailto:contactus@thiyo.com"
                                      >
                                        <svg
                                          width="16"
                                          height="12"
                                          viewBox="0 0 16 12"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M15.3857 1.5C15.3857 0.675 14.7107 0 13.8857 0H1.88574C1.06074 0 0.385742 0.675 0.385742 1.5V10.5C0.385742 11.325 1.06074 12 1.88574 12H13.8857C14.7107 12 15.3857 11.325 15.3857 10.5V1.5ZM13.8857 1.5L7.88574 5.25L1.88574 1.5H13.8857ZM13.8857 10.5H1.88574V3L7.88574 6.75L13.8857 3V10.5Z"
                                            fill="#AF824A"
                                          ></path>
                                        </svg>
                                      </a>
                                    </div>
                                    <div>
                                      <a
                                        target="_blank"
                                        href="https://wa.me/8238376353?text=Hello%20there!"
                                      >
                                        <svg
                                          width="17"
                                          height="18"
                                          viewBox="0 0 17 18"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M8.57749 0.804688C4.13181 0.804688 0.508498 4.63043 0.508498 9.32449C0.508498 10.829 0.883042 12.2905 1.58328 13.5801L0.443359 17.999L4.71805 16.8126C5.89868 17.4918 7.22587 17.8529 8.57749 17.8529C13.0232 17.8529 16.6465 14.0271 16.6465 9.33309C16.6465 7.05484 15.8078 4.91414 14.2852 3.30647C12.7626 1.6902 10.7352 0.804688 8.57749 0.804688ZM8.58563 2.24042C10.3769 2.24042 12.0542 2.97977 13.3244 4.32093C14.5865 5.66209 15.2867 7.44171 15.2867 9.33309C15.2867 13.2362 12.2741 16.4086 8.57749 16.4086C7.37243 16.4086 6.1918 16.0733 5.16588 15.4199L4.92161 15.2737L2.38122 15.9787L3.05703 13.3652L2.89418 13.0901C2.22652 11.981 1.86826 10.6657 1.86826 9.32449C1.8764 5.42137 4.8809 2.24042 8.58563 2.24042ZM5.71955 5.38698C5.58928 5.38698 5.36943 5.43857 5.18216 5.6535C5.00303 5.86843 4.47378 6.39285 4.47378 7.43311C4.47378 8.48197 5.19845 9.48784 5.28801 9.63399C5.402 9.78014 6.72105 11.9294 8.74848 12.8407C9.22887 13.0729 9.60342 13.2018 9.89654 13.2964C10.3769 13.4597 10.8166 13.4339 11.1667 13.3824C11.5576 13.3222 12.3555 12.8665 12.5265 12.3679C12.6975 11.8693 12.6975 11.448 12.6486 11.3534C12.5916 11.2675 12.4614 11.2159 12.2578 11.1213C12.0542 11.0009 11.0609 10.4851 10.8818 10.4163C10.6945 10.3476 10.5805 10.3132 10.4258 10.5195C10.2955 10.7344 9.90468 11.2159 9.79069 11.3534C9.66856 11.4996 9.55456 11.5168 9.35915 11.4136C9.14745 11.3018 8.49607 11.0783 7.73069 10.3562C7.12817 9.78874 6.72919 9.09237 6.60706 8.87744C6.50935 8.67111 6.59892 8.54215 6.69662 8.44758C6.78619 8.35301 6.91647 8.19826 6.99789 8.0693C7.10374 7.94894 7.13631 7.85437 7.20145 7.71682C7.26658 7.57067 7.23401 7.45031 7.18516 7.34714C7.13631 7.25257 6.72919 6.18652 6.55821 5.76526C6.39536 5.35259 6.23252 5.40418 6.10224 5.39558C5.98825 5.39558 5.85797 5.38698 5.71955 5.38698Z"
                                            fill="#1DB171"
                                          ></path>
                                        </svg>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-6 col-xl-4 col-xxxl-3 mb-3">
                            <div className="card cstm-card-main cstm-card-main-cs">
                              <div className="position-relative">
                                <Image
                                  src={pooles}
                                  alt="pooles"
                                  className="Image-fluid pro-Image w-100"
                                />
                                <div className=" gallery">
                                  <svg
                                    width="13"
                                    height="13"
                                    viewBox="0 0 13 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g clipPath="url(#clip0_8952_3543)">
                                      <path
                                        d="M5.23104 11.4587H8.16121C10.603 11.4587 11.5798 10.4819 11.5798 8.04012V5.10994C11.5798 2.66813 10.603 1.69141 8.16121 1.69141H5.23104C2.78923 1.69141 1.8125 2.66813 1.8125 5.10994V8.04012C1.8125 10.4819 2.78923 11.4587 5.23104 11.4587Z"
                                        stroke="black"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      ></path>
                                      <path
                                        d="M2.13965 9.96883L4.54728 8.35235C4.93308 8.09352 5.48982 8.12282 5.83655 8.42072L5.99771 8.56234C6.37864 8.88955 6.99397 8.88955 7.3749 8.56234L9.40648 6.81889C9.78741 6.49169 10.4027 6.49169 10.7837 6.81889L11.5797 7.5026M5.23098 5.59798C5.49003 5.59798 5.73846 5.49508 5.92163 5.31191C6.1048 5.12873 6.20771 4.8803 6.20771 4.62126C6.20771 4.36221 6.1048 4.11378 5.92163 3.93061C5.73846 3.74744 5.49003 3.64453 5.23098 3.64453C4.97194 3.64453 4.72351 3.74744 4.54033 3.93061C4.35716 4.11378 4.25426 4.36221 4.25426 4.62126C4.25426 4.8803 4.35716 5.12873 4.54033 5.31191C4.72351 5.49508 4.97194 5.59798 5.23098 5.59798Z"
                                        stroke="black"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      ></path>
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_8952_3543">
                                        <rect
                                          width="11.7207"
                                          height="11.7207"
                                          fill="white"
                                          transform="translate(0.835938 0.714844)"
                                        ></rect>
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  <span>6</span>
                                </div>
                                <div className="verified">
                                  <span>
                                    <svg
                                      width="14"
                                      height="14"
                                      viewBox="0 0 14 14"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g clipPath="url(#clip0_8952_1986)">
                                        <path
                                          d="M5.48218 12.4697H8.78833C11.5435 12.4697 12.6455 11.3677 12.6455 8.61255V5.3064C12.6455 2.55127 11.5435 1.44922 8.78833 1.44922H5.48218C2.72705 1.44922 1.625 2.55127 1.625 5.3064V8.61255C1.625 11.3677 2.72705 12.4697 5.48218 12.4697Z"
                                          stroke="black"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                        <path
                                          d="M4.79297 6.96175L6.35237 8.52115L9.47668 5.40234"
                                          stroke="black"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_8952_1986">
                                          <rect
                                            width="13.2246"
                                            height="13.2246"
                                            fill="white"
                                            transform="translate(0.522461 0.347656)"
                                          ></rect>
                                        </clipPath>
                                      </defs>
                                    </svg>
                                    Verified
                                  </span>
                                </div>
                                <div className="verified apartment">
                                  <span>Apartment</span>
                                </div>
                                <div className="card-like cursor-pointer">
                                  <svg
                                    width="21"
                                    height="21"
                                    viewBox="-2.4 -2.4 28.80 28.80"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0">
                                      <rect
                                        x="-2.4"
                                        y="-2.4"
                                        width="28.80"
                                        height="28.80"
                                        rx="14.4"
                                        fill="#ffffff"
                                        strokeWidth="0"
                                      ></rect>
                                    </g>
                                    <g
                                      id="SVGRepo_tracerCarrier"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></g>
                                    <g id="SVGRepo_iconCarrier">
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M11.993 5.09691C11.0387 4.25883 9.78328 3.75 8.40796 3.75C5.42122 3.75 3 6.1497 3 9.10988C3 10.473 3.50639 11.7242 4.35199 12.67L12 20.25L19.4216 12.8944L19.641 12.6631C20.4866 11.7172 21 10.473 21 9.10988C21 6.1497 18.5788 3.75 15.592 3.75C14.2167 3.75 12.9613 4.25883 12.007 5.09692L12 5.08998L11.993 5.09691ZM12 7.09938L12.0549 7.14755L12.9079 6.30208L12.9968 6.22399C13.6868 5.61806 14.5932 5.25 15.592 5.25C17.763 5.25 19.5 6.99073 19.5 9.10988C19.5 10.0813 19.1385 10.9674 18.5363 11.6481L18.3492 11.8453L12 18.1381L5.44274 11.6391C4.85393 10.9658 4.5 10.0809 4.5 9.10988C4.5 6.99073 6.23699 5.25 8.40796 5.25C9.40675 5.25 10.3132 5.61806 11.0032 6.22398L11.0921 6.30203L11.9452 7.14752L12 7.09938Z"
                                        fill="#af824a "
                                      ></path>
                                    </g>
                                  </svg>
                                </div>
                              </div>
                              <div className="card-body cstm-card-body-main">
                                <p className="cursor-pointer title">
                                  Tredunlisted Villa
                                </p>
                                <div className="d-flex pb-2 pb-lg-0 my-1 my-lg-2 gap-1 align-items-center">
                                  <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 13 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g clipPath="url(#clip0_5761_881)">
                                      <path
                                        d="M6.68465 1.29492C8.28191 1.29492 9.57998 2.57852 9.57998 4.16612C9.57998 6.31831 6.68465 9.49835 6.68465 9.49835C6.68465 9.49835 3.78933 6.31831 3.78933 4.16612C3.78933 2.57852 5.0874 1.29492 6.68465 1.29492ZM6.68465 3.22514C6.42869 3.22514 6.18321 3.32682 6.00222 3.50781C5.82123 3.68881 5.71954 3.93429 5.71954 4.19025C5.71954 4.44621 5.82123 4.69169 6.00222 4.87268C6.18321 5.05368 6.42869 5.15536 6.68465 5.15536C6.94062 5.15536 7.18609 5.05368 7.36709 4.87268C7.54808 4.69169 7.64976 4.44621 7.64976 4.19025C7.64976 3.93429 7.54808 3.68881 7.36709 3.50781C7.18609 3.32682 6.94062 3.22514 6.68465 3.22514ZM10.5451 9.49835C10.5451 10.5648 8.81754 11.4286 6.68465 11.4286C4.55176 11.4286 2.82422 10.5648 2.82422 9.49835C2.82422 8.87585 3.41294 8.32091 4.32496 7.96865L4.6338 8.40777C4.11264 8.62492 3.78933 8.92411 3.78933 9.25707C3.78933 9.92299 5.0874 10.4635 6.68465 10.4635C8.28191 10.4635 9.57998 9.92299 9.57998 9.25707C9.57998 8.92411 9.25667 8.62492 8.73551 8.40777L9.04434 7.96865C9.95637 8.32091 10.5451 8.87585 10.5451 9.49835Z"
                                        fill="#737D8C"
                                      ></path>
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_5761_881">
                                        <rect
                                          width="11.5813"
                                          height="11.5813"
                                          fill="white"
                                          transform="translate(0.894531 0.330078)"
                                        ></rect>
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  <p className="card-title ">
                                    2BHK,&nbsp;&nbsp;Tredunlisted Villa
                                  </p>
                                </div>
                                <div className="d-flex justify-content-between gap-2 flex-wrap house-main align-items-center">
                                  <a href="#">
                                    <Image src={beadroom} alt="beadroom" />3
                                    Bedroom
                                  </a>
                                  <a href="#">
                                    <Image src={Bathroom} alt="Bathroom" />2
                                    Bathroom
                                  </a>
                                </div>
                                <div className="btn-main">
                                  <p>AED 6000</p>
                                  <div className="w-50 d-flex align-items-center gap-2 justify-content-end">
                                    <div className="cursor-pointer">
                                      <svg
                                        width="16"
                                        height="15"
                                        viewBox="0 0 16 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <g clipPath="url(#clip0_8952_3529)">
                                          <path
                                            d="M13.7645 11.4562C13.7645 11.6812 13.7145 11.9125 13.6082 12.1375C13.502 12.3625 13.3645 12.575 13.1832 12.775C12.877 13.1125 12.5395 13.3563 12.1582 13.5125C11.7832 13.6688 11.377 13.75 10.9395 13.75C10.302 13.75 9.6207 13.6 8.90195 13.2938C8.1832 12.9875 7.46445 12.575 6.75195 12.0563C6.02577 11.5251 5.34051 10.9401 4.70195 10.3062C4.06993 9.67001 3.48702 8.9868 2.9582 8.2625C2.4457 7.55 2.0332 6.8375 1.7332 6.13125C1.4332 5.41875 1.2832 4.7375 1.2832 4.0875C1.2832 3.6625 1.3582 3.25625 1.5082 2.88125C1.6582 2.5 1.8957 2.15 2.22695 1.8375C2.62695 1.44375 3.06445 1.25 3.52695 1.25C3.70195 1.25 3.87695 1.2875 4.0332 1.3625C4.1957 1.4375 4.33945 1.55 4.45195 1.7125L5.90195 3.75625C6.01445 3.9125 6.0957 4.05625 6.15195 4.19375C6.2082 4.325 6.23945 4.45625 6.23945 4.575C6.23945 4.725 6.1957 4.875 6.1082 5.01875C6.02695 5.1625 5.9082 5.3125 5.7582 5.4625L5.2832 5.95625C5.21445 6.025 5.1832 6.10625 5.1832 6.20625C5.1832 6.25625 5.18945 6.3 5.20195 6.35C5.2207 6.4 5.23945 6.4375 5.25195 6.475C5.36445 6.68125 5.5582 6.95 5.8332 7.275C6.11445 7.6 6.41445 7.93125 6.73945 8.2625C7.07695 8.59375 7.40195 8.9 7.7332 9.18125C8.0582 9.45625 8.32695 9.64375 8.53945 9.75625C8.5707 9.76875 8.6082 9.7875 8.65195 9.80625C8.70195 9.825 8.75195 9.83125 8.8082 9.83125C8.91445 9.83125 8.9957 9.79375 9.06445 9.725L9.53945 9.25625C9.6957 9.1 9.8457 8.98125 9.98945 8.90625C10.1332 8.81875 10.277 8.775 10.4332 8.775C10.552 8.775 10.677 8.8 10.8145 8.85625C10.952 8.9125 11.0957 8.99375 11.252 9.1L13.3207 10.5687C13.4832 10.6812 13.5957 10.8125 13.6645 10.9687C13.727 11.125 13.7645 11.2812 13.7645 11.4562Z"
                                            stroke="#AF824A"
                                            strokeWidth="1.5"
                                            strokeMiterlimit="10"
                                          ></path>
                                        </g>
                                      </svg>
                                    </div>
                                    <div>
                                      <a
                                        target="_blank"
                                        href="mailto:contactus@thiyo.com"
                                      >
                                        <svg
                                          width="16"
                                          height="12"
                                          viewBox="0 0 16 12"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M15.3857 1.5C15.3857 0.675 14.7107 0 13.8857 0H1.88574C1.06074 0 0.385742 0.675 0.385742 1.5V10.5C0.385742 11.325 1.06074 12 1.88574 12H13.8857C14.7107 12 15.3857 11.325 15.3857 10.5V1.5ZM13.8857 1.5L7.88574 5.25L1.88574 1.5H13.8857ZM13.8857 10.5H1.88574V3L7.88574 6.75L13.8857 3V10.5Z"
                                            fill="#AF824A"
                                          ></path>
                                        </svg>
                                      </a>
                                    </div>
                                    <div>
                                      <a
                                        target="_blank"
                                        href="https://wa.me/8238376353?text=Hello%20there!"
                                      >
                                        <svg
                                          width="17"
                                          height="18"
                                          viewBox="0 0 17 18"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M8.57749 0.804688C4.13181 0.804688 0.508498 4.63043 0.508498 9.32449C0.508498 10.829 0.883042 12.2905 1.58328 13.5801L0.443359 17.999L4.71805 16.8126C5.89868 17.4918 7.22587 17.8529 8.57749 17.8529C13.0232 17.8529 16.6465 14.0271 16.6465 9.33309C16.6465 7.05484 15.8078 4.91414 14.2852 3.30647C12.7626 1.6902 10.7352 0.804688 8.57749 0.804688ZM8.58563 2.24042C10.3769 2.24042 12.0542 2.97977 13.3244 4.32093C14.5865 5.66209 15.2867 7.44171 15.2867 9.33309C15.2867 13.2362 12.2741 16.4086 8.57749 16.4086C7.37243 16.4086 6.1918 16.0733 5.16588 15.4199L4.92161 15.2737L2.38122 15.9787L3.05703 13.3652L2.89418 13.0901C2.22652 11.981 1.86826 10.6657 1.86826 9.32449C1.8764 5.42137 4.8809 2.24042 8.58563 2.24042ZM5.71955 5.38698C5.58928 5.38698 5.36943 5.43857 5.18216 5.6535C5.00303 5.86843 4.47378 6.39285 4.47378 7.43311C4.47378 8.48197 5.19845 9.48784 5.28801 9.63399C5.402 9.78014 6.72105 11.9294 8.74848 12.8407C9.22887 13.0729 9.60342 13.2018 9.89654 13.2964C10.3769 13.4597 10.8166 13.4339 11.1667 13.3824C11.5576 13.3222 12.3555 12.8665 12.5265 12.3679C12.6975 11.8693 12.6975 11.448 12.6486 11.3534C12.5916 11.2675 12.4614 11.2159 12.2578 11.1213C12.0542 11.0009 11.0609 10.4851 10.8818 10.4163C10.6945 10.3476 10.5805 10.3132 10.4258 10.5195C10.2955 10.7344 9.90468 11.2159 9.79069 11.3534C9.66856 11.4996 9.55456 11.5168 9.35915 11.4136C9.14745 11.3018 8.49607 11.0783 7.73069 10.3562C7.12817 9.78874 6.72919 9.09237 6.60706 8.87744C6.50935 8.67111 6.59892 8.54215 6.69662 8.44758C6.78619 8.35301 6.91647 8.19826 6.99789 8.0693C7.10374 7.94894 7.13631 7.85437 7.20145 7.71682C7.26658 7.57067 7.23401 7.45031 7.18516 7.34714C7.13631 7.25257 6.72919 6.18652 6.55821 5.76526C6.39536 5.35259 6.23252 5.40418 6.10224 5.39558C5.98825 5.39558 5.85797 5.38698 5.71955 5.38698Z"
                                            fill="#1DB171"
                                          ></path>
                                        </svg>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-6 col-xl-4 col-xxxl-3 mb-3">
                            <div className="card cstm-card-main cstm-card-main-cs">
                              <div className="position-relative">
                                <Image
                                  src={night}
                                  alt="night"
                                  className="Image-fluid pro-Image w-100"
                                />
                                <div className=" gallery">
                                  <svg
                                    width="13"
                                    height="13"
                                    viewBox="0 0 13 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g clipPath="url(#clip0_8952_3543)">
                                      <path
                                        d="M5.23104 11.4587H8.16121C10.603 11.4587 11.5798 10.4819 11.5798 8.04012V5.10994C11.5798 2.66813 10.603 1.69141 8.16121 1.69141H5.23104C2.78923 1.69141 1.8125 2.66813 1.8125 5.10994V8.04012C1.8125 10.4819 2.78923 11.4587 5.23104 11.4587Z"
                                        stroke="black"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      ></path>
                                      <path
                                        d="M2.13965 9.96883L4.54728 8.35235C4.93308 8.09352 5.48982 8.12282 5.83655 8.42072L5.99771 8.56234C6.37864 8.88955 6.99397 8.88955 7.3749 8.56234L9.40648 6.81889C9.78741 6.49169 10.4027 6.49169 10.7837 6.81889L11.5797 7.5026M5.23098 5.59798C5.49003 5.59798 5.73846 5.49508 5.92163 5.31191C6.1048 5.12873 6.20771 4.8803 6.20771 4.62126C6.20771 4.36221 6.1048 4.11378 5.92163 3.93061C5.73846 3.74744 5.49003 3.64453 5.23098 3.64453C4.97194 3.64453 4.72351 3.74744 4.54033 3.93061C4.35716 4.11378 4.25426 4.36221 4.25426 4.62126C4.25426 4.8803 4.35716 5.12873 4.54033 5.31191C4.72351 5.49508 4.97194 5.59798 5.23098 5.59798Z"
                                        stroke="black"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      ></path>
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_8952_3543">
                                        <rect
                                          width="11.7207"
                                          height="11.7207"
                                          fill="white"
                                          transform="translate(0.835938 0.714844)"
                                        ></rect>
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  <span>6</span>
                                </div>
                                <div className="verified">
                                  <span>
                                    <svg
                                      width="14"
                                      height="14"
                                      viewBox="0 0 14 14"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g clipPath="url(#clip0_8952_1986)">
                                        <path
                                          d="M5.48218 12.4697H8.78833C11.5435 12.4697 12.6455 11.3677 12.6455 8.61255V5.3064C12.6455 2.55127 11.5435 1.44922 8.78833 1.44922H5.48218C2.72705 1.44922 1.625 2.55127 1.625 5.3064V8.61255C1.625 11.3677 2.72705 12.4697 5.48218 12.4697Z"
                                          stroke="black"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                        <path
                                          d="M4.79297 6.96175L6.35237 8.52115L9.47668 5.40234"
                                          stroke="black"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_8952_1986">
                                          <rect
                                            width="13.2246"
                                            height="13.2246"
                                            fill="white"
                                            transform="translate(0.522461 0.347656)"
                                          ></rect>
                                        </clipPath>
                                      </defs>
                                    </svg>
                                    Verified
                                  </span>
                                </div>
                                <div className="verified apartment">
                                  <span>Apartment</span>
                                </div>
                                <div className="card-like cursor-pointer">
                                  <svg
                                    width="21"
                                    height="21"
                                    viewBox="-2.4 -2.4 28.80 28.80"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0">
                                      <rect
                                        x="-2.4"
                                        y="-2.4"
                                        width="28.80"
                                        height="28.80"
                                        rx="14.4"
                                        fill="#ffffff"
                                        strokeWidth="0"
                                      ></rect>
                                    </g>
                                    <g
                                      id="SVGRepo_tracerCarrier"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></g>
                                    <g id="SVGRepo_iconCarrier">
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M11.993 5.09691C11.0387 4.25883 9.78328 3.75 8.40796 3.75C5.42122 3.75 3 6.1497 3 9.10988C3 10.473 3.50639 11.7242 4.35199 12.67L12 20.25L19.4216 12.8944L19.641 12.6631C20.4866 11.7172 21 10.473 21 9.10988C21 6.1497 18.5788 3.75 15.592 3.75C14.2167 3.75 12.9613 4.25883 12.007 5.09692L12 5.08998L11.993 5.09691ZM12 7.09938L12.0549 7.14755L12.9079 6.30208L12.9968 6.22399C13.6868 5.61806 14.5932 5.25 15.592 5.25C17.763 5.25 19.5 6.99073 19.5 9.10988C19.5 10.0813 19.1385 10.9674 18.5363 11.6481L18.3492 11.8453L12 18.1381L5.44274 11.6391C4.85393 10.9658 4.5 10.0809 4.5 9.10988C4.5 6.99073 6.23699 5.25 8.40796 5.25C9.40675 5.25 10.3132 5.61806 11.0032 6.22398L11.0921 6.30203L11.9452 7.14752L12 7.09938Z"
                                        fill="#af824a "
                                      ></path>
                                    </g>
                                  </svg>
                                </div>
                              </div>
                              <div className="card-body cstm-card-body-main">
                                <p className="cursor-pointer title">
                                  Itcode Villa
                                </p>
                                <div className="d-flex pb-2 pb-lg-0 my-1 my-lg-2 gap-1 align-items-center">
                                  <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 13 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g clipPath="url(#clip0_5761_881)">
                                      <path
                                        d="M6.68465 1.29492C8.28191 1.29492 9.57998 2.57852 9.57998 4.16612C9.57998 6.31831 6.68465 9.49835 6.68465 9.49835C6.68465 9.49835 3.78933 6.31831 3.78933 4.16612C3.78933 2.57852 5.0874 1.29492 6.68465 1.29492ZM6.68465 3.22514C6.42869 3.22514 6.18321 3.32682 6.00222 3.50781C5.82123 3.68881 5.71954 3.93429 5.71954 4.19025C5.71954 4.44621 5.82123 4.69169 6.00222 4.87268C6.18321 5.05368 6.42869 5.15536 6.68465 5.15536C6.94062 5.15536 7.18609 5.05368 7.36709 4.87268C7.54808 4.69169 7.64976 4.44621 7.64976 4.19025C7.64976 3.93429 7.54808 3.68881 7.36709 3.50781C7.18609 3.32682 6.94062 3.22514 6.68465 3.22514ZM10.5451 9.49835C10.5451 10.5648 8.81754 11.4286 6.68465 11.4286C4.55176 11.4286 2.82422 10.5648 2.82422 9.49835C2.82422 8.87585 3.41294 8.32091 4.32496 7.96865L4.6338 8.40777C4.11264 8.62492 3.78933 8.92411 3.78933 9.25707C3.78933 9.92299 5.0874 10.4635 6.68465 10.4635C8.28191 10.4635 9.57998 9.92299 9.57998 9.25707C9.57998 8.92411 9.25667 8.62492 8.73551 8.40777L9.04434 7.96865C9.95637 8.32091 10.5451 8.87585 10.5451 9.49835Z"
                                        fill="#737D8C"
                                      ></path>
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_5761_881">
                                        <rect
                                          width="11.5813"
                                          height="11.5813"
                                          fill="white"
                                          transform="translate(0.894531 0.330078)"
                                        ></rect>
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  <p className="card-title ">
                                    2BHK,&nbsp;&nbsp;Itcode Villa
                                  </p>
                                </div>
                                <div className="d-flex justify-content-between gap-2 flex-wrap house-main align-items-center">
                                  <a href="#">
                                    <Image src={beadroom} alt="beadroom" />3
                                    Bedroom
                                  </a>
                                  <a href="#">
                                    <Image src={Bathroom} alt="Bathroom" />2
                                    Bathroom
                                  </a>
                                </div>
                                <div className="btn-main">
                                  <p>AED 6000</p>
                                  <div className="w-50 d-flex align-items-center gap-2 justify-content-end">
                                    <div className="cursor-pointer">
                                      <svg
                                        width="16"
                                        height="15"
                                        viewBox="0 0 16 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <g clipPath="url(#clip0_8952_3529)">
                                          <path
                                            d="M13.7645 11.4562C13.7645 11.6812 13.7145 11.9125 13.6082 12.1375C13.502 12.3625 13.3645 12.575 13.1832 12.775C12.877 13.1125 12.5395 13.3563 12.1582 13.5125C11.7832 13.6688 11.377 13.75 10.9395 13.75C10.302 13.75 9.6207 13.6 8.90195 13.2938C8.1832 12.9875 7.46445 12.575 6.75195 12.0563C6.02577 11.5251 5.34051 10.9401 4.70195 10.3062C4.06993 9.67001 3.48702 8.9868 2.9582 8.2625C2.4457 7.55 2.0332 6.8375 1.7332 6.13125C1.4332 5.41875 1.2832 4.7375 1.2832 4.0875C1.2832 3.6625 1.3582 3.25625 1.5082 2.88125C1.6582 2.5 1.8957 2.15 2.22695 1.8375C2.62695 1.44375 3.06445 1.25 3.52695 1.25C3.70195 1.25 3.87695 1.2875 4.0332 1.3625C4.1957 1.4375 4.33945 1.55 4.45195 1.7125L5.90195 3.75625C6.01445 3.9125 6.0957 4.05625 6.15195 4.19375C6.2082 4.325 6.23945 4.45625 6.23945 4.575C6.23945 4.725 6.1957 4.875 6.1082 5.01875C6.02695 5.1625 5.9082 5.3125 5.7582 5.4625L5.2832 5.95625C5.21445 6.025 5.1832 6.10625 5.1832 6.20625C5.1832 6.25625 5.18945 6.3 5.20195 6.35C5.2207 6.4 5.23945 6.4375 5.25195 6.475C5.36445 6.68125 5.5582 6.95 5.8332 7.275C6.11445 7.6 6.41445 7.93125 6.73945 8.2625C7.07695 8.59375 7.40195 8.9 7.7332 9.18125C8.0582 9.45625 8.32695 9.64375 8.53945 9.75625C8.5707 9.76875 8.6082 9.7875 8.65195 9.80625C8.70195 9.825 8.75195 9.83125 8.8082 9.83125C8.91445 9.83125 8.9957 9.79375 9.06445 9.725L9.53945 9.25625C9.6957 9.1 9.8457 8.98125 9.98945 8.90625C10.1332 8.81875 10.277 8.775 10.4332 8.775C10.552 8.775 10.677 8.8 10.8145 8.85625C10.952 8.9125 11.0957 8.99375 11.252 9.1L13.3207 10.5687C13.4832 10.6812 13.5957 10.8125 13.6645 10.9687C13.727 11.125 13.7645 11.2812 13.7645 11.4562Z"
                                            stroke="#AF824A"
                                            strokeWidth="1.5"
                                            strokeMiterlimit="10"
                                          ></path>
                                        </g>
                                      </svg>
                                    </div>
                                    <div>
                                      <a
                                        target="_blank"
                                        href="mailto:contactus@thiyo.com"
                                      >
                                        <svg
                                          width="16"
                                          height="12"
                                          viewBox="0 0 16 12"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M15.3857 1.5C15.3857 0.675 14.7107 0 13.8857 0H1.88574C1.06074 0 0.385742 0.675 0.385742 1.5V10.5C0.385742 11.325 1.06074 12 1.88574 12H13.8857C14.7107 12 15.3857 11.325 15.3857 10.5V1.5ZM13.8857 1.5L7.88574 5.25L1.88574 1.5H13.8857ZM13.8857 10.5H1.88574V3L7.88574 6.75L13.8857 3V10.5Z"
                                            fill="#AF824A"
                                          ></path>
                                        </svg>
                                      </a>
                                    </div>
                                    <div>
                                      <a
                                        target="_blank"
                                        href="https://wa.me/8238376353?text=Hello%20there!"
                                      >
                                        <svg
                                          width="17"
                                          height="18"
                                          viewBox="0 0 17 18"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M8.57749 0.804688C4.13181 0.804688 0.508498 4.63043 0.508498 9.32449C0.508498 10.829 0.883042 12.2905 1.58328 13.5801L0.443359 17.999L4.71805 16.8126C5.89868 17.4918 7.22587 17.8529 8.57749 17.8529C13.0232 17.8529 16.6465 14.0271 16.6465 9.33309C16.6465 7.05484 15.8078 4.91414 14.2852 3.30647C12.7626 1.6902 10.7352 0.804688 8.57749 0.804688ZM8.58563 2.24042C10.3769 2.24042 12.0542 2.97977 13.3244 4.32093C14.5865 5.66209 15.2867 7.44171 15.2867 9.33309C15.2867 13.2362 12.2741 16.4086 8.57749 16.4086C7.37243 16.4086 6.1918 16.0733 5.16588 15.4199L4.92161 15.2737L2.38122 15.9787L3.05703 13.3652L2.89418 13.0901C2.22652 11.981 1.86826 10.6657 1.86826 9.32449C1.8764 5.42137 4.8809 2.24042 8.58563 2.24042ZM5.71955 5.38698C5.58928 5.38698 5.36943 5.43857 5.18216 5.6535C5.00303 5.86843 4.47378 6.39285 4.47378 7.43311C4.47378 8.48197 5.19845 9.48784 5.28801 9.63399C5.402 9.78014 6.72105 11.9294 8.74848 12.8407C9.22887 13.0729 9.60342 13.2018 9.89654 13.2964C10.3769 13.4597 10.8166 13.4339 11.1667 13.3824C11.5576 13.3222 12.3555 12.8665 12.5265 12.3679C12.6975 11.8693 12.6975 11.448 12.6486 11.3534C12.5916 11.2675 12.4614 11.2159 12.2578 11.1213C12.0542 11.0009 11.0609 10.4851 10.8818 10.4163C10.6945 10.3476 10.5805 10.3132 10.4258 10.5195C10.2955 10.7344 9.90468 11.2159 9.79069 11.3534C9.66856 11.4996 9.55456 11.5168 9.35915 11.4136C9.14745 11.3018 8.49607 11.0783 7.73069 10.3562C7.12817 9.78874 6.72919 9.09237 6.60706 8.87744C6.50935 8.67111 6.59892 8.54215 6.69662 8.44758C6.78619 8.35301 6.91647 8.19826 6.99789 8.0693C7.10374 7.94894 7.13631 7.85437 7.20145 7.71682C7.26658 7.57067 7.23401 7.45031 7.18516 7.34714C7.13631 7.25257 6.72919 6.18652 6.55821 5.76526C6.39536 5.35259 6.23252 5.40418 6.10224 5.39558C5.98825 5.39558 5.85797 5.38698 5.71955 5.38698Z"
                                            fill="#1DB171"
                                          ></path>
                                        </svg>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-6 col-xl-4 col-xxxl-3 mb-3">
                            <div className="card cstm-card-main cstm-card-main-cs">
                              <div className="position-relative">
                                <Image
                                  src={hotelmaineu}
                                  alt="hotelmaineu"
                                  className="Image-fluid pro-Image w-100"
                                />
                                <div className=" gallery">
                                  <svg
                                    width="13"
                                    height="13"
                                    viewBox="0 0 13 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g clipPath="url(#clip0_8952_3543)">
                                      <path
                                        d="M5.23104 11.4587H8.16121C10.603 11.4587 11.5798 10.4819 11.5798 8.04012V5.10994C11.5798 2.66813 10.603 1.69141 8.16121 1.69141H5.23104C2.78923 1.69141 1.8125 2.66813 1.8125 5.10994V8.04012C1.8125 10.4819 2.78923 11.4587 5.23104 11.4587Z"
                                        stroke="black"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      ></path>
                                      <path
                                        d="M2.13965 9.96883L4.54728 8.35235C4.93308 8.09352 5.48982 8.12282 5.83655 8.42072L5.99771 8.56234C6.37864 8.88955 6.99397 8.88955 7.3749 8.56234L9.40648 6.81889C9.78741 6.49169 10.4027 6.49169 10.7837 6.81889L11.5797 7.5026M5.23098 5.59798C5.49003 5.59798 5.73846 5.49508 5.92163 5.31191C6.1048 5.12873 6.20771 4.8803 6.20771 4.62126C6.20771 4.36221 6.1048 4.11378 5.92163 3.93061C5.73846 3.74744 5.49003 3.64453 5.23098 3.64453C4.97194 3.64453 4.72351 3.74744 4.54033 3.93061C4.35716 4.11378 4.25426 4.36221 4.25426 4.62126C4.25426 4.8803 4.35716 5.12873 4.54033 5.31191C4.72351 5.49508 4.97194 5.59798 5.23098 5.59798Z"
                                        stroke="black"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      ></path>
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_8952_3543">
                                        <rect
                                          width="11.7207"
                                          height="11.7207"
                                          fill="white"
                                          transform="translate(0.835938 0.714844)"
                                        ></rect>
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  <span>6</span>
                                </div>
                                <div className="verified">
                                  <span>
                                    <svg
                                      width="14"
                                      height="14"
                                      viewBox="0 0 14 14"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g clipPath="url(#clip0_8952_1986)">
                                        <path
                                          d="M5.48218 12.4697H8.78833C11.5435 12.4697 12.6455 11.3677 12.6455 8.61255V5.3064C12.6455 2.55127 11.5435 1.44922 8.78833 1.44922H5.48218C2.72705 1.44922 1.625 2.55127 1.625 5.3064V8.61255C1.625 11.3677 2.72705 12.4697 5.48218 12.4697Z"
                                          stroke="black"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                        <path
                                          d="M4.79297 6.96175L6.35237 8.52115L9.47668 5.40234"
                                          stroke="black"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_8952_1986">
                                          <rect
                                            width="13.2246"
                                            height="13.2246"
                                            fill="white"
                                            transform="translate(0.522461 0.347656)"
                                          ></rect>
                                        </clipPath>
                                      </defs>
                                    </svg>
                                    Verified
                                  </span>
                                </div>
                                <div className="verified apartment">
                                  <span>Apartment</span>
                                </div>
                                <div className="card-like cursor-pointer">
                                  <svg
                                    width="21"
                                    height="21"
                                    viewBox="-2.4 -2.4 28.80 28.80"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0">
                                      <rect
                                        x="-2.4"
                                        y="-2.4"
                                        width="28.80"
                                        height="28.80"
                                        rx="14.4"
                                        fill="#ffffff"
                                        strokeWidth="0"
                                      ></rect>
                                    </g>
                                    <g
                                      id="SVGRepo_tracerCarrier"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></g>
                                    <g id="SVGRepo_iconCarrier">
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M11.993 5.09691C11.0387 4.25883 9.78328 3.75 8.40796 3.75C5.42122 3.75 3 6.1497 3 9.10988C3 10.473 3.50639 11.7242 4.35199 12.67L12 20.25L19.4216 12.8944L19.641 12.6631C20.4866 11.7172 21 10.473 21 9.10988C21 6.1497 18.5788 3.75 15.592 3.75C14.2167 3.75 12.9613 4.25883 12.007 5.09692L12 5.08998L11.993 5.09691ZM12 7.09938L12.0549 7.14755L12.9079 6.30208L12.9968 6.22399C13.6868 5.61806 14.5932 5.25 15.592 5.25C17.763 5.25 19.5 6.99073 19.5 9.10988C19.5 10.0813 19.1385 10.9674 18.5363 11.6481L18.3492 11.8453L12 18.1381L5.44274 11.6391C4.85393 10.9658 4.5 10.0809 4.5 9.10988C4.5 6.99073 6.23699 5.25 8.40796 5.25C9.40675 5.25 10.3132 5.61806 11.0032 6.22398L11.0921 6.30203L11.9452 7.14752L12 7.09938Z"
                                        fill="#af824a "
                                      ></path>
                                    </g>
                                  </svg>
                                </div>
                              </div>
                              <div className="card-body cstm-card-body-main">
                                <p className="cursor-pointer title">
                                  JeckPot Villa
                                </p>
                                <div className="d-flex pb-2 pb-lg-0 my-1 my-lg-2 gap-1 align-items-center">
                                  <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 13 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g clipPath="url(#clip0_5761_881)">
                                      <path
                                        d="M6.68465 1.29492C8.28191 1.29492 9.57998 2.57852 9.57998 4.16612C9.57998 6.31831 6.68465 9.49835 6.68465 9.49835C6.68465 9.49835 3.78933 6.31831 3.78933 4.16612C3.78933 2.57852 5.0874 1.29492 6.68465 1.29492ZM6.68465 3.22514C6.42869 3.22514 6.18321 3.32682 6.00222 3.50781C5.82123 3.68881 5.71954 3.93429 5.71954 4.19025C5.71954 4.44621 5.82123 4.69169 6.00222 4.87268C6.18321 5.05368 6.42869 5.15536 6.68465 5.15536C6.94062 5.15536 7.18609 5.05368 7.36709 4.87268C7.54808 4.69169 7.64976 4.44621 7.64976 4.19025C7.64976 3.93429 7.54808 3.68881 7.36709 3.50781C7.18609 3.32682 6.94062 3.22514 6.68465 3.22514ZM10.5451 9.49835C10.5451 10.5648 8.81754 11.4286 6.68465 11.4286C4.55176 11.4286 2.82422 10.5648 2.82422 9.49835C2.82422 8.87585 3.41294 8.32091 4.32496 7.96865L4.6338 8.40777C4.11264 8.62492 3.78933 8.92411 3.78933 9.25707C3.78933 9.92299 5.0874 10.4635 6.68465 10.4635C8.28191 10.4635 9.57998 9.92299 9.57998 9.25707C9.57998 8.92411 9.25667 8.62492 8.73551 8.40777L9.04434 7.96865C9.95637 8.32091 10.5451 8.87585 10.5451 9.49835Z"
                                        fill="#737D8C"
                                      ></path>
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_5761_881">
                                        <rect
                                          width="11.5813"
                                          height="11.5813"
                                          fill="white"
                                          transform="translate(0.894531 0.330078)"
                                        ></rect>
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  <p className="card-title ">
                                    2BHK,&nbsp;&nbsp;JeckPot Villa
                                  </p>
                                </div>
                                <div className="d-flex justify-content-between gap-2 flex-wrap house-main align-items-center">
                                  <a href="#">
                                    <Image src={beadroom} alt="beadroom" />3
                                    Bedroom
                                  </a>
                                  <a href="#">
                                    <Image src={Bathroom} alt="Bathroom" />2
                                    Bathroom
                                  </a>
                                </div>
                                <div className="btn-main">
                                  <p>AED 6000</p>
                                  <div className="w-50 d-flex align-items-center gap-2 justify-content-end">
                                    <div className="cursor-pointer">
                                      <svg
                                        width="16"
                                        height="15"
                                        viewBox="0 0 16 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <g clipPath="url(#clip0_8952_3529)">
                                          <path
                                            d="M13.7645 11.4562C13.7645 11.6812 13.7145 11.9125 13.6082 12.1375C13.502 12.3625 13.3645 12.575 13.1832 12.775C12.877 13.1125 12.5395 13.3563 12.1582 13.5125C11.7832 13.6688 11.377 13.75 10.9395 13.75C10.302 13.75 9.6207 13.6 8.90195 13.2938C8.1832 12.9875 7.46445 12.575 6.75195 12.0563C6.02577 11.5251 5.34051 10.9401 4.70195 10.3062C4.06993 9.67001 3.48702 8.9868 2.9582 8.2625C2.4457 7.55 2.0332 6.8375 1.7332 6.13125C1.4332 5.41875 1.2832 4.7375 1.2832 4.0875C1.2832 3.6625 1.3582 3.25625 1.5082 2.88125C1.6582 2.5 1.8957 2.15 2.22695 1.8375C2.62695 1.44375 3.06445 1.25 3.52695 1.25C3.70195 1.25 3.87695 1.2875 4.0332 1.3625C4.1957 1.4375 4.33945 1.55 4.45195 1.7125L5.90195 3.75625C6.01445 3.9125 6.0957 4.05625 6.15195 4.19375C6.2082 4.325 6.23945 4.45625 6.23945 4.575C6.23945 4.725 6.1957 4.875 6.1082 5.01875C6.02695 5.1625 5.9082 5.3125 5.7582 5.4625L5.2832 5.95625C5.21445 6.025 5.1832 6.10625 5.1832 6.20625C5.1832 6.25625 5.18945 6.3 5.20195 6.35C5.2207 6.4 5.23945 6.4375 5.25195 6.475C5.36445 6.68125 5.5582 6.95 5.8332 7.275C6.11445 7.6 6.41445 7.93125 6.73945 8.2625C7.07695 8.59375 7.40195 8.9 7.7332 9.18125C8.0582 9.45625 8.32695 9.64375 8.53945 9.75625C8.5707 9.76875 8.6082 9.7875 8.65195 9.80625C8.70195 9.825 8.75195 9.83125 8.8082 9.83125C8.91445 9.83125 8.9957 9.79375 9.06445 9.725L9.53945 9.25625C9.6957 9.1 9.8457 8.98125 9.98945 8.90625C10.1332 8.81875 10.277 8.775 10.4332 8.775C10.552 8.775 10.677 8.8 10.8145 8.85625C10.952 8.9125 11.0957 8.99375 11.252 9.1L13.3207 10.5687C13.4832 10.6812 13.5957 10.8125 13.6645 10.9687C13.727 11.125 13.7645 11.2812 13.7645 11.4562Z"
                                            stroke="#AF824A"
                                            strokeWidth="1.5"
                                            strokeMiterlimit="10"
                                          ></path>
                                        </g>
                                      </svg>
                                    </div>
                                    <div>
                                      <a
                                        target="_blank"
                                        href="mailto:contactus@thiyo.com"
                                      >
                                        <svg
                                          width="16"
                                          height="12"
                                          viewBox="0 0 16 12"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M15.3857 1.5C15.3857 0.675 14.7107 0 13.8857 0H1.88574C1.06074 0 0.385742 0.675 0.385742 1.5V10.5C0.385742 11.325 1.06074 12 1.88574 12H13.8857C14.7107 12 15.3857 11.325 15.3857 10.5V1.5ZM13.8857 1.5L7.88574 5.25L1.88574 1.5H13.8857ZM13.8857 10.5H1.88574V3L7.88574 6.75L13.8857 3V10.5Z"
                                            fill="#AF824A"
                                          ></path>
                                        </svg>
                                      </a>
                                    </div>
                                    <div>
                                      <a
                                        target="_blank"
                                        href="https://wa.me/8238376353?text=Hello%20there!"
                                      >
                                        <svg
                                          width="17"
                                          height="18"
                                          viewBox="0 0 17 18"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M8.57749 0.804688C4.13181 0.804688 0.508498 4.63043 0.508498 9.32449C0.508498 10.829 0.883042 12.2905 1.58328 13.5801L0.443359 17.999L4.71805 16.8126C5.89868 17.4918 7.22587 17.8529 8.57749 17.8529C13.0232 17.8529 16.6465 14.0271 16.6465 9.33309C16.6465 7.05484 15.8078 4.91414 14.2852 3.30647C12.7626 1.6902 10.7352 0.804688 8.57749 0.804688ZM8.58563 2.24042C10.3769 2.24042 12.0542 2.97977 13.3244 4.32093C14.5865 5.66209 15.2867 7.44171 15.2867 9.33309C15.2867 13.2362 12.2741 16.4086 8.57749 16.4086C7.37243 16.4086 6.1918 16.0733 5.16588 15.4199L4.92161 15.2737L2.38122 15.9787L3.05703 13.3652L2.89418 13.0901C2.22652 11.981 1.86826 10.6657 1.86826 9.32449C1.8764 5.42137 4.8809 2.24042 8.58563 2.24042ZM5.71955 5.38698C5.58928 5.38698 5.36943 5.43857 5.18216 5.6535C5.00303 5.86843 4.47378 6.39285 4.47378 7.43311C4.47378 8.48197 5.19845 9.48784 5.28801 9.63399C5.402 9.78014 6.72105 11.9294 8.74848 12.8407C9.22887 13.0729 9.60342 13.2018 9.89654 13.2964C10.3769 13.4597 10.8166 13.4339 11.1667 13.3824C11.5576 13.3222 12.3555 12.8665 12.5265 12.3679C12.6975 11.8693 12.6975 11.448 12.6486 11.3534C12.5916 11.2675 12.4614 11.2159 12.2578 11.1213C12.0542 11.0009 11.0609 10.4851 10.8818 10.4163C10.6945 10.3476 10.5805 10.3132 10.4258 10.5195C10.2955 10.7344 9.90468 11.2159 9.79069 11.3534C9.66856 11.4996 9.55456 11.5168 9.35915 11.4136C9.14745 11.3018 8.49607 11.0783 7.73069 10.3562C7.12817 9.78874 6.72919 9.09237 6.60706 8.87744C6.50935 8.67111 6.59892 8.54215 6.69662 8.44758C6.78619 8.35301 6.91647 8.19826 6.99789 8.0693C7.10374 7.94894 7.13631 7.85437 7.20145 7.71682C7.26658 7.57067 7.23401 7.45031 7.18516 7.34714C7.13631 7.25257 6.72919 6.18652 6.55821 5.76526C6.39536 5.35259 6.23252 5.40418 6.10224 5.39558C5.98825 5.39558 5.85797 5.38698 5.71955 5.38698Z"
                                            fill="#1DB171"
                                          ></path>
                                        </svg>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-6 col-xl-4 col-xxxl-3 mb-3">
                            <div className="card cstm-card-main cstm-card-main-cs">
                              <div className="position-relative">
                                <Image
                                  src={mercanotes}
                                  alt="mercanotes"
                                  className="Image-fluid pro-Image w-100"
                                />
                                <div className=" gallery">
                                  <svg
                                    width="13"
                                    height="13"
                                    viewBox="0 0 13 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g clipPath="url(#clip0_8952_3543)">
                                      <path
                                        d="M5.23104 11.4587H8.16121C10.603 11.4587 11.5798 10.4819 11.5798 8.04012V5.10994C11.5798 2.66813 10.603 1.69141 8.16121 1.69141H5.23104C2.78923 1.69141 1.8125 2.66813 1.8125 5.10994V8.04012C1.8125 10.4819 2.78923 11.4587 5.23104 11.4587Z"
                                        stroke="black"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      ></path>
                                      <path
                                        d="M2.13965 9.96883L4.54728 8.35235C4.93308 8.09352 5.48982 8.12282 5.83655 8.42072L5.99771 8.56234C6.37864 8.88955 6.99397 8.88955 7.3749 8.56234L9.40648 6.81889C9.78741 6.49169 10.4027 6.49169 10.7837 6.81889L11.5797 7.5026M5.23098 5.59798C5.49003 5.59798 5.73846 5.49508 5.92163 5.31191C6.1048 5.12873 6.20771 4.8803 6.20771 4.62126C6.20771 4.36221 6.1048 4.11378 5.92163 3.93061C5.73846 3.74744 5.49003 3.64453 5.23098 3.64453C4.97194 3.64453 4.72351 3.74744 4.54033 3.93061C4.35716 4.11378 4.25426 4.36221 4.25426 4.62126C4.25426 4.8803 4.35716 5.12873 4.54033 5.31191C4.72351 5.49508 4.97194 5.59798 5.23098 5.59798Z"
                                        stroke="black"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      ></path>
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_8952_3543">
                                        <rect
                                          width="11.7207"
                                          height="11.7207"
                                          fill="white"
                                          transform="translate(0.835938 0.714844)"
                                        ></rect>
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  <span>6</span>
                                </div>
                                <div className="verified">
                                  <span>
                                    <svg
                                      width="14"
                                      height="14"
                                      viewBox="0 0 14 14"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g clipPath="url(#clip0_8952_1986)">
                                        <path
                                          d="M5.48218 12.4697H8.78833C11.5435 12.4697 12.6455 11.3677 12.6455 8.61255V5.3064C12.6455 2.55127 11.5435 1.44922 8.78833 1.44922H5.48218C2.72705 1.44922 1.625 2.55127 1.625 5.3064V8.61255C1.625 11.3677 2.72705 12.4697 5.48218 12.4697Z"
                                          stroke="black"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                        <path
                                          d="M4.79297 6.96175L6.35237 8.52115L9.47668 5.40234"
                                          stroke="black"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_8952_1986">
                                          <rect
                                            width="13.2246"
                                            height="13.2246"
                                            fill="white"
                                            transform="translate(0.522461 0.347656)"
                                          ></rect>
                                        </clipPath>
                                      </defs>
                                    </svg>
                                    Verified
                                  </span>
                                </div>
                                <div className="verified apartment">
                                  <span>Apartment</span>
                                </div>
                                <div className="card-like cursor-pointer">
                                  <svg
                                    width="21"
                                    height="21"
                                    viewBox="-2.4 -2.4 28.80 28.80"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0">
                                      <rect
                                        x="-2.4"
                                        y="-2.4"
                                        width="28.80"
                                        height="28.80"
                                        rx="14.4"
                                        fill="#ffffff"
                                        strokeWidth="0"
                                      ></rect>
                                    </g>
                                    <g
                                      id="SVGRepo_tracerCarrier"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></g>
                                    <g id="SVGRepo_iconCarrier">
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M11.993 5.09691C11.0387 4.25883 9.78328 3.75 8.40796 3.75C5.42122 3.75 3 6.1497 3 9.10988C3 10.473 3.50639 11.7242 4.35199 12.67L12 20.25L19.4216 12.8944L19.641 12.6631C20.4866 11.7172 21 10.473 21 9.10988C21 6.1497 18.5788 3.75 15.592 3.75C14.2167 3.75 12.9613 4.25883 12.007 5.09692L12 5.08998L11.993 5.09691ZM12 7.09938L12.0549 7.14755L12.9079 6.30208L12.9968 6.22399C13.6868 5.61806 14.5932 5.25 15.592 5.25C17.763 5.25 19.5 6.99073 19.5 9.10988C19.5 10.0813 19.1385 10.9674 18.5363 11.6481L18.3492 11.8453L12 18.1381L5.44274 11.6391C4.85393 10.9658 4.5 10.0809 4.5 9.10988C4.5 6.99073 6.23699 5.25 8.40796 5.25C9.40675 5.25 10.3132 5.61806 11.0032 6.22398L11.0921 6.30203L11.9452 7.14752L12 7.09938Z"
                                        fill="#af824a "
                                      ></path>
                                    </g>
                                  </svg>
                                </div>
                              </div>
                              <div className="card-body cstm-card-body-main">
                                <p className="cursor-pointer title">
                                  Brothers Villa
                                </p>
                                <div className="d-flex pb-2 pb-lg-0 my-1 my-lg-2 gap-1 align-items-center">
                                  <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 13 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g clipPath="url(#clip0_5761_881)">
                                      <path
                                        d="M6.68465 1.29492C8.28191 1.29492 9.57998 2.57852 9.57998 4.16612C9.57998 6.31831 6.68465 9.49835 6.68465 9.49835C6.68465 9.49835 3.78933 6.31831 3.78933 4.16612C3.78933 2.57852 5.0874 1.29492 6.68465 1.29492ZM6.68465 3.22514C6.42869 3.22514 6.18321 3.32682 6.00222 3.50781C5.82123 3.68881 5.71954 3.93429 5.71954 4.19025C5.71954 4.44621 5.82123 4.69169 6.00222 4.87268C6.18321 5.05368 6.42869 5.15536 6.68465 5.15536C6.94062 5.15536 7.18609 5.05368 7.36709 4.87268C7.54808 4.69169 7.64976 4.44621 7.64976 4.19025C7.64976 3.93429 7.54808 3.68881 7.36709 3.50781C7.18609 3.32682 6.94062 3.22514 6.68465 3.22514ZM10.5451 9.49835C10.5451 10.5648 8.81754 11.4286 6.68465 11.4286C4.55176 11.4286 2.82422 10.5648 2.82422 9.49835C2.82422 8.87585 3.41294 8.32091 4.32496 7.96865L4.6338 8.40777C4.11264 8.62492 3.78933 8.92411 3.78933 9.25707C3.78933 9.92299 5.0874 10.4635 6.68465 10.4635C8.28191 10.4635 9.57998 9.92299 9.57998 9.25707C9.57998 8.92411 9.25667 8.62492 8.73551 8.40777L9.04434 7.96865C9.95637 8.32091 10.5451 8.87585 10.5451 9.49835Z"
                                        fill="#737D8C"
                                      ></path>
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_5761_881">
                                        <rect
                                          width="11.5813"
                                          height="11.5813"
                                          fill="white"
                                          transform="translate(0.894531 0.330078)"
                                        ></rect>
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  <p className="card-title ">
                                    2BHK,&nbsp;&nbsp;Brothers Villa
                                  </p>
                                </div>
                                <div className="d-flex justify-content-between gap-2 flex-wrap house-main align-items-center">
                                  <a href="#">
                                    <Image src={beadroom} alt="beadroom" />3
                                    Bedroom
                                  </a>
                                  <a href="#">
                                    <Image src={Bathroom} alt="Bathroom" />2
                                    Bathroom
                                  </a>
                                </div>
                                <div className="btn-main">
                                  <p>AED 45412</p>
                                  <div className="w-50 d-flex align-items-center gap-2 justify-content-end">
                                    <div className="cursor-pointer">
                                      <svg
                                        width="16"
                                        height="15"
                                        viewBox="0 0 16 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <g clipPath="url(#clip0_8952_3529)">
                                          <path
                                            d="M13.7645 11.4562C13.7645 11.6812 13.7145 11.9125 13.6082 12.1375C13.502 12.3625 13.3645 12.575 13.1832 12.775C12.877 13.1125 12.5395 13.3563 12.1582 13.5125C11.7832 13.6688 11.377 13.75 10.9395 13.75C10.302 13.75 9.6207 13.6 8.90195 13.2938C8.1832 12.9875 7.46445 12.575 6.75195 12.0563C6.02577 11.5251 5.34051 10.9401 4.70195 10.3062C4.06993 9.67001 3.48702 8.9868 2.9582 8.2625C2.4457 7.55 2.0332 6.8375 1.7332 6.13125C1.4332 5.41875 1.2832 4.7375 1.2832 4.0875C1.2832 3.6625 1.3582 3.25625 1.5082 2.88125C1.6582 2.5 1.8957 2.15 2.22695 1.8375C2.62695 1.44375 3.06445 1.25 3.52695 1.25C3.70195 1.25 3.87695 1.2875 4.0332 1.3625C4.1957 1.4375 4.33945 1.55 4.45195 1.7125L5.90195 3.75625C6.01445 3.9125 6.0957 4.05625 6.15195 4.19375C6.2082 4.325 6.23945 4.45625 6.23945 4.575C6.23945 4.725 6.1957 4.875 6.1082 5.01875C6.02695 5.1625 5.9082 5.3125 5.7582 5.4625L5.2832 5.95625C5.21445 6.025 5.1832 6.10625 5.1832 6.20625C5.1832 6.25625 5.18945 6.3 5.20195 6.35C5.2207 6.4 5.23945 6.4375 5.25195 6.475C5.36445 6.68125 5.5582 6.95 5.8332 7.275C6.11445 7.6 6.41445 7.93125 6.73945 8.2625C7.07695 8.59375 7.40195 8.9 7.7332 9.18125C8.0582 9.45625 8.32695 9.64375 8.53945 9.75625C8.5707 9.76875 8.6082 9.7875 8.65195 9.80625C8.70195 9.825 8.75195 9.83125 8.8082 9.83125C8.91445 9.83125 8.9957 9.79375 9.06445 9.725L9.53945 9.25625C9.6957 9.1 9.8457 8.98125 9.98945 8.90625C10.1332 8.81875 10.277 8.775 10.4332 8.775C10.552 8.775 10.677 8.8 10.8145 8.85625C10.952 8.9125 11.0957 8.99375 11.252 9.1L13.3207 10.5687C13.4832 10.6812 13.5957 10.8125 13.6645 10.9687C13.727 11.125 13.7645 11.2812 13.7645 11.4562Z"
                                            stroke="#AF824A"
                                            strokeWidth="1.5"
                                            strokeMiterlimit="10"
                                          ></path>
                                        </g>
                                      </svg>
                                    </div>
                                    <div>
                                      <a
                                        target="_blank"
                                        href="mailto:contactus@thiyo.com"
                                      >
                                        <svg
                                          width="16"
                                          height="12"
                                          viewBox="0 0 16 12"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M15.3857 1.5C15.3857 0.675 14.7107 0 13.8857 0H1.88574C1.06074 0 0.385742 0.675 0.385742 1.5V10.5C0.385742 11.325 1.06074 12 1.88574 12H13.8857C14.7107 12 15.3857 11.325 15.3857 10.5V1.5ZM13.8857 1.5L7.88574 5.25L1.88574 1.5H13.8857ZM13.8857 10.5H1.88574V3L7.88574 6.75L13.8857 3V10.5Z"
                                            fill="#AF824A"
                                          ></path>
                                        </svg>
                                      </a>
                                    </div>
                                    <div>
                                      <a
                                        target="_blank"
                                        href="https://wa.me/8238376353?text=Hello%20there!"
                                      >
                                        <svg
                                          width="17"
                                          height="18"
                                          viewBox="0 0 17 18"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M8.57749 0.804688C4.13181 0.804688 0.508498 4.63043 0.508498 9.32449C0.508498 10.829 0.883042 12.2905 1.58328 13.5801L0.443359 17.999L4.71805 16.8126C5.89868 17.4918 7.22587 17.8529 8.57749 17.8529C13.0232 17.8529 16.6465 14.0271 16.6465 9.33309C16.6465 7.05484 15.8078 4.91414 14.2852 3.30647C12.7626 1.6902 10.7352 0.804688 8.57749 0.804688ZM8.58563 2.24042C10.3769 2.24042 12.0542 2.97977 13.3244 4.32093C14.5865 5.66209 15.2867 7.44171 15.2867 9.33309C15.2867 13.2362 12.2741 16.4086 8.57749 16.4086C7.37243 16.4086 6.1918 16.0733 5.16588 15.4199L4.92161 15.2737L2.38122 15.9787L3.05703 13.3652L2.89418 13.0901C2.22652 11.981 1.86826 10.6657 1.86826 9.32449C1.8764 5.42137 4.8809 2.24042 8.58563 2.24042ZM5.71955 5.38698C5.58928 5.38698 5.36943 5.43857 5.18216 5.6535C5.00303 5.86843 4.47378 6.39285 4.47378 7.43311C4.47378 8.48197 5.19845 9.48784 5.28801 9.63399C5.402 9.78014 6.72105 11.9294 8.74848 12.8407C9.22887 13.0729 9.60342 13.2018 9.89654 13.2964C10.3769 13.4597 10.8166 13.4339 11.1667 13.3824C11.5576 13.3222 12.3555 12.8665 12.5265 12.3679C12.6975 11.8693 12.6975 11.448 12.6486 11.3534C12.5916 11.2675 12.4614 11.2159 12.2578 11.1213C12.0542 11.0009 11.0609 10.4851 10.8818 10.4163C10.6945 10.3476 10.5805 10.3132 10.4258 10.5195C10.2955 10.7344 9.90468 11.2159 9.79069 11.3534C9.66856 11.4996 9.55456 11.5168 9.35915 11.4136C9.14745 11.3018 8.49607 11.0783 7.73069 10.3562C7.12817 9.78874 6.72919 9.09237 6.60706 8.87744C6.50935 8.67111 6.59892 8.54215 6.69662 8.44758C6.78619 8.35301 6.91647 8.19826 6.99789 8.0693C7.10374 7.94894 7.13631 7.85437 7.20145 7.71682C7.26658 7.57067 7.23401 7.45031 7.18516 7.34714C7.13631 7.25257 6.72919 6.18652 6.55821 5.76526C6.39536 5.35259 6.23252 5.40418 6.10224 5.39558C5.98825 5.39558 5.85797 5.38698 5.71955 5.38698Z"
                                            fill="#1DB171"
                                          ></path>
                                        </svg>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-6 col-xl-4 col-xxxl-3 mb-3">
                            <div className="card cstm-card-main cstm-card-main-cs">
                              <div className="position-relative">
                                <Image
                                  src={Attribute}
                                  alt="Attribute"
                                  className="Image-fluid pro-Image w-100"
                                />
                                <div className=" gallery">
                                  <svg
                                    width="13"
                                    height="13"
                                    viewBox="0 0 13 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g clipPath="url(#clip0_8952_3543)">
                                      <path
                                        d="M5.23104 11.4587H8.16121C10.603 11.4587 11.5798 10.4819 11.5798 8.04012V5.10994C11.5798 2.66813 10.603 1.69141 8.16121 1.69141H5.23104C2.78923 1.69141 1.8125 2.66813 1.8125 5.10994V8.04012C1.8125 10.4819 2.78923 11.4587 5.23104 11.4587Z"
                                        stroke="black"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      ></path>
                                      <path
                                        d="M2.13965 9.96883L4.54728 8.35235C4.93308 8.09352 5.48982 8.12282 5.83655 8.42072L5.99771 8.56234C6.37864 8.88955 6.99397 8.88955 7.3749 8.56234L9.40648 6.81889C9.78741 6.49169 10.4027 6.49169 10.7837 6.81889L11.5797 7.5026M5.23098 5.59798C5.49003 5.59798 5.73846 5.49508 5.92163 5.31191C6.1048 5.12873 6.20771 4.8803 6.20771 4.62126C6.20771 4.36221 6.1048 4.11378 5.92163 3.93061C5.73846 3.74744 5.49003 3.64453 5.23098 3.64453C4.97194 3.64453 4.72351 3.74744 4.54033 3.93061C4.35716 4.11378 4.25426 4.36221 4.25426 4.62126C4.25426 4.8803 4.35716 5.12873 4.54033 5.31191C4.72351 5.49508 4.97194 5.59798 5.23098 5.59798Z"
                                        stroke="black"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      ></path>
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_8952_3543">
                                        <rect
                                          width="11.7207"
                                          height="11.7207"
                                          fill="white"
                                          transform="translate(0.835938 0.714844)"
                                        ></rect>
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  <span>6</span>
                                </div>
                                <div className="verified">
                                  <span>
                                    <svg
                                      width="14"
                                      height="14"
                                      viewBox="0 0 14 14"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g clipPath="url(#clip0_8952_1986)">
                                        <path
                                          d="M5.48218 12.4697H8.78833C11.5435 12.4697 12.6455 11.3677 12.6455 8.61255V5.3064C12.6455 2.55127 11.5435 1.44922 8.78833 1.44922H5.48218C2.72705 1.44922 1.625 2.55127 1.625 5.3064V8.61255C1.625 11.3677 2.72705 12.4697 5.48218 12.4697Z"
                                          stroke="black"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                        <path
                                          d="M4.79297 6.96175L6.35237 8.52115L9.47668 5.40234"
                                          stroke="black"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_8952_1986">
                                          <rect
                                            width="13.2246"
                                            height="13.2246"
                                            fill="white"
                                            transform="translate(0.522461 0.347656)"
                                          ></rect>
                                        </clipPath>
                                      </defs>
                                    </svg>
                                    Verified
                                  </span>
                                </div>
                                <div className="verified apartment">
                                  <span>Apartment</span>
                                </div>
                                <div className="card-like cursor-pointer">
                                  <svg
                                    width="21"
                                    height="21"
                                    viewBox="-2.4 -2.4 28.80 28.80"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0">
                                      <rect
                                        x="-2.4"
                                        y="-2.4"
                                        width="28.80"
                                        height="28.80"
                                        rx="14.4"
                                        fill="#ffffff"
                                        strokeWidth="0"
                                      ></rect>
                                    </g>
                                    <g
                                      id="SVGRepo_tracerCarrier"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></g>
                                    <g id="SVGRepo_iconCarrier">
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M11.993 5.09691C11.0387 4.25883 9.78328 3.75 8.40796 3.75C5.42122 3.75 3 6.1497 3 9.10988C3 10.473 3.50639 11.7242 4.35199 12.67L12 20.25L19.4216 12.8944L19.641 12.6631C20.4866 11.7172 21 10.473 21 9.10988C21 6.1497 18.5788 3.75 15.592 3.75C14.2167 3.75 12.9613 4.25883 12.007 5.09692L12 5.08998L11.993 5.09691ZM12 7.09938L12.0549 7.14755L12.9079 6.30208L12.9968 6.22399C13.6868 5.61806 14.5932 5.25 15.592 5.25C17.763 5.25 19.5 6.99073 19.5 9.10988C19.5 10.0813 19.1385 10.9674 18.5363 11.6481L18.3492 11.8453L12 18.1381L5.44274 11.6391C4.85393 10.9658 4.5 10.0809 4.5 9.10988C4.5 6.99073 6.23699 5.25 8.40796 5.25C9.40675 5.25 10.3132 5.61806 11.0032 6.22398L11.0921 6.30203L11.9452 7.14752L12 7.09938Z"
                                        fill="#af824a "
                                      ></path>
                                    </g>
                                  </svg>
                                </div>
                              </div>
                              <div className="card-body cstm-card-body-main">
                                <p className="cursor-pointer title">
                                  ReactJs Villa
                                </p>
                                <div className="d-flex pb-2 pb-lg-0 my-1 my-lg-2 gap-1 align-items-center">
                                  <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 13 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g clipPath="url(#clip0_5761_881)">
                                      <path
                                        d="M6.68465 1.29492C8.28191 1.29492 9.57998 2.57852 9.57998 4.16612C9.57998 6.31831 6.68465 9.49835 6.68465 9.49835C6.68465 9.49835 3.78933 6.31831 3.78933 4.16612C3.78933 2.57852 5.0874 1.29492 6.68465 1.29492ZM6.68465 3.22514C6.42869 3.22514 6.18321 3.32682 6.00222 3.50781C5.82123 3.68881 5.71954 3.93429 5.71954 4.19025C5.71954 4.44621 5.82123 4.69169 6.00222 4.87268C6.18321 5.05368 6.42869 5.15536 6.68465 5.15536C6.94062 5.15536 7.18609 5.05368 7.36709 4.87268C7.54808 4.69169 7.64976 4.44621 7.64976 4.19025C7.64976 3.93429 7.54808 3.68881 7.36709 3.50781C7.18609 3.32682 6.94062 3.22514 6.68465 3.22514ZM10.5451 9.49835C10.5451 10.5648 8.81754 11.4286 6.68465 11.4286C4.55176 11.4286 2.82422 10.5648 2.82422 9.49835C2.82422 8.87585 3.41294 8.32091 4.32496 7.96865L4.6338 8.40777C4.11264 8.62492 3.78933 8.92411 3.78933 9.25707C3.78933 9.92299 5.0874 10.4635 6.68465 10.4635C8.28191 10.4635 9.57998 9.92299 9.57998 9.25707C9.57998 8.92411 9.25667 8.62492 8.73551 8.40777L9.04434 7.96865C9.95637 8.32091 10.5451 8.87585 10.5451 9.49835Z"
                                        fill="#737D8C"
                                      ></path>
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_5761_881">
                                        <rect
                                          width="11.5813"
                                          height="11.5813"
                                          fill="white"
                                          transform="translate(0.894531 0.330078)"
                                        ></rect>
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  <p className="card-title ">
                                    2BHK,&nbsp;&nbsp;ReactJs Villa
                                  </p>
                                </div>
                                <div className="d-flex justify-content-between gap-2 flex-wrap house-main align-items-center">
                                  <a href="#">
                                    <Image src={beadroom} alt="beadroom" />3
                                    Bedroom
                                  </a>
                                  <a href="#">
                                    <Image src={Bathroom} alt="Bathroom" />2
                                    Bathroom
                                  </a>
                                </div>
                                <div className="btn-main">
                                  <p>AED 45412</p>
                                  <div className="w-50 d-flex align-items-center gap-2 justify-content-end">
                                    <div className="cursor-pointer">
                                      <svg
                                        width="16"
                                        height="15"
                                        viewBox="0 0 16 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <g clipPath="url(#clip0_8952_3529)">
                                          <path
                                            d="M13.7645 11.4562C13.7645 11.6812 13.7145 11.9125 13.6082 12.1375C13.502 12.3625 13.3645 12.575 13.1832 12.775C12.877 13.1125 12.5395 13.3563 12.1582 13.5125C11.7832 13.6688 11.377 13.75 10.9395 13.75C10.302 13.75 9.6207 13.6 8.90195 13.2938C8.1832 12.9875 7.46445 12.575 6.75195 12.0563C6.02577 11.5251 5.34051 10.9401 4.70195 10.3062C4.06993 9.67001 3.48702 8.9868 2.9582 8.2625C2.4457 7.55 2.0332 6.8375 1.7332 6.13125C1.4332 5.41875 1.2832 4.7375 1.2832 4.0875C1.2832 3.6625 1.3582 3.25625 1.5082 2.88125C1.6582 2.5 1.8957 2.15 2.22695 1.8375C2.62695 1.44375 3.06445 1.25 3.52695 1.25C3.70195 1.25 3.87695 1.2875 4.0332 1.3625C4.1957 1.4375 4.33945 1.55 4.45195 1.7125L5.90195 3.75625C6.01445 3.9125 6.0957 4.05625 6.15195 4.19375C6.2082 4.325 6.23945 4.45625 6.23945 4.575C6.23945 4.725 6.1957 4.875 6.1082 5.01875C6.02695 5.1625 5.9082 5.3125 5.7582 5.4625L5.2832 5.95625C5.21445 6.025 5.1832 6.10625 5.1832 6.20625C5.1832 6.25625 5.18945 6.3 5.20195 6.35C5.2207 6.4 5.23945 6.4375 5.25195 6.475C5.36445 6.68125 5.5582 6.95 5.8332 7.275C6.11445 7.6 6.41445 7.93125 6.73945 8.2625C7.07695 8.59375 7.40195 8.9 7.7332 9.18125C8.0582 9.45625 8.32695 9.64375 8.53945 9.75625C8.5707 9.76875 8.6082 9.7875 8.65195 9.80625C8.70195 9.825 8.75195 9.83125 8.8082 9.83125C8.91445 9.83125 8.9957 9.79375 9.06445 9.725L9.53945 9.25625C9.6957 9.1 9.8457 8.98125 9.98945 8.90625C10.1332 8.81875 10.277 8.775 10.4332 8.775C10.552 8.775 10.677 8.8 10.8145 8.85625C10.952 8.9125 11.0957 8.99375 11.252 9.1L13.3207 10.5687C13.4832 10.6812 13.5957 10.8125 13.6645 10.9687C13.727 11.125 13.7645 11.2812 13.7645 11.4562Z"
                                            stroke="#AF824A"
                                            strokeWidth="1.5"
                                            strokeMiterlimit="10"
                                          ></path>
                                        </g>
                                      </svg>
                                    </div>
                                    <div>
                                      <a
                                        target="_blank"
                                        href="mailto:contactus@thiyo.com"
                                      >
                                        <svg
                                          width="16"
                                          height="12"
                                          viewBox="0 0 16 12"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M15.3857 1.5C15.3857 0.675 14.7107 0 13.8857 0H1.88574C1.06074 0 0.385742 0.675 0.385742 1.5V10.5C0.385742 11.325 1.06074 12 1.88574 12H13.8857C14.7107 12 15.3857 11.325 15.3857 10.5V1.5ZM13.8857 1.5L7.88574 5.25L1.88574 1.5H13.8857ZM13.8857 10.5H1.88574V3L7.88574 6.75L13.8857 3V10.5Z"
                                            fill="#AF824A"
                                          ></path>
                                        </svg>
                                      </a>
                                    </div>
                                    <div>
                                      <a
                                        target="_blank"
                                        href="https://wa.me/8238376353?text=Hello%20there!"
                                      >
                                        <svg
                                          width="17"
                                          height="18"
                                          viewBox="0 0 17 18"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M8.57749 0.804688C4.13181 0.804688 0.508498 4.63043 0.508498 9.32449C0.508498 10.829 0.883042 12.2905 1.58328 13.5801L0.443359 17.999L4.71805 16.8126C5.89868 17.4918 7.22587 17.8529 8.57749 17.8529C13.0232 17.8529 16.6465 14.0271 16.6465 9.33309C16.6465 7.05484 15.8078 4.91414 14.2852 3.30647C12.7626 1.6902 10.7352 0.804688 8.57749 0.804688ZM8.58563 2.24042C10.3769 2.24042 12.0542 2.97977 13.3244 4.32093C14.5865 5.66209 15.2867 7.44171 15.2867 9.33309C15.2867 13.2362 12.2741 16.4086 8.57749 16.4086C7.37243 16.4086 6.1918 16.0733 5.16588 15.4199L4.92161 15.2737L2.38122 15.9787L3.05703 13.3652L2.89418 13.0901C2.22652 11.981 1.86826 10.6657 1.86826 9.32449C1.8764 5.42137 4.8809 2.24042 8.58563 2.24042ZM5.71955 5.38698C5.58928 5.38698 5.36943 5.43857 5.18216 5.6535C5.00303 5.86843 4.47378 6.39285 4.47378 7.43311C4.47378 8.48197 5.19845 9.48784 5.28801 9.63399C5.402 9.78014 6.72105 11.9294 8.74848 12.8407C9.22887 13.0729 9.60342 13.2018 9.89654 13.2964C10.3769 13.4597 10.8166 13.4339 11.1667 13.3824C11.5576 13.3222 12.3555 12.8665 12.5265 12.3679C12.6975 11.8693 12.6975 11.448 12.6486 11.3534C12.5916 11.2675 12.4614 11.2159 12.2578 11.1213C12.0542 11.0009 11.0609 10.4851 10.8818 10.4163C10.6945 10.3476 10.5805 10.3132 10.4258 10.5195C10.2955 10.7344 9.90468 11.2159 9.79069 11.3534C9.66856 11.4996 9.55456 11.5168 9.35915 11.4136C9.14745 11.3018 8.49607 11.0783 7.73069 10.3562C7.12817 9.78874 6.72919 9.09237 6.60706 8.87744C6.50935 8.67111 6.59892 8.54215 6.69662 8.44758C6.78619 8.35301 6.91647 8.19826 6.99789 8.0693C7.10374 7.94894 7.13631 7.85437 7.20145 7.71682C7.26658 7.57067 7.23401 7.45031 7.18516 7.34714C7.13631 7.25257 6.72919 6.18652 6.55821 5.76526C6.39536 5.35259 6.23252 5.40418 6.10224 5.39558C5.98825 5.39558 5.85797 5.38698 5.71955 5.38698Z"
                                            fill="#1DB171"
                                          ></path>
                                        </svg>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-6 col-xl-4 col-xxxl-3 mb-3">
                            <div className="card cstm-card-main cstm-card-main-cs">
                              <div className="position-relative">
                                <Image
                                  src={quebeccity}
                                  alt="quebeccity"
                                  className="Image-fluid pro-Image w-100"
                                />
                                <div className=" gallery">
                                  <svg
                                    width="13"
                                    height="13"
                                    viewBox="0 0 13 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g clipPath="url(#clip0_8952_3543)">
                                      <path
                                        d="M5.23104 11.4587H8.16121C10.603 11.4587 11.5798 10.4819 11.5798 8.04012V5.10994C11.5798 2.66813 10.603 1.69141 8.16121 1.69141H5.23104C2.78923 1.69141 1.8125 2.66813 1.8125 5.10994V8.04012C1.8125 10.4819 2.78923 11.4587 5.23104 11.4587Z"
                                        stroke="black"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      ></path>
                                      <path
                                        d="M2.13965 9.96883L4.54728 8.35235C4.93308 8.09352 5.48982 8.12282 5.83655 8.42072L5.99771 8.56234C6.37864 8.88955 6.99397 8.88955 7.3749 8.56234L9.40648 6.81889C9.78741 6.49169 10.4027 6.49169 10.7837 6.81889L11.5797 7.5026M5.23098 5.59798C5.49003 5.59798 5.73846 5.49508 5.92163 5.31191C6.1048 5.12873 6.20771 4.8803 6.20771 4.62126C6.20771 4.36221 6.1048 4.11378 5.92163 3.93061C5.73846 3.74744 5.49003 3.64453 5.23098 3.64453C4.97194 3.64453 4.72351 3.74744 4.54033 3.93061C4.35716 4.11378 4.25426 4.36221 4.25426 4.62126C4.25426 4.8803 4.35716 5.12873 4.54033 5.31191C4.72351 5.49508 4.97194 5.59798 5.23098 5.59798Z"
                                        stroke="black"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      ></path>
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_8952_3543">
                                        <rect
                                          width="11.7207"
                                          height="11.7207"
                                          fill="white"
                                          transform="translate(0.835938 0.714844)"
                                        ></rect>
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  <span>6</span>
                                </div>
                                <div className="verified">
                                  <span>
                                    <svg
                                      width="14"
                                      height="14"
                                      viewBox="0 0 14 14"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g clipPath="url(#clip0_8952_1986)">
                                        <path
                                          d="M5.48218 12.4697H8.78833C11.5435 12.4697 12.6455 11.3677 12.6455 8.61255V5.3064C12.6455 2.55127 11.5435 1.44922 8.78833 1.44922H5.48218C2.72705 1.44922 1.625 2.55127 1.625 5.3064V8.61255C1.625 11.3677 2.72705 12.4697 5.48218 12.4697Z"
                                          stroke="black"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                        <path
                                          d="M4.79297 6.96175L6.35237 8.52115L9.47668 5.40234"
                                          stroke="black"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_8952_1986">
                                          <rect
                                            width="13.2246"
                                            height="13.2246"
                                            fill="white"
                                            transform="translate(0.522461 0.347656)"
                                          ></rect>
                                        </clipPath>
                                      </defs>
                                    </svg>
                                    Verified
                                  </span>
                                </div>
                                <div className="verified apartment">
                                  <span>Apartment</span>
                                </div>
                                <div className="card-like cursor-pointer">
                                  <svg
                                    width="21"
                                    height="21"
                                    viewBox="-2.4 -2.4 28.80 28.80"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0">
                                      <rect
                                        x="-2.4"
                                        y="-2.4"
                                        width="28.80"
                                        height="28.80"
                                        rx="14.4"
                                        fill="#ffffff"
                                        strokeWidth="0"
                                      ></rect>
                                    </g>
                                    <g
                                      id="SVGRepo_tracerCarrier"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></g>
                                    <g id="SVGRepo_iconCarrier">
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M11.993 5.09691C11.0387 4.25883 9.78328 3.75 8.40796 3.75C5.42122 3.75 3 6.1497 3 9.10988C3 10.473 3.50639 11.7242 4.35199 12.67L12 20.25L19.4216 12.8944L19.641 12.6631C20.4866 11.7172 21 10.473 21 9.10988C21 6.1497 18.5788 3.75 15.592 3.75C14.2167 3.75 12.9613 4.25883 12.007 5.09692L12 5.08998L11.993 5.09691ZM12 7.09938L12.0549 7.14755L12.9079 6.30208L12.9968 6.22399C13.6868 5.61806 14.5932 5.25 15.592 5.25C17.763 5.25 19.5 6.99073 19.5 9.10988C19.5 10.0813 19.1385 10.9674 18.5363 11.6481L18.3492 11.8453L12 18.1381L5.44274 11.6391C4.85393 10.9658 4.5 10.0809 4.5 9.10988C4.5 6.99073 6.23699 5.25 8.40796 5.25C9.40675 5.25 10.3132 5.61806 11.0032 6.22398L11.0921 6.30203L11.9452 7.14752L12 7.09938Z"
                                        fill="#af824a "
                                      ></path>
                                    </g>
                                  </svg>
                                </div>
                              </div>
                              <div className="card-body cstm-card-body-main">
                                <p className="cursor-pointer title">
                                  Alpha Villa
                                </p>
                                <div className="d-flex pb-2 pb-lg-0 my-1 my-lg-2 gap-1 align-items-center">
                                  <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 13 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g clipPath="url(#clip0_5761_881)">
                                      <path
                                        d="M6.68465 1.29492C8.28191 1.29492 9.57998 2.57852 9.57998 4.16612C9.57998 6.31831 6.68465 9.49835 6.68465 9.49835C6.68465 9.49835 3.78933 6.31831 3.78933 4.16612C3.78933 2.57852 5.0874 1.29492 6.68465 1.29492ZM6.68465 3.22514C6.42869 3.22514 6.18321 3.32682 6.00222 3.50781C5.82123 3.68881 5.71954 3.93429 5.71954 4.19025C5.71954 4.44621 5.82123 4.69169 6.00222 4.87268C6.18321 5.05368 6.42869 5.15536 6.68465 5.15536C6.94062 5.15536 7.18609 5.05368 7.36709 4.87268C7.54808 4.69169 7.64976 4.44621 7.64976 4.19025C7.64976 3.93429 7.54808 3.68881 7.36709 3.50781C7.18609 3.32682 6.94062 3.22514 6.68465 3.22514ZM10.5451 9.49835C10.5451 10.5648 8.81754 11.4286 6.68465 11.4286C4.55176 11.4286 2.82422 10.5648 2.82422 9.49835C2.82422 8.87585 3.41294 8.32091 4.32496 7.96865L4.6338 8.40777C4.11264 8.62492 3.78933 8.92411 3.78933 9.25707C3.78933 9.92299 5.0874 10.4635 6.68465 10.4635C8.28191 10.4635 9.57998 9.92299 9.57998 9.25707C9.57998 8.92411 9.25667 8.62492 8.73551 8.40777L9.04434 7.96865C9.95637 8.32091 10.5451 8.87585 10.5451 9.49835Z"
                                        fill="#737D8C"
                                      ></path>
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_5761_881">
                                        <rect
                                          width="11.5813"
                                          height="11.5813"
                                          fill="white"
                                          transform="translate(0.894531 0.330078)"
                                        ></rect>
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  <p className="card-title ">
                                    2BHK,&nbsp;&nbsp;Alpha Villa
                                  </p>
                                </div>
                                <div className="d-flex justify-content-between gap-2 flex-wrap house-main align-items-center">
                                  <a href="#">
                                    <Image src={beadroom} alt="beadroom" />3
                                    Bedroom
                                  </a>
                                  <a href="#">
                                    <Image src={Bathroom} alt="Bathroom" />2
                                    Bathroom
                                  </a>
                                </div>
                                <div className="btn-main">
                                  <p>AED 555855</p>
                                  <div className="w-50 d-flex align-items-center gap-2 justify-content-end">
                                    <div className="cursor-pointer">
                                      <svg
                                        width="16"
                                        height="15"
                                        viewBox="0 0 16 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <g clipPath="url(#clip0_8952_3529)">
                                          <path
                                            d="M13.7645 11.4562C13.7645 11.6812 13.7145 11.9125 13.6082 12.1375C13.502 12.3625 13.3645 12.575 13.1832 12.775C12.877 13.1125 12.5395 13.3563 12.1582 13.5125C11.7832 13.6688 11.377 13.75 10.9395 13.75C10.302 13.75 9.6207 13.6 8.90195 13.2938C8.1832 12.9875 7.46445 12.575 6.75195 12.0563C6.02577 11.5251 5.34051 10.9401 4.70195 10.3062C4.06993 9.67001 3.48702 8.9868 2.9582 8.2625C2.4457 7.55 2.0332 6.8375 1.7332 6.13125C1.4332 5.41875 1.2832 4.7375 1.2832 4.0875C1.2832 3.6625 1.3582 3.25625 1.5082 2.88125C1.6582 2.5 1.8957 2.15 2.22695 1.8375C2.62695 1.44375 3.06445 1.25 3.52695 1.25C3.70195 1.25 3.87695 1.2875 4.0332 1.3625C4.1957 1.4375 4.33945 1.55 4.45195 1.7125L5.90195 3.75625C6.01445 3.9125 6.0957 4.05625 6.15195 4.19375C6.2082 4.325 6.23945 4.45625 6.23945 4.575C6.23945 4.725 6.1957 4.875 6.1082 5.01875C6.02695 5.1625 5.9082 5.3125 5.7582 5.4625L5.2832 5.95625C5.21445 6.025 5.1832 6.10625 5.1832 6.20625C5.1832 6.25625 5.18945 6.3 5.20195 6.35C5.2207 6.4 5.23945 6.4375 5.25195 6.475C5.36445 6.68125 5.5582 6.95 5.8332 7.275C6.11445 7.6 6.41445 7.93125 6.73945 8.2625C7.07695 8.59375 7.40195 8.9 7.7332 9.18125C8.0582 9.45625 8.32695 9.64375 8.53945 9.75625C8.5707 9.76875 8.6082 9.7875 8.65195 9.80625C8.70195 9.825 8.75195 9.83125 8.8082 9.83125C8.91445 9.83125 8.9957 9.79375 9.06445 9.725L9.53945 9.25625C9.6957 9.1 9.8457 8.98125 9.98945 8.90625C10.1332 8.81875 10.277 8.775 10.4332 8.775C10.552 8.775 10.677 8.8 10.8145 8.85625C10.952 8.9125 11.0957 8.99375 11.252 9.1L13.3207 10.5687C13.4832 10.6812 13.5957 10.8125 13.6645 10.9687C13.727 11.125 13.7645 11.2812 13.7645 11.4562Z"
                                            stroke="#AF824A"
                                            strokeWidth="1.5"
                                            strokeMiterlimit="10"
                                          ></path>
                                        </g>
                                      </svg>
                                    </div>
                                    <div>
                                      <a
                                        target="_blank"
                                        href="mailto:contactus@thiyo.com"
                                      >
                                        <svg
                                          width="16"
                                          height="12"
                                          viewBox="0 0 16 12"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M15.3857 1.5C15.3857 0.675 14.7107 0 13.8857 0H1.88574C1.06074 0 0.385742 0.675 0.385742 1.5V10.5C0.385742 11.325 1.06074 12 1.88574 12H13.8857C14.7107 12 15.3857 11.325 15.3857 10.5V1.5ZM13.8857 1.5L7.88574 5.25L1.88574 1.5H13.8857ZM13.8857 10.5H1.88574V3L7.88574 6.75L13.8857 3V10.5Z"
                                            fill="#AF824A"
                                          ></path>
                                        </svg>
                                      </a>
                                    </div>
                                    <div>
                                      <a
                                        target="_blank"
                                        href="https://wa.me/8238376353?text=Hello%20there!"
                                      >
                                        <svg
                                          width="17"
                                          height="18"
                                          viewBox="0 0 17 18"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M8.57749 0.804688C4.13181 0.804688 0.508498 4.63043 0.508498 9.32449C0.508498 10.829 0.883042 12.2905 1.58328 13.5801L0.443359 17.999L4.71805 16.8126C5.89868 17.4918 7.22587 17.8529 8.57749 17.8529C13.0232 17.8529 16.6465 14.0271 16.6465 9.33309C16.6465 7.05484 15.8078 4.91414 14.2852 3.30647C12.7626 1.6902 10.7352 0.804688 8.57749 0.804688ZM8.58563 2.24042C10.3769 2.24042 12.0542 2.97977 13.3244 4.32093C14.5865 5.66209 15.2867 7.44171 15.2867 9.33309C15.2867 13.2362 12.2741 16.4086 8.57749 16.4086C7.37243 16.4086 6.1918 16.0733 5.16588 15.4199L4.92161 15.2737L2.38122 15.9787L3.05703 13.3652L2.89418 13.0901C2.22652 11.981 1.86826 10.6657 1.86826 9.32449C1.8764 5.42137 4.8809 2.24042 8.58563 2.24042ZM5.71955 5.38698C5.58928 5.38698 5.36943 5.43857 5.18216 5.6535C5.00303 5.86843 4.47378 6.39285 4.47378 7.43311C4.47378 8.48197 5.19845 9.48784 5.28801 9.63399C5.402 9.78014 6.72105 11.9294 8.74848 12.8407C9.22887 13.0729 9.60342 13.2018 9.89654 13.2964C10.3769 13.4597 10.8166 13.4339 11.1667 13.3824C11.5576 13.3222 12.3555 12.8665 12.5265 12.3679C12.6975 11.8693 12.6975 11.448 12.6486 11.3534C12.5916 11.2675 12.4614 11.2159 12.2578 11.1213C12.0542 11.0009 11.0609 10.4851 10.8818 10.4163C10.6945 10.3476 10.5805 10.3132 10.4258 10.5195C10.2955 10.7344 9.90468 11.2159 9.79069 11.3534C9.66856 11.4996 9.55456 11.5168 9.35915 11.4136C9.14745 11.3018 8.49607 11.0783 7.73069 10.3562C7.12817 9.78874 6.72919 9.09237 6.60706 8.87744C6.50935 8.67111 6.59892 8.54215 6.69662 8.44758C6.78619 8.35301 6.91647 8.19826 6.99789 8.0693C7.10374 7.94894 7.13631 7.85437 7.20145 7.71682C7.26658 7.57067 7.23401 7.45031 7.18516 7.34714C7.13631 7.25257 6.72919 6.18652 6.55821 5.76526C6.39536 5.35259 6.23252 5.40418 6.10224 5.39558C5.98825 5.39558 5.85797 5.38698 5.71955 5.38698Z"
                                            fill="#1DB171"
                                          ></path>
                                        </svg>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-6 col-xl-4 col-xxxl-3 mb-3">
                            <div className="card cstm-card-main cstm-card-main-cs">
                              <div className="position-relative">
                                <Image
                                  src={buildings}
                                  alt="buildings"
                                  className="Image-fluid pro-Image w-100"
                                />
                                <div className=" gallery">
                                  <svg
                                    width="13"
                                    height="13"
                                    viewBox="0 0 13 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g clipPath="url(#clip0_8952_3543)">
                                      <path
                                        d="M5.23104 11.4587H8.16121C10.603 11.4587 11.5798 10.4819 11.5798 8.04012V5.10994C11.5798 2.66813 10.603 1.69141 8.16121 1.69141H5.23104C2.78923 1.69141 1.8125 2.66813 1.8125 5.10994V8.04012C1.8125 10.4819 2.78923 11.4587 5.23104 11.4587Z"
                                        stroke="black"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      ></path>
                                      <path
                                        d="M2.13965 9.96883L4.54728 8.35235C4.93308 8.09352 5.48982 8.12282 5.83655 8.42072L5.99771 8.56234C6.37864 8.88955 6.99397 8.88955 7.3749 8.56234L9.40648 6.81889C9.78741 6.49169 10.4027 6.49169 10.7837 6.81889L11.5797 7.5026M5.23098 5.59798C5.49003 5.59798 5.73846 5.49508 5.92163 5.31191C6.1048 5.12873 6.20771 4.8803 6.20771 4.62126C6.20771 4.36221 6.1048 4.11378 5.92163 3.93061C5.73846 3.74744 5.49003 3.64453 5.23098 3.64453C4.97194 3.64453 4.72351 3.74744 4.54033 3.93061C4.35716 4.11378 4.25426 4.36221 4.25426 4.62126C4.25426 4.8803 4.35716 5.12873 4.54033 5.31191C4.72351 5.49508 4.97194 5.59798 5.23098 5.59798Z"
                                        stroke="black"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      ></path>
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_8952_3543">
                                        <rect
                                          width="11.7207"
                                          height="11.7207"
                                          fill="white"
                                          transform="translate(0.835938 0.714844)"
                                        ></rect>
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  <span>6</span>
                                </div>
                                <div className="verified">
                                  <span>
                                    <svg
                                      width="14"
                                      height="14"
                                      viewBox="0 0 14 14"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g clipPath="url(#clip0_8952_1986)">
                                        <path
                                          d="M5.48218 12.4697H8.78833C11.5435 12.4697 12.6455 11.3677 12.6455 8.61255V5.3064C12.6455 2.55127 11.5435 1.44922 8.78833 1.44922H5.48218C2.72705 1.44922 1.625 2.55127 1.625 5.3064V8.61255C1.625 11.3677 2.72705 12.4697 5.48218 12.4697Z"
                                          stroke="black"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                        <path
                                          d="M4.79297 6.96175L6.35237 8.52115L9.47668 5.40234"
                                          stroke="black"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_8952_1986">
                                          <rect
                                            width="13.2246"
                                            height="13.2246"
                                            fill="white"
                                            transform="translate(0.522461 0.347656)"
                                          ></rect>
                                        </clipPath>
                                      </defs>
                                    </svg>
                                    Verified
                                  </span>
                                </div>
                                <div className="verified apartment">
                                  <span>Apartment</span>
                                </div>
                                <div className="card-like cursor-pointer">
                                  <svg
                                    width="21"
                                    height="21"
                                    viewBox="-2.4 -2.4 28.80 28.80"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0">
                                      <rect
                                        x="-2.4"
                                        y="-2.4"
                                        width="28.80"
                                        height="28.80"
                                        rx="14.4"
                                        fill="#ffffff"
                                        strokeWidth="0"
                                      ></rect>
                                    </g>
                                    <g
                                      id="SVGRepo_tracerCarrier"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></g>
                                    <g id="SVGRepo_iconCarrier">
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M11.993 5.09691C11.0387 4.25883 9.78328 3.75 8.40796 3.75C5.42122 3.75 3 6.1497 3 9.10988C3 10.473 3.50639 11.7242 4.35199 12.67L12 20.25L19.4216 12.8944L19.641 12.6631C20.4866 11.7172 21 10.473 21 9.10988C21 6.1497 18.5788 3.75 15.592 3.75C14.2167 3.75 12.9613 4.25883 12.007 5.09692L12 5.08998L11.993 5.09691ZM12 7.09938L12.0549 7.14755L12.9079 6.30208L12.9968 6.22399C13.6868 5.61806 14.5932 5.25 15.592 5.25C17.763 5.25 19.5 6.99073 19.5 9.10988C19.5 10.0813 19.1385 10.9674 18.5363 11.6481L18.3492 11.8453L12 18.1381L5.44274 11.6391C4.85393 10.9658 4.5 10.0809 4.5 9.10988C4.5 6.99073 6.23699 5.25 8.40796 5.25C9.40675 5.25 10.3132 5.61806 11.0032 6.22398L11.0921 6.30203L11.9452 7.14752L12 7.09938Z"
                                        fill="#af824a "
                                      ></path>
                                    </g>
                                  </svg>
                                </div>
                              </div>
                              <div className="card-body cstm-card-body-main">
                                <p className="cursor-pointer title">
                                  Lioo Villa
                                </p>
                                <div className="d-flex pb-2 pb-lg-0 my-1 my-lg-2 gap-1 align-items-center">
                                  <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 13 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g clipPath="url(#clip0_5761_881)">
                                      <path
                                        d="M6.68465 1.29492C8.28191 1.29492 9.57998 2.57852 9.57998 4.16612C9.57998 6.31831 6.68465 9.49835 6.68465 9.49835C6.68465 9.49835 3.78933 6.31831 3.78933 4.16612C3.78933 2.57852 5.0874 1.29492 6.68465 1.29492ZM6.68465 3.22514C6.42869 3.22514 6.18321 3.32682 6.00222 3.50781C5.82123 3.68881 5.71954 3.93429 5.71954 4.19025C5.71954 4.44621 5.82123 4.69169 6.00222 4.87268C6.18321 5.05368 6.42869 5.15536 6.68465 5.15536C6.94062 5.15536 7.18609 5.05368 7.36709 4.87268C7.54808 4.69169 7.64976 4.44621 7.64976 4.19025C7.64976 3.93429 7.54808 3.68881 7.36709 3.50781C7.18609 3.32682 6.94062 3.22514 6.68465 3.22514ZM10.5451 9.49835C10.5451 10.5648 8.81754 11.4286 6.68465 11.4286C4.55176 11.4286 2.82422 10.5648 2.82422 9.49835C2.82422 8.87585 3.41294 8.32091 4.32496 7.96865L4.6338 8.40777C4.11264 8.62492 3.78933 8.92411 3.78933 9.25707C3.78933 9.92299 5.0874 10.4635 6.68465 10.4635C8.28191 10.4635 9.57998 9.92299 9.57998 9.25707C9.57998 8.92411 9.25667 8.62492 8.73551 8.40777L9.04434 7.96865C9.95637 8.32091 10.5451 8.87585 10.5451 9.49835Z"
                                        fill="#737D8C"
                                      ></path>
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_5761_881">
                                        <rect
                                          width="11.5813"
                                          height="11.5813"
                                          fill="white"
                                          transform="translate(0.894531 0.330078)"
                                        ></rect>
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  <p className="card-title ">
                                    2BHK,&nbsp;&nbsp;Lioo Villa
                                  </p>
                                </div>
                                <div className="d-flex justify-content-between gap-2 flex-wrap house-main align-items-center">
                                  <a href="#">
                                    <Image src={beadroom} alt="beadroom" />3
                                    Bedroom
                                  </a>
                                  <a href="#">
                                    <Image src={Bathroom} alt="Bathroom" />2
                                    Bathroom
                                  </a>
                                </div>
                                <div className="btn-main">
                                  <p>AED 555855</p>
                                  <div className="w-50 d-flex align-items-center gap-2 justify-content-end">
                                    <div className="cursor-pointer">
                                      <svg
                                        width="16"
                                        height="15"
                                        viewBox="0 0 16 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <g clipPath="url(#clip0_8952_3529)">
                                          <path
                                            d="M13.7645 11.4562C13.7645 11.6812 13.7145 11.9125 13.6082 12.1375C13.502 12.3625 13.3645 12.575 13.1832 12.775C12.877 13.1125 12.5395 13.3563 12.1582 13.5125C11.7832 13.6688 11.377 13.75 10.9395 13.75C10.302 13.75 9.6207 13.6 8.90195 13.2938C8.1832 12.9875 7.46445 12.575 6.75195 12.0563C6.02577 11.5251 5.34051 10.9401 4.70195 10.3062C4.06993 9.67001 3.48702 8.9868 2.9582 8.2625C2.4457 7.55 2.0332 6.8375 1.7332 6.13125C1.4332 5.41875 1.2832 4.7375 1.2832 4.0875C1.2832 3.6625 1.3582 3.25625 1.5082 2.88125C1.6582 2.5 1.8957 2.15 2.22695 1.8375C2.62695 1.44375 3.06445 1.25 3.52695 1.25C3.70195 1.25 3.87695 1.2875 4.0332 1.3625C4.1957 1.4375 4.33945 1.55 4.45195 1.7125L5.90195 3.75625C6.01445 3.9125 6.0957 4.05625 6.15195 4.19375C6.2082 4.325 6.23945 4.45625 6.23945 4.575C6.23945 4.725 6.1957 4.875 6.1082 5.01875C6.02695 5.1625 5.9082 5.3125 5.7582 5.4625L5.2832 5.95625C5.21445 6.025 5.1832 6.10625 5.1832 6.20625C5.1832 6.25625 5.18945 6.3 5.20195 6.35C5.2207 6.4 5.23945 6.4375 5.25195 6.475C5.36445 6.68125 5.5582 6.95 5.8332 7.275C6.11445 7.6 6.41445 7.93125 6.73945 8.2625C7.07695 8.59375 7.40195 8.9 7.7332 9.18125C8.0582 9.45625 8.32695 9.64375 8.53945 9.75625C8.5707 9.76875 8.6082 9.7875 8.65195 9.80625C8.70195 9.825 8.75195 9.83125 8.8082 9.83125C8.91445 9.83125 8.9957 9.79375 9.06445 9.725L9.53945 9.25625C9.6957 9.1 9.8457 8.98125 9.98945 8.90625C10.1332 8.81875 10.277 8.775 10.4332 8.775C10.552 8.775 10.677 8.8 10.8145 8.85625C10.952 8.9125 11.0957 8.99375 11.252 9.1L13.3207 10.5687C13.4832 10.6812 13.5957 10.8125 13.6645 10.9687C13.727 11.125 13.7645 11.2812 13.7645 11.4562Z"
                                            stroke="#AF824A"
                                            strokeWidth="1.5"
                                            strokeMiterlimit="10"
                                          ></path>
                                        </g>
                                      </svg>
                                    </div>
                                    <div>
                                      <a
                                        target="_blank"
                                        href="mailto:contactus@thiyo.com"
                                      >
                                        <svg
                                          width="16"
                                          height="12"
                                          viewBox="0 0 16 12"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M15.3857 1.5C15.3857 0.675 14.7107 0 13.8857 0H1.88574C1.06074 0 0.385742 0.675 0.385742 1.5V10.5C0.385742 11.325 1.06074 12 1.88574 12H13.8857C14.7107 12 15.3857 11.325 15.3857 10.5V1.5ZM13.8857 1.5L7.88574 5.25L1.88574 1.5H13.8857ZM13.8857 10.5H1.88574V3L7.88574 6.75L13.8857 3V10.5Z"
                                            fill="#AF824A"
                                          ></path>
                                        </svg>
                                      </a>
                                    </div>
                                    <div>
                                      <a
                                        target="_blank"
                                        href="https://wa.me/8238376353?text=Hello%20there!"
                                      >
                                        <svg
                                          width="17"
                                          height="18"
                                          viewBox="0 0 17 18"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M8.57749 0.804688C4.13181 0.804688 0.508498 4.63043 0.508498 9.32449C0.508498 10.829 0.883042 12.2905 1.58328 13.5801L0.443359 17.999L4.71805 16.8126C5.89868 17.4918 7.22587 17.8529 8.57749 17.8529C13.0232 17.8529 16.6465 14.0271 16.6465 9.33309C16.6465 7.05484 15.8078 4.91414 14.2852 3.30647C12.7626 1.6902 10.7352 0.804688 8.57749 0.804688ZM8.58563 2.24042C10.3769 2.24042 12.0542 2.97977 13.3244 4.32093C14.5865 5.66209 15.2867 7.44171 15.2867 9.33309C15.2867 13.2362 12.2741 16.4086 8.57749 16.4086C7.37243 16.4086 6.1918 16.0733 5.16588 15.4199L4.92161 15.2737L2.38122 15.9787L3.05703 13.3652L2.89418 13.0901C2.22652 11.981 1.86826 10.6657 1.86826 9.32449C1.8764 5.42137 4.8809 2.24042 8.58563 2.24042ZM5.71955 5.38698C5.58928 5.38698 5.36943 5.43857 5.18216 5.6535C5.00303 5.86843 4.47378 6.39285 4.47378 7.43311C4.47378 8.48197 5.19845 9.48784 5.28801 9.63399C5.402 9.78014 6.72105 11.9294 8.74848 12.8407C9.22887 13.0729 9.60342 13.2018 9.89654 13.2964C10.3769 13.4597 10.8166 13.4339 11.1667 13.3824C11.5576 13.3222 12.3555 12.8665 12.5265 12.3679C12.6975 11.8693 12.6975 11.448 12.6486 11.3534C12.5916 11.2675 12.4614 11.2159 12.2578 11.1213C12.0542 11.0009 11.0609 10.4851 10.8818 10.4163C10.6945 10.3476 10.5805 10.3132 10.4258 10.5195C10.2955 10.7344 9.90468 11.2159 9.79069 11.3534C9.66856 11.4996 9.55456 11.5168 9.35915 11.4136C9.14745 11.3018 8.49607 11.0783 7.73069 10.3562C7.12817 9.78874 6.72919 9.09237 6.60706 8.87744C6.50935 8.67111 6.59892 8.54215 6.69662 8.44758C6.78619 8.35301 6.91647 8.19826 6.99789 8.0693C7.10374 7.94894 7.13631 7.85437 7.20145 7.71682C7.26658 7.57067 7.23401 7.45031 7.18516 7.34714C7.13631 7.25257 6.72919 6.18652 6.55821 5.76526C6.39536 5.35259 6.23252 5.40418 6.10224 5.39558C5.98825 5.39558 5.85797 5.38698 5.71955 5.38698Z"
                                            fill="#1DB171"
                                          ></path>
                                        </svg>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <ul
                        className="pagination justify-content-end"
                        role="navigation"
                        aria-label="Pagination"
                      >
                        <li className="page-item pp disabled">
                          <a
                            className="page-link previous-link "
                            tabIndex="-1"
                            role="button"
                            aria-disabled="true"
                            aria-label="Previous page"
                            rel="prev"
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M10.0242 12.4243C9.7899 12.6586 9.41 12.6586 9.17569 12.4243L4.75142 8L9.17569 3.57573C9.41 3.34142 9.7899 3.34142 10.0242 3.57573C10.2585 3.81005 10.2585 4.18995 10.0242 4.42426L6.44848 8L10.0242 11.5757C10.2585 11.81 10.2585 12.1899 10.0242 12.4243Z"
                                fill="#111111"
                              ></path>
                            </svg>
                          </a>
                        </li>
                        <li className="page-item active">
                          <a
                            rel="canonical"
                            role="button"
                            className="page-link pp"
                            tabIndex="-1"
                            aria-label="Page 1 is your current page"
                            aria-current="page"
                          >
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a
                            rel="next"
                            role="button"
                            className="page-link pp"
                            tabIndex="0"
                            aria-label="Page 2"
                          >
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a
                            className="page-link next-link"
                            tabIndex="0"
                            role="button"
                            aria-disabled="false"
                            aria-label="Next page"
                            rel="next"
                          >
                            <svg
                              width="17"
                              height="16"
                              viewBox="0 0 17 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M6.7043 3.57574C6.93861 3.34142 7.31851 3.34142 7.55283 3.57574L11.9771 8L7.55283 12.4243C7.31851 12.6586 6.93861 12.6586 6.7043 12.4243C6.46999 12.19 6.46999 11.8101 6.7043 11.5757L10.28 8L6.7043 4.42427C6.46999 4.18995 6.46999 3.81005 6.7043 3.57574Z"
                                fill="#111111"
                              ></path>
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Verified;
