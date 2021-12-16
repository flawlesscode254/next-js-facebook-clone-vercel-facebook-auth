function SidebarRow({ Icon, title, src }) {
    return (
        <div>
            {src ? (
                <div>
                                    <Image 
                    src={src}
                />
                <h1>{title}</h1>
                </div>
            ) : (
                <div>

                </div>
            )}
        </div>
    )
}

export default SidebarRow
