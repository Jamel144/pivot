var rannum = [1,2,3,45,90,125,2001,1001, 2315, 2442, 9, 9754, 865]

function findbignum(rannum){
    var list = [0]

    for (let i=0; i<rannum.length; i++){
        if (list[0]<rannum[i]){
            console.log(list)
            console.log(list[0]>rannum[i])
            list.shift()
            list.push(rannum[i])
        }

        //console.log(list)
    }
}

findbignum(rannum)