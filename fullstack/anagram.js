function findlen(num){
    let len=0
    while(num!=0){
        num=num/10
        num=num|0
        len++
    }
    return len
}
let num1=3214
let num2=4321
let num1len=findlen(num1)
let num2len=findlen(num2)
if(num1len==num2len){
let num1arr=[0,0,0,0,0,0,0,0,0,0]
let num2arr=[0,0,0,0,0,0,0,0,0,0]
let r1
let r2
while(num1!=0){
    r1=num1%10
    num1=num1/10
    num1=num1|0
    num1arr[r1]++
    r2=num2%10
    num2=num2/10
    num2=num2|0
    num2arr[r2]++
}
let isanagram=true
for(let i=0;i<9;i++){
    if(num1arr[i]!=num2arr[i]) {
        isanagram=false
         break
    }
}    
if(isanagram==true) console.log("both are anagrams")
else console.log("both are not anagrams")

}
