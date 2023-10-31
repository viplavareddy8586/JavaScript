function viplav(str,len){
 let ch=" "
 let newlinefound=false
 let res=" "
    for(let i=0;i<len;i++){
      ch=str[i]
    if(newlinefound==true){
     ch=ch.toUpperCase()
     newlinefound=false
    }
    res=res+ch

      if(ch=='.'){
        newlinefound=true 
      }
    }
    return res
}
let data="Hi very good morning.welcome to unocareer.i have been training on React."
let coverttocapital=viplav(data,data.length)

console.log(coverttocapital)