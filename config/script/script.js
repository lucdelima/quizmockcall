/*----------------------------------------------------------------------------------------------------
Author:vl406891 VL Vishal Luthra
Version: CSHD template 1.0.4
Purpose: JavaScript to be used for index.html (Jukebox HTML course template)
----------------------------------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------------------------------
Global variables
----------------------------------------------------------------------------------------------------*/
var pageIndex = 0;
var topics;
var quizArray;
var isCourseTopicComplete;
var isQuizEnabled, isQuizCompleted = false;
var isAgreementEnabled = false;
var isShowTopicMenuOn = false;
var fibArray;
var scrArray;
var courseTitle;


/*----------------------------------------------------------------------------------------------------
Event handlers
----------------------------------------------------------------------------------------------------*/
$(document).ready(function () {
	startLMS();
	resizeContentView();
	startLoadingScreen();
	
	$("#topic_menu_btn").click(function () {
		showTopicMenu();
		
	});
	
	$("#course_content").click(function () {
		
		if (isShowTopicMenuOn) {
			isShowTopicMenuOn = false;
			$("#topic_menu").css("display", "none");
			$("#topic_menu_btn").removeClass("fa fa-times fa-2x").addClass("fa fa-bars fa-2x");
		}
		
	});
	
	//Resize course_content <div> view
	$(window).resize(function () {
		resizeContentView();
	});
	
	//Prevent highlight on topic menu
	$(".topic_menu_container ,#loading_screen_container, #alertbox").mousedown(function () {
        return false;
	});
	
});


/*----------------------------------------------------------------------------------------------------
Function:showTopicMenu()
Purpose: Show Topic Menu
Parameters: None

----------------------------------------------------------------------------------------------------*/
function showTopicMenu(){
	
	if(!isShowTopicMenuOn){
	
		isShowTopicMenuOn=true;
		$("#topic_menu").css("display","block");
		$("#topic_menu_btn").removeClass("fa fa-bars fa-2x").addClass("fa fa-times fa-2x");
		
	}else{
		isShowTopicMenuOn=false;
		$("#topic_menu").css("display","none");
		$("#topic_menu_btn").removeClass("fa fa-times fa-2x").addClass("fa fa-bars fa-2x");
	}
	
}

/*----------------------------------------------------------------------------------------------------
Function:resizeContentView()
Purpose: Resize course content view on Window Resize
Parameters: None

----------------------------------------------------------------------------------------------------*/
function resizeContentView(){
	
	var content = $("#course_content");
	var f;
	var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	
	if(h>=690){
		f=0.92;
	}else if(h <690 && h>=561){
		f=0.9;
	}else if(h <561){
		f=0.87;
	}
	content.css("height",h*f);
	$("#alertbox").css("left",(w/2)-150);

}

/*----------------------------------------------------------------------------------------------------
Function:loadContent()
Purpose: Load Course Content based on the config.json file
Parameters: None

----------------------------------------------------------------------------------------------------*/
function loadContent(){
	
	var str;
	var content = $("#course_content");
	
	$.getJSON("config/config.json",function(data,status,xhr){
	
		if(status == "success"){
			var title = data.Title;
			topics = data.Topics;
			courseTitle = title;
			//quizArray = data.Quiz;
			//fibArray = data.Fib;
			//scrArray = data.Scrabble;
			
			quizArray = decode64(data.Quiz);
			fibArray = decode64(data.Fib);
			scrArray = decode64(data.Scrabble);
			dndArray = decode64(data.Dnd);
		
			//Add Course Title on the Loading screen and for the Navigation bar
			$("#course_title_label").html("Course Name: "+title);
			$("#course_title").html("Course Name: "+"<br>"+title);
			
			//Set Course Label Font
			setCourseLabelFont();
		
			//Check if Quiz is enabled
			if(topics[topics.length-1] == "Quiz"){
				isQuizEnabled = true;
			}else{
				isQuizEnabled = false;
			}
		
			for(i=0;i<topics.length;i++){
				//Create Topic Menu
				$("#topic_menu ul").append("<li id="+"t"+(i)+" class='topic' onclick='pageIndex="+i+";goToPage($(this));'>"+topics[i]+"</li>");
		
				//Create Course Content
				str = topics[i].replace(/\s/g,'');
				content.append("<div class='cContent' id='c"+i+"'></div>" );
			
				//Set the display to none and opacity to 0
				$("#c"+i).css("display","none");
				$(".cContent").css("opacity",0);
			
				//Load Content from the the content/html files
				$("#c"+i).load("content/"+str.toLowerCase()+".html #main",function(response,loadStatus,load_xhr){
					
					if(loadStatus == "success"){
						
						//Remove id=#main
						$(".main_class").removeAttr("id");
						
						//remove Contenteditable=true
						$('.jcm_ref').each(function(){
							$(this).removeAttr("contenteditable");
						});
						
						//remove Close container
						if($(".btnq_delete").length){
							$(".btnq_delete").remove();	
						};
						
						//remove Close Button
						if($(".close_element").length){
							$(".close_element").remove();	
						}
			
						//Disable the contenteditable sections if there is any for the Quiz page as well as adding the SubmitAnswer button
						if(isQuizEnabled && $(".main_class").hasClass("main_quiz")){
							$(".mquizbtn_container").remove();
							$(".btnfib_container").remove();
							$(".scrbtn_container").remove();
							
							if($(".dndbtn_container").length){
								$(".dndbtn_container").remove();	
								$(".dndselection li").removeAttr("contenteditable");
							}
							
							setScrabbleScript();
						}
						
						
						//Check if the contains a Agreement checkbox
						if($(".checkbox_container").length){
							isAgreementEnabled=true;
						}
						
						setMediaSrc(1);
						
					}else if(loadStatus == "error"){
						alert(load_xhr.statusText);
					}
					
				});
			}
			
			//Show #c0 content
			goToPage(0);
		
		}else{
			alert(xhr.statusText);
			
		}
		
	}).fail(function(){
		alert("Unable to retrieve config.json file.");
	});
	
}

/*----------------------------------------------------------------------------------------------------
Function:setCourseLabelFont()
Purpose:Set the #course_title_label width
Parameters: none

----------------------------------------------------------------------------------------------------*/
function setCourseLabelFont(){
	
	var total_width;
	var font_size=20;
	
	total_width= $("#course_title_label").width();
	
	while(total_width < 80){
		font_size--;
		$("#course_title_label").css("font-size",font_size);
		total_width= $("#course_title_label").width();
				
	}
	
}

/*----------------------------------------------------------------------------------------------------
Function:goToPage(obj)
Purpose: Go to the Page file by setting the display content to none and show the current Content
Parameters: obj = jquery object or an interger

----------------------------------------------------------------------------------------------------*/
function goToPage(obj){
	
	var num;
	$(".cContent").css({"display":"none","opacity":0});
	
	//Check if obj is a jQuery object
	if(obj instanceof jQuery){
		
		var string = obj[0].id;
		num = string.replace("t","");
		
	}else{
		num = obj;
	}
	
	
	if(num == topics.length-1){
		//Show Mark Complete button only at the last page
		$("#markcomplete_label").css("visibility","visible").animate({opacity:1});	
		
	}else{
		//Hide Mark Complete button if is not the last page
		$("#markcomplete_label").css("visibility","hidden").animate({opacity:0});	
		
	}
	
	//Close the section part if the display is set to show
	if($(".sectionclose").length){
		$(".sectionclose").css("display","none");
	}
	
	$("#course_content").scrollTop();
	$("#c"+num).css("display","block");
	$(".cContent").animate({opacity:1});
	$("#t"+num).addClass("topic_complete");
	
}

/*----------------------------------------------------------------------------------------------------
Function:navigatePage(num)
Purpose: Calculate the pageIndex when using the navigation arrows
Parameters: num = integer, if is 0 (go backward) else (go forward)

----------------------------------------------------------------------------------------------------*/
function navigatePage(num){
	
	if(num==0){
		
		if(pageIndex > 0){
			pageIndex--;
			goToPage(pageIndex);
		}
		
	}else{
	
		if(pageIndex < topics.length-1){
			pageIndex++;
			goToPage(pageIndex);
		}
	}
	

}
/*----------------------------------------------------------------------------------------------------
Function:keycode() for giving key evwnta to change page
----------------------------------------------------------------------------------------------------*/
function keyCode(event) {
    var x = event.keyCode;
    if (x == 37) {
        navigatePage(0);
	 }
	else if(x == 39) {
        navigatePage(1);
	 }
else if(x == 67) {
        markComplete();
	 }
	 else if(x == 77) {
        showTopicMenu();
	 }

	
}
/*----------------------------------------------------------------------------------------------------
Function:markComplete()
Purpose:Check if Learner have completed all the topics/quiz/checkbox agreement and call Exit(state)
Parameters: none

----------------------------------------------------------------------------------------------------*/
function markComplete(){
	
	isCourseTopicComplete=true;
	
	if(isShowTopicMenuOn){
		isShowTopicMenuOn=false;
		$("#topic_menu").css("display","none");
		$("#topic_menu_btn").removeClass("fa fa-times fa-2x").addClass("fa fa-bars fa-2x");
	}
	
	//Check if the Topics have been selected and completed
	for(i=0;i<topics.length;i++){
		
		if(!$("#t"+i).hasClass("topic_complete")){
			isCourseTopicComplete=false;
			exit(0);
			return;
		}
	}
	
	//Check if Quiz is Enabled
	if(isQuizEnabled){
		
		if(!isQuizCompleted){
			exit(3);
			return;
		}
		
	}
	
	//Check if Agreement checkbox is Enabled
	if(isAgreementEnabled){
		var checkbox=$(".checkbox")[0].id;
		
		if(!$("#"+checkbox).prop('checked')){
			exit(1);
			return;
		}
	}
	
	//Course is  going to be Mark complete only if Topic, Quiz (if there are any) or Agreement (if there is any) are completed
	exit(100);
	
}

/*----------------------------------------------------------------------------------------------------
Function:exit(state)
Purpose: Exit the course depending of the value of state
Parameters: state = 0:Did no complete all the Topics
					1:Did not check the Agreement
					2:Answered all the questiosn correctly
					3:Did not complete the quiz
					4:Show the questions that are answered incorrectly
					default:Course is complete

----------------------------------------------------------------------------------------------------*/
function exit(state){
	
	$(".overlay").css("display","block");
	$("#alertbox").css("display","block");
	
	var msg;
	
	switch(state){
		//Did not complete all the Topics
		case 0:
			msg = "<p>Unable to be Mark Complete. You did not complete all the topics.</p><span class='button' onclick='prompt(0)'>OK</span>";
			break;
		
		//Did not check the Agreement
		case 1:
			msg = "<p>Unable to Mark Complete, you did not check the Agreement!</p><span class='button' onclick='prompt(0)'>OK</span>";
			break;
		
		//Answered all the questiosn correctly
		case 2:
			msg = "<p>You have answered all the questions correctly!</p><span class='button' onclick='prompt(0)'>OK</span>";
			break;
		
		//Did not complete the quiz
		case 3:
			msg = "<p style='color:red'>Unable to Mark Complete the course, you did not complete the Quiz!</p><span class='button' onclick='prompt(0)'>OK</span>";
			break;
		
		//Show the questions that are answered incorrectly
		case 4:
			msg="<p style='color:red'>You did not answered the questions correctly!</p><br><span class='button' onclick='prompt(0)'>OK</span>";
			break;
		
		//Course is complete
		default:
			msg = "<p>Course has been Mark Complete!</p><span class='button' onclick='prompt(100)'>OK</span>";
			break;
	}
	
	$("#alertbox").html(msg);
	
}

/*----------------------------------------------------------------------------------------------------
Function:prompt(num)
Purpose: An alertbox prompt willl be shown to the Learner depending on the exit(state)
Parameters: num = integer

----------------------------------------------------------------------------------------------------*/
function prompt(num){
	
	switch(num){
		case 0:
			$(".overlay").css("display","none");
			$("#alertbox").css("display","none");
			break;
			
		default:
			doLMSSetValue("cmi.core.lesson_status","completed");
			doLMSFinish();
			break;
		
	}
}

/*----------------------------------------------------------------------------------------------------
Function:startLMS()
Purpose: Initialize LMS and set the lesson status to incomplete if the course was not never attempted.
Parameters: None

----------------------------------------------------------------------------------------------------*/
function startLMS(){
		var courseStatus;
		
		try {
			doLMSInitialize();
			courseStatus = doLMSGetValue("cmi.core.lesson_status");
		
			if (courseStatus == "not attempted"){
				doLMSSetValue("cmi.core.lesson_status", "incomplete");
			}
		}catch(err){
			console.log(err);
		
		}
}

/*----------------------------------------------------------------------------------------------------
Function:startCourse()
Purpose: Start the course
Parameters: None

----------------------------------------------------------------------------------------------------*/
var isSAAttached=false;
function startCourse(){
	
	if($(".main_quiz").length!=0 && !isSAAttached){
		//Add the Submit Answer button	
		isSAAttached=true;
		$(".main_quiz").append('<button class="submitanswer" onclick="submitAnswer()">Submit Answers</button><br><br>');
		
		//Set DND
		setDnd();
	}	
		
	$("#loading_screen_container").animate({opacity:0},"slow",function(){
		$("#loading_screen_container").css("display","none");
	});
	
}

/*----------------------------------------------------------------------------------------------------
Function:startLoadingScreen()
Purpose: Initiate the Loading Screen
Parameters: None

----------------------------------------------------------------------------------------------------*/
function startLoadingScreen(){
	
	//Start to Load Course Content
	loadContent();
	
	var progressBar = new ProgressBar.Circle('#progress_bar',{
			color:'#336699',
			duration:5000,
			strokeWidth:6,
			trailWidth:3,
			trailColor:"#999999",
			easing:'easeInOut',
			text: {value:"0",style:{color:"#ffffff",opacity:1}},
			step: function(state,bar){
				bar.setText((bar.value()*100).toFixed(0)+"%");
				}
		
	});
	
	var startBlink = setInterval(function(){
		$("#loading_string").animate({opacity:0},function(){
			$("#loading_string").animate({opacity:1});
		});
	},1000);
	
	progressBar.animate(1,function(){
		$("#start_course_btn").css("visibility","visible").animate({opacity:1});
		$("#loading_string").html("Loading Complete!");
		clearInterval(startBlink);
	});
}

/*----------------------------------------------------------------------------------------------------
Function:submitAnswer()
Purpose:To check the user Quiz Answers
Parameters: None
----------------------------------------------------------------------------------------------------*/
function submitAnswer(){
	
	isQuizCompleted = false;
	var fib,mq,scr,dnd;
	
	
	mq =mQuizAnswer();
	fib =fibAnswer();
	scr =scrabbleAnswer();
	dnd =dndAnswer();

	var total = mq+fib+scr+dnd;
	//console.log("mq:"+mq);
	//console.log("fib:"+fib);
	//console.log("scr:"+scr);
	
	if(total==0){
		isQuizCompleted=true;
		exit(2);
	}else{
		exit(4);
	}
	

}

/*----------------------------------------------------------------------------------------------------
Function:fibAnswer()
Purpose:To check the user FIB Answers
Parameters: None
Return: True/False
----------------------------------------------------------------------------------------------------*/
function fibAnswer(){
	var storedAnswer=fibArray;
	var status=0;
	
	$("div.fib_course_textarea").each(function(i){
		var ID = "div#"+$(this)[0].id;
		var temp = storedAnswer[i].split(" ");
		
		$(ID+" .fibinput").each(function(j){
			var userAnswer = $(this).val();
			userAnswer = $.trim(userAnswer);
			
			if(temp[j].toLowerCase() != userAnswer.toLowerCase()){
				$(this).css("border-color","#ff0000");	//red
				status++;
			}else{
				$(this).css("border-color","#1aff1a");	
			}
			
		});
		
	});
	
	if(status==0){
		return 0;	
	}else{
		return -1;
	}
	
}

/*----------------------------------------------------------------------------------------------------
Function:mQuizAnswer()
Purpose:To check the user Multiple Choice Answers
Parameters: None
Return: 0/1
----------------------------------------------------------------------------------------------------*/
function mQuizAnswer(){
	var storedAnswer=quizArray;
	var status=0;
	var obj ="<div class='mq_incorrect'><i style='color:red' class='fa fa-times-circle fa-lg mq_incorrect' title='incorrect answer'></i><span style='color:red'> Incorrect</span></div>";
	
	$("form.quizform").each(function(i){
		var ID = $(this)[0].id;
		var qid = "#mquiz_container"+ID.replace("Q","");
		
		if($("#"+ID+" input:checked").length==0){
			if(!$(qid+" .mq_incorrect").length){
				$(obj).insertAfter("#"+ID);
			}
			status=-1;
		} 
		
		
		$("#"+ID+" input").each(function(){
			
			if($(this).prop('checked')){
			
				if($(this).val()!=storedAnswer[i]){
					if(!$(qid+" .mq_incorrect").length){
						$(obj).insertAfter("#"+ID);
					}
					status=-1;
					
				}else{
				
					if($(qid+" .mq_incorrect").length){
						$(qid+" .mq_incorrect").remove();
					}
				}
			}
			
		});
		
	});
	
	if(status==0){
		return 0;	
	}else{
		return -1;
	}
}

/*============================================================================================
Function: scrabbleAnswer()
Purpose: To check the user Scrabble Answers
Parameters: none
Return: 0/1

============================================================================================*/
function scrabbleAnswer(){
	var ans = scrArray;
	var userAnswer,status=0;
	var obj="<div class='scrincorrect'><i style='color:red' class='fa fa-times-circle fa-lg' title='incorrect answer'></i><span style='color:red'> Incorrect!</span></div>";
	
	$(".scrabble_input").each(function(index){
		var id = $(this)[0].id;
		var id_container = "scrcontainer"+id.replace("scrabbleinput","");
		
		if($("#"+id_container+" input").length){
			userAnswer=$("#"+id_container+" input").val().toLowerCase();
			userAnswer = $.trim(userAnswer);
			
			if(userAnswer!=scrArray[index]){
				if(!$("#"+id_container+" .scrincorrect").length){
					$(obj).insertAfter("#"+id_container+" input");
				}
				status =-1;
				
			}else{
				if($("#"+id_container+" .scrincorrect").length){
					$("#"+id_container+" .scrincorrect").remove();
				}
			}	

		}else{
			userAnswer=$(this).text();
			
			if(userAnswer!=scrArray[index]){
				if(!$("#"+id_container+" .scrincorrect").length){
					$(obj).insertAfter("#"+id);
				}
				status =-1;
				
			}else{
				if($("#"+id_container+" .scrincorrect").length){
					$("#"+id_container+" .scrincorrect").remove();
				}
				
			}
		}
		
	});
	
	if(status==0){
		return 0;
	}else{
		return -1;
	}
	
	
}

/*============================================================================================
Function: dndAnswer()
Purpose: To check the user DnD Answers
Parameters: none
Return: 0/1

============================================================================================*/
function dndAnswer(){
	var status=0;
	var answer=dndArray;
	
	if($(".dnd_container_style").length){
		
		$(".dnd_container_style").each(function(index){
			var obj = $(this).find(".dnduseranswer");
			
			if(obj.length){
				var ans = obj.text().toLowerCase();
				ans = $.trim(ans);
				var storeans = answer[index].toLowerCase();
				storeans = $.trim(storeans);
				if(storeans!=ans){
					status=-1;
				}
				
			}else{
				status=-1;
			}
			
		});
		
	}

	return status;
}


/*============================================================================================
Function: viewSection(obj)
Purpose: Hide/Show section
Parameters: obj =$(this) jquery object pointer

============================================================================================*/
function viewSection(obj){
	
	if(obj.length){
		id=obj[0].id;
		$('#section'+id).attr("contenteditable","false");
		$('#section'+id).fadeToggle();
	}
}
/*============================================================================================
Function: viewSection(obj)
Purpose: Hide/Show section
Parameters: obj =$(this) jquery object pointer

============================================================================================*/
function viewSectionaccordi(obj){
	
	if(obj.length){
		id=obj[0].id;
		$('#section'+id).fadeToggle();
	}
}
/*============================================================================================
Function: setMediaSrc()
Purpose: Set the source file to the appropriate path when running the HTML file itself or when
			the course (index) runs.
Parameters: num = 0 or non 1
			0 = set source path to the root folder
			1 = set source path to individual folders (use for the course index);

============================================================================================*/
function setMediaSrc(num){
	var type= ["img","video","audio","a.iconfile"];
	var fileName,path, selector;
	var iPath, vPath, aPath,fPath;
	
	if(num == 0){
		selector = "#main";
		iPath = "../images/";
		vPath = "../video/";
		aPath = "../audio/";
		fPath ="../file/";
	
	}else{
		selector = ".main_class";
		iPath = "images/";
		vPath = "video/";
		aPath = "audio/";
		fPath ="file/";
	}
	
	for(i=0;i<type.length;i++){
			$(selector+" "+type[i]).each(function(j){
				if($(this).length){
					path = $(this)[0].src;
					
					if(path != null){
						fileName = path.substring(path.lastIndexOf('/')+1);
					}
					
				
					switch(type[i]){
					case "img":
					$(this).attr("src",iPath+fileName);
					break;
							
					case "video":
					$(this).attr("src",vPath+fileName);
					break;
								
					case "audio":
					$(this).attr("src",aPath+fileName);
					break;
					
					case "a.iconfile":
						fileName = $(this).attr("alt");
						$(this).attr("href",fPath+fileName);
						break;
					
					default:
						break;
				
					}	
				}
			});
	}
	
	//A fixed for loading issue with videos/audio tag when launching the html files individually
	if(num ==0){
		var tempData = $("#main").html();
		$("#main").html(tempData);
	}
}

/*============================================================================================
Function: setScrabbleScript()
Purpose:  Set the Sort Script and sort the letter elements randomly
Parameters: arrayObj = Array object
	
============================================================================================*/
function setScrabbleScript(){
	var string =scrArray;	
		
	if($("ul.scrabble_input").length>0){
		$("ul.scrabble_input").each(function(index){
			var id = $(this)[0].id;
			var num = id.replace("scrabbleinput","");
			
			var newArray = shuffleArray(string[index].split(''));
			
			$(this).html("");
			for(i=0;i<newArray.length;i++){
				$(this).append("<li>"+newArray[i]+"</li>");	
			}
			
			if(!$("#scrcontainer"+num+" input").length){
				$("ul#"+id).addClass("scrabble_input_sort");
				$("ul#"+id).sortable();
				$("ul#"+id).disableSelection();
			}
			
		});	
	}
	
}

/*============================================================================================
Function: shuffleArray(arrayObj)
Purpose:  Shuffle elements within an Array object
Parameters: arrayObj = Array object
	
============================================================================================*/
function shuffleArray(arrayObj){
	
	if($.isArray(arrayObj)){
		var currentIndex = arrayObj.length;
		
		for(i=currentIndex-1;i>0;i--){
			var j = Math.floor(Math.random() * (i + 1));
			var temp = arrayObj[i];
			arrayObj[i] = arrayObj[j];
			arrayObj[j] = temp;
		
		}
		return arrayObj;
		
	}else{
		return null;
	}
	
}

/*============================================================================================
Function: setDnd
Purpose:  Set Drag and Drop
Parameters: None
	
============================================================================================*/
function setDnd(){
	if($(".dnd_container_style").length!=0){
			$(".dnd_container_style").each(function(){
				var id = $(this)[0].id;
				$("#"+id+" .dndselection li").each(function(){
					$(this).draggable({
						containment : "#"+id+" .dragcontainer",
						revert: "invalid",
						drag:function(event,ui){
							if($(this).data('droppedin')){
								$(this).data('droppedin').droppable('enable');
								$(this).data('droppedin',null)
								$(this).removeClass( 'dnduseranswer' )
							}
						}
					});
				});
			
				$("#"+id+" .dndselection").droppable();
				
				$("#"+id+" .dnddropbox").droppable({
					tolerance:'fit',
					hoverClass:'dndhover',
					drop:function(event,ui){
						
						ui.draggable.addClass("dnduseranswer");
						ui.draggable.data('droppedin',$(this));
						$(this).droppable('disable');
						
					}
				});
			});
		
		}
}

function decode64(Arr){
	
	var Array = Arr;
	
		for(i=0;i<Array.length;i++){
			var temp =window.atob(Array[i]);
			Array[i] = temp.replace(courseTitle,"");
		}
	
	return Array;
}
/*============================================================================================
Function: get result of all checkbox list checked or not
Purpose: Insert Checkbox conditions
Parameters: yes/no/other

============================================================================================*/
function getvaluesc(){

    //var $b = $("input[type='checkbox']#checky");
	//var res = $b.filter(':checked').length;
	//var resnc=$b.filter(":not(:checked)").length;
	//var totc=res+resnc;   
	var cbs;
			
    	var topic = $(".current_topic").text().toUpperCase().replace(/\s+/g,"");
		 
		   var favorite = [];
		   
		  var sds;
		
            $.each($("input[id='checky']:not(:checked)") , function(){   
 sds="Unchecked";	

                //favorite.push($(this).val()+ "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style='color:red'>"+ $(this).prop("checked")+"</span>");
				favorite.push("<table style='width:100%'><tr style='text-align:left'><th width:'85%' style='text-align:left' >"+$(this).val()+"</th><th style='color:red;text-align:right'>"+ sds +"</th></tr></table>");
				//favorite1.push($(this).prop("checked"));
				//cone =favorite.concat(favorite1);
			});
			$.each($("input[id='checky']:checked") , function(){  
 sds="Checked";		

                //favorite.push($(this).val()+ "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style='color:Green'>"+ $(this).prop("checked")+"</span>");
				 favorite.push("<table style='width:100%'><tr style='text-align:left'><th style='text-align:left'>"+$(this).val()+"</th><th style='color:green;text-align:right'>"+ sds +"</th></tr></table>");
				 //favorite.push($(this).val()+ "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style='color:Green'>"+ sds +"</span>");
				
				//favorite1.push($(this).prop("checked"));
				//cone =favorite.concat(favorite1);
			});
		cbs='<b><p >Topics Completed / Not Completed are: </b><br><br><table style="width:100%;text-align:left;padding:2px;"><tr style="text-align:left"><th style="text-align:left">Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Page Name</th><th style="text-align:right">Checked/Unchecked</th></tr> </table><br><br>'+ favorite.join("  ")+'</p><br><br><span class="abut" onclick="closealrt2()">Close</span>';
			$(".overlay2").css("display","block");
	$("#alertbox2").css("display","block");
		$("#alertbox2").html(cbs);

          //alert("Checked boxes values are: \n" + favorite.join(" , "));
			
     
		}
	
	/*============================================================================================
Function: check how many checkboxes or checked/not checked and return their values
Purpose: Insert Checkbox conditions
Parameters: yes/no/other

============================================================================================*/	
function checky(){
	var cbs;
	var $b = $("input[type='checkbox']#checky");
	var res = $b.filter(':checked').length;
	var resnc=$b.filter(":not(:checked)").length;
	var totc=res+resnc;
    var topic = $(".current_topic").text().toUpperCase().replace(/\s+/g,"");
	var favorite = [];
	 var a = $("input[type='checkbox']#checky");
	 var sds;
	if(a.length == a.filter(":checked").length){
		
		$.each($("input[id='checky']:checked") , function(){   
        sds="Checked";		
                //favorite.push($(this).val()+ "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:"+ $(this).prop("checked")+"<br>");
				//favorite.push($(this).val()+ "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:"+ sds+"<br>");
				favorite.push("<table  style='width:100%;text-align:left'><tr style='text-align:left'><th style='text-align:left' >"+$(this).val()+"</th><th style='color:green;text-align:right'>"+ sds +"</th></tr></table>");
			
			});
			
		cbs="<p style='color:Black'>All Topics are Completed and Checked</p><br><span style='color:green'>"+ favorite.join("  ")+"</span><span class='abut' onclick='closealrt2()'>OK</span>";
			$(".overlay2").css("display","block");
	        $("#alertbox2").css("display","block");
		    $("#alertbox2").html(cbs);
            //alert('All Checkboxes in all pages are checked!');
	        $("#ress").html("Total Checked:&nbsp;&nbsp;" + res + "&nbsp;&nbsp;Out of &nbsp;&nbsp;"+totc); 
	        $("#ressnc").html(" Not Checked:&nbsp;&nbsp;" +resnc ); 
            }else{
		
			
                $.each($("input[id='checky']:not(:checked)") , function(){  
                sds="Unchecked";				
                //favorite.push($(this).val()+ "&nbsp;&nbsp;:"+ $(this).prop("checked")+"<br>");
				favorite.push("<table style='width:100%;text-align:left'><tr style='text-align:left'><th style='text-align:left' >"+$(this).val()+"</th><th style='color:red;text-align:right'>"+ sds +"</th></tr></table>");
			
				//favorite.push($(this).val()+ "&nbsp;&nbsp;:"+ sds+"<br>");
				
			});
	//$( "#pgname" ).html( $( "input:checked" ).val() + " is checked!" );

	cbs="<p style='color:red'>All Topics are not Checked / Completed !There is still something to finish! Please comeback to the course to finish it.</p><br><br><span style='color:red'>"+ favorite.join("  ")+"</span><br><span class='abut' onclick='closealrt2()'>OK</span>";
	
	
	$(".overlay2").css("display","block");
	$("#alertbox2").css("display","block");
	$("#alertbox2").html(cbs);
	//alert('All Checkboxes are not checked!There is still something to finish');
	$("#ress").html("Total Checked:&nbsp;&nbsp;" + res + "&nbsp;&nbsp;Out of &nbsp;&nbsp;"+totc); 
	$("#ressnc").html(" Not Checked:&nbsp;&nbsp;" +resnc ); 
	//alert(""+topic);
	//alert("Total Checked:" + res + "Out of"+totc + "\n Not Checked:" + resnc); 
}
}
/*============================================================================================
Function: check all checkboxes on all pages
Purpose: Insert Checkbox conditions
Parameters: yes/no/other

============================================================================================*/
function checkall(){
	var select_all = document.getElementById("select_all"); //select all checkbox
var checkboxes = document.getElementsByClassName("abc"); //checkbox items

//select all checkboxes
 select_all.addEventListener("change", function(e){
     for (i = 0; i < checkboxes.length; i++) { 
         checkboxes[i].checked = select_all.checked;
     }
});


for (var i = 0; i < checkboxes.length; i++) {
     checkboxes[i].addEventListener('change', function(e){ //".checkbox" change 
         //uncheck "select all", if one of the listed checkbox item is unchecked
         if(this.checked == false){
			 
             select_all.checked = false;
         }
         //check "select all" if all checkbox items are checked
         if(document.querySelectorAll('.checkbox:checked').length == checkboxes.length){
          
			 select_all.checked = true;
         }
     });
}
	
}
/*============================================================================================
Function:close alertbox2 for checkboxes
Purpose: Insert Checkbox conditions
Parameters: yes/no/other

============================================================================================*/
function closealrt2(){
			$(".overlay2").css("display","none");
	$("#alertbox2").css("display","none");
			
			
		}
		
		/*============================================================================================
Function: change checkbox text color
Purpose: Insert Checkbox conditions
Parameters: yes/no/other

============================================================================================*/	
function ccc(){
	
$("input[type='checkbox']").click(function(){
    if($(this).is(":checked")){
		$(this).parent().removeClass("redtext"); 
        $(this).parent().addClass("greentext");
		
    }
	else if($(this).is(":not(:checked)")){
		$(this).parent().removeClass("greentext"); 
        $(this).parent().addClass("redtext");
		
    }
	else{
		  $(this).parent().removeClass("greentext"); 
        $(this).parent().addClass("redtext"); 
		
		
    }
});

}

 //modal scripts
function viewSectionmod(obj){
	
	if(obj.length){
		id=obj[0].id;
		$('#section'+id).slideToggle(500);
		
	}
}