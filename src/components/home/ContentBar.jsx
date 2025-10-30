import React, { useEffect, useState } from "react";
import { MoreHorizontal, Heart, MessageCircle, Send, Bookmark } from "lucide-react";
import postApi from "../../utils/postApi";

function ContentBar() {
    const [allPosts,setAllPosts] = useState([])




// Call api to get all posts
    async function getAllPosts() {

        try{
            const posts = await postApi.get("/all-posts")
            setAllPosts(posts.data.data)

        }catch(err){
            alert("failed to get post refresh the page")
            console.log(err,'err in get all posts')
        }
    }



    useEffect(()=>{
        getAllPosts()
    },[])

    console.log(allPosts)

    return (
        <div className="flex flex-col items-center gap-10">
            {allPosts.map((post) => (
                <div
                    key={post.id}
                    className="bg-[#0b0b0b] border border-gray-800 rounded-md w-full max-w-lg"
                >
                    {/* Header */}
                    <div className="flex items-center justify-between px-4 py-3">
                        <div className="flex items-center gap-3">
                            <img
                                src={post.image}
                                alt={post.user}
                                className="w-8 h-8 rounded-full"
                            />
                            <div>
                                <p className="text-sm font-semibold">{post.user}</p>
                                <p className="text-xs text-gray-400">Hyderbad</p>
                            </div>
                        </div>
                        <MoreHorizontal size={18} className="text-gray-400" />
                    </div>

                    {/* Post image */}
                    <img
                        src={post.image}
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
                            {post.text}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">{post.createdAt} ago</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ContentBar;
