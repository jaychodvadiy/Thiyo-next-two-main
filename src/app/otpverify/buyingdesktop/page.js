import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import folder from '../../../assets/images/Folder.png'
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
                      <span className="d-flex stepcomplte align-items-center justify-content-center"></span>
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
                <form>
                  <div className="princinorder propertylistprofile uploadphothos">
                    <Link href="/property">
                      <button className="border-0 bg-transparent ps-0">
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
                    <div className="profilepage">
                      <div className="profilehomepage">
                        <h6 className="mb-2">Amenities</h6>
                        <div className="selectotherrrom d-flex gap-2 flex-wrap">
                          <button type="button" className="active">
                            Maintenance Staff
                          </button>
                          <button type="button" className="active">
                            Water Storage
                          </button>
                          <button type="button" className="active">
                            Security / Fire Alarm
                          </button>
                          <button type="button" className="active">
                            Feng Shui / Vaastu Compliant
                          </button>
                        </div>
                      </div>
                      <h6 className="">Upload from desktop</h6>
                      <div className="uploadimages pb-3">
                        <div className="image-preview mb-4">
                          <div className="row gy-3"></div>
                        </div>
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
                          <input
                            id="upload-photo"
                            accept="image/png, image/jpeg, image/jpg"
                            multiple=""
                            type="file"
                            name="photo"
                          />
                        </div>
                      </div>
                      <div className="profilehomepage">
                        <h6 className="mb-2 mt-4">Floor Plans</h6>
                        <div className="mb-3">
                          <div className="areaInput">
                            <div>
                              <input placeholder="Size:" type="text" defaultValue="" />
                              <div className="line"></div>
                            </div>
                            <select>
                              <option>Carpet Area</option>
                              <option>sq.ft</option>
                              <option>sq.m.</option>
                              <option>sq. yards</option>
                              <option>acres</option>
                              <option>marla</option>
                              <option>cents</option>
                            </select>
                          </div>
                          <div className="error text-red d-flex justify-content-between"></div>
                        </div>
                        <div className="mb-3">
                          <div className="areaInput">
                            <div>
                              <input
                                placeholder="Bed Size :"
                                type="text"
                                defaultValue=""
                              />
                              <div className="line"></div>
                            </div>
                            <select>
                              <option>Carpet Area</option>
                              <option>sq.ft</option>
                              <option>sq.m.</option>
                              <option>sq. yards</option>
                              <option>acres</option>
                              <option>marla</option>
                              <option>cents</option>
                            </select>
                          </div>
                          <div className="error text-red d-flex justify-content-between"></div>
                        </div>
                        <div className="mb-3">
                          <div className="areaInput">
                            <div>
                              <input
                                placeholder="Bath Size :"
                                type="text"
                                defaultValue=""
                              />
                              <div className="line"></div>
                            </div>
                            <select>
                              <option>Carpet Area</option>
                              <option>sq.ft</option>
                              <option>sq.m.</option>
                              <option>sq. yards</option>
                              <option>acres</option>
                              <option>marla</option>
                              <option>cents</option>
                            </select>
                          </div>
                          <div className="error d-flex justify-content-between text-red"></div>
                        </div>
                        <div className="mb-3">
                          <input
                            className="form-control floorplaninput w-100"
                            placeholder="Price:"
                            type="text"
                            defaultValue=""
                          />
                        </div>
                        <div className="mb-3">
                          <button
                            className="rounded-1 thiyo-btn text-white w-100 fw-bold"
                            type="button"
                          >
                            Save
                          </button>
                        </div>
                        <h6 className="mb-2 mt-4">Floor Plans List</h6>
                        <div className="table-responsive">
                          <table className="table">
                            <thead>
                              <tr>
                                <th>Size</th>
                                <th>Bed Size</th>
                                <th>Bath Size</th>
                                <th>Price</th>
                                <th>Actions</th>
                              </tr>
                            </thead>
                            <tbody></tbody>
                          </table>
                        </div>
                        <div className="row mt-4">
                          <div className="col-6">
                            <button
                              className="thiyo-btn rounded-1 thiyo-btn-outline text-white w-100 fw-bold d-flex gap-2 align-items-center"
                              type="button"
                            >
                              Save
                            </button>
                          </div>
                          <div className="col-6">
                            <Link href="/otpverify/Leasehold">
                              <button
                                className="rounded-1 thiyo-btn text-white w-100 fw-bold"
                                type="submit"
                              >
                                Continue
                              </button>
                            </Link>
                          </div>
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
