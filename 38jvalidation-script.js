<script>
    $( document ).ready(function() {
        $('#698').css("display","none");
        $("select[name^=694_0_7955]").on("change", function(e) {      
            if (jQuery('select[name^=694_0_7955]').val().trim()=="YES")
                $('#698').css("display","initial")
            else
                $('#698').css("display","none");
        });
    });

    function validateForm() {

        var forEvent = jQuery('select[name^=694_0_7955]');            // The script question input element.
        
          var errortxt= "";
                // if 3PB field is not filled out, warn
                if($('#thirdptyft input')) {
                    if ( $('#thirdptyft input').val() == '') {
                        errortxt = 'Please enter 3rd Party Freight Account. \n';
                    }
                    
                }


        if(forEvent.length > 0 && forEvent.val().trim() == 'Please') {
             errortxt = errortxt + 'Please let us know if these products are for an Event. \n';
        } else if (forEvent.val().trim() != 'NO') {
            var eventDate = jQuery('input[name^=698_0_7977]');
            if(eventDate.length > 0 && eventDate.val().trim() == '') {
                errortxt += 'Please enter your Event Date. \n';
            }
            else{
                // Does this have a response? Let's append an order header comment .
                // This line will generate the hidden input element to add the script question response to the order header.
                jQuery("form[name='frm']").append("<input type='hidden' name='details.orderComment' value='" + forEvent.val().trim().replace(/'/g, '\\\'') + "' />");
                jQuery("form[name='frm']").append("<input type='hidden' name='details.orderComment' value='" + eventDate.val().trim().replace(/'/g, '\\\'') + "' />"); 
            }
        }

        // No errors? Good to go!
        if(errortxt == '') {
            return true;
        }
        else {
            alert(errortxt);
            return false;
        }

    }
</script