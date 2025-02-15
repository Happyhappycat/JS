let hashmap={}

hashmap={name:"Harsha",age:"20"}
hashmap.greeting=function(){
    console.log(`Hello JS user, ${this.name}`)
}
console.log(hashmap.greeting())
