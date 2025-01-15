export const Blogs = () => {
    const blogData = [
        {
            date: "January 10, 2025",
            title: "Top Strategies for Managing Cloud Environments Effectively",
            image: "https://cdn.rareblocks.xyz/collection/clarity/images/blog/1/blog-1.png",
            link: "#",
        },
        {
            date: "December 28, 2024",
            title: "Harnessing Docker and Kubernetes for Scalable Deployments",
            image: "https://cdn.rareblocks.xyz/collection/clarity/images/blog/1/blog-2.png",
            link: "#",
        },
        {
            date: "December 15, 2024",
            title: "Building Secure and User-Friendly Development Workflows",
            image: "https://cdn.rareblocks.xyz/collection/clarity/images/blog/1/blog-1.png",
            link: "#",
        },
        {
            date: "November 30, 2024",
            title: "Seamless Integration with Modern APIs: Tips and Tricks",
            image: "https://cdn.rareblocks.xyz/collection/clarity/images/blog/1/blog-2.png",
            link: "#",
        },
        {
            date: "January 10, 2025",
            title: "Top Strategies for Managing Cloud Environments Effectively",
            image: "https://cdn.rareblocks.xyz/collection/clarity/images/blog/1/blog-1.png",
            link: "#",
        },
        {
            date: "December 28, 2024",
            title: "Harnessing Docker and Kubernetes for Scalable Deployments",
            image: "https://cdn.rareblocks.xyz/collection/clarity/images/blog/1/blog-2.png",
            link: "#",
        },
        {
            date: "December 15, 2024",
            title: "Building Secure and User-Friendly Development Workflows",
            image: "https://cdn.rareblocks.xyz/collection/clarity/images/blog/1/blog-1.png",
            link: "#",
        },
        {
            date: "November 30, 2024",
            title: "Seamless Integration with Modern APIs: Tips and Tricks",
            image: "https://cdn.rareblocks.xyz/collection/clarity/images/blog/1/blog-2.png",
            link: "#",
        },
    ];

    return (
        <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-md mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl font-pj">Insights and Updates</h2>
                    <p className="mt-5 font-normal text-gray-600 font-pj">
                        Stay informed with the latest updates, tips, and insights from our industry experts.
                    </p>
                </div>

                <div className="grid max-w-5xl grid-cols-1 mx-auto mt-8 text-center sm:mt-16 sm:text-left sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
                    {blogData.map((blog, index) => (
                        <a
                            key={index}
                            href={blog.link}
                            title={blog.title}
                            className="relative group block overflow-hidden rounded-lg shadow-lg bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                        >
                            <div className="overflow-hidden rounded-t-lg aspect-w-16 aspect-h-9">
                                <img
                                    className="object-cover w-full h-full transition-transform duration-300 transform group-hover:scale-110"
                                    src={blog.image}
                                    alt={blog.title}
                                />
                            </div>
                            <div className="p-6">
                                <p className="text-sm font-normal text-gray-600 font-pj">{blog.date}</p>
                                <p className="mt-4 text-xl font-bold text-gray-900 font-pj">{blog.title}</p>
                                <span className="absolute bottom-6 right-6 text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    Read More
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};


// export const Blogs = () => {
//     return (
//         <section className="py-12 bg-white sm:py-16 lg:py-20">
//             <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
//                 <div className="max-w-md mx-auto text-center">
//                     <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl font-pj">Read our blog</h2>
//                     <p className="mt-5 font-normal text-gray-600 font-pj">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
//                 </div>

//                 <div className="grid max-w-3xl grid-cols-1 mx-auto mt-8 text-center sm:mt-16 sm:text-left sm:grid-cols-2 gap-y-8 gap-x-8 lg:gap-x-20">
//                     <div className="relative group">
//                         <div className="overflow-hidden rounded-lg aspect-w-16 aspect-h-9">
//                             <img className="object-cover w-full h-full transition-all duration-300 transform group-hover:scale-125" src="https://cdn.rareblocks.xyz/collection/clarity/images/blog/1/blog-1.png" alt="" />
//                         </div>
//                         <p className="mt-6 text-sm font-normal text-gray-600 font-pj">November 22, 2021</p>
//                         <p className="mt-4 text-xl font-bold text-gray-900 font-pj">How To Optimize Progressive Web Apps: Going Beyond The Basics</p>
//                         <a href="#" title="">
//                             <span className="absolute inset-0" aria-hidden="true"></span>
//                         </a>
//                     </div>

//                     <div className="relative group">
//                         <div className="overflow-hidden rounded-lg aspect-w-16 aspect-h-9">
//                             <img className="object-cover w-full h-full transition-all duration-300 transform group-hover:scale-125" src="https://cdn.rareblocks.xyz/collection/clarity/images/blog/1/blog-2.png" alt="" />
//                         </div>
//                         <p className="mt-6 text-sm font-normal text-gray-600 font-pj">November 16, 2021</p>
//                         <p className="mt-4 text-xl font-bold text-gray-900 font-pj">How To Optimize Progressive Web Apps: Going Beyond The Basics</p>
//                         <a href="#" title="">
//                             <span className="absolute inset-0" aria-hidden="true"></span>
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </section>

//     )
// }