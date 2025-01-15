import AboutUsData from "@/app/model/about-us-data.json";
import { GithubLogo, LinkedinLogo, TwitterNewLogo } from "@/icons/icons";

export const AboutUsDetails = () => {
    const aboutUsData = AboutUsData["about-us"];

    const LogoComp = ({ srcName }: { srcName: string }) => {
        switch (srcName) {
            case "twitter":
                return <TwitterNewLogo size={16} />;
            case "linkedin":
                return <LinkedinLogo size={16} />;
            case "github":
                return <GithubLogo size={16} />;
            default:
                return <></>;
        }
    };

    return (
        <section className="py-12 bg-white sm:py-16 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
                        {/* {AboutUsData["section-title"] || "Our Investors & Board of Directors"} */}
                        Our Investors & Board of Directors
                    </h2>
                </div>

                <div className="grid max-w-6xl grid-cols-1 px-20 mx-auto mt-12 text-center sm:px-0 sm:grid-cols-2 md:mt-20 gap-x-8 md:grid-cols-4 gap-y-8 lg:gap-x-16 xl:gap-x-20">
                    {aboutUsData?.length > 0 ? (
                        aboutUsData.map((item, index) => (
                            <div key={index}>
                                <img
                                    className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 grayscale filter hover:scale-105 transition-transform"
                                    src={item.src || "/default-image.png"}
                                    alt={`Image of ${item.name || "Anonymous"}, ${item.designation || "Role not specified"}`}
                                    loading="lazy"
                                />
                                <p className="mt-5 text-lg font-bold text-gray-900 sm:text-xl sm:mt-8 font-pj">
                                    {item.name || "Anonymous"}
                                </p>
                                <p className="mt-2 text-base font-normal text-gray-600 font-pj">
                                    {item.designation || "Role not specified"}
                                </p>
                                <div className="flex flex-row justify-center py-2">
                                    {item.meta?.map((meta, idx) => (
                                        <a
                                            key={idx}
                                            target="_blank"
                                            href={meta.src || "#"}
                                            className="px-2 cursor-pointer"
                                            aria-label={`Visit ${meta.name || "social"} profile`}
                                        >
                                            <LogoComp srcName={meta.name || "default"} />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500">No team members available at the moment.</p>
                    )}
                </div>

                <div className="max-w-3xl mx-auto mt-12 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-x-16">
                    <div>
                        <img
                            className="w-auto mx-auto h-11"
                            src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/logo-waverio.svg"
                            alt="Waverio Logo"
                        />
                    </div>
                    <div>
                        <img
                            className="w-auto mx-auto h-11"
                            src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/logo-squarestone.svg"
                            alt="Squarestone Logo"
                        />
                    </div>
                    <div>
                        <img
                            className="w-auto mx-auto h-11"
                            src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/logo-creaty.svg"
                            alt="Creaty Logo"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};


// import AboutUsData from "@/app/model/about-us-data.json";
// import { GithubLogo, LinkedinLogo, TwitterNewLogo } from "@/icons/icons";

// export const AboutUsDetails = () => {

//     const aboutUsData = AboutUsData["about-us"];

//     const LogoComp = ({ srcName }: { srcName: string }) => {
//         switch (srcName) {
//             case "twitter":
//                 return <TwitterNewLogo size={16} />
//             case "linkedin":
//                 return <LinkedinLogo size={16} />
//             case "github":
//                 return <GithubLogo size={16} />
//             default:
//                 return <></>
//         }
//     }

//     return (
//         <section className="py-12 bg-white sm:py-16 lg:py-20">
//             <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
//                 <div className="text-center">
//                     <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">Our Investors & Board of Directors</h2>
//                 </div>

//                 <div className="grid max-w-6xl grid-cols-1 px-20 mx-auto mt-12 text-center sm:px-0 sm:grid-cols-2 md:mt-20 gap-x-8 md:grid-cols-4 gap-y-12 lg:gap-x-16 xl:gap-x-20">
//                     {
//                         aboutUsData.map((item, index) => {
//                             return (
//                                 <div key={index}>
//                                     <img className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 grayscale filter" src={item.src} alt="" />
//                                     <p className="mt-5 text-lg font-bold text-gray-900 sm:text-xl sm:mt-8 font-pj">{item.name}</p>
//                                     <p className="mt-2 text-base font-normal text-gray-600 font-pj">{item.designation}</p>
//                                     {
//                                         <div className="flex flex-row justify-center py-2">
//                                             {
//                                                 item.meta.map((meta, index) => {
//                                                     return (
//                                                         // <a key={index} href="#" title={meta.name}>
//                                                         //     {meta.name}
//                                                         //     {/* <img className="w-6 h-6" src={TwitterNewLogo} alt={meta.name} /> */}
//                                                         // </a>
//                                                         // <TwitterNewLogo size={16} key={index} />
//                                                         <a target="_blank" href={meta.src} key={index} className="px-2 cursor-pointer"
//                                                         // onClick={() => {
//                                                         //     console.log(meta.name, "clicked")
//                                                         // }}
//                                                         >
//                                                             <LogoComp srcName={meta.name} />
//                                                         </a>
//                                                     )
//                                                 })
//                                             }
//                                         </div>
//                                     }
//                                 </div>
//                             )
//                         })
//                     }
//                     {/* <div>
//                         <img className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 grayscale filter" src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-1.png" alt="" />
//                         <p className="mt-5 text-lg font-bold text-gray-900 sm:text-xl sm:mt-8 font-pj">Jerome Bell</p>
//                         <p className="mt-2 text-base font-normal text-gray-600 font-pj">Co founder, Chairman, Executive Director</p>
//                     </div>

//                     <div>
//                         <img className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 grayscale filter" src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-2.png" alt="" />
//                         <p className="mt-5 text-lg font-bold text-gray-900 sm:text-xl sm:mt-8 font-pj">Jerome Bell</p>
//                         <p className="mt-2 text-base font-normal text-gray-600 font-pj">Co founder, Chairman, Executive Director</p>
//                     </div>

//                     <div>
//                         <img className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 grayscale filter" src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-3.png" alt="" />
//                         <p className="mt-5 text-lg font-bold text-gray-900 sm:text-xl sm:mt-8 font-pj">Jerome Bell</p>
//                         <p className="mt-2 text-base font-normal text-gray-600 font-pj">Co founder, Chairman, Executive Director</p>
//                     </div>

//                     <div>
//                         <img className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 grayscale filter" src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-4.png" alt="" />
//                         <p className="mt-5 text-lg font-bold text-gray-900 sm:text-xl sm:mt-8 font-pj">Jerome Bell</p>
//                         <p className="mt-2 text-base font-normal text-gray-600 font-pj">Co founder, Chairman, Executive Director</p>
//                     </div> */}
//                 </div>

//                 <div className="max-w-3xl mx-auto mt-12 space-y-8 sm:space-y-0 sm:flex sm:items-center sm:justify-center sm:mt-16 sm:gap-x-16">
//                     <div>
//                         <img className="w-auto mx-auto h-11" src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/logo-waverio.svg" alt="" />
//                     </div>

//                     <div>
//                         <img className="w-auto mx-auto h-11" src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/logo-squarestone.svg" alt="" />
//                     </div>

//                     <div>
//                         <img className="w-auto mx-auto h-11" src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/logo-creaty.svg" alt="" />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }