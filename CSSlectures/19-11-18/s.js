let start = Date.now();
let times = [];
console.log(start);
setTimeout(function run() {
  console.log(Date.now());
  times.push(Date.now() - start); // remember delay from the previous call

  if (start + 100 < Date.now()) alert(times); // show the delays after 100ms
  else setTimeout(run, 0); // else re-schedule
}, 0);

let i = 0;

let start = Date.now();

function count() {

  // do a piece of the heavy job (*)
  do {
    i++; 
  } while (i % 1e6 != 0);

  if (i == 1e9) {
    alert("Done in " + (Date.now() - start) + 'ms');
  } else {
    console.log(i);
    setTimeout(count, 0); // schedule the new call (**)
  }

}

count();