import Image from "next/image";
import React from "react";
import Asset28 from "../../assets/images/Asset 2 8.png";
import Asset from "../../assets/images/Asset 3.png";
import Asset3 from "../../assets/images/Asset 5 3.png";
function Customecard() {
  return (
    <div>
      <section className="buy-rent-sell-mmain">
        <div className="container">
          <div className="row ">
            <div className="col-lg-12">
              <div className="baynoe">
                <p>BUY . RENT . SELL</p>
                <h2 className="help">
                  We help people buy, rent and sell homes
                </h2>
                <p className="makereal">
                  We're here to make real estate easy. Whether you're buying,
                  renting, or selling, our dedicated team is ready to assist you
                  every step of the way. With our expertise and network, we
                  ensure a <br />
                  seamless experience.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4">
              <div className="servier">
                <Image
                  src={Asset28}
                  alt="Asset28"
                  className="imgfluid img-fluid"
                />
              </div>
              <h3 className="mb-1 mb-md-3 text-center">Qualified Agents</h3>
              <p className="pb-0 sellhomedescription">
                When it comes to finding your drem property or selling your
                home, trust in our team of highly qualified agents. Our experts
                bring years of industry experience and deep knowledge of the
                local real estate market to the table.
              </p>
            </div>
            <div className="col-lg-4">
              <div className="servier">
                <Image className="imgfluid" src={Asset} alt="Asset" />
              </div>
              <h3 className="mb-1 mb-md-3 text-center">Excellent service</h3>
              <p className="pb-0 sellhomedescription">
                We take pride in delivering unparalleled service to our clients.
                Our commitment to excellence means you can expert a seamless and
                stress free real estate experience.
              </p>
            </div>
            <div className="col-lg-4">
              <div className="servier">
                <Image className="imgfluid" src={Asset3} alt="Asset3" />
              </div>
              <h3 className="mb-1 mb-md-3 text-center">Customer Care</h3>
              <p className="pb-0 sellhomedescription">
                Your satisfaction is our top priority. We understand that real
                estate transactions can be complex, so we're here to provide you
                with the highest level of customer care.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Customecard;
