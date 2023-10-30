/*Given an array arr of N elements,  A majority element in an array arr of size N is an 
element that appears more than N/2 times in the array. The task is to write a function say isMajority() that 
takes an array (arr[] ), array’s size (n) and a number to be searched (x) as parameters and returns true 
if x is a majority element (present more than n/2 times).

Examples: 

Input: arr[] = {1, 2, 3, 3, 3, 3, 10}, x = 3
Output: True (x appears more than n/2 times in the given array)

Input: arr[] = {1, 1, 2, 4, 4, 4, 6, 6}, x = 4
Output: False (x doesn't appear more than n/2 times in the given array)

Input: arr[] = {1, 1, 1, 2, 2}, x = 1
Output: True (x appears more than n/2 times in the given array)*/
let b=[1,2,3,3,3,3,10]
let x
let fnumber=0
let fcount=0
let dup=[]
for(let i=0;i<b.length;i++){
    let isrepeat=false
    for(let k=0;k<b.length;k++){
     if(dup[k]==b[i]){
       isrepeat=true
     }
    }
    if(isrepeat==false){
    let count=0
    dup[i]=b[i]
    for(let j=i+1;j<b.length;j++){
       if(b[i]==b[j]){
        count++
       }
    }
    if(fcount<count){
        fcount=count
        fnumber=b[i]
    }
}
}
fcount=fcount+1
if(fcount>b.length/2){
    console.log(true)
}else{
    console.log(false)
}
