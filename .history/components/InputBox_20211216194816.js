import Image from "next/image";

function InputBox() {
  return (
    <div>
      <Image
        src={session.user.image}
        className="rounded-full cursor-pointer"
        width={40}
        height={40}
        layout="fixed"
        onClick={() => signOut()}
      />
    </div>
  );
}

export default InputBox;
