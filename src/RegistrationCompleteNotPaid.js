import React from "react";
import { Link } from "react-router-dom";

export default function RegistrationCompleteNotPaid() {
  return (
  <>
  
  <div className='container-fluid scorebox3 col-8'>
  <div className='row d-flex justify-content-center'>
  <div className='col-8 d-flex justify-content-center flex-wrap'>
  <h2 className='text-center'>Team Registration Complete</h2>
  </div>
  </div>
  <div className='row d-flex justify-content-center'>
  <h4 className='text-center'>See you online!</h4>  
  </div>
  <div className="row d-flex justify-content-center">
            <div className="d-flex  px-0 ">
              <Link
                to="/"
                className=" d-flex justify-content-center"
              >
                <button
                  type="button"
                  className="btn btn-primary col btn-lg my-4"
                >
                  Go To Home Page
                </button>
              </Link>
            </div>
          </div>

  
  </div>
  </>
  )
 

}
