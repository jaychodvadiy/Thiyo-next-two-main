import React from 'react'

import folder from "../../../assets/images/Folder.png";
import Image from 'next/image';
import Link from 'next/link';
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
                      <span className="d-flex stepcomplte align-items-center justify-content-center"></span>
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
                <form>
                  <div className="">
                    <div className="uploadphothos">
                      <Link href="/otpverify/Tellaboutproperty">
                      <button type="button" className="border-0 bg-transparent">
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
                      <h3 className="mt-3 mb-3">
                        Add photos of your property
                        <span className="ms-2">(optional)</span>
                      </h3>
                      <p className="mb-5">
                        A picture is worth a thousand words. 87% of buyers look
                        at photos before buying
                      </p>
                      <div className="uploadimages pb-5">
                        <div className="image-preview mb-4">
                          <div className="row gy-3"></div>
                        </div>
                        <h6 className="mb-3">Upload from desktop</h6>
                        <div className="uploadcard text-center">
                          <Image
                            alt="folder"
                            loading="lazy"
                            width="55"
                            height="55"
                            decoding="async"
                            data-nimg="1"
                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFolder.f3dbc783.png&amp;w=64&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFolder.f3dbc783.png&amp;w=128&amp;q=75 2x"
                            src={folder}
                            style={{ color: "transparent" }}
                          />
                          <p className="mt-3 mb-2">
                            Drag and drop your photos here
                          </p>
                          <span className="mb-2">
                            Upload 30 photos of max size 10 mb in format png,
                            jpeg, jpg
                          </span>
                          <div className="d-flex my-4 justify-content-center gap-4">
                            <hr className="w-25" />
                            OR
                            <hr className="w-25" />
                          </div>
                          <label htmlFor="upload-photo">Upload Photos Now</label>
                          <input id="upload-photo" accept="image/png, image/jpeg, image/jpg" multiple="" type="file" name="photo"/>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-6 ">
                          <button
                            type="button"
                            className="thiyo-btn rounded-1 thiyo-btn-outline text-white w-100 fw-bold d-flex gap-2 justify-content-center align-items-center"
                            name="Continues"
                          >
                            Save
                          </button>
                        </div>
                        <div className="col-6">
                          <Link href="/otpverify/propertyphotos">
                            <button
                              type="submit"
                              className="rounded-1 thiyo-btn text-white w-100 fw-bold"
                              name="Continues"
                            >
                              Continue
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Page
