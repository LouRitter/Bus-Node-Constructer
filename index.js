var prompt= require('prompt');
var Students = require('./student.js');
var bus= require('./bus.js');
var count= 0;
prompt.start();
var Busses= new bus('Joe Carlo','Yellow',20);

function makeStudent(){
prompt.get(['name','gender','grade','GPA','detentions','sleepingInClass','catchPhrase'], function (err, result) {
var pupil= new Students(result.name,result.gender,result.grade,result.GPA,result.detentions,result.sleepingInClass,result.catchPhrase)
Busses.studentEntersBus(pupil);
pupil.canHaveFun();

if(Busses.studentsOnTheBus[count].GPA>2 && Busses.studentsOnTheBus[count].detentions<10){
	console.log(Busses.studentsOnTheBus[count].catchPhrase);
}
if (Busses.studentsOnTheBus.length<20) {

makeStudent();
}else{

};
});
};
makeStudent();
