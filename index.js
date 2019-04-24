function findMatching(array, string) {
    return array.filter(function (index) {return index.toLowerCase() === string.toLowerCase()})
}

function fuzzyMatch(array, string) {
    let matchingArray = []
    array.filter(function (index) {
        const letters = index.slice(0, string.length)
        if (letters === string) {
            matchingArray.push(index)
        }  
    })
    return matchingArray
}

function matchName(array, string) {
    const newArray = []

    array.filter(function (index) {
        if (index.name === string) {
            newArray.push(index)
        }
    })

    return newArray
}