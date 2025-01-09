import Details from "../../../models/Details.jsx";

function BaseHomeEducation(){
    return (
        <div className="BaseHomeEducation bg-[#141414]  text-white py-12 px-6 md:px-12 lg:px-24">
            <h2 className="text-4xl font-bold mb-12 text-center relative">
                <h1 className="text-center text-white text-5xl font-bold !mt-20 mb-10">Education</h1>
            </h2>
            <div className="space-y-8">
                {Details.educationDetails.map((item, index) => (
                    <div
                        key={index}
                        className="group relative border border-gray-700 rounded-lg overflow-hidden p-6 hover:shadow-2xl hover:border-yellow-300 transition-all duration-500"
                    >
                        {/* Background Hover Animation */}
                        <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                        <h3 className="text-2xl font-semibold group-hover:text-yellow-300 transition duration-500">
                            {item.degree}
                        </h3>
                        <p className="text-lg text-gray-400">{item.institution}</p>
                        <p className="text-sm text-gray-500">{item.duration}</p>
                        {item.description && (
                            <p className="mt-4 text-gray-300">{item.description}</p>
                        )}
                        {item.results && (
                            <ul className="mt-4 space-y-2">
                                {item.results.map((result, i) => (
                                    <li
                                        key={i}
                                        className="flex justify-between border-b border-gray-700 pb-1 group-hover:border-yellow-500 transition-colors duration-500"
                                    >
                    <span className="text-gray-400 ">
                      {result.subject}
                    </span>
                                        <span className="text-gray-300 font-semibold ">
                      {result.grade}
                    </span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BaseHomeEducation;