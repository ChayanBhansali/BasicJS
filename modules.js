// modules
const sayhi = (name)=>{
    console.log(`hello there ${name}`)
}

const names = require('./name')
console.log(names)
const alternativeFlavors = require('./alternativeFlavors')
console.log(alternativeFlavors.list[0])