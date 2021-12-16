function SidebarRow({ Icon, title, src }) {
    return (
        <div>
            {src ? (
                <Image 
                    src={src}
                />
            ) : (

            )}
        </div>
    )
}

export default SidebarRow
