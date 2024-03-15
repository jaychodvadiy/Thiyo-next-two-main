import Image from "next/image";
import React from "react";
import airport from "../../assets/images/airport.abbe0c1a.png"
import vector from "../../assets/images/vector-94.svg"
import apartment from "../../assets/images/apartment.e4223b32.png"
import penthouse from "../../assets/images/penthouse.c764f65d.png"
import office from "../../assets/images/office.6c982fe1.png"
import hotel from "../../assets/images/hotel.43844a6a.png"
import shop from "../../assets/images/shop.b3cf7676.png"
import hotelapartment from "../../assets/images/hotelapartment.ab759b89.png"
import office6c982fe1 from "../../assets/images/office.6c982fe1.png"
import township from "../../assets/images/villa.665fd0ad.png"
import townshipfb52778a from "../../assets/images/township.fb52778a.png"
function Residentalcard() {
  return (
    <div>
      <section>
        <div className="container">
          <div className="main-gallery ">
            <div className="">
              <div className="imageitemHoele">
                <div className=" d-flex justify-content-between flex-column ">
                  <h5>Residental</h5>
                  <p  style={{color:"gray"}}>
                    Buy or sell your home with our agents. House prices,
                    inspections, negotiations and other services are included in
                    the house price.
                  </p>
                  <div className="line">
                    <Image src={vector} alt="vector" />
                  </div>
                </div>
                <div className="col-sm-4 img-gallery ">
                  <Image className="airports" src={airport} alt="airport" />
                  <p>Apartment</p>
                </div>
                <div className="col-sm-4 img-gallery ">
                  <Image className="airports" src={apartment} alt="apartment" />
                  <p>Villa</p>
                </div>
                <div className="col-sm-4 img-gallery ">
                  <Image className="airports" src={penthouse} alt="airport" />
                  <p>undefined</p>
                </div>
                <div className="col-sm-4 img-gallery ">
                  <Image className="airports" src={office} alt="airport" />
                  <p>Penthouse</p>
                </div>
                <div className="col-sm-4 img-gallery ">
                  <Image className="airports" src={hotel} alt="airport" />
                  <p>Hotel Apartment</p>
                </div>
                <div className="col-sm-4 img-gallery ">
                  <Image className="airports" src={shop} alt="airport" />
                  <p>Office </p>
                </div>
                <div className="col-sm-4 img-gallery ">
                  <Image
                    className="airports"
                    src={hotelapartment}
                    alt="airport"
                  />
                  <p>Shop</p>
                </div>
                <div className="col-sm-4 img-gallery ">
                  <Image
                    className="airports"
                    src={office6c982fe1}
                    alt="airport"
                  />
                  <p>Warehouse</p>
                </div>
                <div className="col-sm-4 img-gallery ">
                  <Image className="airports" src={township} alt="airport" />
                  <p>Hotel</p>
                </div>
                <div className="col-sm-4 img-gallery ">
                  <Image
                    className="airports"
                    src={townshipfb52778a}
                    alt="airport"
                  />
                  <p>Mixed Use Land</p>
                </div>
                <div className="text-end img-gallery-info d-flex justify-content-between flex-column">
                  <h5>Commercial</h5>
                  <p  style={{color:"gray"}}>
                    Buy or sell your home with our agents. House prices,
                    inspections, negotiations and other services are included in
                    the house price.
                  </p>
                  <div className="line">
                    <Image src={vector} alt="vector" />
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

export default Residentalcard;
