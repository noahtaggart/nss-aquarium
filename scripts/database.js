const database = {
    fish: [
        {
            name: "Bart",
            food: "crustaceans",
            size: 3
        },
        {
            name: "Magikarp",
            food: "rice balls",
            size: 2
        },
        {
            name: "Sharpedo",
            food: "Magikarp",
            size: 5
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}