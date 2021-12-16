import Image from "next/image";
import { useSession } from "next-auth/react"

function InputBox() {
    const { data: session } = useSession()
  return (
    <div>
      <Image
        src={session.user.image}
        className="rounded-full"
        width={40}
        height={40}
        layout="fixed"
      />
      <form className="flex">

      </form>
    </div>
  );
}

export default InputBox;
