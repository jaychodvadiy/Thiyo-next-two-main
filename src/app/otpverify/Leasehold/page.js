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
                      <h5 className="fw-normal">Property Profile</h5>
                      <span className="fw-normal">Step 3</span>{" "}
                      <button className="editBtn">Edit</button>
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
                      <h5 className="fw-normal">Photos </h5>
                      <span className="fw-normal">Step 4</span>{" "}
                      <button className="editBtn">Edit</button>
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
                      <h5 className="fw-normal">Floor Details</h5>
                      <span className="fw-normal">Step 5</span>{" "}
                      <button className="editBtn">Edit</button>
                    </div>
                  </div>
                  <div className="sidebarstep d-flex gap-3 mb-0">
                    <div className="sidebarstepline mt-1">
                      <span className="d-flex stepcomplte align-items-center justify-content-center"></span>
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
                <div className="">
                  <form>
                    <div className="princinorder propertylistprofile">
                      <Link href="/otpverify/buyingdesktop">
                        <button
                          type="button"
                          className="border-0 bg-transparent ps-0"
                        >
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
                      <h3 className="mt-3 mb-3">Add pricing and details...</h3>
                      <div className="profilehomepage">
                        <h6 className="mb-2 d-flex align-items-center gap-2">
                          Ownership<span className="ownership fw-bold">?</span>
                        </h6>
                        <div className="selectotherrrom d-flex gap-2 flex-wrap">
                          <button type="button" className="active">
                            Freehold
                          </button>
                          <button type="button" className="">
                            Leasehold
                          </button>
                          <button type="button" className="">
                            Co-operative society
                          </button>
                        </div>
                      </div>
                      <div className="profilehomepage">
                        <h6 className="mb-2">Price Details</h6>
                        <div className="price_details d-flex">
                          <div>
                            <div>
                            <input className="form-control" placeholder="₹ Expected Price" type="number" defaultValue=""/>
                            </div>
                          </div>
                          <div>
                            <div>
                              <input
                                className="form-control"
                                placeholder="₹ Price per sq.ft."
                                type="number"
                                defaultValue=""
                              />
                            </div>
                          </div>
                        </div>
                        <span className="text-mute price_text ps-3 mb-3">
                          ₹ Price in words
                        </span>
                      </div>
                      <div className="mb-3 d-flex flex-wrap gap-3">
                        <div className=" form-check d-flex flex-wrap gap-2">
                          <input
                            className="form-check-input"
                            id="0"
                            type="checkbox"
                          />
                          <label className="form-check-label price_label" htmlFor="0">
                            All inclusive price
                          </label>
                        </div>
                        <div className=" form-check d-flex flex-wrap gap-2">
                          <input
                            className="form-check-input"
                            id="1"
                            type="checkbox"
                          />
                          <label className="form-check-label price_label" htmlFor="1">
                            Tax and Govt. charges excluded
                          </label>
                        </div>
                        <div className=" form-check d-flex flex-wrap gap-2">
                          <input
                            className="form-check-input"
                            id="2"
                            type="checkbox"
                          />
                          <label className="form-check-label price_label" htmlFor="2">
                            Price Negotiable
                          </label>
                        </div>
                      </div>
                      <div className="additional mb-3">
                        <p className="mb-4 title cursor-pointer">
                          + Add more pricing details<span>(Optional)</span>
                        </p>
                      </div>
                      <div className="profilehomepage">
                        <h6 className="mb-2">What makes your property unique</h6>
                        <p className="description">
                          Adding desciption will increase your listing
                          visibility 22911
                        </p>
                      </div>
                      <div className="mb-4">
                        <textarea
                          placeholder="Share some details your propert like sparcious rooms, well maintained facilities"
                          spellCheck="false"
                        ></textarea>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <button
                          type="button"
                          className="thiyo-btn rounded-1 thiyo-btn-outline text-white w-100 fw-bold"
                          name="Continues"
                        >
                          Save
                        </button>
                      </div>
                      <div className="col-6">
                        <button
                          type="submit"
                          className="rounded-1 thiyo-btn text-white w-100 fw-bold"
                          name="Continues"
                        >
                          Continue
                        </button>
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
