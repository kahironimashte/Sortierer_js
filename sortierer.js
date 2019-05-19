// const weil sich die Variable nicht ändern wird
const fs = require('fs');

// 'utf8' wird als Encoding-Option übergeben
// async-Verion (funktioniert hier gerade nicht)
//var obj;
//fs.readFile('./data.json', 'utf8', function (err, data) {
//  if (err) throw err;
  //console.log (data);
//  obj = JSON.parse(data);
//});


var obj = JSON.parse(fs.readFileSync('./data.json','utf8'));

console.log (obj);
//console.log(JSON.parse(JSON.stringify(obj)));

var alength = obj.numbers.length
console.log ("Arraylänge: " + alength); 
var sorted = []

var i, j, a, b, pos;
// Element aus Array schnappen
for (i=0; i < alength; i++) {
	
a = obj.numbers[0]
pos = 0

// höchstes Element finden
 for (j=0; j<alength;j++) {
		if (j !=  0) {
			if (a > obj.numbers[j]) {
				 continue;
			} else {
				a = obj.numbers[j];
				pos = j;
			}
		} else {
			continue;
		}
 };
  
console.log ('Wert ' + a + ' auf Position' + pos);

