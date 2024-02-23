import Link from "next/link";
import React from "react";
import PageProperty from "../compoents/startedform/page";
import OnlineSelling from "../compoents/SellingOnline/onlineselling";
import QuestionsAsked from "../compoents/questionsasked/questionsasked";
import ClientsSaying from "../compoents/clientssaying/clientssaying";

function Page() {
  return (
    <div>
      <section className="listproperty-banner">
        <div className="container">
          <div className="getstarted-container">
            <div className="getstarted-main">
              <h2>Let’s get you started</h2>
              <p>I am ...</p>
              <div className="row">
                <div className="col-4 col-lg-4 list-button">
                  <button className="active">Owner</button>
                </div>
                <div className="col-4 col-lg-4 p-0 list-button">
                  <button className="">Agent</button>
                </div>
                <div className="col-4 col-lg-4 list-button">
                  <button className="">Developer</button>
                </div>
              </div>
            </div>
            <div className="getstarted-main">
              <p>I am looking to ...</p>
              <ul className="nav nav-pills row" id="pills-tab" role="tablist">
                <li
                  className="nav-item list-button col-4 col-lg-4"
                  role="presentation"
                >
                  <button
                    className="nav-link active"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    Sell
                  </button>
                </li>
                <li
                  className="nav-item list-button col-4 col-lg-4 p-0"
                  role="presentation"
                >
                  <button
                    className="nav-link"
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="true"
                  >
                    Rent / Lease
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                  tabIndex="0"
                >
                  <div className="getstarted-main">
                    <p>My Property is...</p>
                    <div className="nav-align-top tabcountry cstm-tab-main-feature-home">
                      <ul className="nav nav-pills nav-fill" role="tablist">
                        <li className="nav-item" role="presentation">
                          <button
                            type="button"
                            className="nav-link active"
                            role="tab"
                            data-bs-toggle="tab"
                            data-bs-target="#residential"
                            aria-controls="residential"
                            aria-selected="true"
                          >
                            Residential
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            type="button"
                            className="nav-link"
                            role="tab"
                            data-bs-toggle="tab"
                            data-bs-target="#Commercial"
                            aria-controls="Commercial"
                            aria-selected="false"
                            tabIndex="-1"
                          >
                            Commercial
                          </button>
                        </li>
                      </ul>
                      <div className="tab-content cstm-tab-content-feature-home">
                        <div
                          className="tab-pane fade show active"
                          id="residential"
                          role="tabpanel"
                        >
                          <div className="getstart-tabbutton">
                            <button className="active">Apartment</button>
                            <button className="active">Rent / Lease</button>
                            <button className="active">Townhouse</button>
                            <button className="active">Hotel Apartment</button>
                            <button className="active">Penthouse</button>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="Commercial"
                          role="tabpanel"
                        >
                          <div className="getstart-tabbutton">
                            <button className="active">Apartment</button>
                            <button className="active">Rent / Lease</button>
                            <button className="active">Townhouse</button>
                            <button className="active">Penthouse</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                  tabIndex="0"
                >
                  <div className="getstarted-main">
                    <p>Rent Frequency</p>
                    <div className="nav-align-top tabcountry cstm-tab-main-feature-home">
                      <div className="getstart-tabbutton">
                        <button className="active">Yearly</button>
                        <button className="">Monthly</button>
                        <button className="">Weekly</button>
                        <button className="">Daily</button>
                        <button className="">Any</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="getstarted-main">
                <input placeholder="Enter your Email ID" type="text" />
                <span>Will send you an OTP on your Email ID</span>
              </div>
            </div>
            <div className="getstarted-startnow-main">
              <div className="col-12 text-center ">
                <Link href="/otpverify">
                  <button className="startno">Start Now</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PageProperty />
      <OnlineSelling />
      <QuestionsAsked />
      <ClientsSaying/>
    </div>
  );
}

export default Page;
