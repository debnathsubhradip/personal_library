
$(document).ready(function(){
   let link= document.location.search.replace(/^.*?\=/,'')
   $('#content').load(link);

});
