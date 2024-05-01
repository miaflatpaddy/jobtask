    function mapper(x, rules){
        let array = [];
        let i =0;
        x.forEach(element => {
            let u = element;
            array[i]=new Map();
            rules.forEach(element1 => {
                let k = element1;
                array[i].set(element1[1],u[element1[0]])
                if(typeof element1[2]!== "undefined"){
                    array[i].set(k[1],element1[2](u[k[0]]));
                }
            });
            i++;
        });
        return array;
    }
let testData3 = [{"name":"Vasya","email":"vasya@example.com","age":20,"skills":{"php":0,"js":-1,"madness":10,"rage":10}},{"name":"Dima","email":"dima@example.com","age":34,"skills":{"php":5,"js":7,"madness":3,"rage":2}},{"name":"Colya","email":"colya@example.com","age":46,"skills":{"php":8,"js":-2,"madness":1,"rage":4}},{"name":"Misha","email":"misha@example.com","age":16,"skills":{"php":6,"js":6,"madness":5,"rage":2}},{"name":"Ashan","email":"ashan@example.com","age":99,"skills":{"php":0,"js":10,"madness":10,"rage":1}},{"name":"Rafshan","email":"rafshan@example.com","age":11,"skills":{"php":0,"js":0,"madness":0,"rage":10}}]

const mapRules = [
  ["name", "n", (value) => value.toLowerCase()],
  ["age", "a"]
]

console.log(mapper(testData3,mapRules)) 
