import React from "react";
import { MoreHorizontal, Heart, MessageCircle, Send, Bookmark } from "lucide-react";

function ContentBar() {
  const posts = [
    {
      id: 1,
      user: "mr_baswarahul",
      location: "Burger Factory",
      profileImg: "https://i.pravatar.cc/50?img=7",
      postImg: "https://i.pravatar.cc/500?img=11",
      caption: "Good vibes only!",
      time: "35m",
    },
    {
      id: 2,
      user: "john_doe",
      location: "Goa Beach",
      profileImg: "https://i.pravatar.cc/50?img=9",
      postImg: "https://i.pravatar.cc/500?img=12",
      caption: "Sunset and peace 🌅",
      time: "2h",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-10">
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-[#0b0b0b] border border-gray-800 rounded-md w-full max-w-lg"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              <img
                src={post.profileImg}
                alt={post.user}
                className="w-8 h-8 rounded-full"
              />
              <div>
                <p className="text-sm font-semibold">{post.user}</p>
                <p className="text-xs text-gray-400">{post.location}</p>
              </div>
            </div>
            <MoreHorizontal size={18} className="text-gray-400" />
          </div>

          {/* Post image */}
          <img
            src={post.postImg}
            alt="post"
            className="w-full object-cover"
          />

          {/* Actions */}
          <div className="flex justify-between px-4 py-3">
            <div className="flex gap-4">
              <Heart size={22} className="cursor-pointer " />
              <MessageCircle size={22} className="cursor-pointer" />
              <Send size={22} className="cursor-pointer" />
            </div>
            <Bookmark size={22} className="cursor-pointer" />
          </div>

          {/* Caption */}
          <div className="px-4 pb-3">
            <p className="text-sm">
              <span className="font-semibold">{post.user}</span>{" "}
              {post.caption}
            </p>
            <p className="text-xs text-gray-400 mt-1">{post.time} ago</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContentBar;
