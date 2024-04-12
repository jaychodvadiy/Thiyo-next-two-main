import Image from "next/image";
import React from "react";
import line from "../../../../assets/images/line.ca65a041.png";
function QuestionsAsked() {
  return (
    <div>
      <section className="freq-que">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center freq-que-main">
              <h2>Frequently Asked Questions</h2>
              <Image src={line} alt="line" className="img-fluid" />
            </div>
            <div className="showdata notshowdata">
              <div className="col-12">
                <div className="freq-quepara">
                  <h6>How to post a property ad on Magicbricks?</h6>
                  <p>
                    To post a property advertisement online, visit the
                    Magicbricks website or the app and follow the below listed
                    quick steps.
                  </p>
                  <ul>
                    <li>
                      Step 1: Look for Post Property for Free on the top
                      right-hand corner and select.
                    </li>
                    <li>
                      Step 2: Fill in details such as property type, accurate
                      location, price, photos, property features, and more
                      details about your property.
                    </li>
                    <li>
                      Step 3: Focus on maximizing the 'Completion Score' by
                      filling in the maximum details available.
                    </li>
                    <li>
                      Step 4: After adding maximum details, you can "Post one
                      Property Ad for FREE".
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12">
                <div className="freq-quepara">
                  <h6>Can I rent or sell property online for free?</h6>
                  <p>
                    Yes, you can easily rent, to let or sell your property
                    online for free. It is the most simplified way to sell your
                    home &amp; experience excellence through Magicbricks. It
                    takes less than 10 mins to post your property advertisement
                    on Magicbricks for FREE! After posting your property ad, you
                    allow lakhs of potential buyers to view your property ad on
                    Magicbricks. In this way, you can meet potential buyers and
                    sell your property faster. You can easily post your property
                    ads for rent or sale through the following steps:
                  </p>
                  <ul>
                    <li>Step 1: Register or Login on Magicbricks.</li>
                    <li>
                      Step 2: Fill in all essential details such as property
                      type, accurate location, price, photos, and property
                      features to maximize your Property Completion Score. It
                      will help your property rank higher in search results.
                    </li>
                    <li>
                      Step 3: Post your property for free and connect with
                      buyers/tenants
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12  d-flex gap-2  justify-content-end">
              <button className="showmore">
                <div className="d-flex gap-2 align-items-center justify-content-end">
                  Show More
                  <svg
                    width="10"
                    height="7"
                    viewBox="0 0 10 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.40678 0.847656L4.81641 4.25729L8.22604 0.847656L9.27344 1.90249L4.81641 6.35952L0.359375 1.90249L1.40678 0.847656Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default QuestionsAsked;
