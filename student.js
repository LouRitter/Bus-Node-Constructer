var Students=function(name,gender,grade,GPA,detentions,sleepingInClass,catchPhrase) {

	this.canHaveFun=function(){
		if (detentions < 10 && GPA > 2) {
			console.log("THIS STUDENT CAN HAVE FUN.");
		}else{
			console.log("STUDENT CAN NOT HAVE FUN.");
		}
};

module.exports=Students;