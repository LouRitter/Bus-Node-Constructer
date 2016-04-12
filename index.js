var prompt= require('prompt');
var Student = require('./student.js');
prompt.start();
prompt.get(['name','gender','grade','GPA','detentions','sleepingInClass','catchPhrase'], function (err, result) {

var pupil = new Student(result.name,result.gender,result.grade,result.GPA,result.detentions,result.sleepingInClass,result.catchPhrase);

	pupil.canHaveFun();

});
