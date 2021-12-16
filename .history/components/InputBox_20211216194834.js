import Image from "next/image";
import {useSe}

function InputBox() {
  return (
    <div>
      <Image
        src={session.user.image}
        className="rounded-full"
        width={40}
        height={40}
        layout="fixed"
      />
    </div>
  );
}

export default InputBox;
