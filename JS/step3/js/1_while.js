/*
    ? while
    * while 반복문은 조건이 참일 경우 무한 반복.
    * (for문도 가능하지만..)
*/

// *case.1 password '1234'가 입력되면 '접속승인', 아니면 '접속거부'.
function pwCheck(){
     while(true){
         var value = window.prompt("password를 입력하세요.");
 
         if(value == 1234){
             alert('접속승인!');
             break;
         }else{
             alert('접속거부!');
         }
     }   
 }
 
 // *case.2 while Continue
 function whileContinue(){
     var i = 1;
     while(i <= 10){ //?
         i++; //?
         continue; //?
 
         document.write(i + '<br>'); //?
     }
     document.write('최종 i = ' + i + '<br>'); //?
 }
 // *case.3 while Break
 function whileBreak(){
     var i = 1;
     while(i <= 10){ //?
         i++; //?
         break; //?
         document.write(i + '<br>'); //?
     }
     document.write('최종 i = ' + i + '<br>'); //?
 }

 //todo. 구구단 숫자를 입력받아 출력하는 while문
 // ? 1. 숫자(단수)입력받을 prompt출력.
 // ? 2. 입력받으면 해당 구구단을 출력.
 // * 9단 이내로만 입력받기. ex> 9단이 넘어갈 시 '9단 이하로 입력하새요.'
function gugudan() {
     var guguNumb = window.prompt('구구단숫자를 입력하세요.(1 ~ 9)');
     var i = 1;

     if(guguNumb <= 9){
          while(i <= 9){
               document.write(guguNumb + 'x' + i + '=' + (guguNumb * i + '<br>'))
               i++;
          }
     }else{
          alert('9단 이하로 입력하세요.')
     }
}
// todo. end가 입력될 때 까지 숫자를 계속 입력받아 입력값의 합을 출력하고, prompt 에는 몇번 수행했는지 표시(x번째 입력)
// ? 1. 숫자를 입력받는 prompt는 'end'가 입력되기 전 까지 무한으로 출력.
// ? 2. 그렇게 입력받은 숫자들은 계속 연산이 되면서(현재까지의 총합은 계속 누적.) 'end가 입력되면 종료 후 출력.
// * 'end'가 입력되었을 때 '입력이 종료되었습니다.' 경고창이 출력.
// * prompt 상단 guide에 i번째 출력.

function sumNumb(){
     var i = 1;// ? prompt count 변수.
     var result = 0;// ? 입력받은 숫자를 계속 더해서 담아낼 결과 변수.
 
     // ? 반복 -> 무한반복.
     while(true){
         var numb = window.prompt(i + '번째 입력'); // ? prompt 띄워주기
         if(numb == "end"){
             alert('입력이 종료되었습니다.');
             break;
         }// ? 'end' string과 관련된 조건문 부분이 있어야된다.( loop를 종료 시킬수 있어야 함.)
 
         result += parseInt(numb);//? 결과변수에 저장.
         document.write('현재까지의 총합 : ' + result + '<br>');//? 저장된값을 출력.
         i++; //? 수행시 prompt count 증가.
     }
 }