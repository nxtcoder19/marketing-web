
export const ServicesDetails = () => {
  const projects = [
    {
      title: "Project A",
      description: "An innovative solution for seamless collaboration.",
      videoUrl: "/videos/project1.mp4", // Custom video URL
      updated: "January 2025",
    },
    {
      title: "Project B",
      description: "A platform to boost business efficiency.",
      videoUrl: "https://www.youtube.com/embed/BjedgdwtHmM", // YouTube embed URL
      updated: "December 2024",
    },
    {
      title: "Project C",
      description: "Cutting-edge technology for modern enterprises.",
      videoUrl: "https://www.youtube.com/embed/q3xPtI75pw4", // Custom video URL
      updated: "November 2024",
    },
    {
        title: "Project D",
        description: "An innovative solution for seamless collaboration.",
        videoUrl: "https://www.youtube.com/embed/uaCf99wY0Cc", // Custom video URL
        updated: "January 2025",
      },
      {
        title: "Project E",
        description: "A platform to boost business efficiency.",
        videoUrl: "https://www.youtube.com/embed/qZId59qml_4", // YouTube embed URL
        updated: "December 2024",
      },
  ];

  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl">
            Explore Our Services
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8">
            Discover how we’ve transformed ideas into reality with our successful projects.
          </p>
        </div>

        <div className="grid grid-cols-1 mt-10 gap-y-12 sm:mt-16 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="overflow-hidden transition-all duration-200 transform bg-white border border-gray-200 rounded-2xl hover:shadow-lg hover:-translate-y-1"
            >
              <div className="relative w-full h-60">
                {/* Check if the URL is YouTube or custom */}
                {project.videoUrl.includes("https://") ? (
                  <iframe
                    className="absolute inset-0 w-full h-full rounded-t-2xl"
                    src={project.videoUrl}
                    title={project.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <video
                    className="absolute inset-0 w-full h-full rounded-t-2xl"
                    src={project.videoUrl}
                    controls
                  ></video>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{project.description}</p>
                <p className="mt-4 text-xs font-medium text-gray-500">
                  Updated: {project.updated}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
