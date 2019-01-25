



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

        <script>
            $( document ).ready(function() {
                if (itemCodeList.innerText == 'BZ8325017');
                    ## $(".col3").css({"display": "none"});
                    ## $(".col3").css({"visibility": "hidden"});
                    ## $(".col3").css({"font-size": "0"});
                    ## $(".col3 span").css({"font-size": "0"});
            }); 
            
        </script>

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
            </script>
              
        #end
