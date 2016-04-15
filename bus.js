var bus= function(driverName, color, gas){
	this.studentsOnTheBus=[];
	this.studentEntersBus= function(pupil){
		this.studentsOnTheBus.push(pupil);
	}
};
module.exports= bus;