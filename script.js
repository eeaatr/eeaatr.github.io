document.getElementById("myTopnav").style.fontFamily = "Times New Roman", Times, serif;
function myFunction() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  alert("Copied to clipboard: " + copyText.value);
}document.getElementById('btn').addEventListener('click', function(){
    myTopnav();
    myTopnav();
}); 