const Allnews: React.FC = () => {
  // Sample news data
  const newsData = [
    {
      _id: "1",
      title: "Valor & Rise Kohyang High Schools Get AP Honor Roll",
      content:
        "Both schools receive AP School Honor Roll recognition for excellence.",
      date: "2024-12-05T00:00:00Z",
      imageUrl: "images/section6/honer.jpg",
      author: "Admin",
      category: "Education",
      link: "#",
    },
    {
      _id: "2",
      title: "Bright Star Grad Earns Triple Degrees",
      content:
        "Elias Cruz earns a high school diploma and two associate degrees in one week.",
      date: "2024-06-18T00:00:00Z",
      imageUrl: "images/section6/Degree.jpg",
      author: "Admin",
      category: "Achievement",
      link: "#",
    },
    {
      _id: "3",
      title: "Student Earns Triple Degrees, Featured in La Opinión",
      content:
        "Elias Cruz earns a diploma and two associate degrees, gaining media attention.",
      date: "2024-06-12T00:00:00Z",
      imageUrl: "images/section6/honer.jpg",
      author: "Admin",
      category: "Recognition",
      link: "#",
    },
  ];

  return (
    <div className="p-6 text-secondary text-lg">
      
      {/* Heading with text-primary color and centered alignment */}
      <h2 className="text-3xl font-bold mb-4 text-primary text-center">
        News & Blogs
      </h2>

      <div className="col-span-4 grid grid-cols-1 gap-2 px-2">
        {newsData.map((post) => (
          <div
            key={post._id}
            className="min-w-32 shadow-md rounded-lg p-4 hover:shadow-2xl hover:scale-105 transition-transform h-auto "
          >
            {/* Image */}
            <div className="relative w-full h-80 rounded-md overflow-hidden mx-auto bg-gray-200 flex items-center justify-center">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-full object-contain"
              />
            </div>
              <div className="flex">
               <div className="mx-auto sm:w-1/2">
                 {/* Title & Meta Information */}
                 <h3 className="mt-2 text-lg font-semibold font-serif text-primary">
                  {post.title}
                </h3>
                <p className="">Category: {post.category}</p>
                <p className="">{post.content}</p>
                <p className="mb-2 ">
                  By {post.author} on{" "}
                  {new Date(post.date).toLocaleString("en-IN", {
                    timeZone: "Asia/Kolkata",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    hour12: true,
                  })}
                </p>
               </div>
              </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Allnews;
