let matrix = [ 
    [1,2,3,4,5],
    [4,5,6,7,8],
    [7,8,9,1,2],
    [1,2,3,4,5],
    [6,7,8,9,1]
  ]
  let rsumr=[0,0,0,0,0]
  for(let r=0;r<5;r++){
    for(let c=0;c<5;c++){
        if(r==0){
         rsumr[r]=rsumr[r]+matrix[r][c]
        }
        if(r==4){
            rsumr[r]=rsumr[r]+matrix[r][c]  
        }
    }
    if(r==0){
        console.log("rows--->"+(r)+"sum"+rsumr[r])
    }
    if(r==4){
        console.log("rows--->"+(r)+"sum"+rsumr[r])
    }
  }
  let csumc=[0,0,0,0,0]
  for(let co=0;co<5;co++){
    for(let ro=0;ro<5;ro++){
        if(co==4){
            csumc[co]=csumc[co]+matrix[ro][co]
        }
        if(co==0){
            csumc[co]=csumc[co]+matrix[ro][co]
        }
    }
    if(co==4){
        console.log("column---->"+(co)+"sum"+csumc[co])
    }
    if(co==0){
        console.log("column---->"+(co)+"sum"+csumc[co])
    }
  }