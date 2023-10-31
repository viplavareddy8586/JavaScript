function viplav(str,schar,len){
    let ch 
    let temp=" "
    let mywords=[]
let index=0
    for(let i=0;i<len;i++){
        ch=str[i]
        if(ch==schar){
            mywords[index]=temp
            temp=""
            index++
        }
        else temp=temp+ch
    }
    return mywords
}
let data="Hi very good morning.welcome to unocareer.I have been training on React."
let totalwords=viplav(data," ",data.length)
console.log(" total words length--->"+totalwords.length)
console.log("total no of words--->"+totalwords )
