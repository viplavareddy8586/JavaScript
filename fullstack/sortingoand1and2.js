let a=[0,1,1,2,2,0,1,0,2,0,1,2]

for(let i=0;i<a.length;i++){
    let t
    for(let j=i;j<a.length-1;j++){
        if(a[i]>a[j]){
            t=a[i]
            a[i]=a[j]
            a[j]=t
        }
    }
}
    console.log(a)