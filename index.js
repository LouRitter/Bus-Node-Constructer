var prompt= require('prompt');
var Students = require('./student.js');
var bus= require('./bus.js');

prompt.start();
function makeBus(){
var Busses= new bus('Joe Carlo','Yellow',20);
Busses.studentEntersBus(pupil);
Busses.busChatter();
};
function makeStudent(){
prompt.get(['name','gender','grade','GPA','detentions','sleepingInClass','catchPhrase'], function (err, result) {
var pupil= new Students(result.name,result.gender,result.GPA,result.detentions,result.sleepingInClass,result.catchPhrase)
makeBus();
pupil.canHaveFun();


});
};


makeStudent();