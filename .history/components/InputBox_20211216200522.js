import Image from "next/image";
import { useSession } from "next-auth/react";
import {EmojiHappyIcon} from "@heroicons/react/outline"
import {CameraIcon, VideoCameraIcon} from "@heroicons/react/solid"

function InputBox() {
    const { data: session } = useSession();

    const sendPost = (e) => {
        e.preventDefault()
    }

  return (
    <div className="mt-6 bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium">
      <div className="flex space-x-4 items-center">
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
            placeholder={`What's on your mind ${session.user.name.split(" ")[0]}?`}
          />
        </form>
      </div>
      
      <div>
          <div>
            <VideoCameraIcon 
                className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
            />
            <p className="text-xs sm:text-sm xl:text-base">
                Live Video
            </p>
          </div>
          <div>

          </div>
          <div>

          </div>
      </div>
    </div>
  );
}

export default InputBox;
