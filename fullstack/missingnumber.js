let a=[4,2,3,1,6]
let t
for(let i=0;i<a.length;i++){
    for(let j=i+1;j<a.length;j++){
        if(a[i]>a[j]){
         t=a[i]
         a[i]=a[j]
         a[j]=t
        }
    }
}
console.log(a)
for(let k=0;k<a.length;k++){
    if(a[k]!=k+1){
        console.log("missingnum--->"+(k+1))
        break
    }
}