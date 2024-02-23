import Image from 'next/image'
import React from 'react'
import ownership from "../../../../assets/images/ownership-detail.7179365a.png";
import detail from "../../../../assets/images/detail-properties.132a6f42.png";
import line from "../../../../assets/images/line.ca65a041.png";
import upload from "../../../../assets/images/upload-audio-video.cede5b83.png";
function PageProperty () {
  return (
    <div>
       <section className="property-step">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center property-step-header">
              <p>HOW TO LIST YOUR PROPERTY</p>
              <h2>List your Property in 3 simple steps</h2>
              <Image src={line} alt="line" className="img-fluid" />
            </div>
            <div className="col-12 col-md-4 col-lg-4 listing-step-main">
              <Image src={detail} alt="detail" className="img-fluid mt-4 mt-md-0" />
              <div className="p-para">
                <div className="d-flex align-items-center gap-2 pb-3">
                  <h6 className="p-no">01.</h6>
                  <p className="p-header">Enter details of your Property</p>
                </div>
                <p className="">
                  To get started, provide essential information about your
                  property, including its name, type, location, configuration,
                  area, amenities, and any other relevant details.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-4 listing-step-main">
              <Image src={upload} alt="upload" className="img-fluid mt-4 mt-md-0" />
              <div className="p-para">
                <div className="d-flex align-items-center gap-2 pb-3">
                  <h6 className="p-no">02.</h6>
                  <p className="p-header">Upload Photos &amp; Videos</p>
                </div>
                <p className="">
                  You can conveniently upload photos and videos of your property
                  either from your laptop, computer or directly from your
                  mobile.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-4 listing-step-main">
              <Image src={ownership} alt="img" className="img-fluid mt-4 mt-md-0" />
              <div className="p-para">
                <div className="d-flex align-items-center gap-2 pb-3">
                  <h6 className="p-no">03.</h6>
                  <p className="p-header">Pricing &amp; Ownership Details</p>
                </div>
                <p className="p-para">
                  Mention the ownership details of your property, set your
                  expected price, and get ready to list your property.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PageProperty 
