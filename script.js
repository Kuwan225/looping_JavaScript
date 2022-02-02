// while

var i = 1;
while (i >= -10) {
  console.log(i);
  i--;
}

// for

for (var i = 0; i < 10; i++) {
  console.log(i);
}

// for of

var forOf = [3, 4, 2, 32, 3, 23];
for (var off of forOf) {
  console.log(off);
}

// for in

var forOf = [3, 4, 2, 32, 3, 23];
for (var inn in forOf) {
  console.log(inn);
}

// do while

var i = 0;
do {
  console.log(i);
  i++;
} while (i <= 10);

// forEach(array looping)

var i = [2, 3, 4, 3, 2];
i.forEach((el) => {
  console.log(el);
});
