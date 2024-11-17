import { React, useState } from "react";
import axiosInstance from "./../axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    aboutProject: "",
  });

  const [error, setError] = useState(""); // To store error message
  const [successMessage, setSuccessMessage] = useState(""); // To store success message
  const [loading, setLoading] = useState(false);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Client-side form validation
  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.aboutProject) {
      return "Name, email, and project details are required.";
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      return "Invalid email address.";
    }
    return "";
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }
    setError(""); // Clear error if validation passes
    setLoading(true);
    try {
      // Send form data to the server
      const response = await axiosInstance.post("/api/contact-me", formData);
      setLoading(false);
      // If successful, set success message
      if (response.status === 200) {
        setSuccessMessage(
          "Your message has been sent successfully! We'll get back to you shortly."
        );
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          aboutProject: "",
        });
      }
    } catch (error) {
      // Handle server-side errors
      setError(
        "There was an error sending your message. Please try again later."
      );
    }
  };

  return (
    <>
      <div className="py-[120px] w-full mx-auto px-4 sm:max-w-[540px] md:max-w-[720px] lg:max-w[960px] xl:max-w-[1140px] 2xl:max-w-[1320px]">
        <div className="flex flex-wrap -mx-[16px]">
          <div className="px-4 w-full">
            <div className="text-center max-w-[700px] mb-[50px] mx-auto">
              <span className="text-[rgb(74,108,247)] font-semibold text-[1.125rem] leading-7 block mb-2">
                Contact With Me
              </span>
              <h2 className="md:text-[45px] sm:text-[2.25rem] sm:leading-[2.5rem] text-rgb(9,14,52)] font-bold text-[1.875rem] leading-[2.25rem] mb-5">
                Have a Project in Mind?
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
          <div className="lg:w-[75%] px-4 w-full">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-wrap -mx-4">
                <div className="md:w-[50%] px-4 w-full">
                  <div className="mb-6">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="input-field"
                    />
                  </div>
                </div>
                <div className="md:w-[50%] px-4 w-full">
                  <div className="mb-6">
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company (Optional)"
                      className="input-field"
                    />
                  </div>
                </div>
                <div className="md:w-[50%] px-4 w-full">
                  <div className="mb-6">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="input-field"
                    />
                  </div>
                </div>
                <div className="md:w-[50%] px-4 w-full">
                  <div className="mb-6">
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone number"
                      className="input-field"
                    />
                  </div>
                </div>
                <div className="w-full px-4">
                  <div className="mb-6">
                    <textarea
                      name="aboutProject"
                      value={formData.aboutProject}
                      onChange={handleChange}
                      rows="4"
                      placeholder="Tell me about your project"
                      className="input-field resize-none"
                    ></textarea>
                  </div>
                </div>
                <div className="px-4 w-full df">
                  <div className="text-center pt-4">
                    <button
                      type="submit"
                      className="inline-flex justify-center items-center bg-blue-600 rounded-full px-9 py-4 font-semibold text-white transition-all duration-150 ease-in-out"
                      disabled={loading}
                    >
                      {loading ? (
                        <div className="spinner-border text-white w-6 h-6 border-t-4 border-gray-300 border-solid rounded-full animate-spin"></div>
                      ) : (
                        "Contact Me"
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </form>
            {error && (
              <div className="text-red-500 text-center mt-4">{error}</div>
            )}
            {successMessage && (
              <div className="text-green-500 text-center mt-4">
                {successMessage}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
    // <>
    //   <div className="py-[120px] w-full mx-auto px-4 sm:max-w-[540px] md:max-w-[720px] lg:max-w[960] xl:max-w-[1140px] 2xl:max-w-[1320px]">
    //     <div className="flex flex-wrap -mx-[16px]">
    //       <div className="px-4 w-full">
    //         <div className="text-center max-w-[700px] mb-[50px] mx-auto">
    //           <span className="text-[rgb(74,108,247)] font-semibold text-[1.125rem] leading-7 block mb-2">
    //             Contact With Me
    //           </span>
    //           <h2 className="md:text-[45px] sm:text-[2.25rem] sm:leading-[2.5rem] text-rgb(9,14,52)] font-bold text-[1.875rem] leading-[2.25rem] mb-5">
    //             Have an Project in Mind?
    //           </h2>
    //           <p className="text-[rgb(149,156,177)] font-medium leading-7 text-[1.125rem]">
    //             Got a project in mind? I build end-to-end software solutions,
    //             from backend to frontend, with scalable cloud support. Let's
    //             make your vision a reality through solid engineering.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="justify-center flex -mx-4">
    //       <div className="lg:w-[75%] px-4  w-full">
    //         <form>
    //           <div className="flex flex-wrap -mx-4">
    //             <div className="md:w-[50%] px-4 w-full">
    //               <div className="mb-6">
    //                 <input
    //                   type="text"
    //                   placeholder="Enter your name"
    //                   className="input-field"
    //                 ></input>
    //               </div>
    //             </div>
    //             <div className="md:w-[50%] px-4 w-full">
    //               <div className="mb-6">
    //                 <input
    //                   type="text"
    //                   placeholder="Company (Optional)"
    //                   className="input-field"
    //                 ></input>
    //               </div>
    //             </div>
    //             <div className="md:w-[50%] px-4 w-full">
    //               <div className="mb-6">
    //                 <input
    //                   type="email"
    //                   placeholder="Enter your email"
    //                   className="input-field"
    //                 ></input>
    //               </div>
    //             </div>
    //             <div className="md:w-[50%] px-4 w-full">
    //               <div className="mb-6">
    //                 <input
    //                   type="text"
    //                   placeholder="Phone number"
    //                   className="input-field"
    //                 ></input>
    //               </div>
    //             </div>
    //             <div className="w-full px-4">
    //               <div className="mb-6">
    //                 <textarea
    //                   rows="4"
    //                   placeholder="Tell me about your project"
    //                   className="input-field resize-none"
    //                 ></textarea>
    //               </div>
    //             </div>
    //             <div className="px-4 w-full df">
    //               <div className="text-center pt-4">
    //                 <button className="inline-flex justify-center items-center bg-blue-600 rounded-full px-9 py-4 font-semibold text-white transition-all duration-150 ease-in-out">
    //                   Contact Me
    //                 </button>
    //               </div>
    //             </div>
    //           </div>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
};

export default Contact;
