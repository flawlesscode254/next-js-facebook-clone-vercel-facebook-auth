function SidebarRow({ Icon, title, src }) {
    return (
        <div>
            {src ? (
                <Image 
                    src={src}
                />
                <h1>{}</h1>
            ) : (

            )}
        </div>
    )
}

export default SidebarRow
