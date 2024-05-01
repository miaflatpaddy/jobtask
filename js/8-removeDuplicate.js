    class str{
        static{
            str.prototype.removeDuplicate = function (){
                var reg = '~\b\p{L}{1,}\b~u';
                var arr = this.str.split(' ');
                for (let i = 0; i < arr.length; i++) {
                    if(i>=1&&arr[i]!==arr[i-1]){
                    }
                    else if (i>=1&&arr[i]==arr[i-1]){
                        this.str = this.str.replace(arr[i],'');
                        this.str = this.str.trimStart();
                    }       
                }
            };
        }
        constructor(str){
            this.str = str;
        }
    }


        
    let x = new str("Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Double Double Double");

x.removeDuplicate() 
