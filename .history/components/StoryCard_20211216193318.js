import Image from "next/image"

function StoryCard({ name, src, profile }) {
    return (
        <div className="relative h-14 w-14 md:h-20 md:w-20
            ">
            <Image 
                className="absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10"
                src={profile}
                layout="fixed"
                objectFit="cover"
                width={40}
                height={40}
            />
            <Image 
                className="object-cover filter brightness-75 rounded-full lg:rounded-3xl"
                src={src}
                layout="fill"
            />
        </div>
    )
}

export default StoryCard
