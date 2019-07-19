//340 C2GPM Script Q validations

function validateForm() {
    var district = jQuery('select[name^=834]');
    var stateAb = jQuery('select[name^=312]');
    var storeNum = jQuery('input[name^=311]');
    var empID = jQuery('input[name^=527]');
    var person = jQuery('input[name^=835]');
    var errortxt= "";

    if (district.val().trim() == 'Required') {
      errortxt = 'Please select your district. \n'
    }

    if(stateAb.val().trim() == 'Required') {
        errortxt = errortxt + 'Please select your state abbreviation. \n';
    }

    if(storeNum.length > 0 && storeNum.val().trim() == '') {
        errortxt = errortxt +'Please enter your store number. \n';   
    }

    if(empID.length > 0 && empID.val().trim() == '') {
        errortxt = errortxt + 'Please enter your employee ID. \n';    
    }

    if (person.length > 0 && person.val().trim() == '') {
      errortxt = errortxt + 'Please enter the name of the person placing this order. \n'
    }

    if(errortxt == '') {
       return true;
    }
    else {
        alert(errortxt);
        return false;
    }
 }

// Sticky footer fix

#if(${displayStickyFooter} == "TRUE")
    <style>
        #container {
            min-height: 100vh !important;
            margin: 0 auto -${pushValue}; /* the bottom margin is the negative value of the footer's height */
        }
        #pageHome #container {
            min-height: 68vh !important;
            margin: 0 auto -${pushValue}; /* the bottom margin is the negative value of the footer's height */
        }
    </style>
#end

//


// Velocity - end foreach look for *72A DSG

   <div class="items-wrapper" id="featured_carousel_new">
       <div class="listing">
           #set($itemCounter = 0)
           #foreach($temp in $StoreFeaturedItemsDTO.items)
            #if($foreach.count > 3 )
                #break
            #end
               #set($items = $pageTile.getItemObject($StoreFeaturedItemsDTO, $temp, "i"))
               <div class="item">
                   <a href="$seourl.encodeURL("storeitem.html?vid=$vendorSettingsDTO.vendorId&iid=$items.itemid")">
                       #if($items.thumbnail && $items.thumbnail != "")
                           <img src="store$items.thumbnail" alt="$items.title"/>
                       #else
                           <img src="store/$vendorSettingsDTO.vendorId/assets/items/thumbnails/noimage.jpg" alt="$items.title"/>
                       #end 
                   </a>
               </div>
           #end
       </div>
   </div>

//32K Factset - show script question based on prior question answer

//<script>
        
    $( document ).ready(function() {
        $('#830').css("display","none");
        $("select[name^=829_0_8626]").on("change", function(e) {      
            if (jQuery('select[name^=829_0_8626]').val().trim()=="Yes")
                $('#830').css("display","initial")
            else
                $('#830').css("display","none");
        });
    });
//</script>

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

      // ## Script to redirect flyout menu to pop-up store. *231 Schaeffler
    // <script>
    
        jQuery( document ).ready(function() {
            jQuery(function() {
                jQuery("a[href='SCHF/product-categories/apparel/polos-with-custom-sleeve']").attr('href','https://schaefflerpolos.brandingbygeiger.com/').attr('target', '_blank');
            })
        });
        
    // </script>

  //<script for 35P and 35Y to create view only site by removing button to access checkout.>

        #if ($request.session.getAttribute("SessionCustomerDTO_${vendorSettingsDTO.vendorId}").getCustomerProperty('ViewSite') == "ViewOnly")
            $(document).ready(function(){
                $(".btn-primary").css("display", "none");
            });
        #end

  //</script>

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
                      
            //<script>
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

    //42C and 42D change shipping option from USA to United States - UNABLE TO EFFECIVELY IMPLEMENT THIS UPDATE
    //</script>
        // myaccount.vm and billingaddress.vm
        $( document ).ready(function() {
            $('#country_id option[value="1"]').text('UNITED STATES');
        });

        //checkout_multibilladdress.vm
        $('.chzn-single').click(function() {
                $('.active-result').each(function() {
                        if ($(this).text() == 'USA') {
                                $(this).text('UNITED STATES')
                        };
                });
        });

        $('.chzn-single').click(function() {
                $('.active-result data-option-array-index[value="226"]').text('UNITED STATES') 
        });


        //<script>
            
            $( document ).ready(function() {
                console.log('hi');
                $('.chzn-single chzn-default').click(function() {
                    console.log('hi again');
                    $('.active-result').each(function() {
                        if ($(this).text() == 'USA') {
                            $(this).text('UNITED STATES')
                        };
                    });
                });
            });
            

        //</script>

        // form validator 159 - not deployed (needs additonal files to run properly)

        $(function() {
                $("form[id='itemForm']").validate({
                    rules: {
                        custom-line-0: "required"
                    },
                    messages: {
                        custom-line-0: "Please enter your name and select your title."
                    },
                    submitHandler: function(form) {
                        form.submit();
                    }
                });
        });

        // form validator adapted from item_customization.vm and applied on 159
        function checkCustomization() {
                                
                var err = ""

                if ( $('input[name="basketItems[0].customizationNote[0]"]').val() == "") {
                      err += "Please enter name. "
                }

                if(     $('#custom-company').val() == "Choose a Title" ) {
                           err += "Please select a title."
                }

                if (err == "") {
                        //addToCartValidate();
                        return true
                }
                alert(err)
                return false;
        }


    //</script>

    //<script> to identify site
        jQuery( document ).ready(function() {
            console.log( "69Y" );
        });
    //</script>
