var fs=require('fs')
var obj = JSON.parse(fs.readFileSync('./data.json','utf8'));

console.log (obj);
console.log("hello");
//console.log(JSON.parse(JSON.stringify(obj)));

console.log ("Arraylänge: " + obj.numbers.length); 


var i, j, a, b, pos;


// höchstes Element finden
let again = true;
while (again) {
    again = false;
    for (j=0; j<obj.numbers.length-1;j++) {
        
        

            if (obj.numbers[j] <= obj.numbers[j+1]) {
                continue;
            } else {
                let ring = obj.numbers[j];
                obj.numbers[j]=obj.numbers[j+1];
                obj.numbers[j+1]=ring;  
                again = true;      
            }
            //console.log (obj )
            //console.log('bei Wert '+ j);
            //console.log ('Wert ' + obj.numbers[j] + ' auf Position' + j);
    };
};

 console.log (obj);
 console.log('hello') 