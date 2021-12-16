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
        </div>
      )}
      {Icon && (
        <div>
          <Icon />
          <h1>{title}</h1>
        </div>
      )}
    </div>
  );
}

export default SidebarRow;
