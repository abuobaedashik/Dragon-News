import React from "react";

function Videosec({ videos, loadVideoDetails }) {
  const getTimeString = (time) => {
    const hour = parseInt(time / 3600);
    let remainSec = time % 3600;
    const minute = parseInt(remainSec / 60);
    const second = remainSec % 60;
    return `${hour}h ${minute}min ${second}sec ago`;
  };

  if (videos.length === 0) {
    return (
      <div className="min-h-[300px] flex flex-col gap-5 items-center justify-center">
        <img src="./Assets/Icon.png" alt="No content" />
        <p className="text-3xl text-center text-[#171717] font-bold">
          Oops!! Sorry, There <br /> is no content here
        </p>
      </div>
    );
  }

  return (
    <section
      id="videos"
      className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-5 xl:grid-cols-3 py-6 gap-6"
    >
      {videos.map((video) => (
        <div key={video.video_id}>
          <figure className="h-[200px] relative">
            <img
              src={video.thumbnail}
              className="h-full w-full object-cover rounded-md"
              alt={video.title}
            />
            {video.others.posted_date ? (
              <span className="bg-black text-white rounded-md right-2 bottom-2 absolute px-2">
                {getTimeString(video.others.posted_date)}
              </span>
            ) : null}
          </figure>
          <div className="py-2 px-0 flex gap-4">
            <img
              className="w-10 h-10 rounded-full object-cover"
              src={video.authors[0].profile_picture}
              alt={video.authors[0].profile_name}
            />
            <div>
              <h1 className="font-bold">{video.title}</h1>
              <div className="flex items-center gap-2">
                <p className="text-gray-500 text-sm">{video.authors[0].profile_name}</p>
                {video.authors[0].verified && (
                  <img
                    className="w-5 h-5"
                    src="https://img.icons8.com/?size=96&id=D9RtvkuOe31p&format=png"
                    alt="Verified"
                  />
                )}
              </div>
              <p className="text-gray-500 text-sm">{video.others.views} views</p>
            </div>
            <div>
              <button
                onClick={() => loadVideoDetails(video.video_id)}
                className="btn btn-sm btn-error"
              >
                Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Videosec;
