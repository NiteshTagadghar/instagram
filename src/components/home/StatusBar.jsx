import React from "react";

function StatusBar() {
  const stories = [
    { name: "iam_anus", img: "https://i.pravatar.cc/80?img=1" },
    { name: "acciojob_", img: "https://i.pravatar.cc/80?img=2" },
    { name: "tej", img: "https://i.pravatar.cc/80?img=3" },
    { name: "dr_sam", img: "https://i.pravatar.cc/80?img=4" },
    { name: "arun", img: "https://i.pravatar.cc/80?img=5" },
    { name: "royal", img: "https://i.pravatar.cc/80?img=6" },
  ];

  return (
    <div className="flex justify-center min-w-full gap-6 overflow-x-auto no-scrollbar px-2 py-2">
      {stories.map((story, i) => (
        <div key={i} className="flex flex-col items-center text-center shrink-0">
          {/* outer gradient border */}
          <div className="p-[3px] rounded-full bg-gradient-to-tr from-pink-500 to-yellow-400">
            <img
              src={story.img}
              alt={story.name}
              className="w-20 h-20 rounded-full border-[3px] border-black object-cover"
            />
          </div>
          <p className="text-sm mt-2 text-gray-300 truncate w-24">{story.name}</p>
        </div>
      ))}
    </div>
  );
}

export default StatusBar;
