var bus= function(driverName, color, gas){
	this.studentsOnTheBus=[];
	this.studentEntersBus= function(pupil){
		this.studentsOnTheBus.push(pupil);
	}
	this.busChatter= function(){
		for (var i=0; i<this.studentsOnTheBus.length;i++) {
			if(this.studentsOnTheBus[i].GPA>2 && this.studentsOnTheBus[i].detentions<10){
				console.log(this.studentsOnTheBus[i].catchPhrase);
			}
		};
	}
}
module.exports= bus;