import React from "react";
import Villa from "../page";

function Page() {
  return (
    <div>
      <section className="detiles filterproperty mb-0">
        <div className="container">
          <div className="row">
            <div className="forrent">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0 align-items-center">
                  <li className="breadcrumb-item active">
                    <a href="/">Home</a>
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
                    <a>Property Details</a>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <Villa />
    </div>
  );
}

export default Page;
