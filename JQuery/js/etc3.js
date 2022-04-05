$(document).ready(function(){
     toggleCheck();
     // todo. 자신만의 component 한개 만들기.
     toggleTodo();
     tabUI();
});
function toggleCheck(){
     var $checkTarget= $('.material-icons.checkIco');
     var $checkLabel = $('.label.checkLabel');
     var checkStatus = false;

     $checkLabel.click(function(){
          checkStatus = !checkStatus;
          if(checkStatus == true){
               $checkTarget.text('check_box');
          }else{
               $checkTarget.text('check_box_outline_blank');
          }
     });
}

//todo. 자신만의 component 만들어보기
$(document).ready(function(){
     toggleCheck2();
     tabUI();
});
function toggleCheck2(){
     var $checkTarget2 = $('.material-icons.checkIco2');
     var $checkLabel2 = $('.label2.checkLabel2');
     var checkStatus2 = false;

     $checkLabel2.click(function(){
          checkStatus2 = !checkStatus2;
          if(checkStatus2 == true){
               $checkTarget2.text('volume_off');
          }else{
               $checkTarget2.text('volume_up');
          }
     });
}


function toggleTodo(){
     var $toggleTarget = $(".material-icons.toggleVisible");
     var toggleStatus = false;
 
     $toggleTarget.click(function(){
         toggleStatus = !toggleStatus;
         if(toggleStatus == true){
             $toggleTarget.text("visibility");
         }else{
             $toggleTarget.text("visibility_off");
         }
     });
 
 }
 
 function tabUI(){
     $(".tabMenu li").click(function(){
         var activeTab = $(this).attr("data-tabNumb");
 
         $('.tabMenu li').removeClass("activated");
         $(this).addClass("activated");
         // todo. tabPage 같이 묶어 키고 끄기.
 
         $(".tabPage").removeClass("activated");
         $("#"+activeTab).addClass("activated");
     });
 }