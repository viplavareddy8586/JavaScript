let data="swiss"
let c
for(let i=0;i<data.length;i++){
    let count=0
    for(let j=0;j<data.length;j++){
        if(data.charAt(i)==data.charAt(j)){
          count++
        }  
    }
    if(count==1){
        c=data.charAt(i)
        break
        }
}
console.log(c)