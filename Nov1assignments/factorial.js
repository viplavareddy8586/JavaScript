let d=5,D=1
let r=2,R=1
let K=1
for(let i=d;i>=1;i--){
    D=D*i
}
for(let j=r;j>=1;j--){
R=R*j
}
for(let k=d-r;k>=1;k--){
K=K*k
}
let ncr=D/(R*K)
console.log(ncr)
console.log(D)
console.log(R)
console.log(K)
