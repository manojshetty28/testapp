var res =  10;
var res2 =  100;

var cb = function (err){
	if(err) console.log("Error thrown");
	console.log("res is shown no error :: " +  res2);
}

function showRes(res){
	var err = undefined;
	res2 = 109;
	cb(err);
} 


//showRes(res);

// Streams *******************************

var Readable = require('stream').Readable;

var rs = new Readable;
rs.push('beep\n');
rs.push('boop\n');
rs.push('rooo\n');
rs.push(null);

rs.pipe(process.stdout);



// Streams *******************************


var items = [ { id: 1 }, { id: 2}, { id: 3}, { id: 4 }];
// only include items with even id's
items = items.filter(function(item){
  return (item.id % 2 == 0);
});
console.log(items);