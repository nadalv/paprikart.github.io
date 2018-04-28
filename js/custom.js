function checkTotal(){

	   	var ukupno=0;
		var sum=0;
		var rate=document.getElementById('rate');
		rate=parseFloat(rate.value)||0;
		var broj_rata=document.getElementById("rate").selectedIndex;
		var stranice=document.getElementById('stranice');
		stranice=parseFloat(stranice.value)||0;
		var pisanjetekstova=document.getElementById('pisanjetekstova');
		pisanjetekstova=parseFloat(pisanjetekstova.value)||0;
		var strani_jezici=document.getElementById('strani_jezici');
		strani_jezici=parseFloat(strani_jezici.value)||0;
		var email_nalozi=document.getElementById('email_nalozi');
		email_nalozi=parseFloat(email_nalozi.value)||0;
		for(i=0;i<document.listForm.choice.length;i++){
		if(document.listForm.choice[i].checked){sum=sum+parseInt(document.listForm.choice[i].value)}
		  if(stranice>10&&stranice<35){
		    ukupno=((sum+stranice*7.5+strani_jezici*50+5*pisanjetekstova+5*email_nalozi)+rate/100*(sum+stranice*7.5+strani_jezici*50+5*pisanjetekstova+5*email_nalozi)).toFixed(2)
		  }
		  else if(stranice>=35&&stranice<=55){
		    ukupno=((sum+stranice*5.5+strani_jezici*50+5*pisanjetekstova+5*email_nalozi)+rate/100*(sum+stranice*5.5+strani_jezici*50+5*pisanjetekstova+5*email_nalozi)).toFixed(2)
		  }
		  else if(stranice>55&&stranice<=75){
		    ukupno=((sum+stranice*3.5+strani_jezici*50+5*pisanjetekstova+5*email_nalozi)+rate/100*(sum+stranice*3.5+strani_jezici*50+5*pisanjetekstova+5*email_nalozi)).toFixed(2)
		  }
		  else if(stranice>75&&stranice<=105){
		    ukupno=((sum+stranice*2.5+strani_jezici*50+5*pisanjetekstova+5*email_nalozi)+rate/100*(sum+stranice*2.5+strani_jezici*50+5*pisanjetekstova+5*email_nalozi)).toFixed(2)
		  }
		  else if(stranice>105&&stranice<=150){
		    ukupno=((sum+stranice*2.5+strani_jezici*50+5*pisanjetekstova+5*email_nalozi)+rate/100*(sum+stranice*2.2+strani_jezici*50+5*pisanjetekstova+5*email_nalozi)).toFixed(2)
		  }
		  else if(stranice>150&&stranice<=400){
		    ukupno=((sum+stranice*2+strani_jezici*50+5*pisanjetekstova+5*email_nalozi)+rate/100*(sum+stranice*2+strani_jezici*50+5*pisanjetekstova+5*email_nalozi)).toFixed(2)
		  }
		  else if(stranice>400){
		    ukupno=((sum+stranice*1.8+strani_jezici*50+5*pisanjetekstova+5*email_nalozi)+rate/100*(sum+stranice*1.8+strani_jezici*50+5*pisanjetekstova+5*email_nalozi)).toFixed(2)
		  }
		  else{
		    ukupno=((sum+stranice*10+strani_jezici*50+5*pisanjetekstova+5*email_nalozi)+rate/100*(sum+stranice*10+strani_jezici*50+5*pisanjetekstova+5*email_nalozi)).toFixed(2)
		  }
		}
		total.innerHTML=ukupno;
		switch(broj_rata){
			case 0:
				mesecna_rata.innerHTML=(0).toFixed(2);
			break;
			case 1:
				mesecna_rata.innerHTML=(ukupno/5).toFixed(2);
			break;
			case 2:
				mesecna_rata.innerHTML=(ukupno/6).toFixed(2);
			break;
			case 3:
				mesecna_rata.innerHTML=(ukupno/7).toFixed(2);
			break;
			case 4:
				mesecna_rata.innerHTML=(ukupno/8).toFixed(2);
			break;
			case 5:
				mesecna_rata.innerHTML=(ukupno/9).toFixed(2);
			break;
			case 6:
				mesecna_rata.innerHTML=(ukupno/10).toFixed(2);
			break;
			case 7:
				mesecna_rata.innerHTML=(ukupno/11).toFixed(2);
			break;
			case 8:
				mesecna_rata.innerHTML=(ukupno/12).toFixed(2);
			break;
			default:
		}
}

function checkTotalIno(){
		
	   	var ukupno=0;
		var sum=0;
		var rate=document.getElementById('rateino');
		rate=parseFloat(rate.value)||0;
		var broj_rata=document.getElementById("rateino").selectedIndex;
		var stranice=document.getElementById('straniceino');
		stranice=parseFloat(stranice.value)||0;
		var pisanjetekstova=document.getElementById('pisanjetekstovaino');
		pisanjetekstova=parseFloat(pisanjetekstova.value)||0;
		var strani_jezici=document.getElementById('strani_jeziciino');
		strani_jezici=parseFloat(strani_jezici.value)||0;
		var email_nalozi=document.getElementById('email_naloziino');
		email_nalozi=parseFloat(email_nalozi.value)||0;
		for(i=0;i<document.listFormIno.choice.length;i++){
		if(document.listFormIno.choice[i].checked){sum=sum+parseInt(document.listFormIno.choice[i].value)}
		  if(stranice>10&&stranice<35){
		  	// "x 2.5"  znaci da za non-srb posetioce pokazuje 2.5 vece cene za sve
		    ukupno=((sum+2.5*(stranice*7.5+strani_jezici*50+5*pisanjetekstova+5*email_nalozi))+rate/100*(sum+2.5*(stranice*7.5+strani_jezici*50+5*pisanjetekstova+5*email_nalozi))).toFixed(2)
		  }
		  else if(stranice>=35&&stranice<=55){
		    ukupno=((sum+2.5*(stranice*5.5+strani_jezici*50+5*pisanjetekstova+5*email_nalozi))+rate/100*(sum+2.5*(stranice*5.5+strani_jezici*50+5*pisanjetekstova+5*email_nalozi))).toFixed(2)
		  }
		  else if(stranice>55&&stranice<=75){
		    ukupno=((sum+2.5*(stranice*3.5+strani_jezici*50+5*pisanjetekstova+5*email_nalozi))+rate/100*(sum+2.5*(stranice*3.5+strani_jezici*50+5*pisanjetekstova+5*email_nalozi))).toFixed(2)
		  }
		  else if(stranice>75&&stranice<=105){
		    ukupno=((sum+2.5*(stranice*2.5+strani_jezici*50+5*pisanjetekstova+5*email_nalozi))+rate/100*(sum+2.5*(stranice*2.5+strani_jezici*50+5*pisanjetekstova+5*email_nalozi))).toFixed(2)
		  }
		  else if(stranice>105&&stranice<=150){
		    ukupno=((sum+2.5*(stranice*2.5+strani_jezici*50+5*pisanjetekstova+5*email_nalozi))+rate/100*(sum+2.5*(stranice*2.2+strani_jezici*50+5*pisanjetekstova+5*email_nalozi))).toFixed(2)
		  }
		  else if(stranice>150&&stranice<=400){
		    ukupno=((sum+2.5*(stranice*2+strani_jezici*50+5*pisanjetekstova+5*email_nalozi))+rate/100*(sum+2.5*(stranice*2+strani_jezici*50+5*pisanjetekstova+5*email_nalozi))).toFixed(2)
		  }
		  else if(stranice>400){
		    ukupno=((sum+2.5*(stranice*1.8+strani_jezici*50+5*pisanjetekstova+5*email_nalozi))+rate/100*(sum+2.5*(stranice*1.8+strani_jezici*50+5*pisanjetekstova+5*email_nalozi))).toFixed(2)
		  }
		  else{
		  	//broj stranica do 10 
		    ukupno=((sum+2.5*(stranice*10+strani_jezici*50+5*pisanjetekstova+5*email_nalozi))+rate/100*(sum+2.5*(stranice*10+strani_jezici*50+5*pisanjetekstova+5*email_nalozi))).toFixed(2)
		  }
		}
		totalino.innerHTML=ukupno;
		switch(broj_rata){
			case 0:
				mesecna_rataino.innerHTML=(0).toFixed(2);
			break;
			case 1:
				mesecna_rataino.innerHTML=(ukupno/5).toFixed(2);
			break;
			case 2:
				mesecna_rataino.innerHTML=(ukupno/6).toFixed(2);
			break;
			case 3:
				mesecna_rataino.innerHTML=(ukupno/7).toFixed(2);
			break;
			case 4:
				mesecna_rataino.innerHTML=(ukupno/8).toFixed(2);
			break;
			case 5:
				mesecna_rataino.innerHTML=(ukupno/9).toFixed(2);
			break;
			case 6:
				mesecna_rataino.innerHTML=(ukupno/10).toFixed(2);
			break;
			case 7:
				mesecna_rataino.innerHTML=(ukupno/11).toFixed(2);
			break;
			case 8:
				mesecna_rataino.innerHTML=(ukupno/12).toFixed(2);
			break;
			default:
		}
}		

		jQuery(function($) {
			 "use strict";
			
			//------------------------------------ ABOUT -----------------------------------//
			
			jQuery('.about-player').appear();
			jQuery(document.body).on('appear', '.about-player', function(e, $affected) {
				var fadeDelayAttr;
				var fadeDelay;
				jQuery(this).each(function(){
					
					
				
	
					if (jQuery(this).data("delay")) {
						fadeDelayAttr = jQuery(this).data("delay")
						fadeDelay = fadeDelayAttr;				
					} else {
						fadeDelay = 0;
					}			
					jQuery(this).delay(fadeDelay).queue(function(){
						jQuery(this).addClass('animated').clearQueue();
					});			
				})			
			});



			jQuery('.animate').appear();
			jQuery(document.body).on('appear', '.animate', function(e, $affected) {
				var fadeDelayAttr;
				var fadeDelay;
				jQuery(this).each(function(){
					
					
				
	
					if (jQuery(this).data("delay")) {
						fadeDelayAttr = jQuery(this).data("delay")
						fadeDelay = fadeDelayAttr;				
					} else {
						fadeDelay = 0;
					}			
					jQuery(this).delay(fadeDelay).queue(function(){
						jQuery(this).addClass('animated').clearQueue();
					});			
				})			
			});



			
		});(jQuery);
		
		
		
		
		
		
		