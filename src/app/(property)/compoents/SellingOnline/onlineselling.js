import Image from 'next/image'
import React from 'react'

import line from "../../../../assets/images/line.ca65a041.png";
function OnlineSelling() {
  return (
    <div>
      <section className="online-property">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center p-online">
              <h2>Benefits of Selling Your property Online</h2>
              <Image src={line} alt="line" className="img-fluid" />
              <p>
                Are you looking to sell your property hassle-free? Look no
                further! Thiyo is here to make your selling experience a breeze.
                Our innovative real estate listing portal is designed to connect
                you with potential buyers and help you secure the best deal for
                your property. Say goodbye to traditional methods and embrace
                the power of online selling with Thiyo.
              </p>
            </div>
          </div>
          <div className="online-step-main">
            <div className="online-step">
              <div className="online-no">
                <p>1</p>
              </div>
              <div className="online-para">
                <h6>Maximum Visibility</h6>
                <p>
                  When you list your property on Thiyo, you instantly gain
                  access to a vast audience of motivated buyers actively
                  searching for their dream property. Our platform ensures
                  maximum visibility for your listing, increasing your chances
                  of attracting potential buyers quickly.
                </p>
              </div>
            </div>
            <div className="online-step">
              <div className="online-no">
                <p>2</p>
              </div>
              <div className="online-para">
                <h6>Time Efficiency </h6>
                <p>
                  Save precious time while selling your property on Thiyo.
                  Benefit from convenient booking management, allowing you to
                  handle appointments on your schedule, and receive high-quality
                  leads promptly, streamlining your selling process.
                </p>
              </div>
            </div>
            <div className="online-step">
              <div className="online-no">
                <p>3</p>
              </div>
              <div className="online-para">
                <h6>Seamless Listing Process</h6>
                <p>
                  Selling your property online has never been easier. With
                  Thiyo, you can effortlessly create a detailed listing by
                  adding property information, uploading high-quality photos,
                  and even including videos to showcase the unique features of
                  your property. Our user-friendly interface makes the listing
                  process a breeze, saving you time and effort.
                </p>
              </div>
            </div>
            <div className="online-step">
              <div className="online-no">
                <p>4</p>
              </div>
              <div className="online-para">
                <h6>Target Marketing</h6>
                <p>
                  We understand the importance of reaching the right audience.
                  Thiyo utilizes advanced marketing techniques to target
                  potential buyers who are specifically interested in properties
                  like yours. Our intelligent algorithms match your listing with
                  qualified leads, ensuring your property gets noticed by the
                  right people.
                </p>
              </div>
            </div>
            <div className="online-step">
              <div className="online-no">
                <p>5</p>
              </div>
              <div className="online-para">
                <h6>Expert Assistance</h6>
                <p>
                  Our team of real estate experts is always ready to lend a
                  helping hand. Whether you have questions about the listing
                  process or need advice on pricing your property competitively,
                  our dedicated support team is here to guide you every step of
                  the way. We are committed to ensuring your selling journey is
                  smooth and successful.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OnlineSelling
