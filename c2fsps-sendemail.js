        #macro ( sendEmail $ se from, $ se to, $ se cc, $ se subject, $ se message, $ se bcc) 
        #end

        <script> //send email to CS with delivery date

          jQuery(document).ready(function() {
            console.log("Hola");      
          });

          function sendEmail() { 

            var deliveryDate = jQuery("select[name='829_0_8626']");
            var deliveryDateInput = jQuery("input[name='830_0_8627']");

            if(deliveryDate.val().trim() =='Yes' && deliveryDateInput.val().length > 0) {
                  
              #sendEmail("cpweb@geiger.com", "sthompson@geiger.com", "Test #[[#sendEmail()]]#", "This is the message body.")

              return true;
            
            }
            else
            {
              return false;
            }
          }

        </script>