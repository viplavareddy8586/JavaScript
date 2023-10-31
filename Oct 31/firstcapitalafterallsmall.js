function capsmall(str,len){
    let ch=" "
    let res=""
    let newlinefound=false
    for(let i=0;i<len;i++){
        ch=str[i]
        if(i==0){
            ch=ch.toUpperCase()
            res=res+ch
        }
        else{
        if(newlinefound==true){
            ch=ch.toUpperCase()
            newlinefound=false
        }
        else{
            ch=ch.toLowerCase()
        }
        res=res+ch
        if(ch=='.'){
            newlinefound=true
        }
    }

    }
    return res
}
let data="It is very Difficult to Count."+"this is Sample Data."+"welcome to Hyderabad."
let finaldata=capsmall(data,data.length)
console.log(finaldata)