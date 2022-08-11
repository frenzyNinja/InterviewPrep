const TextColor = {
    Red: "\x1b[31m",
    Green: "\x1b[32m",
    Yellow: "\x1b[33m",
    Blue: "\x1b[34m"
}

// const BackgroundColor = {
//     Red: "\x1b[41m",
//     Green: "\x1b[42m",
//     Yellow: "\x1b[43m",
//     Blue: "\x1b[44m"
// }

export function displayTitle(msg) {
    console.log(TextColor.Red, msg);
}

export function printNode(node) {
    console.log(TextColor.Green, node.data); 
}
