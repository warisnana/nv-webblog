function a(){
let waris=[
{
    "a":"waris",
    "b":"wongislam"
}
,{
    "a":"w",
    "b":"won"
}



]
let b={
    "a":"waris",
    "b":"wongislam"
}
waris.push(b)

for(let i=0;i<waris.length;i++){
    console.log("name : "+waris[i].a)
    console.log("name : "+waris[i].b)
}


}
module.exports=a