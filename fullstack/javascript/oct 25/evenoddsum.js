let num=8765432
let evensum=0
let oddsum=0
let r
while(num!=0){
    r=num%10
    num=num/10
    num=parseInt(num,10)
    if(r%2==0) evensum=evensum+r
    if(r%2!=0) oddsum=oddsum+r
}
console.log(evensum)
console.log(oddsum)