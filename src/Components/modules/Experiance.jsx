import React from 'react';

export default function Experience() {
    return (
        <section className="bg-[#0E1630] flex ">
            <div className="container max-w-5xl px-4 py-12 mx-auto">
                <div className="grid gap-4 mx-4 sm:grid-cols-12">
                    <div className="col-span-12 sm:col-span-3">
                        <div className="text-center sm:text-left mb-14 relative before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-violet-600">
                            <h3 className="text-3xl SecHeading">Here are my recent Professional whereabouts</h3>
                            <span className="text-sm font-bold tracking-wider uppercase text-gray-300">- Ed-N-Eperience -</span>
                        </div>
                    </div>
                    <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                        <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8">
                            <div className="flex flex-col sm:relative">
                                <div className="absolute top-2 left-[-35px] z-10 w-4 h-4 rounded-full bg-violet-600"></div>
                                <h3 className="text-2xl font-bold tracking-wide text-[#01d48c]">Bachelors of Engineering (B.E.) In Electronics & Communication Engineering.</h3>
                                <time className="text-xs tracking-wide uppercase text-gray-300">Feb 2020</time>
                                <p className="mt-3 text-white font-QS font-semibold text-lg">BLDEA's V P Dr PG Halakatti College of Engineering & Technology, with 6.2 CGPA</p>
                            </div>
                            <div className="flex flex-col sm:relative">
                            <div className="absolute top-2 left-[-35px] z-20 w-4 h-4 rounded-full bg-violet-600"></div>
                                <h3 className="text-2xl font-bold tracking-wide text-[#01d48c]">Seventh Sense Solutions Pvt. Ltd, INTERN</h3>
                                <time className="text-xs tracking-wide uppercase dark:text-gray-300">Jul 2019</time>
                                <p className="mt-3 text-white font-QS font-semibold text-lg">Through real-time projects, I gained practical experience across diverse facets of IoT, encompassing architecture, security vulnerabilities, and protocols. My expertise in Industrial Control Systems deepened as I delved into SCADA systems and comprehended their intricate architectures. Moreover, I played a pivotal role in VLSI projects by crafting Verilog HDL test benches, ensuring thorough testing of design modules to optimize functionality and reliability.</p>
                            </div>
                            <div className="absolute top-2 bottom-2 w-0.5 bg-gray-300 left-[-12px] z-0"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
