let num=95665
let r
let d=0
let p=1
while(num!=0){
    r=num%10
    num=num/10
    num=parseInt(num,10)
    if(r==5) continue
    if(r==6) continue 
    d=d+r*p
   p=p*10
}
console.log("number"+"="+d)
