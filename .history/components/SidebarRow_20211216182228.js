import Image from "next/image";

function SidebarRow({ Icon, title, src }) {
  return (
    <div>
      {src ? (
        <div>
            <Image 
                src={src} 
                className="rounded-full"
                width={}
            />
          <h1>{title}</h1>
        </div>
      ) : (
        <div>
          <Icon />
          <h1>{title}</h1>
        </div>
      )}
    </div>
  );
}

export default SidebarRow;
