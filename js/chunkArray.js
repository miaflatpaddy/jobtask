    function chunkArray(arr,len){
        var nextIndex = 0;
        let array=[];
        let r = 0;
        let u = 0;
        array[0]=[];
        for (let i = 0; i < arr.length; i++) {
            array[r][u] =arr[i];
            if(u == len-1){
                r++;
                array[r]=[];
                u = 0;
            } else {
                u++;
            }
        }
        array.forEach(element => {
            console.log(element)
        });

            return {
                next: function () {
                return nextIndex < array.length
                ? { done: false,value: array[nextIndex++] }
                : { done: true };
                },
                };
    }
