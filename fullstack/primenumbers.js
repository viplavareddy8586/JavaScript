function prime(num){
    let count=0
    for(let i=1;i<=num;i++){
        if(num%i==0) count++
    }
    if(count==2) return true
    else return false
}
for(let k=1,count=0;k<=100;k++){
    if(prime(k)==true){
    console.log(k)
   count++
   if(count==7){
   break
}
    }
}