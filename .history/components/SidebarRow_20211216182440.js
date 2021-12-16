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
          <Icon 
            className="h-8 w-8 text-blue-500"
          />
      )}
      <p>
          {title}
        </p>
    </div>
  );
}

export default SidebarRow;
