function findlen(num){
    let len=0
    while(num!=0){
        num=num/10
        num=num|0
        len++
    }
    return len
}
let n=1234
let m=3214
let nlen=findlen(n)
let mlen=findlen(m)
if(nlen==mlen){
let carr=[0,0,0,0,0,0,0,0,0,0]
let nr 
let mr 
while(n!=0){
    nr=n%10
    n=n/10
    n=n|0
   carr[nr]++
   mr=m%10
   m=m/10
   m=m|0
   carr[mr]--
}
let isanagram=true
for(let i=0;i<=9;i++){
    if(carr[i]!=0) {
        isanagram=false
}
}
if(isanagram==true)
{
     console.log("both are anagrams")
}
else {
console.log("both are not anagrams")
}
}
