const randomWords = {
    laugh: ["HAHAHAHA","lol","lmao","LMFAO"],
    food: ["pasta","pizza","burgers","cake","apple","chocolate","ice cream"],
    result: ["passed","failed"],
    school: ["math","physics","chemistry","english","arabic","islamic studies","biology"]
}
const randomNumber=(x)=>{
    return Math.floor(Math.random()*x);
}

let wisdom=[];

for(let thing in randomWords)
{
    let n=randomNumber(randomWords[thing].length);
    switch(thing)
    {
        case 'laugh':
            wisdom.push(`you used ${randomWords[thing][n]} to laugh`);
            break;
        case 'food':
            wisdom.push(`you need to eat ${randomWords[thing][n]}`);
            break;
        case 'school':
            wisdom.push(`you ${randomWords['result'][Math.floor(Math.random()*2)]} in the ${randomWords[thing][n]} exam.`);
            break;
    }
}
let finalWisodm=wisdom.join(", ");
console.log(finalWisodm);