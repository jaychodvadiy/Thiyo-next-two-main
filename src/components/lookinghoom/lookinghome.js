import Image from "next/image";
import Link from "next/link";
import React from "react";
import highangle from '../../assets/images/high-angle-pie-chart-with-cities 1.png'

function Lookinghome() {
  return (
    <div>
      <section className="cta sellhome bg-transparent">
        <div className="container">
          <div className="property">
            <div className="row">
              <div className="col-sm-6 cta-info ctn">
                <h3 className="">Looking to sell your home?</h3>
                <h6 className="">
                  Unlock a hassle-free selling experience and unleash the real
                  potential of your cherished property.
                </h6>
                <Link href="/propertys">
                  <button className="d-none d-md-flex align-items-center justify-content-center thiyo-btn">
                    LIST YOUR PROPERTY
                  </button>
                </Link>
                <button className="d-flex align-items-center justify-content-center d-md-none thiyo-btn">
                  CONTACT US
                </button>
              </div>
              <div className="col-lg-6">
                <Image
                 src={highangle} alt="highangle" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Lookinghome;
