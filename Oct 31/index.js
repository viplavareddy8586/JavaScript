let data="welcome to hyderabad. Good morning everyone"
//let index=data.indexOf('h')
//let lastindex=data.substring(11,data.length)
//console.log(lastindex)
let sdata=data.split(" ")
let maxword=sdata[0]
for(let i=1;i<sdata.length;i++){
    
    if(sdata[i].length>maxword.length){
        maxword=sdata[i]
    }

}
console.log("maxword-------->"+maxword)
console.log(" total length of maxword----->"+maxword.length)