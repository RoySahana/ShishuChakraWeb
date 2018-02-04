
		$(document).ready(function(){
			$("#submit").bind('click',function(){
				var token1 = $("#formno").val();
				var contestantName1 = $("#cname").val();
				var fatherName1  = $("#fname").val();
				var phoneNum1 = $("#phnum").val();
				var email1 = $("#email").val();
				var address1 = $("#add").val();
				var schoolName1 = $("#sname").val();
				var group1 = $("#group1").val();
				var birthday1 = $("#datepicker1").val();
				
				var contestant = {token:token1, contestantName:contestantName1 , fatherName:fatherName1 , phnum:phoneNum1 , email:email1 , address:address1 , 
					schoolName: schoolName1 , group:group1 , birthday:birthday1};
				console.log(contestant);
			
			$.ajax({
        url: "http://localhost:8080/deployed-service/greeting",
		 type: "POST",
		 crossDomain: true ,
		// data: {contestantName: "Ani"},
		data : contestant,
            dataType: "json",
            xhrFields: {
            	withCredentials: false
            }
            
			}).then(function(data) {
				
      alert(data);
		});
		
			});
		});

	 $(document).ready(function(){
		 $("#standard").change(function(){
			var a = $("#standard :selected").val();
			$("#group1").val(a);
		 });
	    $( function() {
    $( "#datepicker1" ).datepicker({
	  changeMonth: true,
      changeYear: true
	});
  } );
		
		$("#datepicker1").change(function(){
			var a = $("#datepicker1").val();
			
			var b = a.substr(6, 4);
			
			$("#age").val(2018 - b + " Yrs");
		});

	});
	
	function resetall(e){
		$("#formno").val("") ;
		$("#cname").val("");
		$("#fname").val("");
		$("#phnum").val("");
		$("#email").val("");
		$("#add").val("");
		$("#sname").val("");
		$("#group1").val("");
		$("#datepicker1").val("");
	}
	
	function alphabetsonly(e){
    var patt = new RegExp("^([a-zA-Z\\s])*$");
	var b = e.key;
	var res = patt.test(b);
	if(res){
		return true;
	}else{
		return false;
	}
	}
	function grouponly(e){
	var patt = new RegExp("^([A-E])*$");
	var b = e.key;
	var res = patt.test(b);
	if(res){
		return true;
	}else{
		return false;
	}
	}
	function numbersonly(e){
	var patt = new RegExp("^([0-9])*$");
	var b = e.key;
	var res = patt.test(b);
	if(res){
		return true;
	}else{
		return false;
	}
	}
  