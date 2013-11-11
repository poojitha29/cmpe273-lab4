$(":button").click(function() {
	
	var isbn = this.id;
    alert('About to report lost on ISBN ' + isbn);
    
    $.ajax({    	
    
    	url : "http://localhost:8001/library/v1/books/" + isbn + "?status=lost",
        //type: "PUT"
        
        success: function() {
        			$("#"+isbn+"status").text("lost");                             
         		}
    });
	
    $("#"+isbn).attr("disabled", true);
    
});