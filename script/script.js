"use strict";

//    var c = $('#myCanvas');      
    var c = $('#myCanvas');
    var ct = c.get(0).getContext('2d');
    var container = $(c).parent();
    
    
    $(window).resize( respondCanvas );
    $(window).resize( changeColor );
    
    function respondCanvas(){ 
        c.attr('width', $(container).width() ); //max width
        c.attr('height', $(container).height() ); //max height
        
        
        
    }

    function changeColor(){

    
        var canvas = document.getElementById("myCanvas");

        ct.rect(0,0,canvas.width,canvas.height);
        var n = Math.floor((Math.random()*canvas.height) + 1);
        var x = Math.floor((Math.random()*canvas.width) + 1);
        /*var grd = ct.createLinearGradient(n,x,canvas.width,canvas.height);
        var grd = ct.createLinearGradient(n,n,canvas.width,canvas.height);
        */
            

            var r = Math.floor((Math.random()*n) + 1);
            
            var g = Math.floor((Math.random()*n) + 1);
        
            var b = Math.floor((Math.random()*n) + 1);

       
        
        /*var grd2 = ct.createLinearGradient(n,x,canvas.width,canvas.height);*/
        
        

         /*grd2.addColorStop(0,'rgba('+b+', '+g+', '+r+', .4)');
        grd2.addColorStop(.3,'rgba('+r+', '+b+', '+g+', .3)');
        grd2.addColorStop(.5,'rgba('+r+', '+r+', '+g+', .8)');
        grd2.addColorStop(1,'rgba('+g+', '+b+', '+r+', .9)');
        */
        
 for(let i=0; i< 2; i++){
    for(let j=0; j<2; j++){

        var grd = ct.createRadialGradient(x,n,i,x,n,800);
        var grd2 = ct.createLinearGradient(n,x,canvas.width,canvas.height);

        grd.addColorStop(0,'rgba('+r+', '+b+', '+g+', .1)');
        grd.addColorStop(.8,'rgba('+r+', '+g+', '+b+', .8)');
        
        /*grd2.addColorStop(0,'rgba('+b+', '+r+', '+g+', .1)');
        grd2.addColorStop(.5,'rgba('+b+', '+g+', '+r+', .8)');*/

        ct.globalCompositeOperation = 'multiply';
        ct.fillStyle = grd;
        ct.fill();
        
    }
 }

        
        
        //console.log("r=" +r);
        //console.log("g=" +g);
        //console.log("b=" +b);
}

$(document).ready(function(){

	$('#menubutton').click(function(){
		$('aside#menu').fadeToggle();
	//		$('aside#menu').toggleClass('closed');
	})
	
   var expandCollapse = function(){
        if ( $(window).width() > 540 ) {
            $(function(){
           		$('aside#menu').fadeIn();
            });
        }
		  else {
			  $(function(){
           		$('aside#menu').fadeOut();
            });
		  }
    }
    $(window).resize(expandCollapse);

	
	
});

    //Initial call 
    respondCanvas();
    changeColor();

    

