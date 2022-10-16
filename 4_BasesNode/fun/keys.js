const fs = require('fs');

function randomMinMax(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function randKey(n=50){

    var abc   = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"];
    var num   = ["1","2","3","4","5","6","7","8","9"];
    var sim   = ["?","¿","*","^","%","$","#","@","=","%","€","<",">","&"];
    var n_abc = abc.length-1;
    var n_num = num.length-1;
    var n_sim = sim.length-1;
    var key   = '';

    for(let i=0; i<=n; i++){    
        var rdn = Math.random();
        if(rdn<=0.5){
            key = key  + abc[ randomMinMax(0,n_abc) ] + sim[ randomMinMax(0,n_sim) ] + num[ randomMinMax(0,n_num) ];
        }else{
            key = key + num[ randomMinMax(0,n_num) ] + sim[ randomMinMax(0,n_sim) ] + abc[ randomMinMax(0,n_abc) ];
        }
    }

    return key

}

const  randKeyMain = async (n=5,listar=false)=> {
      
      try{
            var startPoint = new Date().getTime();
            var txt        = 'RANDOM KEYS \n====================================== \n \n';
            var fileName   = 'app2_randomKeys.txt';

            for(let i=1; i<=n; i++){  

                txt+= `KEY_${i}: ${randKey()} \n`;
            }

            var endPoint = new Date().getTime();

            var lapseTime = `\nTime: ${(endPoint-startPoint)/1000} s`

            txt+=lapseTime 

            fs.writeFile(`./outputFiles/${fileName}`,txt, (err) => {

                if (err){throw err};

            });
            
            if(listar){
                       console.log(txt);
            }

            return fileName


    }catch(err){

        console.log(err)
    }

}

module.exports = {randKeyMain};








