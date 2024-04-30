    function nodeChildCount(node,deep=0){
        let count = 0;
        count+=node.childNodes.length;
        if(deep==0){
            node.childNodes.forEach(element => {
                count+=nodeChildCount(element)
            });
        }
        deep--;
        if(deep>=1){
            node.childNodes.forEach(element => {
                count+=nodeChildCount(element,deep)
            });
        }
        return count;
    }
