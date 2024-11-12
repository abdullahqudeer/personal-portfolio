import React from "react";

const Contact = () => {
  return (
    <>
      <div className="py-[120px] w-full mx-auto px-4 sm:max-w-[540px] md:max-w-[720px] lg:max-w[960] xl:max-w-[1140px] 2xl:max-w-[1320px]">
        <div className="flex flex-wrap -mx-[16px]">
          <div className="px-4 w-full">
            <div className="text-center max-w-[700px] mb-[50px] mx-auto">
              <span className="text-[rgb(74,108,247)] font-semibold text-[1.125rem] leading-7 block mb-2">
                Contact With Me
              </span>
              <h2 className="md:text-[45px] sm:text-[2.25rem] sm:leading-[2.5rem] text-rgb(9,14,52)] font-bold text-[1.875rem] leading-[2.25rem] mb-5">
                Have an Project in Mind?
              </h2>
              <p className="text-[rgb(149,156,177)] font-medium leading-7 text-[1.125rem]">
                Got a project in mind? I build end-to-end software solutions,
                from backend to frontend, with scalable cloud support. Let's
                make your vision a reality through solid engineering.
              </p>
            </div>
          </div>
        </div>
        <div className="justify-center flex -mx-4">
          <div className="lg:w-[75%] px-4  w-full">
            <form>
              <div className="flex flex-wrap -mx-4">
                <div className="md:w-[50%] px-4 w-full">
                  <div className="mb-6">
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="input-field"
                    ></input>
                  </div>
                </div>
                <div className="md:w-[50%] px-4 w-full">
                  <div className="mb-6">
                    <input
                      type="text"
                      placeholder="Company (Optional)"
                      className="input-field"
                    ></input>
                  </div>
                </div>
                <div className="md:w-[50%] px-4 w-full">
                  <div className="mb-6">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="input-field"
                    ></input>
                  </div>
                </div>
                <div className="md:w-[50%] px-4 w-full">
                  <div className="mb-6">
                    <input
                      type="text"
                      placeholder="Phone number"
                      className="input-field"
                    ></input>
                  </div>
                </div>
                <div className="w-full px-4">
                  <div className="mb-6">
                    <textarea
                      rows="4"
                      placeholder="Tell me about your project"
                      className="input-field resize-none"
                    ></textarea>
                  </div>
                </div>
                <div className="px-4 w-full df">
                  <div className="text-center pt-4">
                    <button className="inline-flex justify-center items-center bg-blue-600 rounded-full px-9 py-4 font-semibold text-white transition-all duration-150 ease-in-out">
                      Contact Me
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
