import './Footer.css'
const Footer = () => {
    return (
        <div className="py-10 bg-black  sm:pt-16 lg:pt-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4 md:gap-x-12">
                    <div>
                        <p className="text-lg underline text-[#D2042D]">Company</p>
                        <ul className="mt-8 space-y-4">
                            <li>
                                <a href="#" title=""
                                   className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">About</a>
                            </li>
                            <li>
                                <a href="#" title=""
                                   className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">Features</a>
                            </li>
                            <li>
                                <a href="#" title=""
                                   className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">Works</a>
                            </li>
                            <li>
                                <a href="#" title=""
                                   className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">Career</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className="text-lg underline text-[#D2042D]">Help</p>
                        <ul className="mt-8 space-y-4">
                            <li>
                                <a href="#" title=""
                                   className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">Customer
                                    Support</a>
                            </li>
                            <li>
                                <a href="#" title=""
                                   className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">Delivery
                                    Details</a>
                            </li>
                            <li>
                                <a href="#" title=""
                                   className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">Terms
                                    & Conditions</a>
                            </li>
                            <li>
                                <a href="#" title=""
                                   className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">Privacy
                                    Policy</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className="text-lg underline text-[#D2042D]">Resources</p>
                        <ul className="mt-8 space-y-4">
                            <li>
                                <a href="#" title=""
                                   className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">Free
                                    eBooks</a>
                            </li>
                            <li>
                                <a href="#" title=""
                                   className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">Development
                                    Tutorial</a>
                            </li>
                            <li>
                                <a href="#" title=""
                                   className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">How
                                    to - Blog</a>
                            </li>
                            <li>
                                <a href="#" title=""
                                   className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">YouTube
                                    Playlist</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className="text-lg underline text-[#D2042D]">Extra Links</p>
                        <ul className="mt-8 space-y-4">
                            <li>
                                <a href="#" title=""
                                   className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">Customer
                                    Support</a>
                            </li>
                            <li>
                                <a href="#" title=""
                                   className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">Delivery
                                    Details</a>
                            </li>
                            <li>
                                <a href="#" title=""
                                   className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">Terms
                                    & Conditions</a>
                            </li>
                            <li>
                                <a href="#" title=""
                                   className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">Privacy
                                    Policy</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <hr className="mt-16 mb-10 border-gray-800"/>

                <div className="flex flex-wrap items-center justify-between">
                    <p className="text-white">&copy; Developed by Sajan Hirusha</p>
                    <ul className="flex items-center space-x-3 md:order-3">
                        <li>
                            <a
                                href="#"
                                title="Twitter"
                                className="flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full w-7 h-7  focus:bg-[#D2042D] hover:bg-[#D2042D]/30 hover:border-[#D2042D] focus:border-[#D2042D]"
                            >
                                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                     fill="currentColor">
                                    <path
                                        d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                title="Facebook"
                                className="flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full w-7 h-7  focus:bg-[#D2042D] hover:bg-[#D2042D]/30 hover:border-[#D2042D] focus:border-[#D2042D]"
                            >
                                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                     fill="currentColor">
                                    <path
                                        d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                                    <circle cx="16.806" cy="7.207" r="1.078"></circle>
                                    <path
                                        d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"
                                    ></path>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                title="Instagram"
                                className="flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full w-7 h-7 focus:bg-[#D2042D] hover:bg-[#D2042D]/30 hover:border-[#D2042D] focus:border-[#D2042D]"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                     fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                                    <path
                                        d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Footer