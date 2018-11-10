$("#flip1").click(function(){
	$("#myTable").slideToggle();
});
$("#flip2").click(function(){
	$("#myForm").slideToggle();
});
$("#Form1").submit(function( event ) {
  if ( $( "#Input1 " ).val() === "" ) {
    alert("NPM tidak boleh kosong!");
	event.preventDefault();
    return;
  }
  if ( $( "#Input2" ).val() === "" ) {
    alert("Nama tidak boleh kosong!");
	event.preventDefault();
    return;
  }
  if ( $( "#Input3" ).val() === "" ) {
    alert("Tgl Lahir tidak boleh kosong!");
	event.preventDefault();
    return;
  }
  alert("Data valid");
});
