let a=400
let b=500
let c=100
let max,min
let secondlargest
if(a>b){
    max=a
    min=b
}
else{
    max=b
    min=a
}
if(c>max)
{ 
    max=c
}
if(c<min){
    min=c
}
if((a<max) &&(a>c)){
    secondlargest=a
}

console.log("max---->"+max)
console.log("min----->"+min)
console.log("secondlargest---->"+secondlargest)