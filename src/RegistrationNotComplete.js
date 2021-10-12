import React from "react";
import { Link } from "react-router-dom";
//for a bad route
export default function RegistrationNotComplete() {
  return (
  <>
  
  <div className='container-fluid scorebox3 col-8'>
  <div className='row d-flex justify-content-center'>
  <div className='col-8 d-flex justify-content-center flex-wrap'>
  <h2 className='text-center'>Team Registration Is Not Complete</h2>
  <h4 className='text-center'>Please complete the Team Name, Start Time and Start Day fields</h4>  </div></div>
  <div className="row d-flex justify-content-center">
            <div className="d-flex  px-0 ">
              <Link
                to="/reg"
                className=" d-flex justify-content-center"
              >
                <button
                  type="button"
                  className="btn btn-primary col btn-lg my-4"
                >
                  Team Registration
                </button>
              </Link>
            </div>
          </div>

  
  </div>
  </>
  )


}
