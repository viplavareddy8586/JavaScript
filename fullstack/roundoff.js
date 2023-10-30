function myroundoff(num,r){
    let p=1
    for(let i=1;i<=r+1;i++){
        p=p*10
    }
    let m=num*p //2987.12
    p=p/10//1000/10=100
    p=p|0
    m=m|0//2987
    let last=m%10//2987%10=7
    m=m/10//2987/10=298.7
    m=m|0//298
    if(last>5) m++//299
    m=m/p//299/100=2.99
    return m
}
console.log(myroundoff(2.98712,2))
