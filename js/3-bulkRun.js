    function bulkRun(func){
        let array = []
        i=0;
        func.forEach(element => {
            array[i] = eval(element)[1];
            i++;
        });
        return array;
    }
