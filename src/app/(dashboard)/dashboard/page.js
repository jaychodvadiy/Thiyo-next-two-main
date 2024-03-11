import React from "react";
import icons from "../../../assets/images/2150799681.jpg";
import house from "../../../assets/images/2150799695.jpg";
import home from "../../../assets/images/2150799783.jpg";
import luxurypool from "../../../assets/images/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge.jpg";
import nightarchitecture from "../../../assets/images/night-architecture-outdoors-dusk-building-exterior-tree-grass-illuminated-generative-ai.jpg";
import playbutton from "../../../assets/images/iconslogo.svg";
import Image from "next/image";
function Villa() {
  return (
    <div>

      <section>
        <div className="pdetails">
          <div className="container">
            <div className="d-flex flex-wrap justify-content-between align-items-center">
              <div className="pdetails-left">
                <h1 className="title">MojeMoj villa, abu Dhabi</h1>
                <p className="location">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_8952_2655)">
                      <path
                        d="M6.6391 6.71766C6.84396 6.71766 7.04682 6.67731 7.23609 6.59891C7.42536 6.52051 7.59733 6.4056 7.74219 6.26074C7.88705 6.11588 8.00196 5.94391 8.08035 5.75464C8.15875 5.56537 8.1991 5.36252 8.1991 5.15766C8.1991 4.95279 8.15875 4.74994 8.08035 4.56067C8.00196 4.3714 7.88705 4.19943 7.74219 4.05457C7.59733 3.90971 7.42536 3.7948 7.23609 3.7164C7.04682 3.63801 6.84396 3.59766 6.6391 3.59766C6.22536 3.59766 5.82857 3.76201 5.53602 4.05457C5.24346 4.34713 5.0791 4.74392 5.0791 5.15766C5.0791 5.57139 5.24346 5.96819 5.53602 6.26074C5.82857 6.5533 6.22536 6.71766 6.6391 6.71766Z"
                        stroke="#747474"
                      ></path>
                      <path
                        d="M2.44853 4.24891C3.43353 -0.0810926 9.84853 -0.0760925 10.8285 4.25391C11.4035 6.79391 9.82353 8.94391 8.43853 10.2739C7.95456 10.7407 7.3084 11.0015 6.63603 11.0015C5.96365 11.0015 5.31749 10.7407 4.83353 10.2739C3.45353 8.94391 1.87353 6.78891 2.44853 4.24891Z"
                        stroke="#747474"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_8952_2655">
                        <rect
                          width="12"
                          height="12"
                          fill="white"
                          transform="translate(0.638672 0.00390625)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  12,MojeMoj villa, abu Dhabi,abu Dhabi
                </p>
              </div>
              <div className="pdetails-right">
                <h2 className="price">INR 6000</h2>
              </div>
            </div>
            <div id="gallery" className="photos-grid-container">
              <div
                className="main-photo img-box"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <Image src={icons} alt="icons" />
              </div>
              <div>
                <div className="sub">
                  <div className="img-box">
                    <Image src={house} alt="icons" />
                  </div>
                  <div className="img-box">
                    <Image src={home} alt="icons" />
                  </div>
                  <div className="img-box">
                    <Image src={luxurypool} alt="icons" />
                  </div>
                  <div className="img-box">
                    <Image src={nightarchitecture} alt="icons" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="modal fade photos-grid-modal"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
              data-bs-keyboard="false"
              data-bs-backdrop="static"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  {/* <img
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    className="img-fluid btn-close"
                    src="/_next/static/media/sliderClose.766e2524.png"
                    alt="close button"
                  /> */}
                  <div className="swiper swiper-initialized swiper-horizontal mySwiper">
                    <div
                      className="swiper-wrapper"
                      style={{
                        transitionDuration: "0ms",
                        transitionDelay: "0ms",
                      }}
                    >
                      <div className="swiper-slide">
                        <div className="modalImage">
                          {/* <img
                            src="https://images.unsplash.com/photo-1489516408517-0c0a15662682"
                            alt="Image"
                          /> */}
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="modalImage">
                          {/* <img
                            src="https://images.unsplash.com/photo-1518684079-3c830dcef090"
                            alt="Image"
                          /> */}
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="modalImage">
                          {/* <img
                            src="https://plus.unsplash.com/premium_photo-1661964298224-7747aa0ac10c"
                            alt="Image"
                          /> */}
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="modalImage">
                          {/* <img
                            src="https://images.unsplash.com/photo-1526651197376-ada29b846227"
                            alt="Image"
                          /> */}
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="modalImage">
                          {/* <img
                            src="https://images.unsplash.com/photo-1677508398175-4a2a1408048f"
                            alt="Image"
                          /> */}
                        </div>
                      </div>
                    </div>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pdetails-details">
              <div className="pdetails-left pb-0">
                <div className="pdetails-disc">
                  <h2 className="title">Description</h2>
                  <p className="mb-5">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                  <h2 className="title">Property Documents</h2>
                  <div className="pdetails-group">
                    <div className="pdetails-list">
                      <div>
                        <svg
                          width="11"
                          height="11"
                          viewBox="0 0 11 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_8952_2767)">
                            <path
                              d="M7.30501 0.871094H3.97168C2.30501 0.871094 1.47168 1.70443 1.47168 3.37109V8.78776C1.47168 9.01693 1.65918 9.20443 1.88835 9.20443H7.30501C8.97168 9.20443 9.80501 8.37109 9.80501 6.70443V3.37109C9.80501 1.70443 8.97168 0.871094 7.30501 0.871094Z"
                              stroke="#626262"
                              strokeWidth="0.75"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M6.01832 3.30628L3.85582 5.46878C3.77249 5.55211 3.69332 5.71461 3.67666 5.83128L3.55999 6.65628C3.51832 6.95628 3.72666 7.16461 4.02666 7.12295L4.85166 7.00628C4.96832 6.98961 5.13082 6.91045 5.21416 6.82711L7.37666 4.66461C7.74749 4.29378 7.92666 3.86045 7.37666 3.31045C6.82666 2.75628 6.39332 2.93128 6.01832 3.30628Z"
                              stroke="#626262"
                              strokeWidth="0.75"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M5.70996 3.61328C5.80042 3.93627 5.97253 4.23053 6.2097 4.46771C6.44688 4.70488 6.74114 4.87699 7.06413 4.96745"
                              stroke="#626262"
                              strokeWidth="0.75"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_8952_2767">
                              <rect
                                width="10"
                                height="10"
                                fill="white"
                                transform="translate(0.638672 0.0390625)"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                        <p>Purchase-Agreement</p>
                      </div>
                      <div className="pdetails-download">DOWNLOAD</div>
                    </div>
                    <div className="pdetails-list">
                      <div>
                        <svg
                          width="11"
                          height="11"
                          viewBox="0 0 11 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_8952_2767)">
                            <path
                              d="M7.30501 0.871094H3.97168C2.30501 0.871094 1.47168 1.70443 1.47168 3.37109V8.78776C1.47168 9.01693 1.65918 9.20443 1.88835 9.20443H7.30501C8.97168 9.20443 9.80501 8.37109 9.80501 6.70443V3.37109C9.80501 1.70443 8.97168 0.871094 7.30501 0.871094Z"
                              stroke="#626262"
                              strokeWidth="0.75"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M6.01832 3.30628L3.85582 5.46878C3.77249 5.55211 3.69332 5.71461 3.67666 5.83128L3.55999 6.65628C3.51832 6.95628 3.72666 7.16461 4.02666 7.12295L4.85166 7.00628C4.96832 6.98961 5.13082 6.91045 5.21416 6.82711L7.37666 4.66461C7.74749 4.29378 7.92666 3.86045 7.37666 3.31045C6.82666 2.75628 6.39332 2.93128 6.01832 3.30628Z"
                              stroke="#626262"
                              strokeWidth="0.75"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M5.70996 3.61328C5.80042 3.93627 5.97253 4.23053 6.2097 4.46771C6.44688 4.70488 6.74114 4.87699 7.06413 4.96745"
                              stroke="#626262"
                              strokeWidth="0.75"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_8952_2767">
                              <rect
                                width="10"
                                height="10"
                                fill="white"
                                transform="translate(0.638672 0.0390625)"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                        <p>Offering-Memorandum</p>
                      </div>
                      <div className="pdetails-download">DOWNLOAD</div>
                    </div>
                    <div className="pdetails-list">
                      <div>
                        <svg
                          width="11"
                          height="11"
                          viewBox="0 0 11 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_8952_2767)">
                            <path
                              d="M7.30501 0.871094H3.97168C2.30501 0.871094 1.47168 1.70443 1.47168 3.37109V8.78776C1.47168 9.01693 1.65918 9.20443 1.88835 9.20443H7.30501C8.97168 9.20443 9.80501 8.37109 9.80501 6.70443V3.37109C9.80501 1.70443 8.97168 0.871094 7.30501 0.871094Z"
                              stroke="#626262"
                              strokeWidth="0.75"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M6.01832 3.30628L3.85582 5.46878C3.77249 5.55211 3.69332 5.71461 3.67666 5.83128L3.55999 6.65628C3.51832 6.95628 3.72666 7.16461 4.02666 7.12295L4.85166 7.00628C4.96832 6.98961 5.13082 6.91045 5.21416 6.82711L7.37666 4.66461C7.74749 4.29378 7.92666 3.86045 7.37666 3.31045C6.82666 2.75628 6.39332 2.93128 6.01832 3.30628Z"
                              stroke="#626262"
                              strokeWidth="0.75"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M5.70996 3.61328C5.80042 3.93627 5.97253 4.23053 6.2097 4.46771C6.44688 4.70488 6.74114 4.87699 7.06413 4.96745"
                              stroke="#626262"
                              strokeWidth="0.75"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_8952_2767">
                              <rect
                                width="10"
                                height="10"
                                fill="white"
                                transform="translate(0.638672 0.0390625)"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                        <p>Market-Information</p>
                      </div>
                      <div className="pdetails-download">DOWNLOAD</div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="details">
                    <div className="title">Details</div>
                    <div className="row group">
                      <div className="col-lg-6">
                        <div className="row">
                          <div className="col-6 name">Property ID:</div>
                          <div className="col-6 value">-</div>
                          <div className="col-6 name">Price:</div>
                          <div className="col-6 value"> AED 6000</div>
                          <div className="col-6 name">Property Size:</div>
                          <div className="col-6 value">1000 sqft</div>
                          <div className="col-6 name">Bedrooms:</div>
                          <div className="col-6 value">3</div>
                          <div className="col-6 name">Bathroom:</div>
                          <div className="col-6 value">2</div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="row">
                          <div className="col-6 name">Garages:</div>
                          <div className="col-6 value">-</div>
                          <div className="col-6 name">Garage Size:</div>
                          <div className="col-6 value">- </div>
                          <div className="col-6 name">Property Type:</div>
                          <div className="col-6 value">residential</div>
                          <div className="col-6 name">Property Status:</div>
                          <div className="col-6 value">ready</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="additional">Additional details</div>
                  <div className="additional-details pt-0">
                    <div className="row group">
                      <div className="col-lg-6">
                        <div className="row">
                          <div className="col-6 name">Deposit:</div>
                          <div className="col-6 value">-</div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="row">
                          <div className="col-6 name">Furnished:</div>
                          <div className="col-6 value">Yes</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pdetails-right">
                <div className="card">
                  <h2 className="title">Request Info</h2>
                  <div className="auther">
                    <img
                      src="https://images.unsplash.com/photo-1624535948032-f6f24ab1f319"
                      alt="Image"
                    />
                    <div className="name">Staff Name</div>
                  </div>
                  <div className="contact">
                    <button className="call">
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 11 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_8952_2848)">
                          <path
                            d="M9.79251 8.0112C9.79251 8.1612 9.75918 8.31536 9.68835 8.46536C9.61751 8.61536 9.52585 8.75703 9.40501 8.89037C9.20085 9.11537 8.97585 9.27787 8.72168 9.38203C8.47168 9.4862 8.20085 9.54036 7.90918 9.54036C7.48418 9.54036 7.03001 9.44037 6.55085 9.2362C6.07168 9.03203 5.59251 8.75703 5.11751 8.4112C4.63339 8.05707 4.17655 7.66709 3.75085 7.24453C3.3295 6.82037 2.94089 6.3649 2.58835 5.88203C2.24668 5.40703 1.97168 4.93203 1.77168 4.4612C1.57168 3.9862 1.47168 3.53203 1.47168 3.0987C1.47168 2.81536 1.52168 2.54453 1.62168 2.29453C1.72168 2.04036 1.88001 1.80703 2.10085 1.5987C2.36751 1.3362 2.65918 1.20703 2.96751 1.20703C3.08418 1.20703 3.20085 1.23203 3.30501 1.28203C3.41335 1.33203 3.50918 1.40703 3.58418 1.51536L4.55085 2.87786C4.62585 2.98203 4.68001 3.07786 4.71751 3.16953C4.75501 3.25703 4.77585 3.34453 4.77585 3.4237C4.77585 3.5237 4.74668 3.6237 4.68835 3.71953C4.63418 3.81536 4.55501 3.91536 4.45501 4.01536L4.13835 4.34453C4.09251 4.39036 4.07168 4.44453 4.07168 4.5112C4.07168 4.54453 4.07585 4.5737 4.08418 4.60703C4.09668 4.64036 4.10918 4.66536 4.11751 4.69036C4.19251 4.82786 4.32168 5.00703 4.50501 5.2237C4.69251 5.44036 4.89251 5.6612 5.10918 5.88203C5.33418 6.10286 5.55085 6.30703 5.77168 6.49453C5.98835 6.67786 6.16751 6.80286 6.30918 6.87786C6.33001 6.8862 6.35501 6.8987 6.38418 6.9112C6.41751 6.9237 6.45085 6.92786 6.48835 6.92786C6.55918 6.92786 6.61335 6.90287 6.65918 6.85703L6.97585 6.54453C7.08001 6.44037 7.18001 6.3612 7.27585 6.3112C7.37168 6.25286 7.46751 6.2237 7.57168 6.2237C7.65085 6.2237 7.73418 6.24036 7.82585 6.27786C7.91751 6.31536 8.01335 6.36953 8.11751 6.44037L9.49668 7.41953C9.60501 7.49453 9.68001 7.58203 9.72585 7.6862C9.76751 7.79036 9.79251 7.89453 9.79251 8.0112Z"
                            stroke="white"
                            strokeMiterlimit="10"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_8952_2848">
                            <rect
                              width="10"
                              height="10"
                              fill="white"
                              transform="translate(0.638672 0.375)"
                            ></rect>
                          </clipPath>
                        </defs>
                      </svg>
                      Call
                    </button>
                    <a target="_blank" href="mailto:undefined">
                      <button className="call">
                        <svg
                          width="9"
                          height="8"
                          viewBox="0 0 9 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.98633 1.22816C8.98633 0.763219 8.61438 0.382812 8.15977 0.382812H1.54727C1.09266 0.382812 0.720703 0.763219 0.720703 1.22816V6.30025C0.720703 6.76519 1.09266 7.1456 1.54727 7.1456H8.15977C8.61438 7.1456 8.98633 6.76519 8.98633 6.30025V1.22816ZM8.15977 1.22816L4.85352 3.34153L1.54727 1.22816H8.15977ZM8.15977 6.30025H1.54727V2.07351L4.85352 4.18688L8.15977 2.07351V6.30025Z"
                            fill="white"
                          ></path>
                        </svg>
                        Email
                      </button>
                    </a>
                    <a
                      target="_blank"
                      href="https://wa.me/undefined?text=Hello%20there!"
                    >
                      <button className="call WhatsApp">
                        <svg
                          width="11"
                          height="11"
                          viewBox="0 0 11 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.5482 0.148438C2.96846 0.148438 0.865923 2.41479 0.865923 5.19554C0.865923 6.0868 1.08326 6.9526 1.4896 7.71654L0.828125 10.3343L3.30864 9.63148C3.99374 10.0338 4.76388 10.2477 5.5482 10.2477C8.12793 10.2477 10.2305 7.98137 10.2305 5.20063C10.2305 3.851 9.74381 2.58286 8.86028 1.63048C7.97674 0.67301 6.80027 0.148438 5.5482 0.148438ZM5.55292 0.998958C6.59238 0.998958 7.56568 1.43695 8.30275 2.23145C9.0351 3.02595 9.44143 4.08018 9.44143 5.20063C9.44143 7.51282 7.69325 9.39212 5.5482 9.39212C4.84893 9.39212 4.16383 9.19349 3.56851 8.80643L3.42676 8.71985L1.95263 9.13747L2.34478 7.58922L2.25029 7.42624C1.86286 6.76926 1.65496 5.99004 1.65496 5.19554C1.65969 2.88334 3.40314 0.998958 5.55292 0.998958ZM3.88979 2.86297C3.8142 2.86297 3.68663 2.89353 3.57796 3.02085C3.47401 3.14818 3.1669 3.45885 3.1669 4.07509C3.1669 4.69643 3.58741 5.2923 3.63938 5.37888C3.70553 5.46546 4.47094 6.7387 5.64742 7.27855C5.92618 7.41606 6.14352 7.49245 6.31361 7.54847C6.59238 7.64524 6.84751 7.62996 7.05068 7.5994C7.27747 7.56375 7.7405 7.29383 7.83972 6.99844C7.93894 6.70305 7.93894 6.45349 7.91059 6.39747C7.87752 6.34654 7.80192 6.31598 7.6838 6.25996C7.56568 6.18866 6.98926 5.88308 6.88531 5.84234C6.77664 5.8016 6.7105 5.78123 6.62072 5.90346C6.54513 6.03078 6.31834 6.31598 6.25219 6.39747C6.18132 6.48405 6.11517 6.49424 6.00178 6.43312C5.87893 6.36691 5.50095 6.2345 5.05682 5.80669C4.70718 5.47056 4.47567 5.05803 4.4048 4.9307C4.3481 4.80847 4.40007 4.73208 4.45677 4.67606C4.50874 4.62004 4.58434 4.52836 4.63159 4.45197C4.69301 4.38067 4.71191 4.32465 4.74971 4.24316C4.7875 4.15658 4.7686 4.08528 4.74026 4.02416C4.71191 3.96814 4.47567 3.33662 4.37645 3.08706C4.28195 2.8426 4.18745 2.87316 4.11186 2.86807C4.04571 2.86807 3.97011 2.86297 3.88979 2.86297Z"
                            fill="white"
                          ></path>
                        </svg>
                        WhatsApp
                      </button>
                    </a>
                  </div>
                  <form action="#" className="mt-4 staffform">
                    <div className="form-group mb-3">
                      <input
                        id="name"
                        placeholder="Name"
                        className="form-control"
                        type="text"
                        defaultValue=""
                        name="name"
                      />
                    </div>
                    <div className="form-group mb-3">
                      <input
                        id="phone"
                        placeholder="Phone"
                        className="form-control"
                        type="number"
                        defaultValue=""
                        name="phone"
                      />
                    </div>
                    <div className="form-group mb-3">
                      <input
                        id="email"
                        placeholder="Email"
                        className="form-control"
                        type="text"
                        defaultValue=""
                        name="email"
                      />
                    </div>
                    <div className="form-check ps-4">
                      <input
                        id="checkbox"
                        className="form-check-input"
                        type="checkbox"
                        defaultValue="false"
                        name="TermofUse"
                      />
                      <label className="form-check-label" htmlFor="checkbox">
                        By submitting this form I agree to <br />
                        <span>Term of Use</span>
                      </label>
                    </div>
                    <button type="submit" className="submit mb-3">
                      Send Message
                    </button>
                    <div className="th-divider th-drivier2">or</div>
                    <button className="virtualbtn">
                      Schedule a Virtual Tour
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="dudhat">
            <div className="content">
              <Image
                className="PlayBtn"
                src={playbutton}
                alt="playbutton"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              />
              <h2>3D VIRTUAL TOUR</h2>
            </div>
            <img
              className="tour-img"
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
              alt=""
            />
            <div
              className="modal fade virtualModal"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabIndex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                  <div className="modal-body">
                    <iframe
                      style={{ width: "770px", height: "450px" }}
                      // width="100%"
                      // height="100%"
                      // src="https://www.youtube.com/embed/gZF_Rif-MfU?si=YTYV_XBsS4fQ2_IP"
                      // src="https://data.sentiovr.com/spaces/544/space_1543330764/vtour/tour.html"
                      src="https://my.matterport.com/show/?m=CMatvVatCjc&play=1"
                      // frameBorder="0"
                      frameBorder="0"
                      allowFullScreen=""
                      allow="xr-spatial-tracking"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="pdetails-details">
              <div className="pdetails-left cstm-feature-padding">
                <div className="card">
                  <div className="details">
                    <div className="title pb-3">Features</div>
                    <div className="cstm-features">No Features</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pdetails-details">
              <div className="pdetails-left">
                <div className="Similar_Listings">Similar Listings</div>
                <div className="mb-0 rentproperty">
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
                                width: "300px",
                                zIndex: 2,
                                transform:
                                  "translate3d(calc(0px), calc(0px), calc(0px)) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1)",
                                opacity: 1,
                              }}
                            >
                              <div className="productslider h-100 position-relative">
                                <img
                                  src="https://storage.googleapis.com/download/storage/v1/b/thiyo-api.appspot.com/o/images%2F12fdb56f-7772-4e51-90eb-f529de4254a4_ELEVATED-HOUSE-DESIGN-FEATURE-compressed.jpg?generation=1698747370840662&amp;alt=media"
                                  alt="Image"
                                  className="w-100 h-100"
                                />
                              </div>
                            </div>
                            <div
                              className="swiper-slide swiper-slide-next"
                              style={{
                                width: "300px",
                                zIndex: 1,
                                transform:
                                  "translate3d(calc(5% - 300px), calc(0px), calc(-200px)) rotateX(0deg) rotateY(-100deg) rotateZ(0deg) scale(1)",
                                opacity: 1,
                                transformOrigin: "right center",
                              }}
                            >
                              <div className="productslider h-100 position-relative">
                                <img
                                  src="https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F08ef60e2-6a25-4f92-a4db-35ada4ffe8cb_photo-1600585154363-67eb9e2e2099.jfif?generation=1694428982939945&amp;alt=media"
                                  alt="Image"
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
                          <span>2</span>
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
                        <div className="hometype font-bold">AED 2600</div>
                      </div>
                    </div>
                    <div className="carddeatil-sm-right">
                      <div className="apartment">
                        <div className="d-flex align-items-start justify-content-between h-100">
                          <div className="d-flex align-items-start justify-content-start flex-column">
                            <div>
                              <span> Office</span>
                              <h4 className="cursor-pointer prod-title">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting indus...
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
                                Golden Villa , ahemdabad
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
                                  <span> 1000 Sqft</span>
                                </div>
                                <div className="bathdetailitems">
                                  {/* <img
                                    src="/_next/static/media/parking.86354047.png"
                                    alt=""
                                  /> */}
                                  <span>Parking</span>
                                </div>
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
                <div className="mb-0 rentproperty">
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
                                width: "300px",
                                zIndex: 2,
                                transform:
                                  "translate3d(calc(0px), calc(0px), calc(0px)) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1)",
                                opacity: 1,
                              }}
                            >
                              <div className="productslider h-100 position-relative">
                                <img
                                  src="https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F135661fc-902f-43da-8027-6eb6a49ea11b_photo-1600585154340-be6161a56a0c.jfif?generation=1694428980902644&amp;alt=media"
                                  alt="Image"
                                  className="w-100 h-100"
                                />
                              </div>
                            </div>
                            <div
                              className="swiper-slide swiper-slide-next"
                              style={{
                                width: "300px",
                                zIndex: 1,
                                transform:
                                  "translate3d(calc(5% - 300px), calc(0px), calc(-200px)) rotateX(0deg) rotateY(-100deg) rotateZ(0deg) scale(1)",
                                opacity: 1,
                                transformOrigin: "right center",
                              }}
                            >
                              <div className="productslider h-100 position-relative">
                                <img
                                  src="https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F08ef60e2-6a25-4f92-a4db-35ada4ffe8cb_photo-1600585154363-67eb9e2e2099.jfif?generation=1694428982939945&amp;alt=media"
                                  alt="Image"
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
                          <span>2</span>
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
                        <div className="hometype font-bold">AED 5000</div>
                      </div>
                    </div>
                    <div className="carddeatil-sm-right">
                      <div className="apartment">
                        <div className="d-flex align-items-start justify-content-between h-100">
                          <div className="d-flex align-items-start justify-content-start flex-column">
                            <div>
                              <span> apartment</span>
                              <h4 className="cursor-pointer prod-title">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting indus...
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
                                NodeVilla,dubai
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
                                  <span> 1000 Sqft</span>
                                </div>
                                <div className="bathdetailitems">
                                  {/* <img
                                    src="/_next/static/media/parking.86354047.png"
                                    alt=""
                                  /> */}
                                  <span>Parking</span>
                                </div>
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
                <div className="mb-0 rentproperty">
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
                                width: "300px",
                                zIndex: 2,
                                transform:
                                  "translate3d(calc(0px), calc(0px), calc(0px)) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1)",
                                opacity: 1,
                              }}
                            >
                              <div className="productslider h-100 position-relative">
                                <img
                                  src="https://storage.googleapis.com/download/storage/v1/b/thiyo-api.appspot.com/o/images%2F12fdb56f-7772-4e51-90eb-f529de4254a4_ELEVATED-HOUSE-DESIGN-FEATURE-compressed.jpg?generation=1698747370840662&amp;alt=media"
                                  alt="Image"
                                  className="w-100 h-100"
                                />
                              </div>
                            </div>
                            <div
                              className="swiper-slide swiper-slide-next"
                              style={{
                                width: "300px",
                                zIndex: 1,
                                transform:
                                  "translate3d(calc(5% - 300px), 0px, -200px) rotateX(0deg) rotateY(-100deg) rotateZ(0deg) scale(1)",
                                opacity: 1,
                                transformOrigin: "right center",
                              }}
                            >
                              <div className="productslider h-100 position-relative">
                                <img
                                  src="https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F08ef60e2-6a25-4f92-a4db-35ada4ffe8cb_photo-1600585154363-67eb9e2e2099.jfif?generation=1694428982939945&amp;alt=media"
                                  alt="Image"
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
                          <span>2</span>
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
                        <div className="hometype font-bold">AED 6000</div>
                      </div>
                    </div>
                    <div className="carddeatil-sm-right">
                      <div className="apartment">
                        <div className="d-flex align-items-start justify-content-between h-100">
                          <div className="d-flex align-items-start justify-content-start flex-column">
                            <div>
                              <span> apartment</span>
                              <h4 className="cursor-pointer prod-title">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting indus...
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
                                z-villa, vadodra
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
                                  <span> 1000 Sqft</span>
                                </div>
                                <div className="bathdetailitems">
                                  {/* <img
                                    src="/_next/static/media/parking.86354047.png"
                                    alt=""
                                  /> */}
                                  <span>Parking</span>
                                </div>
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Villa;
