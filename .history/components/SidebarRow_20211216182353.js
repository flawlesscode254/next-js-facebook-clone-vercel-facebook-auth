import Image from "next/image";

function SidebarRow({ Icon, title, src }) {
  return (
    <div>
      {src && (
          <Image
            src={src}
            className="rounded-full"
            width={30}
            height={30}
            layout="fixed"
          />
      )}
      {Icon && (
          <Icon />
      )}
    </div>
  );
}

export default SidebarRow;
