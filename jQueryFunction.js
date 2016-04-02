$(document).ready(function(){

// Add Class
	$('#addClass1').click(function(){
		$('#addClass p').addClass("red");
	});

	$('#addClass2').click(function(){
		$('#addClass p').addClass(function(index, currentClass){
			if(currentClass === "red"){
				$('#addClass p').addClass("bold");
			}
		})
	});

	$('#removeClass1').click(function(){
		$('#addClass p').removeClass("red");
	});

	$('#removeClass2').click(function(){
		$('#addClass p').removeClass('bold');
	});
	$('#removeClass3').click(function(){
		$('#addClass p').removeClass();
	});

//After

	$('#after1').click(function(){
		$('#after p').after("<h2>Heading 2</h2>");
	});

	$('#after2').click(function(){
		$('#after p').after("<button>Button</button>");
	});

//Append

	$('#append1').click(function(){
		$('#append p').append("<h2>Heading2</h2>");
	});

	$('#append2').click(function(){
		$('#append p').append("<button>Button</button>");
	});

//Attribute

	$('#attr1').click(function(){
		$('#attribute p').attr("title", "Attribute Paragraph");
	});


//Before

	$('#before1').click(function(){
		$('#before p').before("<button>new button</button>");
	});


//Html
	$('#html2').hide();
	$('#html1').click(function(){
		$('#htmll p').html("<h3>Heading 3</h3>");
		$('#html2').show();
	});

	$('#html2').click(function(){
		$('#htmll p').html("<p>back to paragraph form</p>");
	});

	$('#html3').click(function(){
		$('#htmll div').html("<b>new paragraph</b> Yayyyy");
		$('#htmll div b').css("color", "red");
	})

//Text

	$('#text1').click(function(){
		$('#text p').text("you've just altered this line!!!");
	});


//Val
	$('#val1').click(function(){
		var inpu = $("#selection").val();
		$('#val p').text(inpu);
	});


//Toggle

	$('#tog1').click(function(){
		$('#togp').toggle(1000, "swing");
	});

	$('#tog2').click(function(){
		$('#togp').toggleClass("tog");
	});

//Hide

	$('#hide button').click(function(){
		$('#hide div').hide();
	});

//Show

	$('#show button').click(function(){
		$('#hide div').show("slow");
	});

//SlideDown and SlideUp
	$('#slided div').hide();
	$('#slidown').click(function(){
		$('#slided div').slideDown("slow");
	});

	$('#sliup').click(function(){
		$('#slided div').slideUp("fast");
	});

//SlideToggle

	$('#slidet button').click(function(){
		$('#slidet div').toggle("slow");
	});


//FadeOut and FadeIn

	$('#fadeo').click(function(){
		$('#faded div').fadeOut("slow");
	})

	$('#fadei').click(function(){
		$('#faded div').fadeIn("slow");
	})


//Focus

	$('#focus button').click(function(){
		$('#email').focus();
	})

//Click

	$('#click1').click(function(){
		$('#click p').toggleClass('tog');
	})

	$('#click2').dblclick(function(){
		$('#click p').toggleClass('tog');
	})

//Data

	$('#data button').click(function(){
		$('#data p').data("name", {first: "Vu", last: "Dinh"});
		$('span:first').text($('#data p').data("name").first);
		$('span:last').text($('#data p').data("name").last);
	})





});