const a = [1, 2, [3, 4, [5]]]



function flat(arr){
    const result=[];

    arr.forEach(item => {
        if(Array.isArray(item)){
            result.push(...flat(item));
        }else{
            result.push(item);
        }
        
    });
    return result;

}
console.log(flat(a));