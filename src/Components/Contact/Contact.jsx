const Contact = () => {
  return (
    <>
      <section className=" py-10 bg-hero mt-[70px]" id="contact">
        <div className="2xl:container mx-auto h-[100%]">
          <div className="w-[90%] mx-auto grid grid-col-1 h-[100%] gap-6">
            <div className="flex flex-col justify-center items-center">
              <p className="font-[Roboto] font-extrabold text-[40px] leading-[60px] text-yellow-500">
                Contact
              </p>
              <p className="font-[Roboto] font-medium text-[20px] leading-[32px] text-black">
                Feel free to Contact us by submitting the form below and We will
                get back to you as soon as possible
              </p>
            </div>

            <div className="mx-auto grid md:grid-cols-1 gap-2 justify-center items-center">
              <div className="w-[100%] mx-auto grid grid-cols-1 justify-center items-center shadow-xl border border-black bg-white p-4 rounded-lg space-y-4">
                  <div className="space-y-1">
                    <p className="font-[Roboto] font-bold text-[14px] leading-[21px] text-[#666666]">
                      Name
                    </p>
                    <input
                      autoComplete="given-name"
                      className="block w-full rounded-md bg-[#F1F1F0] px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      type="text"
                    />
                  </div>

                  <div className="space-y-1">
                    <p className="font-[Roboto] font-bold text-[14px] leading-[21px] text-[#666666]">
                      Email
                    </p>
                    <input
                      autoComplete="email"
                      className="block w-full rounded-md bg-[#F1F1F0] px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      name="email"
                      type="email"
                    />
                  </div>

                  <div className="space-y-1">
                    <p className="font-[Roboto] font-bold text-[14px] leading-[21px] text-[#666666]">
                      Message
                    </p>
                    <textarea
                      className="block w-full rounded-md bg-[#F1F1F0] px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      rows="3"
                    ></textarea>
                  </div>

                  <div className="flex flex-row justify-end">
                    <button className="hover:translate-y-2 hover:transition hover:ease-in-out font-[Roboto] font-bold text-[16px] leading-[24px] bg-[#BDA000] text-white px-7 py-3 rounded-lg">
                      SUBMIT
                    </button>
                  </div>
                </div>

              <div>
                <p className="font-[Inter] font-bold text-[24px] text-center p-4 leading-[28px] text-[#183A57]">
                  To reach us
                </p>

                <div className="mx-auto grid md:grid-cols-1 lg:grid-cols-2 gap-10">
                  <a href="mailto: sriwijayatextech@gmail.com" target="_blank">
                    <div className="h-[160px] bg-gray-200 shadow-lg hover:border hover:border-yellow-500 rounded-3xl w-[190px] flex flex-col justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="1.5em"
                        height="1.5em"
                        className="w-14 h-14 bg-yellow-500 p-2 rounded-full "
                      >
                        <path
                          fill="currentColor"
                          d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z"
                        ></path>
                      </svg>
                    </div>
                  </a>
                  <a href="tel:1234567890" target="_blank">
                    <div className="h-[160px] bg-gray-200 shadow-lg rounded-3xl hover:border hover:border-yellow-500 w-[190px] flex flex-col justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="1.5em"
                        height="1.5em"
                        className="w-14 h-14 bg-yellow-500 p-2 rounded-full"
                      >
                        <path
                          fill="currentColor"
                          d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"
                        ></path>
                      </svg>
                    </div>
                  </a>
                </div>
                </div>

                <div className="p-2 mt-[40px]">
                  <p className="font-[Inter] font-bold text-center p-4 text-[20px] leading-[22px] text-[#183A57]">
                    Follow Us
                  </p>
                  <div className="mx-auto grid sd:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-16 ">
                    <a href="#" target="_blank">
                      <div className="h-[100px] bg-gray-200 shadow-lg hover:border hover:border-yellow-500 rounded-3xl w-[100px] flex flex-col justify-center items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 256 256"
                          width="1.5em"
                          height="1.5em"
                          className="w-14 h-14 p-2"
                        >
                          <g fill="none">
                            <rect
                              width="256"
                              height="256"
                              fill="url(#skillIconsInstagram0)"
                              rx="60"
                            ></rect>
                            <rect
                              width="256"
                              height="256"
                              fill="url(#skillIconsInstagram1)"
                              rx="60"
                            ></rect>
                            <path
                              fill="#fff"
                              d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396s-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413s.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5s6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355s22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334s-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334"
                            ></path>
                            <defs>
                              <radialGradient
                                id="skillIconsInstagram0"
                                cx="0"
                                cy="0"
                                r="1"
                                gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#FD5"></stop>
                                <stop offset=".1" stopColor="#FD5"></stop>
                                <stop offset=".5" stopColor="#FF543E"></stop>
                                <stop offset="1" stopColor="#C837AB"></stop>
                              </radialGradient>
                              <radialGradient
                                id="skillIconsInstagram1"
                                cx="0"
                                cy="0"
                                r="1"
                                gradientTransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#3771C8"></stop>
                                <stop offset=".128" stopColor="#3771C8"></stop>
                                <stop
                                  offset="1"
                                  stopColor="#60F"
                                  stopOpacity="0"
                                ></stop>
                              </radialGradient>
                            </defs>
                          </g>
                        </svg>
                      </div>
                    </a>

                    <a href="#">
                      <div className="h-[100px] bg-gray-200 shadow-lg hover:border hover:border-yellow-500 rounded-3xl w-[100px] flex flex-col justify-center items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 256 256"
                          width="1.5em"
                          height="1.5em"
                          className="w-14 h-14  p-2 "
                        >
                          <path
                            fill="#1877F2"
                            d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"
                          ></path>
                          <path
                            fill="#FFF"
                            d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z"
                          ></path>
                        </svg>
                      </div>
                    </a>

                    <a href="#">
                      <div className="h-[100px] bg-gray-200 shadow-lg hover:border hover:border-yellow-500 rounded-3xl w-[100px] flex flex-col justify-center items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 256 256"
                          width="1.5em"
                          height="1.5em"
                          className="w-14 h-14  p-2 "
                        >
                          <path
                            fill="#0A66C2"
                            d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4c-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.91 39.91 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186zM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009s9.851-22.014 22.008-22.016c12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97zM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"
                          ></path>
                        </svg>
                      </div>
                    </a>

                    <a href="#">
                      <div className="h-[100px] bg-gray-200 shadow-lg hover:border hover:border-yellow-500 rounded-3xl w-[100px] flex flex-col justify-center items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 256 256"
                          width="1.5em"
                          height="1.5em"
                          className="w-14 h-14  p-2 "
                        >
                          <g fill="none">
                            <rect
                              width="256"
                              height="256"
                              fill="#fff"
                              rx="60"
                            ></rect>
                            <rect
                              width="256"
                              height="256"
                              fill="#1D9BF0"
                              rx="60"
                            ></rect>
                            <path
                              fill="#fff"
                              d="M199.572 91.411c.11 1.587.11 3.174.11 4.776c0 48.797-37.148 105.075-105.075 105.075v-.03A104.54 104.54 0 0 1 38 184.677q4.379.525 8.79.533a74.15 74.15 0 0 0 45.865-15.839a36.98 36.98 0 0 1-34.501-25.645a36.8 36.8 0 0 0 16.672-.636c-17.228-3.481-29.623-18.618-29.623-36.198v-.468a36.7 36.7 0 0 0 16.76 4.622c-16.226-10.845-21.228-32.432-11.43-49.31a104.8 104.8 0 0 0 76.111 38.582a36.95 36.95 0 0 1 10.683-35.283c14.874-13.982 38.267-13.265 52.249 1.601a74.1 74.1 0 0 0 23.451-8.965a37.06 37.06 0 0 1-16.234 20.424A73.5 73.5 0 0 0 218 72.282a75 75 0 0 1-18.428 19.13"
                            ></path>
                          </g>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
    </>
  );
};

export default Contact;
