//######################################################################
//###########################           SSTech       ###################
//###########################   Programming Courses  ###################
//######################################################################
let exe1, exe2, result: number;
exe1 = parseInt(prompt('write the first number '));
exe2 = parseInt(prompt('write the second number'));
if (exe1 < exe2) {
  console.log((result = exe2 - exe1));
} else {
  console.log((result = exe1 - exe2));
}
