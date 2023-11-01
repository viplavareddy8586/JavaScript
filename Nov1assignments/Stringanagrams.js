let data1="liften"
let data2="silent"
 let anagram=true

for(let i=0;i<data1.length;i++){
    let isana=false;
    for(let j=0;j<data2.length;j++){
        if(data1.charAt(i)==data2.charAt(j)){
           isana=true
           break
        }
    } 
    if(isana==false){
        anagram=false
        break
    }
   }
   if(anagram){
    console.log("anagrams")
   }
else{
    console.log("both are not anagrams")
}
