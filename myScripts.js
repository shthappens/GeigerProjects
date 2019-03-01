
// Regal scripts
//<script>
        
        jQuery( document ).ready(function() {
            jQuery(function() {
                jQuery("a[href='RB/product-categories']").removeAttr("href");
                jQuery( ".productCategories" ).css( "cursor", "default");
            })
        });
        
    // </script>

    // <script>
        
        jQuery( document ).ready(function() {
            jQuery(function() {
                jQuery("a[href='RB/product-categories/miscellaneous/regalmisctop']").attr('href','RB/regal/miscellaneous');
            })
        });
        
    // </script>

//change primary button
  // <script>
    
    jQuery( document ).ready(function() {
    
            #if($welcomeMatDTO)
                #if(${welcomeMatDTO.loggedIn}) 
                    jQuery(function() {
                        jQuery(".addToCartBtn_removed.btn-primary:first").removeClass("btn-primary").addClass("btn");
                    })    
                #else
                        
                #end
            #end
        
        });
      
  // </script>

  // Remove '( )' at the end of brand name in facets (Hobart)

        jQuery("[value*='BAXTER']").html('BAXTER')
        jQuery("[value*='BERKEL']").html('BERKEL')
        jQuery("[value*='GAYLORD']").html('GAYLORD')
        jQuery("[value*='HOBART']").html('HOBART')
        jQuery("[value*='HOBART LOGO']").html('HOBART LOGO')
        jQuery("[value*='HOBART SERVICE']").html('HOBART SERVICE')
        jQuery("[value*='ITWFG LOGO']").html('ITWFG LOGO')
        jQuery("[value*='ITWFEG']").html('ITWFEG')
        jQuery("[value*='PEERLESS']").html('PEERLESS')
        jQuery("[value*='SOMAT']").html('SOMAT')
        jQuery("[value*='STERO']").html('STERO')
        jQuery("[value*='TRAULSEN']").html('TRAULSEN')
        jQuery("[value*='VULCAN']").html('VULCAN')
        jQuery("[value*='WOLF']").html('WOLF')

        jQuery('select[name="BRND"] option').each(function() {
            jQuery(this).text(jQuery(this).text().split( "(" )[0])
        })

// hide "item is temporarily out of stock" for *325 Paul Davis BZ8325017

        // <script>
            $( document ).ready(function() {
                if (itemCodeList.innerText == 'BZ8325017');
                    ## $(".col3").css({"display": "none"});
                    ## $(".col3").css({"visibility": "hidden"});
                    ## $(".col3").css({"font-size": "0"});
                    ## $(".col3 span").css({"font-size": "0"});
            }); 
            
        // </script>

        #if($item.code=="BZ8325017")
                      
            <script>
                $(document).ready(function(){
                      hideDSMessage();  
                      $( "select[name*='attribute']" ).change(function() {
                          hideDSMessage(); 
                      });
                  });
                  
                  function hideDSMessage(){
                      var itemDSMessageText=$('#js-item-inventory-$item.itemid').text();
                      if ((itemDSMessageText=="Available:Item is temporarily out of stock") || (itemDSMessageText.indexOf('Available:Ships on')!==-1))
                      {
                          $('#js-item-inventory-$item.itemid').hide();
                      }                        
                  }
            // </script>
              
        #end

// <script>
    
    var slideIndex = 0;
    carousel();

    function carousel() {
        var i;
        var x = document.getElementsByClassName("spot-message");
        for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
        }
        slideIndex++;
        if (slideIndex > x.length) {slideIndex = 1} 
        x[slideIndex-1].style.display = "inline-block"; 
        setTimeout(carousel, 3000); 
    }
// </script>


// 34D Cloudgenix

    // <script>
        $(document).ready(function() {
        
            if($(".DSMessage").length > 0) {
                $( "div.DSMessage" ).html( "This item is produced on-demand and takes longer to ship. Please allow 5 business days for production and 3 business days in transit. Please review the sizing chart (if applicable) before ordering as on-demand items may not be returned unless defective. See our FAQ's page for more information." );
                $( "#estimateCalendar.estimate-calendar" ).hide();
            }
        })    
    // </script>


//071/374 Spot image carousel

    // <script>
    
    $( document ).ready( function() {

        var slideIndex = 0;
    
        carousel();

        function carousel() {
            var i;
            var x = document.getElementsByClassName("spot-image");
            var y = document.getElementsByClassName("spot-nav");
            for (i = 0; i < x.length; i++) {
            x[i].style.display = "none"; 
            y[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > x.length) {slideIndex = 1} 
            x[slideIndex-1].style.display = "inline";
            y[slideIndex-1].style.display = "inline-flex";
            setTimeout(carousel, 6000); 
        }
    })
        
    // </script>

    //<script> 
        // hide shipping address link
    $( document ).ready(function() {
        $("a[href='myaccount.html?mode=shippingaddress&vid=20171005504']").css({"display": "none"});
    });
    //</script>
