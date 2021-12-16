import Image from "next/image";
import { useSession } from "next-auth/react";

function InputBox() {
  const { data: session } = useSession();
  return (
    <div>
      <div className="flex space-x-4 items-center ">
        <Image
          src={session.user.image}
          className="rounded-full"
          width={40}
          height={40}
          layout="fixed"
        />
        <form className="flex flex-1">
          <input
            className="rounded-full h-12"
            type="text"
            placeholder={`What's on your mind ${session.user.name}?`}
          />
          <button></button>
        </form>
      </div>
    </div>
  );
}

export default InputBox;
