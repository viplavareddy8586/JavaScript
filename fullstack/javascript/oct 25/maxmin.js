let num=856432
let max=0
let min=9
let r
while(num!=0){
r=num % 10
num=num / 10
num=parseInt(num,10)
if(r > max){
    max=r
}
if(r < min){
    min=r
}
}
console.log(max)
console.log(min)
