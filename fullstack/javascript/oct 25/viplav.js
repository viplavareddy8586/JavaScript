let a=400
let b=500
let c=100
let max,min
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
console.log("max---->"+max)
console.log("min----->"+min)