/*
jQuery(document).ready(function(){
    jQuery('#hideshow').live('click', function(event) {        
         jQuery('#CurrentSelections').toggle('show');
    });
});

$(document).ready(function() {

    $("#CurrentSelections").click(function() {
        $(this).toggle();
    });
});
*/
function toggle_visibility(id) {
       var e = document.getElementById(id);
       if(e.style.display == 'block')
          e.style.display = 'none';
       else
          e.style.display = 'block';
    }

