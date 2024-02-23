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
                      <span className="d-flex stepcomplte align-items-center justify-content-center">
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
                      <h5 className="fw-normal">Location Details</h5>
                      <span className="fw-normal">Step 2</span>{" "}
                      <button className="editBtn">Edit</button>
                    </div>
                  </div>
                  <div className="sidebarstep d-flex gap-3">
                    <div className="sidebarstepline mt-1">
                      <span className="d-flex stepcomplte align-items-center justify-content-center"></span>
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
                <div className="propertylistprofile propertylistprofile-cs">
                  <form>
                    <div className="profilepage">
                      <Link href="/otpverify/property">
                        <button className="border-0 p-0" type="button">
                          <svg
                            width="45"
                            height="45"
                            viewBox="0 0 45 45"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M18.2807 11.7539L7.15234 22.8822L18.2807 34.0106M38.319 22.8822H7.46401"
                              stroke="black"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </button>
                      </Link>
                      <h3 className="propertytitle">Tell us about your property</h3>
                      <div>
                        <p className="fw-normal addanotherdetail">
                          You Apartment is a
                        </p>
                        <div className="mb-4">
                          <div className="d-flex gap-3">
                            <button type="button" className="selectbhk">
                              2 BHK
                            </button>
                            <button type="button" className="selectbhk">
                              others
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="profilehomepage">
                        <h6 className="mb-1">Add room details</h6>
                        <p me="fw-normal addanotherdetail">No. of Bedrooms</p>
                        <div className="roomdetail d-flex align-items-center gap-2 mt-2">
                          <div className="roomselection">
                            <input
                              className="cursor-pointer"
                              id="bed-1"
                              type="radio"
                              name="bedroom"
                            />
                            <label className="">1</label>
                          </div>
                          <div className="roomselection">
                            <input
                              className="cursor-pointer"
                              id="bed-2"
                              type="radio"
                              name="bedroom"
                            />
                            <label className="">2</label>
                          </div>
                          <div className="roomselection">
                            <input
                              className="cursor-pointer"
                              id="bed-3"
                              type="radio"
                              name="bedroom"
                            />
                            <label className="">3</label>
                          </div>
                          <div className="roomselection">
                            <input
                              className="cursor-pointer"
                              id="bed-4"
                              type="radio"
                              name="bedroom"
                            />
                            <label className="">4</label>
                          </div>
                          <button
                            type="button"
                            className="edit-button my-2 thiyo-btn text-white rounded py-1"
                          >
                            Add
                          </button>
                        </div>
                        <div className="d-flex align-items-center gap-3 mt-3"></div>
                        <p className="fw-normal addanotherdetail mb-3">
                          No. of Bathrooms
                        </p>
                        <div className="roomdetail d-flex align-items-center gap-2 mt-2">
                          <div className="roomselection">
                            <input
                              className="cursor-pointer"
                              id="bath-0"
                              type="radio"
                              name="bathRoom"
                            />
                            <label className="">0</label>
                          </div>
                          <div className="roomselection">
                            <input
                              className="cursor-pointer"
                              id="bath-1"
                              type="radio"
                              name="bathRoom"
                            />
                            <label className="">1</label>
                          </div>
                          <div className="roomselection">
                            <input
                              className="cursor-pointer"
                              id="bath-2"
                              type="radio"
                              name="bathRoom"
                            />
                            <label className="">2</label>
                          </div>
                          <div className="roomselection">
                            <input
                              className="cursor-pointer"
                              id="bath-3"
                              type="radio"
                              name="bathRoom"
                            />
                            <label className="">3</label>
                          </div>
                          <div className="roomselection">
                            <input
                              className="cursor-pointer"
                              id="bath-4"
                              type="radio"
                              name="bathRoom"
                            />
                            <label className="">4</label>
                          </div>
                          <div className="roomselection">
                            <input
                              className="cursor-pointer"
                              id="bath-5"
                              type="radio"
                              name="bathRoom"
                            />
                            <label className="">5</label>
                          </div>
                          <div className="roomselection">
                            <input
                              className="cursor-pointer"
                              id="bath-6"
                              type="radio"
                              name="bathRoom"
                            />
                            <label className="">6</label>
                          </div>
                        </div>
                      </div>
                      <div className="profilehomepage">
                        <h6 className="mb-2">Add Area Details</h6>
                        <p className="mb-3 fw-normal addanotherdetail">
                          Atleast one area type is mandatory
                        </p>
                        <div className="mb-3">
                          <div className="">
                            <div className="areaInput">
                              <div>
                                <input
                                  placeholder="Carpet Area"
                                  type="number"
                                  defaultValue=""
                                />
                                <div className="line"></div>
                              </div>
                              <select>
                                <option>Carpet Area</option>
                                <option>sqft</option>
                                <option>sqm</option>
                                <option>sqyards</option>
                                <option>acres</option>
                                <option>marla</option>
                                <option>cents</option>
                              </select>
                            </div>
                            <div className="d-flex errorhigh justify-content-between position-relative"></div>
                          </div>
                          <div className="d-flex errorhigh justify-content-between"></div>
                          <div className="d-flex errorhigh justify-content-between"></div>
                        </div>
                      </div>
                      <div className="d-flex gap-2 gap-md-3 m-0 profilehomepage">
                        <div className="profilehomepage-text">
                          + Add Built-up Area
                        </div>
                        <div className="profilehomepage-text">
                          + Add Super Built-up Area
                        </div>
                      </div>
                      <div className="profilehomepage">
                        <h6 className="mb-2">
                          Other rooms <span>(Optional)</span>
                        </h6>
                        <div className="selectotherrrom d-flex gap-2 flex-wrap">
                          <button type="button" className="">
                            + PoojaRoom
                          </button>
                          <button type="button" className="">
                            + StudyRoom
                          </button>
                          <button type="button" className="">
                            + ServantRoom
                          </button>
                          <button type="button" className="">
                            + StoreRoom
                          </button>
                        </div>
                      </div>
                      <div className="profilehomepage">
                        <h6 className="mb-2">
                          Furnishing <span>(Optional)</span>
                        </h6>
                        <div className="selectotherrrom profilehomepage">
                          <div className="d-flex flex-wrap gap-2">
                            <button type="button" className="">
                              Furnished
                            </button>
                            <button type="button" className="">
                              Semi-Furnished
                            </button>
                            <button type="button" className="">
                              Un-Furnished
                            </button>
                          </div>
                        </div>
                        <div className="Furnished">
                          <div className="title">
                            At least three furnisings are mandatory for
                            furnished
                          </div>
                          <div className="items-grid">
                            <div className="items">
                              <div className="items-btn">
                                <button type="button">-</button>
                                <div className="text">0</div>
                                <button type="button">+</button>
                              </div>
                              <div className="value">Light</div>
                            </div>
                            <div className="items">
                              <div className="items-btn">
                                <button type="button">-</button>
                                <div className="text">0</div>
                                <button type="button">+</button>
                              </div>
                              <div className="value">AC</div>
                            </div>
                            <div className="items">
                              <div className="items-btn">
                                <button type="button">-</button>
                                <div className="text">0</div>
                                <button type="button">+</button>
                              </div>
                              <div className="value">Beds</div>
                            </div>
                            <div className="items">
                              <div className="items-btn">
                                <button type="button">-</button>
                                <div className="text">0</div>
                                <button type="button">+</button>
                              </div>
                              <div className="value">Geyser</div>
                            </div>
                            <div className="items">
                              <div className="items-btn">
                                <button type="button">-</button>
                                <div className="text">0</div>
                                <button type="button">+</button>
                              </div>
                              <div className="value">Fans</div>
                            </div>
                            <div className="items">
                              <div className="items-btn">
                                <button type="button">-</button>
                                <div className="text">0</div>
                                <button type="button">+</button>
                              </div>
                              <div className="value">TV</div>
                            </div>
                            <div className="items">
                              <div className="items-btn">
                                <button type="button">-</button>
                                <div className="text">0</div>
                                <button type="button">+</button>
                              </div>
                              <div className="value">Wardrobe</div>
                            </div>
                            <div className="items checkbox">
                              <div className="items-btn"></div>
                              <div className="value">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="flexCheckDefaultsofa"
                                  >
                                    Sofa
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="items checkbox">
                              <div className="items-btn"></div>
                              <div className="value">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="flexCheckDefaultwashingMachine"
                                  >
                                    WashingMachine
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="items checkbox">
                              <div className="items-btn"></div>
                              <div className="value">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="flexCheckDefaultstove"
                                  >
                                    Stove
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="items checkbox">
                              <div className="items-btn"></div>
                              <div className="value">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="flexCheckDefaultfridge"
                                  >
                                    Fridge
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="items checkbox">
                              <div className="items-btn"></div>
                              <div className="value">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="flexCheckDefaultwaterPurifier"
                                  >
                                    WaterPurifier
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="items checkbox">
                              <div className="items-btn"></div>
                              <div className="value">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="flexCheckDefaultmicrowave"
                                  >
                                    Microwave
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="items checkbox">
                              <div className="items-btn"></div>
                              <div className="value">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="flexCheckDefaultmodularKitchen"
                                  >
                                    ModularKitchen
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="items checkbox">
                              <div className="items-btn"></div>
                              <div className="value">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="flexCheckDefaultchimney"
                                  >
                                    Chimney
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="items checkbox">
                              <div className="items-btn"></div>
                              <div className="value">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="flexCheckDefaultdiningTable"
                                  >
                                    DiningTable
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="items checkbox">
                              <div className="items-btn"></div>
                              <div className="value">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="flexCheckDefaultcurtains"
                                  >
                                    Curtains
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="items checkbox">
                              <div className="items-btn"></div>
                              <div className="value">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="flexCheckDefaultexhaustFan"
                                  >
                                    ExhaustFan
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="profilehomepage">
                          <h6 className="mb-2">
                            Reserved Parking <span>(Optional)</span>
                          </h6>
                          <div className="roomdetail-grid">
                            <div className="d-flex roomdetail align-items-center gap-2">
                              <p className="addanotherdetail">Covered Parking</p>
                              <div className="roomdetail_btn">
                                <button type="button" className="rounded-circle">
                                  -
                                </button>
                                <div className="roomdetail_value">0</div>
                                <button type="button" className="rounded-circle">
                                  +
                                </button>
                              </div>
                            </div>
                            <div className="d-flex roomdetail align-items-center gap-2">
                              <p className="addanotherdetail">Open Parking</p>
                              <div className="roomdetail_btn">
                                <button type="button" className="rounded-circle">
                                  -
                                </button>
                                <div className="roomdetail_value">0</div>
                                <button type="button" className="rounded-circle">
                                  +
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="profilehomepage">
                          <h6 className="mb-2">Floor Details</h6>
                          <p className="mb-3 fw-normal addanotherdetail">
                            Total no. of floors and your floor details
                          </p>
                          <div className="mb-3 addanotherdetail-cs row">
                            <div className="col-lg-6">
                              <input
                                placeholder="Total floors"
                                className="floorplaninput"
                                type="number"
                                defaultValue=""
                                name="totalFloors"
                              />
                            </div>
                            <div className="col-lg-6 mt-3 mt-lg-0">
                              <input
                                placeholder="Property on floors"
                                className="floorplaninput"
                                type="text"
                                defaultValue=""
                                name="propertyOnFloor"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="profilehomepage">
                          <h6 className="mb-2">Availability Status</h6>
                          <div className="selectotherrrom d-flex gap-2">
                            <button type="button" className="">
                              Ready to move
                            </button>
                            <button type="button" className="">
                              Under Construction
                            </button>
                          </div>
                        </div>
                        <div className="profilehomepage">
                          <h6 className="mb-2">Age of property</h6>
                          <div className="selectotherrrom d-flex gap-2 flex-wrap">
                            <button type="button" className="">
                              0-1 years
                            </button>
                            <button type="button" className="">
                              1-5 years
                            </button>
                            <button type="button" className="">
                              5-10 years
                            </button>
                            <button type="button" className="">
                              10+ years
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <button
                          type="button"
                          className="thiyo-btn thiyo-btn-outline text-white w-100 fw-bold"
                          name="save"
                        >
                          Save
                        </button>
                      </div>
                      <div className="col-6">
                        <Link href="/otpverify/property">
                          <button
                            type="submit"
                            className="thiyo-btn text-white w-100 fw-bold"
                            name="Continues"
                          >
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
