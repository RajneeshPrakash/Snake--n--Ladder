$(document).ready(function() {
			$.animateProg = function(){
			if(!Modernizr.meter){
				alert('Sorry your brower does not support HTML5 progress bar');
			} else {
				var progressbar = $('#progressbar'),
					max = progressbar.attr('max'),
					time = (1000/max)*1,	
			        value = progressbar.val();

			    var loading = function() {
			        value += 1;
			        addValue = progressbar.val(value);
			        
			        $('.progress-value').html(value + '%');

			        if (value == max) {
			            clearInterval(animate);		
						$("#prog").hide();
						$("#hideProg").click();
			        }
			    };

			    var animate = setInterval(function() {
			        loading();
			    }, time);
			};
			}
						
		});
		var num=0;
		var comp=0;
		
$(document).ready(
    function(){
		$("#start").click(function () {
			$("#help").hide();
			$("#main").css('background-image', 'none');
			$("#start").hide();
			$("#prog").show();
			$.animateProg();
		});
					
        $("#hideProg").click(function () {
		var audio1=document.getElementById('audiotag3');
		audio1.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
        }, false);
		audio1.play();
		audio1.volume=0.02;
            $("#board").fadeIn("slow");
			$("#score").fadeIn("slow");
			$("#coolMenu").show();
			$("#pos1").text(_currentPos1);
			$("#pos2").text(_currentPos2);
			$("#Restart").show();
        });
		
		$("#Restart").click(function () {
		$("#Restart").hide();
		num=num+1;
		for (var i=1;i<=6;i++)
		$("#dice"+i).hide();
		$("#cup").show();
		$("#cup").addClass("dice");
		$("#pos1").text(_currentPos1);
		$("#pos2").text(_currentPos2);
		$("#para").show
		if(comp==0&&(num%2==0)){
		$("#cup").hide();
		$("#autoAnim").show().delay(3000).fadeOut("slow");
		window.setTimeout($("#cup").click(), 6000);
		}
		
		});
		
		$("#cup").click(function () {
		 var newMove = GenerateRandomNumber(6);
		 
		 var turn= num%2;
		 //alert(turn);
		 
		 if(turn == 0){
				$("#arrow2").hide();
				$("#arrow1").show();
			}
			else{
				$("#arrow1").hide();
				$("#arrow2").show();
			}	
		
		
		 $("#cup").fadeOut("slow");
		 $("#para").fadeOut("slow");
		 $("#Restart").fadeIn("slow");
		 
            if(newMove==1)
			$("#dice1").fadeIn("slow");
			else if(newMove==2)
			$("#dice2").fadeIn("slow");
			else if(newMove==3)
			$("#dice3").fadeIn("slow");
			else if(newMove==4)
			$("#dice4").fadeIn("slow");
			else if(newMove==5)
			$("#dice5").fadeIn("slow");
			else
			$("#dice6").fadeIn("slow");
			//alert(turn);
			if(turn==1){
			$("#svg_3").text($("#name1").text()+", you got "+newMove);
			//$("#cloud2").hide();
			$("#cloud1").show().delay(4000).fadeOut("slow");
			}
			else{
			$("#svg_5").text($("#name2").text()+", you got "+newMove);
			//$("#cloud1").hide();
			$("#cloud2").show().delay(4000).fadeOut("slow");
			}
			if(_currentPos1==0&&turn==1&&newMove<6){
			$("#msg").text($("#name1").text()+", You can't start the game without 6!!!");
			$("#alert1").show();
			}
			else if(_currentPos2==0&&turn==0&&newMove<6){
			if(comp==1){
			$("#msg").text($("#name2").text()+", You can't start the game without 6!!!");
			$("#alert1").show();
			}
			}
			else
			nextMove(newMove,turn);
			
			//alert(_currentPos1,_currentPos2);
			$("#pos1").text(_currentPos1);
			$("#pos2").text(_currentPos2);
			if(comp==0&&turn==1){
			//window.setTimeout($("#Restart").click(), 1000);
			$("#Restart").hide().delay(6000).click();
			}
		});
		
		$("#ok").click(function() {
			$("#alert1").hide();
		});

			
		$("#fullscreen").click(function() {
			var docElement, request;
			docElement = document.documentElement;
			request = docElement.requestFullScreen || docElement.webkitRequestFullScreen || docElement.mozRequestFullScreen || docElement.msRequestFullScreen;
			if(typeof request!="undefined" && request){
				request.call(docElement);
			}
			$("#fullscreen").hide();
			$("#exit").show();
		});
		
		$(document).keyup(function (e) {
			//ESC
			if (e.which == '27'||e.keyCode=='27') {
				$("#exit").hide();
				$("#fullscreen").show();
			}
		});

 
		$("#exit").click(function() {
			var docElement, request;
			docElement = document.documentElement;
			if(document.exitFullscreen) {
				document.exitFullscreen();
			}
			else if(document.mozExitFullScreen) {
				document.mozExitFullScreen();
			}
			else if(document.webkitExitFullscreen) {
				document.webkitExitFullscreen();
			}
			else if(document.msExitFullScreen) {
				document.msExitFullScreen();
			}
			$("#exit").hide();
			$("#fullscreen").show();
		});
		$("#close").click(function() {
			$("#desc").hide();
			$("#level").show();
		});
		
		$("#one").click(function() {
			$("#form").show();
			$("#play2").hide();
			comp=0;
		});
		
		$("#two").click(function() {
			$("#form").show();
			$("#play2").show();
			comp=1;
		});
		
		$("#three").click(function() {
			$("#msg").text("Currently this mode of game is not supported.");
			$("#alert1").show();
		});
		
		$("#submit").click(function() {
		if(comp==0&&($("#nameB").val()=="")){
			$("#msg").text("please fill the name before you proceed");
			$("#alert1").show().delay(2000).fadeOut("slow");
		}
		else if(comp==1&&(($("#nameB").val()=="")||($("#nameB").val()=="")))
		{
			$("#msg").text("please fill the names for both players.");
			$("#alert1").show().delay(2000).fadeOut("slow");
		}
		else{
			$("#form").hide();
			$("#level").hide();
			$("#banner").hide();
			if($("#nameB").val()!="")
			$("#name1").text($("#nameB").val());
			if($("#nameG").val()!="")
			$("#name2").text($("#nameG").val());
			if($("#gender1").val()=="Male"){
			$("#imgB").show();
			$("#imgG1").hide();
			}
			else{
			$("#imgG1").show();
			$("#imgB").hide();
			}
			if($("#gender2").val()=="Male"){
			$("#imgB1").show();
			$("#imgG").hide();
			}
			else{
			$("#imgG").show();
			$("#imgB1").hide();
			}			
		}
		});
		
	 });
     
	 $(function(){
		$('#coolMenu').find('> li').hover(function(){
			$(this).find('ul')
			.removeClass('noJS')
			.stop(true, true).slideToggle('fast');
		});
	});
	 
        //store the co-ordinates of all the squares.
		
        var squares = new Array();
		var canvas = document.getElementById("board");
        var context = canvas.getContext("2d");
        var contextText = canvas.getContext("2d");
        var squareSize = canvas.height / 10;  
        var _currentPos1 = 0;
		var _currentPos2 = 0;
        
        RenderSquareBoard();
        RenderSnakeAndLadders();  
		
		
        function RenderSquareBoard() 
        {        
            var colorA = "#fe650e";
            var colorB = "orange";
			var colorC = "#3d86fe";
			var colorD = " #cb5dff";
			var colorE = "purple";
			var colorF = "#09fd23";
			var colorG = "blue";

            var initRow = 1; var totalRows = 10; var initcolumn = 1; var totalColumns = 10;

            var x = 0; var y = canvas.height - squareSize;

            var columnNr = 1; var leftToRight = true;
            for (var row = initRow; row <= totalRows; row++) 
            {
                if (leftToRight) 
                {
                    x = 0;
                }
                else 
                {
                    x = canvas.width - squareSize;
                }

                for (var column = initcolumn; column <= totalColumns; column++) 
                {
                    if (columnNr % 7 == 0) 
                    {
                        context.fillStyle = colorA;
                    }
                    else if(columnNr % 7 == 1)
                    {
                        context.fillStyle = colorB;
                    }
					else if(columnNr % 7 == 2)
                    {
                        context.fillStyle = colorC;
                    }
					else if(columnNr % 7 == 3)
                    {
                        context.fillStyle = colorD;
                    }
					else if(columnNr % 7 == 4)
                    {
                        context.fillStyle = colorE;
                    }
					else if(columnNr % 7 == 5)
                    {
                        context.fillStyle = colorF;
                    }
					else
                    {
                        context.fillStyle = colorG;
                    }
					

                    context.fillRect(x, y, squareSize, squareSize);

                    squares[columnNr] = x.toString() + ',' + y.toString();

                    contextText.font = "15px tahoma";
                    contextText.fillStyle = "black";
                    contextText.fillText(columnNr, x, y + squareSize);

                    var x1, y1
                    if (leftToRight) 
                    {
                        x += squareSize;

                        x1 = x + (squareSize / 2);
                    }
                    else 
                    {
                        x -= squareSize;
                        x1 = x - (squareSize / 2);
                    }

                    y1 = y - (squareSize / 2);

                    columnNr++;
                }

                y -= squareSize;
                leftToRight = !leftToRight;
            }
        }

        function RenderSnakeAndLadders()
        {
            var img = new Image();
            img.onload = function () 
            {
            context.drawImage(img, 66, 23);
            };
            img.src = "Images/SnakeA.gif";
			
			var imgA = new Image();
            imgA.onload = function () 
            {
            context.drawImage(imgA, 466, 23,100,150);
            };
            imgA.src = "Images/SnakeA.gif";

            var img1 = new Image();
            img1.onload = function () 
            {
            context.drawImage(img1, 66, 166,300,475);
            };
            img1.src = "Images/SnakeB.gif";
			
			var img4 = new Image();
            img4.onload = function () 
            {
			context.save();			 
			context.rotate(25 * Math.PI / 180);
            context.drawImage(img4, 165,-26,100,200);
			context.restore();
            };
            img4.src = "Images/SnakeB.gif";
			
			
			var img5 = new Image();
            img5.onload = function () 
            {
            context.drawImage(img5, 306, 466,165,170);
            };
            img5.src = "Images/SnakeB.gif";
			
			var img6 = new Image();
            img6.onload = function () 
            {
            context.drawImage(img6, 135, 280,180,200);
            };
            img6.src = "Images/SnakeA.gif";
			
			var img7 = new Image();
            img7.onload = function () 
            {
			context.save();			 
			context.rotate(25 * Math.PI / 180);
            context.drawImage(img7, 280, 356,100,100);
			context.restore();
            };
            img7.src = "Images/SnakeA.gif";

			
            var img2 = new Image();
            img2.onload = function () {
		     context.save();			 
			 context.rotate(45 * Math.PI / 180);
             context.drawImage(img2, 420,-235,70,480);
			 context.restore();
            };
            img2.src = "Images/LadderA.gif";
						
			var imgL2 = new Image();
            imgL2.onload = function () {
		     context.save();			 
			 context.rotate(65 * Math.PI / 180);
             context.drawImage(imgL2, 650,-165,60,230);
			 context.restore();
            };
            imgL2.src = "Images/LadderA.gif";
			
			var imgL3 = new Image();
            imgL3.onload = function () {
		     context.save();			 
			 context.rotate(15 * Math.PI / 180);
             context.drawImage(imgL3, 80,65,60,230);
			 context.restore();
            };
            imgL3.src = "Images/LadderA.gif";
			
			var imgL4 = new Image();
            imgL4.onload = function () {
		     context.save();			 
			 context.rotate(20 * Math.PI / 180);
             context.drawImage(imgL4, 310,-100,60,170);
			 context.restore();
            };
            imgL4.src = "Images/LadderA.gif";
			
			var imgL5 = new Image();
            imgL5.onload = function () {
		     context.save();			 
			 context.rotate(20 * Math.PI / 180);
             context.drawImage(imgL5, 640,50,60,170);
			 context.restore();
            };
            imgL5.src = "Images/LadderA.gif";
			
            var img3 = new Image();
            img3.onload = function () 
            {
			    context.save();			 
			    context.rotate(-30 * Math.PI / 180);
                context.drawImage(img3, 170, 510,60,250);
				context.restore();
            };
            img3.src = "Images/LadderA.gif"; 
            context.save();			
        }

        function initGame() 
        {
           setTimeout("window.location.reload();", 8000); 
        }

        function GenerateRandomNumber(max) 
        {
            // max dictates that the random number will fall between 0-max
            var rnd = Math.floor(Math.random() * (max + 1))

            if (rnd == 0)
            {
                rnd = 1;
            }
        return rnd;
        }

        function nextMove(newMove,turn) 
        {
		     //var el = document.getElementById('dice');
			 //document.getElementById('dice').classList.add('dice');
			 //document.getElementById('cup').classList.add('dice');
			 var pos=(turn == 1)? _currentPos1 : _currentPos2;
		
           	if( pos>=95&&newMove>5){
					document.getElementById('msg').innerHTML="You can't move. You need less than 6";
					document.getElementById('alert1').style.display="block";
					}
			else if(pos>=96&&newMove>4){
					document.getElementById('msg').innerHTML="You can't move. You need less than 5";
					document.getElementById('alert1').style.display="block";
					}
			else if(pos>=97&&newMove>3){
					document.getElementById('msg').innerHTML="You can't move. You need less than 4";
					document.getElementById('alert1').style.display="block";
					}
			else if(pos>=98&&newMove>2){
					document.getElementById('msg').innerHTML="You can't move. You need less than 3";
					document.getElementById('alert1').style.display="block";
					}
			else
			{
				pos = pos + newMove;
				var audio1=document.getElementById('audiotag1');
				var audio2=document.getElementById('audiotag2');
				audio1.currentTime=3;
				audio1.volume=1;
				audio2.volume=1;
				audio2.currentTime=21;

				switch (pos) 
				{
				//ladder
				case 4:
					pos = 14;
					audio1.play();
			
				break;
				//ladder
				case 12:
					pos = 47;
					audio1.play();
			
				break;
				//ladder
				case 23:
					pos = 73;
					audio1.play();
			
				break;
				//ladder
				case 32:
					pos = 51;
					audio1.play();
			
				break;
				//ladder
				case 60:
					pos = 82;
					audio1.play();
			
				break;
				//ladder
				case 76:
					pos = 95;
					audio1.play();
			
				break;
				//snake
				case 28:
					pos = 5;
					audio2.play();
			
				break;
				//snake
				case 39:
					pos = 18;
					audio2.play();
			
				break; 
				//snake
				case 58:
					pos = 25;
					audio2.play();
			
				break; 
				//snake
				case 75:
					pos = 2;
					audio2.play();
	
				break; 
				//snake
				case 84:
					pos = 62;
					audio2.play();
			
				break; 
				//snake
				case 93:
					pos = 72;
					audio2.play();
			
				break; 
				//snake
				case 99:
					pos = 29;
					audio2.play();
			
				break;             
				}
									
				//context.fillRect(parseInt(lastx), parseInt(lasty), squareSize, squareSize);
				//if( _currentPos!=0)
				//{
				//pre_color = context.getImageData(325, 585, 65, 65);
				//alert(parseInt(lastx)+"  "+ parseInt(lasty)+" ");
				//context.putImageData(pre_color,parseInt(lastx), parseInt(lasty));
				//context.clearRect(parseInt(lastx), parseInt(lasty), squareSize, squareSize);
				//context.fillRect(parseInt(lastx), parseInt(lasty), squareSize, squareSize);
				//}
				if(turn==1)
				_currentPos1=pos;
				else
				_currentPos2=pos;
				
				RenderSquareBoard();
				RenderSnakeAndLadders();
				context.save();
				
				var coorintaes = squares[_currentPos1];
				coorintaes = coorintaes.split(',');
				context.fillStyle="red";
				context.beginPath();
				context.arc(parseInt(coorintaes[0])+(squareSize/2), parseInt(coorintaes[1])+(squareSize/2),30,0,2*Math.PI);
				context.fill();
				context.stroke();
				
				var coorintaes1 = squares[_currentPos2];
				coorintaes1 = coorintaes1.split(',');
				context.fillStyle="green";
				context.beginPath();
				context.arc(parseInt(coorintaes1[0])+(squareSize/2), parseInt(coorintaes1[1])+(squareSize/2),30,0,2*Math.PI);
				context.fill();
				context.stroke();
	
				//context.fillStyle = "red";
				//context.fillRect(parseInt(coorintaes[0])+(squareSize/4), parseInt(coorintaes[1])+(squareSize/2), squareSize, squareSize);

				if (pos == 100)
				{
					var audio_win=document.getElementById('audiotag4');
					if(turn==1){
					
					audio_win.play();
					audio_win.volume=1;
					var winner=document.getElementById('nameB').value;
					document.getElementById('msg').innerHTML="Congratulations "+winner+", you have won the game :)";
					document.getElementById('alert1').style.display="block";
					document.getElementById('svg1').style.display="block";
					//alert("Congratulations, you have won the game :)");
					}
					else{
					if(comp==0){
					//alert("You Lost (:");
						document.getElementById('msg').innerHTML="You Lost (:";
						document.getElementById('alert1').style.display="block";
					}
					else{
						audio_win.play();
						audio_win.volume=1;
						var winner1=document.getElementById('nameG').value;
						document.getElementById('msg').innerHTML="Congratulations "+winner1+", you have won the game :)";
						document.getElementById('alert1').style.display="block";
						document.getElementById('svg1').style.display="block";
					}
					initGame();
				}
			}
        }
	}
   