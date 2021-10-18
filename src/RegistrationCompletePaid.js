import React from "react";


export default function RegistrationCompletePaid() {
  return (
  <>
  
  <div className='container-fluid scorebox3 col-8'>
  <div className='row d-flex justify-content-center'>
  <div className='col-8 d-flex justify-content-center flex-wrap'>
  <h2 className='text-center'>Team Registration Is Complete</h2>
  <h4 className='text-center'>Please click the link below to pay the entree fee</h4>  </div></div>
  <div className="row d-flex justify-content-center">
            <div className="d-flex  px-0 ">
              <a
                href="https://cash.app/$AustinJett/40"
                className=" d-flex justify-content-center"
              >
                <button
                  type="button"
                  className="btn btn-primary col btn-lg my-4"
                >
                  Pay Entry
                </button>
              </a>
            </div>
          </div>

  
  </div>
  </>
  )
 

}
