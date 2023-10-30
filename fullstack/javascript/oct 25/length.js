let num=1234567
let r
let sum=0
let count=0
while(num!=0){
    count=count+1
    r=num%10
    num=num/10
    num=parseInt(num,10)
    sum=sum+r
}
console.log("count---->"+count)
console.log("sum---->"+sum)