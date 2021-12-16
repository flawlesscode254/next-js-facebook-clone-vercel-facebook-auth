function SidebarRow({ Icon, title, src }) {
    return (
        <div>
            {src ? (
                <Image 
                    src={src}
                />
                <h1>{title}</h1>
            ) : (

            )}
        </div>
    )
}

export default SidebarRow
