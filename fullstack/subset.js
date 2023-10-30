let a=[1,2,3,4,5,6,7,8,9,10,11]
let b=[5,6,7,8]
let subset=true
for(let i=0;i<b.length;i++){
    let gotvalue=false
    for(let j=0;j<a.length;j++){
        if(b[i]==a[j]) gotvalue=true;
    }
    if(gotvalue == false){
        subset=false
        break
    }
}
if(subset==true) console.log("B is subset of A")
else console.log("B is not subset of A")