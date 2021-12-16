const stories = [
    {
        name: "Elon Musk",
        src: "https://links.papareact.com/zof",
        profile: "https://links.papareact.com/l4v"
    },
    {
        name: "Duncan Kipkemoi",
        src: "https://links.papareact.com/zof",
        profile: "https://links.papareact.com/l4v"
    },
    {
        name: "Jeff Bezos",
        src: "https://links.papareact.com/zof",
        profile: "https://links.papareact.com/l4v"
    },
    {
        name: "Mark Zuckerberg",
        src: "https://links.papareact.com/zof",
        profile: "https://links.papareact.com/l4v"
    },
    {
        name: "Joe Rogan",
        src: "https://links.papareact.com/zof",
        profile: "https://links.papareact.com/l4v"
    }
]

import StoryCard from "./StoryCard"

function Stories() {
    return (
        <div className="flex justify-center space-x-3 mx-auto">
            {stories.map((story) => (
                <StoryCard 
                    name={stor}
                />
            ))}
        </div>
    )
}

export default Stories
