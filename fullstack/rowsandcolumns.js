let matrix=[ [1,2,3],[3,4,5],[6,7,8]]
let rsum=[0,0,0]
for(let r=0;r<3;r++){
    for(let c=0;c<3;c++){
    rsum[r]=rsum[r]+matrix[r][c]
    }
}
for(let i=0;i<3;i++){
    console.log("row"+(i+1)+"sum-->"+rsum[i])
}