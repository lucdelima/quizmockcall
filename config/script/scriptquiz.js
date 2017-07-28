/*----------------------------------------------------------------------------------------------------
Author:ld824416 LL
MockCallQuiz
----------------------------------------------------------------------------------------------------*/

var mockquiz = [
        {
            "title" : "Introduction and Customer Service",
            "question" : "1) Did the analyst give the correct greeting?",
            "audio" : "../audio/IntroductionCustomerService_1.mp3",
            "choices" : [
                "A - Yes, the analyst gave the correct greeting",
                "B - No, the analyst did not give the correct greenting",
                "C - None of the above"
            ],
            "correct" : "B - No, the analyst did not give the correct greenting",
            "explanation" : "The analyst should greet the caller by identifying the GSK Clinical Support Helpdesk, introducing themselves and offering assistance with a similar phrase as follows: \"Thank you for calling the GSK Clinical Support Helpdesk. My name is <NAME> how may I assist you today?\" "
        },
        {
            "title" : "Introduction and Customer Service",
            "question" : "2) What is the first thing to say to the client in response?",
            "audio" : "../audio/IntroductionCustomerService_2.mp3",
            "choices" : [
                "A - Did you try to close the browser and open a new one?",
                "B - It would be my pleasure to assist you. May I please confirm your first and last name so I could open a ticket for this?",
                "C - May I place you on hold while I investigate the issue?"
            ],
            "correct" : "B - It would be my pleasure to assist you. May I please confirm your first and last name so I could open a ticket for this?",
            "explanation" : "The analyst needs to creat a new ticket under the correct user profile or verify that the correct user profile is being used for an existing ticket"
        },
        {
            "title" : "Introduction and Customer Service",
            "question" : "3) What are the contact details that need to be verified during the beginning of the call?",
            "video" : "../video/introduction3.mp4",
            "choices" : [
                "A - Since we found the profile, there is no need to verify the client's details",
                "B - We need to verify the client roles in the study",
                "C - The client's name and contact details such as a valid email address and telephone number should be verified at the beginning of the call",
                "D - None of the above"
            ],
            "correct" : "C - The client's name and contact details such as a valid email address and telephone number should be verified at the beginning of the call",
            "explanation" : "The analyst needs to verify the name, phone number, and e-mail address within the first few minutes of the call. After giving the greeting the analyst should let the user briefly explain their issue and then confirm user contact details"
        },
        {
            "title" : "Introduction and Customer Service",
            "question" : "4) Did the analyst use the phonetic alphabet as required?",
            "audio" : "../audio/IntroductionCustomerService_4.mp3",
            "choices" : [
                "A - Yes",
                "B - No",
                "C - None of the above"
            ],
            "correct" : "B - No",
            "explanation" : "The analyst should use the phonetic alphabet to spell and confirm necessary items."
        },
        {
            "title" : "Troubleshooting, Hold Process and Customer Service",
            "question" : "1) Did the analyst ask sufficient clarifying questions?",
            "audio" : "../audio/TroubelshootingHoldProcessCustomerService_1.mp3",
            "choices" : [
                "A - Yes, the questions asked were sufficient",
                "B - The analyst could have confirmed the URL",
                "C - The analyst could have confirmed the username",
                "D - The analyst could have confirmed if the user was inserting the correct information",
                "B, C and D are correct"
            ],
            "correct" : "B, C and D are correct",
            "explanation" : "The analyst needs to acknowledge information provided by the user and to ask relevant questions based on the user's reported issue."
        },
        {
            "title" : "Troubleshooting, Hold Process and Customer Service",
            "question" : "2) Did the analyst ask the user to repeat information which was already provided?",
            "audio" : "../audio/TroubelshootingHoldProcessCustomerService_2.mp3",
            "choices" : [
                "A - Yes, but the analyst asked the user to confirm information",
                "B - No",
                "C - None of the above"
            ],
            "correct" : "A - Yes, but the analyst asked the user to confirm information",
            "explanation" : "The analyst should not ask the user to provide information which was already given, however the analyst can ask the user to confirm information previously provided."
        },
        {
            "title" : "Troubleshooting, Hold Process and Customer Service",
            "question" : "3) Did the analyst avoid cutting the client off?",
            "audio" : "../audio/TroubelshootingHoldProcessCustomerService_3.mp3",
            "choices" : [
                "A - Yes",
                "B - No",
                "C - None of the above"
            ],
            "correct" : "B - No",
            "explanation" : "The analyst should allow the user to complete their sentences and should not talk over the user. If the analyst unintentionally cuts the user off, should apologize for doing so."
        },
        {
            "title" : "Troubleshooting, Hold Process and Customer Service",
            "question" : "4) Did the analyst properly handle any customer frustration or emotion?",
            "audio" : "../audio/TroubelshootingHoldProcessCustomerService_4.mp3",
            "choices" : [
                "A - Yes",
                "B - No",
                "C - None of the above"
            ],
            "correct" : "B - No",
            "explanation" : "If the user displays frustration or emotion, the analyst should respond correctly to the user by apologizing, showing empathy, reassuring the user."
        },
        {
            "title" : "Troubleshooting, Hold Process and Customer Service",
            "question" : "5) Did the analyst keep the conversation on topic and did not share any irrelevant detail themselves?",
            "audio" : "../audio/TroubelshootingHoldProcessCustomerService_5.mp3",
            "choices" : [
                "A - Yes",
                "B - No",
                "C - None of the above"
            ],
            "correct" : "B - No",
            "explanation" : "The analyst should prevent the user from taking the call off topic and the analyst should not engage in irrelevant conversation."
        },
        {
            "title" : "Troubleshooting, Hold Process and Customer Service",
            "question" : "6) Which application and/or documentation should the analyst verify in order to troubleshoot the issue?",
            "audio" : "../audio/TroubelshootingHoldProcessCustomerService_5.mp3",
            "choices" : [
                "A - Permissions App and GLMS",
                "B - Permissions App, GLMS and IDM",
                "C - GLMS and IDM",
                "D - MUL",
                "C and D are correct"
                
            ],
            "correct" : "C and D are correct",
            "explanation" : "In order to reset myLesson passwords, the analyst needs to first search for the user in GLMS and MUL. Once the user is located and account is active, analyst needs to reset user's password using IDM."
        },
        {
            "title" : "Troubleshooting, Hold Process and Customer Service",
            "question" : "7) Did the analyst explain the steps to correct the issue?",
            "audio" : "../audio/TroubelshootingHoldProcessCustomerService_7.mp3",
            "choices" : [
                "A - The analyst provided the correct follow up steps",
                "B - The analyst forgot to ask the security questions",
                "C - The analyst did not explain that it was a temporary password and that the client would have to personalize it",
                "D - The analyst did not inform the client how the temporary password would be provided",
                "C and D are correct"
                
            ],
            "correct" : "A - The analyst provided the correct follow up steps",
            "explanation" : "After identifying what the user's issue, the analyst should explain to the user the process they will be following. This can be done before initiating the process or throughout the process itself."
        },
        {
            "title" : "Resolution",
            "question" : "1) Did the analyst explain the necessary follow up steps?",
            "audio" : "../audio/Resolution_1.mp3",
            "choices" : [
                "A - Yes, the analyst explained the necessary follow-up steps",
                "B - No, the analyst did not explain the necessary follow up steps",
                "C - None of the above"
                
            ],
            "correct" : "A - Yes, the analyst explained the necessary follow-up steps",
            "explanation" : "After identifying what the user's issue, the analyst should explain to the user the process they will be following. This can be done before initiating the process or throughout the process itself."
        },
        {
            "title" : "Resolution",
            "question" : "2) Did the analyst ask the user if they would like the ticket number?",
            "audio" : "../audio/Resolution_1.mp3",
            "choices" : [
                "A - Yes, the analyst asked the caller if they would like the ticket number",
                "B - No, the analyst did not ask the caller if they would like the ticket number",
                "C - None of the above"
                
            ],
            "correct" : "A - Yes, the analyst asked the caller if they would like the ticket number",
            "explanation" : "At the end of the call the analyst should provide the user with the associated ticket number or ask the user if they would like to have the ticket number."
        },
        {
            "title" : "Resolution",
            "question" : "3) Did the analyst ask the use the proper closing?",
            "audio" : "../audio/Resolution_3.mp3",
            "choices" : [
                "A - Yes, the analyst asked the caller if they needed any other assistance",
                "B - No, the analyst did not ask the caller if they needed any other assistance",
                "C - It is not necessary to offer assistance",
                "D - None of the above"
                
            ],
            "correct" : "A - Yes, the analyst asked the caller if they needed any other assistance",
            "explanation" : "At the end of the call the analyst should ask the user if there is anything else they need assistance with."
        },
        {
            "title" : "Resolution",
            "question" : "4) Did the analyst give the correct closing?",
            "audio" : "../audio/Resolution_4.mp3",
            "choices" : [
                "A - Yes, the analyst gave the correct closing",
                "B - No, the analyst did not give the correct closing",
                "C - None of the above"
                
            ],
            "correct" : "B - No, the analyst did not give the correct closing",
            "explanation" : "At the end of the call, the analyst should thank the user for calling the \"GSK Clinical Support Helpdesk.\" "
        },
        {
            "title" : "Post Call Work",
            "question" : "1) Based on the above screenshot please select the correct action on that ticket:",
            "image" : "../images/postcallwork1.png",
            "choices" : [
                "A - The analyst did not use the correct priority level associated with the issue reported by the user",
                "B - The analyst selected the correct Type+, Category+ and SubCode+ associated with the issue reported by the user",
                "C - The analyst wrote a clear and concise descrption or diary update, which included all the actions performed by the analyst as well as reflecting all the details of the call",
                "D - The analyst did not include all the appropriate information in the Remedy summary",
                "B and C are correct"
                
            ],
            "correct" : "B and C are correct",
            "explanation" : "The analyst should select the correct Type+, Category+, and Sub Code+ associated with the issue reported by the user. The analyst also should write a clear and concise description or diary update, including all the actions performed by the analyst as well as reflecting all the details of the call."
        },
        {
            "title" : "Post Call Work",
            "question" : "2) Under the \"Site History\" tab, select the incorrect action:",
            "image" : "../images/postcallwork2.png",
            "choices" : [
                "A - The analyst should select the correct compound, protocol and site on the Site History tab of the ticket",
                "B - The analyst does not have to select the correct compound, protocol and site on the Site Histort tab of the ticket",
                "C - There is no need for the analyst to create a new ticket",
                "D - The analyst is allowed to use N/A or MANY on the Site History tab of the ticket",
                "B, C and D are correct"
                
            ],
            "correct" : "B, C and D are correct",
            "explanation" : "The analyst should select the correct compound, protocol, and site on the Site History tab of the ticket."
        }
   
    ];

var currentquestion = 0,
    score = 0,
    submt = true,
    picked;

jQuery(document).ready(function ($) {


    function htmlEncode(value) {
        return $(document.createElement('div')).text(value).html();
    }


    function addChoices(choices) {
        if (typeof choices !== "undefined" && $.type(choices) == "array") {
            $('#choice-block').empty();
            for (var i = 0; i < choices.length; i++) {
                 $(document.createElement('li')).addClass('choice choice-box').attr('data-index', i).text(choices[i]).appendTo('#choice-block');
             }
         }
     }

     function nextQuestion() {
         submt = true;
         $('#explanation').empty();
         $('#title').text(mockquiz[currentquestion]['title']);
         $('#question').text(mockquiz[currentquestion]['question']);
         $('#pager').text('Question ' + Number(currentquestion + 1) + ' of ' + mockquiz.length);
         
         if (mockquiz[currentquestion].hasOwnProperty('video') && mockquiz[currentquestion]['video'] != "") {
            if ($('#question-video').length == 0) {
                $(document.createElement('video')).addClass('jcm_video').attr('id', 'question-video').attr('src', mockquiz[currentquestion]['video']).attr('controls', '').attr('poster', '../misc/videoposter.png').attr('type', 'video/mp4').attr('alt', htmlEncode(mockquiz[0]['currentquestion'])).attr('width', '45%').insertAfter('#pager');
             }else {
                 $('#question-video').attr('src', mockquiz[currentquestion]['video']).attr('alt', htmlEncode(mockquiz[currentquestion]['question']));
             }
         } else {
             $('#question-video').remove();
             }
        
         if (mockquiz[currentquestion].hasOwnProperty('audio') && mockquiz[currentquestion]['audio'] != "") {
             if ($('#question-audio').length == 0) {
                 $(document.createElement('audio')).addClass('jcm_audio').attr('style', 'border-radius: 20px; width: 50%; height: 40px;').attr('id', 'question-audio').attr('src', mockquiz[currentquestion]['audio']).attr('controls', '').attr('type', 'audio/mpeg').insertAfter('#pager').attr('alt', htmlEncode(mockquiz[0]['currentquestion']));
             } else {
                 $('#question-audio').attr('src', mockquiz[currentquestion]['audio']).attr('alt', htmlEncode(mockquiz[currentquestion]['question']));
             }
         } else {
             $('#question-audio').remove();
         }
            if (mockquiz[currentquestion].hasOwnProperty('image') && mockquiz[currentquestion]['image'] != "") {
             if ($('#question-image').length == 0) {
                 $(document.createElement('img')).addClass('question-image').attr('id', 'question-image').attr('src', mockquiz[currentquestion]['image']).attr('alt', htmlEncode(mockquiz[currentquestion]['question'])).insertAfter('#question');
             } else {
                 $('#question-image').attr('src', mockquiz[currentquestion]['image']).attr('alt', htmlEncode(mockquiz[currentquestion]['question']));
             }
         } else {
             $('#question-image').remove();
         }
         addChoices(mockquiz[currentquestion]['choices']);
         setupButtons();


     }

    var resultsquestion = [];
    var resultschoice = [];
    var resultsanswer = [];
    
     function processQuestion(choice) {
         resultsquestion.push(mockquiz[currentquestion]['question']);
         resultsanswer.push(mockquiz[currentquestion]['choices'][choice]);
         
         if (mockquiz[currentquestion]['choices'][choice] == mockquiz[currentquestion]['correct']) {
             resultschoice.push('Correct');
             $('.choice').eq(choice).css({
                 'background-color': '#50D943'
             });
             $('#explanation').css("color", "darkgreen").html('<strong>Correct!</strong> ' + htmlEncode(mockquiz[currentquestion]['explanation']));
             score++;
         } else {
             resultschoice.push('Incorrect');
             $('.choice').eq(choice).css({
                 'background-color': '#D92623'
             });
             $('#explanation').css("color", "orangered").html('<strong>Incorrect.</strong> ' + htmlEncode(mockquiz[currentquestion]['explanation']));
         }
         currentquestion++;
         $('#submitbutton').html('NEXT QUESTION &raquo;').on('click', function () {
             if (currentquestion == mockquiz.length) {
                 endMockquiz();
             } else {
                 $(this).text('Check Answer').css({
                     'color': '#222'
                 }).off('click');
                 nextQuestion();
             }
         })
     }
    

    function markComplete(){
	
	var msg;
	
	msg = "<p>Course has been Mark Complete!</p><span class='button' onclick='prompt(100)'>OK</span>";
		
	$("#alertbox").html(msg);
	

    }


    function prompt(num){
	

        doLMSSetValue("cmi.core.lesson_status","completed");
		doLMSFinish();	
	}


     function setupButtons() {
         $('.choice').on('mouseover', function () {
             $(this).css({
                 'background-color': '#e1e1e1'
             });
         });
         $('.choice').on('mouseout', function () {
             $(this).css({
                 'background-color': '#fff'
             });
         })
         $('.choice').on('click', function () {
             picked = $(this).attr('data-index');
             $('.choice').removeAttr('style').off('mouseout mouseover');
             $(this).css({
                 'border-color': '#222',
                 'font-weight': 700,
                 'background-color': '#c1c1c1'
             });
             if (submt) {
                 submt = false;
                 $('#submitbutton').css({
                     'color': '#000'
                 }).on('click', function () {
                     $('.choice').off('click');
                     $(this).off('click');
                     processQuestion(picked);
                 });
             }
         })
     }


     var score1 = 0,
         score2 = 0,
         score3 = 0,
         score4 = 0,
         scorefinal = 0,
         questchoice = "";
    
     function endMockquiz() {
         $('#explanation').empty();
         $('#title').text('Results');
         $('#question').empty();
         $('#question-audio').remove();
         $('#question-video').remove();
         $('#question-image').remove();
         $('#pager').remove();
         $('#choice-block').empty();
         $('#submitbutton').remove();
               
         $('#question').text('Please see below score for answers provided and press Mark Complete button:');
         
         $(document.createElement('p')).appendTo('#question');
                                                          
         $(document.createElement('li')).text('Mark Complete').attr('align', 'center').attr('id', 'markcomplete_label').attr('onclick', 'markComplete()').appendTo('#question');
         
         markComplete();
                                                             
         $(document.createElement('p')).appendTo('#question');
         
         $('#question').wrap('<div id="resultsblock" style="display:block;margin:0 auto;width:980px;">');
         
         $(document.createElement('img')).addClass('logo').attr('id', 'logo1').attr('src', "../images/alphanumeric.png").attr('alt', "Logo" ).appendTo('#question');
         $(document.createElement('img')).addClass('logo').attr('id', 'logo2').attr('style', 'float:right').attr('src', "../images/cshdlogo.png").attr('alt', "Logo" ).insertAfter('#logo1');
         
         $(document.createElement('p')).appendTo('#question');
         
         $(document.createElement('p')).addClass('resulttitle').text('Introduction and Customer Service').appendTo('#question');
          
         for (var i = 0; i < 4; i++) {
             $(document.createElement('p')).addClass('questionresult').attr('data-index', i).text(resultsquestion[i]).appendTo('#question');
             
             $(document.createElement('p')).addClass('resultanswer').attr('data-index', i).text(resultsanswer[i]).appendTo('#question');
             
             $(document.createElement('ul')).addClass('choice-block').attr('data-index', i).text(resultschoice[i]).appendTo('#question');
             
             if (resultschoice[i] == 'Correct') {
                 score1++
             }
             
         } 
         
         $(document.createElement('p')).text('Score: ' + Math.round(score1 / 4 * 100) + '%').addClass('score').appendTo('#question');
         
         $(document.createElement('p')).addClass('resulttitle').text('Troubleshooting, Hold Process and Customer Service').appendTo('#question');
         
         
         for (var i = 4; i < 11; i++) {   
             $(document.createElement('p')).addClass('questionresult').attr('data-index', i).text(resultsquestion[i]).appendTo('#question');
             
             $(document.createElement('p')).addClass('resultanswer').attr('data-index', i).text(resultsanswer[i]).appendTo('#question');
             
             $(document.createElement('ul')).addClass('choice-block').attr('data-index', i).text(resultschoice[i]).appendTo('#question');
             
             if (resultschoice[i] == 'Correct') {
                 score2++
             }
         }
         
         $(document.createElement('p')).text('Score: ' + Math.round(score2 / 7 * 100) + '%').addClass('score').appendTo('#question');
         
         $(document.createElement('p')).addClass('resulttitle').text('Resolution').appendTo('#question');
         
         
         for (var i = 11; i < 15; i++) {
             $(document.createElement('p')).addClass('questionresult').attr('data-index', i).text(resultsquestion[i]).appendTo('#question');
             
             $(document.createElement('p')).addClass('resultanswer').attr('data-index', i).text(resultsanswer[i]).appendTo('#question');
             
             $(document.createElement('ul')).addClass('choice-block').attr('data-index', i).text(resultschoice[i]).appendTo('#question');
             
             if (resultschoice[i] == 'Correct') {
                 score3++
             }
         }
         
         $(document.createElement('p')).text('Score: ' + Math.round(score3 / 4 * 100) + '%').addClass('score').appendTo('#question');
         
         $(document.createElement('p')).addClass('resulttitle').text('Post Call Work').appendTo('#question');

         for (var i = 15; i < 17; i++) {
             $(document.createElement('p')).addClass('questionresult').attr('data-index', i).text(resultsquestion[i]).appendTo('#question');
             
             $(document.createElement('p')).addClass('resultanswer').attr('data-index', i).text(resultsanswer[i]).appendTo('#question');
             
             $(document.createElement('ul')).addClass('choice-block').attr('data-index', i).text(resultschoice[i]).appendTo('#question');
             if (resultschoice[i] == 'Correct') {
                 score4++
             }
         }
                  
         
         $('.resulttitle').wrap('<div id="resulttitle" style="display:block;margin:0;border:1px solid black;background-color: rgb(150, 150, 150);">');
         
         $('.questionresult').wrap('<div id="qresult" style="display:block;margin:0;border:1px solid black;background-color: rgb(189, 215, 238);font-weight: normal;">');
         
         $('.resultanswer').wrap('<div id="resultanswer" style="display:block;margin:0;border:1px solid black;background-color: rgb(255, 255, 255);font-weight: normal;">');
         
         $('.choice-block').wrap('<div id="choiceblock" style="display:block;margin:0;border:1px solid black;background-color: rgb(255, 255, 255);font-weight: normal;">');
         
         $(document.createElement('p')).text('Score: ' + Math.round(score4 / 2 * 100) + '%').addClass('score').appendTo('#question');
         
         $('.score').wrap('<div id="scorepart" style="display:block;margin:0;border:1px solid black;background-color: rgb(42, 38, 91);">');
         
         scorefinal = score1 + score2 + score3 + score4;
         
         $(document.createElement('p')).text('Total Score: ' + Math.round(scorefinal / 17 * 100) + '%').addClass('finalscore').appendTo('#question');
         
         $('.finalscore').wrap('<div id="scorefin" style="display:block;margin:0;border:1px solid black;background-color: rgb(241, 123, 13);">');
         
         
                  
     }

     function init() {

         //add pager and questions
         if (typeof mockquiz !== "undefined" && $.type(mockquiz) === "array") {
             
             //add title
             $(document.createElement('h1')).addClass('title').attr('id', 'title').text(mockquiz[0]['title']).appendTo('#frame');

             //add pager
             $(document.createElement('p')).addClass('pager').attr('id', 'pager').text('Question 1 of ' + mockquiz.length).appendTo('#frame');
             $(document.createElement('p')).appendTo('#frame');
             
             //add audio if present
             if (mockquiz[0].hasOwnProperty('audio') && mockquiz[0]['audio'] != "") {
                 $(document.createElement('audio')).addClass('jcm_audio').attr('style', 'border-radius: 20px; width: 50%; height: 40px;').attr('id', 'question-audio').attr('src', mockquiz[0]['audio']).attr('controls', '').attr('alt', htmlEncode(mockquiz[0]['question'])).attr('type', 'audio/mpeg').appendTo('#frame');
             }

            //add video if present
             if (mockquiz[0].hasOwnProperty('video') && mockquiz[0]['video'] != "") {
                 $(document.createElement('video')).addClass('jcm_video').attr('id', 'question-video').attr('src', mockquiz[0]['video']).attr('controls', '').attr('poster', '../ misc/videoposter.png').attr('type', 'video/mp4').attr('alt', htmlEncode(mockquiz[0]['question'])).attr('width', '45%').appendTo('#frame');
             }

             //add first question
             $(document.createElement('br')).appendTo('#frame');             $(document.createElement('p')).addClass('question').attr('id', 'question').text(mockquiz[0]['question']).appendTo('#frame');
             
             //add image if present
             if (mockquiz[0].hasOwnProperty('image') && mockquiz[0]['image'] != "") {
                 $(document.createElement('img')).addClass('question-image').attr('id', 'question-image').attr('src', mockquiz[0]['image']).attr('alt', htmlEncode(mockquiz[0]['question'])).appendTo('#frame');
             }
             $(document.createElement('p')).addClass('explanation').attr('id', 'explanation').html('&nbsp;').appendTo('#frame');

             //questions holder
             $(document.createElement('ul')).attr('id', 'choice-block').appendTo('#frame');

             //add choices
             addChoices(mockquiz[0]['choices']);

             //add submit button
             $(document.createElement('div')).addClass('choice-box').attr('id', 'submitbutton').text('Check Answer').css({
                 'font-weight': 700,
                 'color': '#222',
                 'padding': '30px 0'
             }).appendTo('#frame');

             setupButtons();
         }
     }

     init();
 });