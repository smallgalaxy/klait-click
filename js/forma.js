function getAttributes ( $node ) {
  var attrs = {};
  $.each( $node[0].attributes, function ( index, attribute ) {
      attrs[attribute.name] = attribute.value;
  });

  return attrs;
}

$(document).ready(function() {
  $('#text1').on('keyup',function(){
  		var $this = $(this),
    		val = $this.val();
  		if (val.replace(/\s/g, '').length === 0 || isNaN(val)) {
			  $('.count_input').css('border', '1px solid red');  		
  		}

  		else {
  			val_int = Number.parseInt(val);
  			val_float = Number.parseFloat(val);

  			if (val_int == val_float) {
  				$('#text1').css('border', '0.1px solid #adc4cb');

  				var $type_tarif = $('#ComboBox'),
    				type_tarif = Number.parseFloat($type_tarif.val().substr(-5).slice(0, -1));

  				if (isNaN(type_tarif) == false) {
  					$('.trigger').css('border', '0.1px solid #adc4cb');
  					var CountComboBox = document.getElementById("sum_zakaz");
            var type_product = getAttributes($('.trigger')).id;

            var type_tarif = 0.0;

            if (type_product == 'option1') {
              type_tarif = 0.4;
            }

            else if (type_product == 'option2') {
              type_tarif = 0.33;
            }

            else if (type_product == 'option3') {
              type_tarif = 0.26;
            }

  					CountComboBox.innerHTML = Number.parseFloat(type_tarif * val_int).toFixed(2);
  				}
  			}
  			
  			else {
  				$('.count_input').css('border', '1px solid red');
  			}
  		}
	});

	$('#text2').on('keyup',function(){
  		var $this = $(this),
    		val = $this.val();
  		if (val.length == 0) {
			  $('.email_user').css('border', '1px solid red');  		
  		}

  		else {
  			$('.email_user').css('border', '0.1px solid #adc4cb');
  		}
	});

	$('#text3').on('keyup',function(){
  		var $this = $(this),
    		val = $this.val();
  		if (val.length == 0) {
			  $('.ref').css('border', '1px solid red');  		
  		}

  		else {
  			$('.ref').css('border', '0.1px solid #adc4cb');
  		}
	});

	$('.on_off').on('input', function(ev) {
	  if($(".on_off").prop("checked") == true) {
			$('.form_p_two').css('color', '#fff');

      if ((one_opl == 1 || two_opl == 1) & $(".on_off").prop("checked") == true) {
        document.getElementById('opl1').disabled = false;
        $('.oplata1').css('background', '#000');
        $('.oplata1').css('color', '#fff');
        $('.oplata1').css('border', '1px solid #000');
        
      }
      else {
        document.getElementById('opl1').disabled = true;
        $('.oplata1').css('background', '#fff');
        $('.oplata1').css('color', '#000');
        $('.oplata1').css('border', '1px solid #fff');
      }
		}
		else {
			$('.form_p_two').css('color', 'red');
      document.getElementById('opl1').disabled = true;
      $('.oplata1').css('background', '#fff');
      $('.oplata1').css('color', '#000');
      $('.oplata1').css('border', '1px solid #fff');
		}	
	});


	$('#text4').on('keyup',function(){
  		var $this = $(this),
    		val = $this.val();
  		if (val.length == 0) {
			  $('.email_user2').css('border', '1px solid red');  		
  		}

  		else {
  			$('.email_user2').css('border', '0.1px solid #adc4cb');
  		}
	});

	$('#text5').on('keyup',function(){
  		var $this = $(this),
    		val = $this.val();
  		if (val.length == 0) {
			  $('.ref2').css('border', '1px solid red');  		
  		}

  		else {
  			$('.ref2').css('border', '0.1px solid #adc4cb');
  		}
	});

	$('.on_off2').on('input', function(ev) {
    if($(".on_off2").prop("checked") == true) {
      $('.form_p_two').css('color', '#fff');

      if ((one_opl2 == 1 || two_opl2 == 1) & $(".on_off2").prop("checked") == true) {
        document.getElementById('opl2').disabled = false;
        $('.oplata2').css('background', '#000');
        $('.oplata2').css('color', '#fff');
        $('.oplata2').css('border', '1px solid #000');
        
      }
      else {
        document.getElementById('opl2').disabled = true;
        $('.oplata2').css('background', '#fff');
        $('.oplata2').css('color', '#000');
        $('.oplata2').css('border', '1px solid #fff');
      }
    }
    else {
      $('.form_p_two').css('color', 'red');
      document.getElementById('opl2').disabled = true;
      $('.oplata2').css('background', '#fff');
      $('.oplata2').css('color', '#000');
      $('.oplata2').css('border', '1px solid #fff');
    } 
	}); 
});