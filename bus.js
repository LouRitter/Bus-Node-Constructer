var bus= function(driverName, color, gas){
	this.studentsOnTheBus=[];
	this.studentEntersBus= function(pupil){
		this.studentsOnTheBus.push(pupil);
	}
	this.busChatter= function(){
			if((this.studentsOnTheBus.GPA>2) && (this.studentsOnTheBus.detentions<10)){
				console.log(studentsOnTheBus.catchPhrase);
			};
		};
	}
module.exports= bus;