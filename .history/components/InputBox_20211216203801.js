import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import db from "../firebase";

function InputBox() {
    const [post, setPost] = useState("")
    const { data: session } = useSession();

    const sendPost = (e) => {
        e.preventDefault();
        db.collection("posts").add({
            post: post
        }).then(() => {
            setPost("")
        })
    };

  return (
    <div className="mt-6 bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium">
      <div className="mb-5 mt-2 flex space-x-4 items-center">
        <Image
          src={session.user.image}
          className="rounded-full"
          width={40}
          height={40}
          layout="fixed"
        />
        <form className="flex flex-1" onSubmit={sendPost}>
          <input
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
            type="text"
            value={post}
            onChange={(event) => setPost(event.target.value)}
            placeholder={`What's on your mind ${
              session.user.name.split(" ")[0]
            }?`}
          />
        </form>
      </div>

      <div className="flex justify-evenly p-3 border-t">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>
        <div className="inputIcon">
          <CameraIcon className="h-7 text-green-400" />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
        </div>
        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-300" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
