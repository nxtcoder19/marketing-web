export const ContactUsDetails = () => {
    return (
        <section className="py-10 bg-white sm:py-16 lg:py-24">
            <div className="flex flex-col justify-center items-center px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-black lg:text-5xl sm:text-5xl">Contact Us</h2>
                    <p className="mt-4 text-lg leading-relaxed text-gray-600">Amet minim mollit non deserunt ullam co est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>

                <section className=" bg-gray-50 py-12 mt-12 w-full sm:pt-16">
                    <div className="max-w-7xl sm:px-6 lg:px-8">
                        <div className="max-w-2xl mx-auto text-center">
                            <h1 className="px-6 text-lg text-gray-600 font-inter">Smart email campaign builder, made for Developers</h1>
                            <p className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight font-pj">
                                Turn your visitors into profitable
                                <span className="relative inline-flex sm:inline">
                                    <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
                                    <span className="relative"> business </span>
                                </span>
                            </p>

                            <div className="px-8 sm:items-center sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
                                <a
                                    href="#"
                                    title=""
                                    className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                    role="button"
                                >
                                    Get more customers
                                </a>

                                <a
                                    href="#"
                                    title=""
                                    className="inline-flex items-center justify-center w-full px-6 py-3 mt-4 text-lg font-bold text-gray-900 transition-all duration-200 border-2 border-gray-400 sm:w-auto sm:mt-0 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 focus:bg-gray-900 hover:text-white focus:text-white hover:border-gray-900 focus:border-gray-900"
                                    role="button"
                                >
                                    <svg className="w-5 h-5 mr-2" viewBox="0 0 18 18" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8.18003 13.4261C6.8586 14.3918 5 13.448 5 11.8113V5.43865C5 3.80198 6.8586 2.85821 8.18003 3.82387L12.5403 7.01022C13.6336 7.80916 13.6336 9.44084 12.5403 10.2398L8.18003 13.4261Z"
                                            strokeWidth="2"
                                            strokeMiterlimit="10"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    Watch free demo
                                </a>
                            </div>

                            <p className="mt-8 text-base text-gray-500 font-inter">60 Days free trial · No credit card required</p>

                            <form action="#" method="POST" className="w-full mx-auto mt-8 space-y-4 sm:space-x-4 sm:flex sm:space-y-0 sm:items-end">
                                <div className="flex flex-col w-full space-2 gap-4">

                                    <div className="flex flex-row gap-4">  {/* Added w-full and space-x-2 for spacing between fields */}
                                        <div className="flex-1">
                                            <span className="block mb-1 text-left font-bold">Full Name</span>
                                            <div>
                                                <input
                                                    type="text"
                                                    name="fullName"
                                                    className="block w-full px-4 py-3 sm:py-3.5 text-base font-medium text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg sm:text-sm focus:ring-gray-900 focus:border-gray-900"
                                                    placeholder="Full Name"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <span className="block mb-1 text-left font-bold">Email</span>
                                            <div>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    className="block w-full px-4 py-3 sm:py-3.5 text-base font-medium text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg sm:text-sm focus:ring-gray-900 focus:border-gray-900"
                                                    placeholder="Email address"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-row gap-4">  {/* Added w-full and space-x-2 for spacing between fields */}
                                        <div className="flex-1">
                                            <span className="block mb-1 text-left font-bold">Full Name</span>
                                            <div>
                                                <input
                                                    type="text"
                                                    name="fullName"
                                                    className="block w-full px-4 py-3 sm:py-3.5 text-base font-medium text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg sm:text-sm focus:ring-gray-900 focus:border-gray-900"
                                                    placeholder="Full Name"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <span className="block mb-1 text-left font-bold">Email</span>
                                            <div>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    className="block w-full px-4 py-3 sm:py-3.5 text-base font-medium text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg sm:text-sm focus:ring-gray-900 focus:border-gray-900"
                                                    placeholder="Email address"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <span className="block mb-1 text-left font-bold">Message</span>
                                        <textarea className="block w-full px-4 py-3 sm:py-3.5 text-base font-medium text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg sm:text-sm focus:ring-gray-900 focus:border-gray-900" placeholder="Message"></textarea>
                                    </div>

                                </div>
                            </form>

                            <div className="flex justify-end py-4 ">
                                <button
                                    type="button"
                                    className="inline-flex relative items-center justify-center w-full sm:w-auto px-8 py-3 sm:text-sm text-base sm:py-3.5 font-semibold text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </section>
    )
}