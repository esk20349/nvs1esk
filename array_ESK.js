
let esk = new Array(100).fill();
//console.log(esk);

const y = esk.map(() => Math.round(Math.random() * (1000 - 2)) + 2);
console.log(y);
console.log("Größte Zahl: " + Math.max(...y));    
console.log("Kleinste Zahl: " + Math.min(...y));    

function isPrim(n){
    for (i=2; i <= n-1; i++){
        if(n%i === 0){
            return false;
        }
    }
    return true;
} 
pri = y.filter(isPrim);
console.log("Primzahlen: "+ pri);


const pri_sorted = pri.sort((a, b) => a - b);
console.log("Aufsteigend sortiert: "+ pri_sorted);