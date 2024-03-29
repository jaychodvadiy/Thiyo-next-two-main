import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Deepik from '../../assets/images/deepik.png'
function BecomeReal() {
  return (
    <div>
      <section className="becomes">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="becomereal">
                <h1 className='mb-3'>Become a Real Estate Agent</h1>
                <p className="pb-lg-4 pb-2" style={{color:"gray"}}>
                  Accelerate your listings to new heights and unleash the
                  potential of captivating leads andvalued clients.
                </p>
                <Link href="/register">
                  <button
                    className="btn btncolornow btn-outline-secondary rounded-xl "
                    type="submit"
                  >
                    REGISTER NOW
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-sm-6">
              <Image className="imagedeepki" src={Deepik} alt="Deepik" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BecomeReal
