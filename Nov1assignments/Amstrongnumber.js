let input=153
let data=input
let r,res=0
while(input!=0){
r=input %10
input=input/10
input=input|0
res=res+(r*r*r)
}
console.log(res)
if(res==data){
    console.log("Amstrong number-------->"+res)
  }
else{
    console.log(" Not Amstrong number-------->"+res)
}