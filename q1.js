let n = 6;
let x = new Array(n);
const arr = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let s=1;
let k = n-s;


for (let i = 0; i < x.length; i++) {
  x[i] = new Array(n);
}

for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
        if(k==26){
            k=0;
        }
        x[i][j]=arr[k];
        k=k+n;
    }
    s++;
    k=n-s;
}
console.log(x);
