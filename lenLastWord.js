let s = "   fly me   to   the moon  "

let words = s.split(' ');

let res = []


for (let i = 0; i < words.length; i++) {
    if(words[i] != "") {
        res.push(words[i]);
    }
}


let last = res[res.length-1]

console.log(last.length);

console.log(res);