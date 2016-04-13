var prompt= require('prompt');
var Students = require('./student.js');
var bus= require('./bus.js');

prompt.start();
var Busses= new bus('Joe Carlo','Yellow',20);

function makeStudent(){
prompt.get(['name','gender','grade','GPA','detentions','sleepingInClass','catchPhrase'], function (err, result) {
var pupil= new Students(result.name,result.gender,result.GPA,result.detentions,result.sleepingInClass,result.catchPhrase)
Busses.studentEntersBus(pupil);
pupil.canHaveFun();
Busses.busChatter();
console.log(Busses.studentsOnTheBus);
if (Busses.studentsOnTheBus.length<2) {
makeStudent();
}else{
	console.log(studentsOnTheBus.busChatter);
}
});
};
makeStudent();