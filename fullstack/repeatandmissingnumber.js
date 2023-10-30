let a=[4,3,6,5,7,9,2,1,1]
let repeatednumber
let min=a[0]
let max=a[0]
let sum=0
let tsum=0
let missingnumber=0
for(let i=0;i<a.length;i++){

        if(a[i]>max){
            max=a[i]
        }
        if(a[i]<min){
            min=a[i]
        }
        sum=sum+a[i]
        for(let k=0;k<a.length;k++){
            if(a[i]==a[k]){
           repeatednumber=a[i]
            }
        }
    }
    for(let j=min;j<=max;j++){
    tsum=tsum+j
    }
    // console.log("-------"+tsum)
    // console.log(sum)
    
    missingnumber=tsum-(sum-repeatednumber)
    console.log(missingnumber)
    console.log(repeatednumber)

