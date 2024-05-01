function func(mat){
    let min = mat[0][0];
    console.log(min);
    mat.forEach(element => {
        element.forEach(element1 => {
            if(element1<min){
                min = element1;
            }
        });
    });
    let mmat=[];
    let i=0;
    let k = 0;
    mat.forEach(element => {
        mmat[i]=[]
        element.forEach(element1 => {
            if(element1%2!=0){
                mmat[i][k]=element1*min;
                k++
            }
            else{
                mmat[i][k]= element1;
            }
        });
        k=0;
        i++;
    });
    return mmat;
}
