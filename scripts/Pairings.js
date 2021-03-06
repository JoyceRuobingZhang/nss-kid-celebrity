/*
The pairings list should contain the pairing in the following format:
{child name} will be making memories with {celebrity name}, a {celebrity sport} star, by {child wish}
*/

import { getChildren, getCelebrities } from "./database.js"

const kids = getChildren()
const celebrities = getCelebrities()


//corrected the function
//the function below 的作用是：找到某一个 specific kid 的 matching star。
const findCelebrityMatch = (kid, celebrityArray) => {
    let kidCelebrityMatch = null
        // 因为已知kidCelebrity将会为一个string，所以也可以直接 declare： let kidCelebrity；
        // 但是如果已知要declare的datatype将会是array，那就要declare： let kidCelebrity = []；

    for (const star of celebrityArray) {
        if (star.id === kid.celebrityId) {
            kidCelebrityMatch = star
        }
    }
    return kidCelebrityMatch
}


// 此function的作用是：输出HTML内容。
export const Pairings = () => {
    let html = ""
    html = "<ul>"
        // 可以直接declare：  let html = "<ul>" 吗？

    //the loop below的作用：loop kids, 把每个kid带入上面的function，即findCelebrityMatch，让每个孩子找到其对应的 matching star。
    //corrected the for loop
    for (const kid of kids) {
        const currentKidCelebrity = findCelebrityMatch(kid, celebrities)
        html += `
            <li>
            ${kid.name} will be making memories with ${currentKidCelebrity.name}, a ${currentKidCelebrity.sport} star, by ${kid.wish}
            </li>
        `
    }

    html += "</ul>"

    return html
}