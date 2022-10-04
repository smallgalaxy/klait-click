function getAttributes ( $node ) {
	var attrs = {};
	$.each( $node[0].attributes, function ( index, attribute ) {
	    attrs[attribute.name] = attribute.value;
	});

	return attrs;
}

function tamingselect() {
	if(!document.getElementById && !document.createTextNode){return;}
	
	var ts_selectclass='turnintodropdown';
	var ts_listclass='turnintoselect';
	var ts_boxclass='dropcontainer';
	var ts_triggeron='activetrigger';
	var ts_triggeroff='trigger';
	var ts_dropdownclosed='dropdownhidden';
	var ts_dropdownopen='dropdownvisible';

	var count=0;
	var toreplace=new Array();
	var sels=document.getElementsByTagName('select');
	for(var i=0;i<sels.length;i++){
		if (ts_check(sels[i],ts_selectclass))
		{
			var hiddenfield=document.createElement('input');
			hiddenfield.name=sels[i].name;
			hiddenfield.type='hidden';
			hiddenfield.id='ComboBox';
			hiddenfield.value=sels[i].options[0].value;
			sels[i].parentNode.insertBefore(hiddenfield,sels[i])
			var trigger=document.createElement('a');
			trigger.id = 'option0';
			ts_addclass(trigger,ts_triggeroff);
			trigger.onclick=function(){
				ts_swapclass(this,ts_triggeroff,ts_triggeron)
				ts_swapclass(this.parentNode.getElementsByTagName('ul')[0],ts_dropdownclosed,ts_dropdownopen);
				return false;
			}
			trigger.appendChild(document.createTextNode(sels[i].options[0].text));
			sels[i].parentNode.insertBefore(trigger,sels[i]);
			var replaceUL=document.createElement('ul');
			for(var j=0;j<sels[i].getElementsByTagName('option').length;j++)
			{
				var newli=document.createElement('li');
				var newa=document.createElement('a');
				newli.v=sels[i].getElementsByTagName('option')[j].value;
				newli.elm=hiddenfield;
				newli.istrigger=trigger;
				newli.id=sels[i].getElementsByTagName('option')[j].id;
				newa.appendChild(document.createTextNode(
				sels[i].getElementsByTagName('option')[j].text));
				newli.onclick=function(){
					this.elm.value=this.v;
					ts_swapclass(this.istrigger,ts_triggeron,ts_triggeroff);
					ts_swapclass(this.parentNode,ts_dropdownopen,ts_dropdownclosed)
					this.istrigger.firstChild.nodeValue=this.firstChild.firstChild.nodeValue;
					this.istrigger.id = this.id;

					var type_product = getAttributes($('.trigger')).id;
					var CountComboBox = document.getElementById("sum_zakaz");
					
					function tarif(vars) {
						var $this = $('#text1'),
    						val = $this.val();

						if (val.replace(/\s/g, '').length === 0 || isNaN(val)) {
							$('.count_input').css('border', '1px solid red');
							return 0;  		
				  		}

				  		else {
				  			val_int = Number.parseInt(val);
				  			val_float = Number.parseFloat(val);

				  			if (val_int == val_float) {
				  				$('#text1').css('border', '0.1px solid #adc4cb');

				  				var type_tarif = 0.0;

				  				if (vars == 'option1') {
				  					type_tarif = 0.4;
				  				}

				  				else if (vars == 'option2') {
									type_tarif = 0.33;
				  				}

				  				else if (vars == 'option3') {
				  					type_tarif = 0.26;
				  				}

    							$('.trigger').css('border', '0.1px solid #adc4cb');

    							return Number.parseFloat(type_tarif * val_int).toFixed(2);
    						}

				  			else {
				  				$('.count_input').css('border', '1px solid red');
				  				return 0;
				  			}
				  		}
					}					

					CountComboBox.innerHTML = tarif(type_product);
					var $type_tarif = $('#ComboBox'),
    				type_tarif = Number.parseFloat($type_tarif.val().substr(-5).slice(0, -1));

  					if (isNaN(type_tarif) == false) {
  						$('.trigger').css('border', '0.1px solid #adc4cb');
  					}

					return false;
				}
				newli.appendChild(newa);
				replaceUL.appendChild(newli);
			}
			ts_addclass(replaceUL,ts_dropdownclosed);
			var div=document.createElement('div');
			div.appendChild(replaceUL);
			ts_addclass(div,ts_boxclass);
			sels[i].parentNode.insertBefore(div,sels[i])
			toreplace[count]=sels[i];
			count++;
		}
	}	

	var uls=document.getElementsByTagName('ul');
	for(var i=0;i<uls.length;i++)
	{
		if(ts_check(uls[i],ts_listclass))
		{
			var newform=document.createElement('form');
			var newselect=document.createElement('select');
			for(j=0;j<uls[i].getElementsByTagName('a').length;j++)
			{
				var newopt=document.createElement('option');
				newopt.value=uls[i].getElementsByTagName('a')[j].href;	
				newopt.appendChild(document.createTextNode(uls[i].getElementsByTagName('a')[j].innerHTML));	
				newselect.appendChild(newopt);
			}
			newselect.onchange=function()
			{
				window.location=this.options[this.selectedIndex].value;
			}
			newform.appendChild(newselect);
			uls[i].parentNode.insertBefore(newform,uls[i]);
			toreplace[count]=uls[i];
			count++;
		}
	}
	for(i=0;i<count;i++){
		toreplace[i].parentNode.removeChild(toreplace[i]);
	}
	function ts_check(o,c)
	{
	 	return new RegExp('\\b'+c+'\\b').test(o.className);
	}
	function ts_swapclass(o,c1,c2)
	{
		var cn=o.className
		o.className=!ts_check(o,c1)?cn.replace(c2,c1):cn.replace(c1,c2);
	}
	function ts_addclass(o,c)
	{
		if(!ts_check(o,c)){o.className+=o.className==''?c:' '+c;}
	}
}

window.onload=function()
{
	tamingselect();
}
