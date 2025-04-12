import './BaseHomeContact.css'

const BaseHomeContact = () => {
    return (
        <div id="ContactUs">
            <h1 className="text-center text-black dark:text-white text-4xl md:text-5xl min-[1900px]:text-6xl font-bold mb-16">Contact Me</h1>
            <div className="baseHome-contact grid grid-cols-12 gap-8 mb-20">
                <div className="col-span-12 lg:col-span-5 contact-left bg-[#191b1e] rounded-xl p-5 max-sm:mx-4 xl:p-10 max-lg:mx-10 lg:ml-10 ">
                    <h1 id="myName" className="text-2xl sm:text-3xl lg:text-4xl min-[1900px]:text-6xl text-white text-center !mb-16">I’m <span> Sajan Hirusha</span>
                    </h1>
                    <p className="contact-text  text-white text-justify !mb-8">Phone : 0702789166
                        <a href="tel:+94702789166" className="ml-2">
                            <button className="contactButton w-[67px] h-[31px] min-[430px]:!w-[91px] min-[430px]:h-[34px] text-[13px] sm:text-base min-2xl:text-lg"><span></span>Call Us</button>
                        </a>
                    </p>
                    <p className="contact-text text-white text-justify !mb-8">Email: sajanhirusha@gmail.com
                        <a href="mailto:sajanhirusha@gmail.com" className="ml-2">
                            <button className="contactButton w-[67px] h-[31px] min-[430px]:!w-[91px] min-[430px]:h-[34px] text-[13px] sm:text-base min-2xl:text-lg"><span></span>Mail Us</button>
                        </a>
                    </p>
                    <p className="contact-text text-[13px] sm:text-base md:text-md min-[1900px]:text-xl text-[#c4cfde]  text-justify !mb-14">&emsp;&emsp;&emsp; Lorem
                        ipsum dolor sit amet, consectetur adipisicing elit.
                        Consectetur cum dolores doloribus eligendi enim
                        eos esse eveniet, ex iusto nobis nulla rem sed, similique vitae voluptate. Asperiores doloribus
                        id
                        in.</p>
                    <div className="buttonSet grid grid-cols-2 gap-y-4 w-[80%] mx-auto">
                        <button className="ui circular facebook icon button !rounded  w-[88%] min-[430px]:w-[80%] xl:w-[71%] !text-[13px] sm:!text-base ">
                            <i className="facebook icon"></i>&nbsp; Facebook
                        </button>
                        <button className="ui circular whatsapp icon button !rounded !bg-green-700 w-[88%] !text-white min-[430px]:w-[80%] xl:w-[71%] !text-[13px] !sm:!text-base">
                            <i className="whatsapp icon "></i>&nbsp; whatsapp
                        </button>
                        <button className="ui circular linkedin icon button !rounded w-[88%] min-[430px]:w-[80%] xl:w-[71%] !text-[13px] sm:!text-base ">
                            <i className="linkedin icon"></i>&nbsp;Linkdin
                        </button>
                        <button
                            className="ui circular instagram icon button !rounded w-[88%] min-[430px]:w-[80%] xl:w-[71%] !text-[13px] sm:!text-base "
                        >
                            <i className="instagram icon"></i>&nbsp;Instagram
                        </button>
                    </div>

                </div>
                <div className="col-span-12 lg:col-span-7 contact-right bg-[#191b1e] rounded-xl max-sm:mx-4 max-lg:mx-10 lg:mr-10">
                    <p className="text-[13px] sm:text-base md:text-md min-[1900px]:text-xl !mt-8 text-center text-[#D2042D]">Let’s Connect and Create Something
                        Extraordinary Together!</p>
                    <form action="" className="space-y-4 p-10 !my-4">
                        <div className="flex flex-wrap gap-4">

                            <div className="flex-1">
                                <label htmlFor="name" className="text-white block text-sm font-medium ">
                                    YOUR NAME
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="mt-1 block w-full shadow-sm sm:text-sm"
                                />
                            </div>

                            <div className="flex-1">
                                <label htmlFor="pNumber" className="block text-sm font-medium text-white">
                                    PHONE NUMBER
                                </label>
                                <input
                                    type="tel"
                                    name="pNumber"
                                    id="pNumber"
                                    className="mt-1 block w-full shadow-sm  sm:text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-white">
                                EMAIL
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                required
                                className="mt-1 block w-full shadow-sm sm:text-sm"
                            />
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-white">
                                SUBJECT
                            </label>
                            <input
                                type="text"
                                name="subject"
                                id="subject"
                                className="mt-1 block w-full shadow-sm sm:text-sm"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-white">
                                YOUR MESSAGE
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                rows="4"
                                className="mt-1 block w-full shadow-sm sm:text-sm"
                            ></textarea>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="contactSubmit w-full border-[#252d32] rounded-md bg-[#232a2f] p-4  text-white shadow-sm hover:bg-gray-700 mt-8"
                            >
                                SEND MESSAGE
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default BaseHomeContact;