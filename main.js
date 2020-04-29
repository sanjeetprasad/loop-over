/*Loop over every item in this array:

[45, “I”, true, null, “am”, 3.56, “a”, undefined, { catchphrase: “Oh hai, Mark”}, “JS”, “rockstar”]

Return a new array that contains only strings. Log out the result.

Hint: The typeof operator
*/

const array = [45, 'I', true, null, 'am', 3.56, 'a', undefined, { catchphrase: 'Oh hai, Mark'}, 'js', 'rockstar']

const array_2 = []

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (typeof element === "strings") {
        array_2.push (element);
    }
}

console.log(array_2);