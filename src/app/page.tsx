import Link from "next/link";

export default function Home() {
  return (
    <div className="parentContainer flex justify-center w-[100%] flex-wrap ">
      <div className="blogcontainer scale-in-bottom min-h-[380px] lg:min-w-[400px] lg:min-h-[340px] md:min-h-[410px] md:max-w-[320px] sm:max-w-[280px] sm:min-h-[430px] m-4 rounded-xl p-3">
          
            <img src="blog1.jpg" alt="" className=" w-[400px] h-[170px] bg-red-100" />
            <h1 className="text-xl font-bold mb-4">"How to Stay Productive in College"</h1>
            <p className="overflow-hidden"><strong>Description</strong>: Tips and strategies for enhancing productivity in college, including effective study schedules, goal-setting, and minimizing distractions to achieve academic success.
            </p>
        <Link href="/blog-1">
           <button className="read absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-[90px] h-[25px] font-medium bg-yellow-400 rounded-full hover:font-medium hover:bg-black hover:text-yellow-400 hover:transition duration-500">
            <span>Read More</span>
           </button>
        </Link>
      </div>
      <div className="blogcontainer scale-in-bottom min-h-[380px] lg:min-w-[400px] lg:min-h-[380px] md:min-h-[410px] md:max-w-[320px] sm:max-w-[280px] sm:min-h-[430px] m-4 mx-<6> rounded-xl p-3">
          <img src="blog2.jpg" alt="" className=" w-[400px] h-[170px] bg-red-100"/>
          <h1 className="text-xl font-bold mb-4">"Top 5 Anime You Must Watch"</h1>
          <p><strong>Description</strong>: A curated list of five essential anime series, featuring popular titles like One Piece and Naruto, along with underrated gems, exploring key characters that captivate viewers.
          </p>
        <Link href="/blog-2">
          <button className="read absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-[90px] h-[25px] font-medium bg-yellow-400 rounded-full hover:font-medium hover:bg-black hover:text-yellow-400 hover:transition duration-500">
            <span>Read More</span>
           </button>
        </Link>
      </div>
      <div className="blogcontainer scale-in-bottom min-h-[380px] lg:min-w-[400px] lg:min-h-[380px] md:min-h-[410px] md:max-w-[320px] sm:max-w-[280px] sm:min-h-[430px] m-4 rounded-xl p-3">
        {" "}
          <img src="blog3.jpg" alt="" className=" w-[400px] h-[170px] bg-red-100"/>
          <h1 className="text-xl font-bold mb-4">"Healthy Eating on a College Budget"</h1>
          <p><strong>Description</strong>: Practical tips for maintaining a nutritious diet as a college student, focusing on meal planning, quick recipes, and making healthier food choices on a budget.
          </p>
        <Link href="/blog-3">
          <button className="read absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-[90px] h-[25px] font-medium bg-yellow-400 rounded-full hover:font-medium hover:bg-black hover:text-yellow-400 hover:transition duration-500">
            <span>Read More</span>
           </button>
        </Link>
      </div>
      <div className="blogcontainer scale-in-bottom min-h-[380px] lg:min-w-[400px] lg:min-h-[380px] md:min-h-[410px] md:max-w-[320px] sm:max-w-[280px] sm:min-h-[430px] m-4 rounded-xl p-3">
        {" "}
          <img src="blog4.jpg" alt="" className=" w-[400px] h-[170px] bg-red-100"/>
          <h1 className="text-xl font-bold mb-4">"Simple Workouts to Stay Fit at Home"</h1>
          <p><strong>Description</strong>: A collection of simple home workouts suitable for all fitness levels, emphasizing consistency and motivation for maintaining physical fitness without equipment.
          </p>
        <Link href="/blog-4">
          <button className="read absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-[90px] h-[25px] font-medium bg-yellow-400 rounded-full hover:font-medium hover:bg-black hover:text-yellow-400 hover:transition duration-500">
            <span>Read More</span>
           </button>
        </Link>
      </div>
      <div className="blogcontainer scale-in-bottom min-h-[380px] lg:min-w-[400px] lg:min-h-[380px] md:min-h-[410px] md:max-w-[320px] sm:max-w-[280px] sm:min-h-[430px] m-4 mx-<6> rounded-xl p-3">
        {" "}
          <img src="blog5.jpg" alt="" className=" w-[400px] h-[170px] bg-red-100"/>
          <h1 className="text-xl font-bold mb-4">"Start Learning Web Development"</h1>
          <p><strong>Description</strong>: A beginner's guide to web development, covering skills like HTML, CSS, and JavaScript, along with tips on version control and practical projects.
          </p>
        <Link href="/blog-5">
          <button className="read absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-[90px] h-[25px] font-medium bg-yellow-400 rounded-full hover:font-medium hover:bg-black hover:text-yellow-400 hover:transition duration-500">
            <span>Read More</span>
           </button>
        </Link>
      </div>
      <div className="blogcontainer scale-in-bottom min-h-[400px] lg:min-w-[400px] lg:min-h-[380px] md:min-h-[410px] md:max-w-[320px] sm:max-w-[280px] sm:min-h-[430px] m-4 rounded-xl p-3">
          <img src="blog6.jpg" alt="" className=" w-[400px] h-[170px] bg-red-100"/>
          <h1 className="text-xl font-bold mb-4">"5 Ways to Manage Stress and Anxiety"</h1>
          <p><strong>Description</strong>: Discover effective strategies to manage stress and anxiety, including deep breathing, regular exercise, healthy routines, and the importance of social connections.
          </p>
        <Link href="/blog-6">
          <button className="read absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-[90px] h-[25px] font-medium bg-yellow-400 rounded-full hover:font-medium hover:bg-black hover:text-yellow-400 hover:transition duration-500">
            <span>Read More</span>
           </button>
        </Link>
      </div>
    </div>
  );
}
