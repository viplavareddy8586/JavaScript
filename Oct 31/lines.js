let data="Hi very good morning.welcome to unocareer.I have been training on React."
let sdata
let count =0
for(let i=0;i<data.length;i++){
sdata=data.charAt(i)

if(sdata=='.'){
   count++
    
}

}
console.log("count------>"+count)