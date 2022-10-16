
var startPoint = new Date().getTime();

const fs = require('fs');

console.clear()
console.log("RANDOM KEYS");
console.log('======================================')

function randID(n){

        function randomMinMax(min, max){
            return Math.floor(Math.random() * (max - min + 1) + min)
        }
    
        var abc  = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"];
        var num   = ["1","2","3","4","5","6","7","8","9"];
        var n_abc = abc.length-1;
        var n_num = num.length-1;
        var key   = '';
        
        for(let i=0; i<=n; i++){    
            var rdn = Math.random();
            if(rdn<=0.5){
                key = key  + abc[ randomMinMax(0,n_abc) ] + num[ randomMinMax(0,n_num) ];
            }else{
                key = key + num[ randomMinMax(0,n_num) ] + abc[ randomMinMax(0,n_abc) ];
            }
        }
        return key
}

var txt = 'RANDOM KEYS \n \n';

for(let i=1; i<=10; i++){  

    txt+= `KEY_${i}_${randID(50)} \n`;
}

var endPoint = new Date().getTime();

var lapseTime = `\nTime: ${(endPoint-startPoint)/1000} s`
console.log(lapseTime)

txt+=lapseTime 

fs.writeFile('app2_randomKeys.txt',txt, (err) => {

    if (err){throw err};

    console.log('The file has been saved!');

    
});






