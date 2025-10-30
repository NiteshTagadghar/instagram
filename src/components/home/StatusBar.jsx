import React, { useRef, useState } from "react";
import postApi from "../../utils/postApi";
import axios from "axios";

function StatusBar() {
    const stories = [
        { name: "iam_anus", img: "https://i.pravatar.cc/80?img=1" },
        { name: "acciojob_", img: "https://i.pravatar.cc/80?img=2" },
        { name: "tej", img: "https://i.pravatar.cc/80?img=3" },
        { name: "dr_sam", img: "https://i.pravatar.cc/80?img=4" },
        { name: "arun", img: "https://i.pravatar.cc/80?img=5" },
        { name: "royal", img: "https://i.pravatar.cc/80?img=6" },
    ];

    const [allPosts, setAllPosts] = useState(stories)

    const fileInputRef = useRef()

    const handleFileChange = async (e) => {
        const file = e.target.files[0]

        if(!file){
            alert("file not uploaded!!")
            return
        }


       const url =  await uploadFileInCloud(file)

        await createPost("My Post",url)

        

        // postApi.post("url",body)

    }


    // Upload file and return url
    async function uploadFileInCloud(file){
        
        const formData = new FormData()
        formData.append("file",file)


        try{
            const uploadRes = await postApi.post("/upload",formData)
            const url = uploadRes.data.data.file_url

            if(url){
                return url
            }else{
                throw new Error("Url not found")
            }

        }catch(err){
            console.log("error",err)
            alert("something went wrong upload file again")
        }



    }


    // Create post
    async function createPost(text,url){
       
        if(!text || !url) {
            alert("caption and image is required")
            return
        }

        const createPostRes = await postApi.post("/create",{text,image : url})

        console.log(createPostRes,'create post response')
    }

    return (
        <div className="flex justify-center min-w-full gap-6 overflow-x-auto no-scrollbar px-2 py-2">

            <div className="flex flex-col items-center text-center shrink-0">
                <input
                    type="file"
                    accept="image/*"
                    className="hidden"

                    ref={fileInputRef}
                    onChange={handleFileChange}
                />

                <div
                    className="p-[3px] rounded-full bg-gradient-to-tr from-pink-500 to-yellow-400 cursor-pointer hover:scale-105 transition-transform"
                    onClick={()=>

                        {
                            console.log(fileInputRef.current,'input file')
                            fileInputRef.current.click()
                        }
                    }
                >
                    <img
                        src={"https://i.pravatar.cc/80?img=6"}
                        alt="Upload story"
                        className="w-20 h-20 rounded-full border-[3px] border-black object-cover"
                    />
                </div>
            </div>


            {allPosts.map((story, i) => (
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
