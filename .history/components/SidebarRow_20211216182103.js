function SidebarRow({ Icon, title, src }) {
    return (
        <div>
            {src ? (
                <div>
                </div>
                <Image 
                    src={src}
                />
                <h1>{title}</h1>

            ) : (
                <div>

                </div>
            )}
        </div>
    )
}

export default SidebarRow
