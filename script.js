$("#flip1").click(function(){
	$("#myTable").slideToggle();
});
$("#flip2").click(function(){
	$("#myForm").slideToggle();
});
$("#btnForm").click(function( event ) {
  if ( $( "#Input1 " ).val() === "" ) {
    alert("NPM tidak boleh kosong!");
    return;
  }
  if ( $( "#Input2" ).val() === "" ) {
    alert("Nama tidak boleh kosong!");
    return;
  }
  if ( $( "#Input3" ).val() === "" ) {
    alert("Tgl Lahir tidak boleh kosong!");
    return;
  }
  alert("Data valid");
});
