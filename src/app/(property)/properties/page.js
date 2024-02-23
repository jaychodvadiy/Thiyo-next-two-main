import React from "react";
import Slider_Page from "../compoents/Properties/page";
import Verified from "../compoents/VerifiedProperties/verified";

function Page() {
  return (
    <div>
      <section className="filterproperty ">
        <div className="container">
          <div className="forrent">
            <div className="row">
              <div className="col-sm-12">
                <div>
                  <h5 className="forrent">Properties for rent in UAE</h5>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb mb-0 align-items-center">
                      <li className="breadcrumb-item active">
                        <a className="searchaa" href="/">
                          Home
                        </a>
                      </li>
                      <svg
                        width="6"
                        height="10"
                        viewBox="0 0 6 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.330078 7.97604L3.73971 4.56641L0.330078 1.15678L1.38491 0.109375L5.84194 4.56641L1.38491 9.02344L0.330078 7.97604Z"
                          fill="#69717E"
                        ></path>
                      </svg>
                      <li className="breadcrumb-item" aria-current="page">
                        <a> Properties for rent in your location</a>
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Slider_Page />
      <Verified />
    </div>
  );
}

export default Page;
