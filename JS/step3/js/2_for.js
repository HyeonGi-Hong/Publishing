/*
    ?for
    * 특정구문을 정해진 횟수 만큼 반복해야 할 경우 사용하는 반복문. (while은 무한반복을 편하게 / 유한반복은 for가 좀더 편함)
    실무사용의 예
    ? 1. 게시판의 게시글 목록 불러올 때
    ? 2. 구글 맵, 네이버 맵 등의 정보를 출력 할 때
    ? 3. 메뉴의 항목(관리자제어가능한) 출력 할 때
    ? 4. 갤러리의 이미지 목록을 출력 할 때
    ? 5. os 등의 파일 탐색기의 파일 목록 출력 할 때...
    *루프
    1. 초기식실행 > 2. 조건식 비교, 조건이 거짓일 경우 반복문 종료 > 
    3. 참일경우 문장 실행 > 4. 종결식 실행 > 5. 2단계
*/
// ! 단일 for

// * case.1 이름을 10번 출력해보자.
function namePrint10(){
     var userName = 'Mark';
     for (var i = 1; i <= 10; i++){
         document.write(i + '.' + userName + '<br>');
     }
 }
 // * case.2 이름을 1000번 출력
 function namePrint1000(){
     var userName = "Mark";
     for(var i = 1; i <= 1000; i++){
         document.write(i + '.' + userName + '<br>');
     }
 }
 // todo. JSEngine처럼 생각하기
 function thinkJS(){
     for (var i = 0; i < 10; i++){ //? 1 ~ 9
         document.write('i = ' + i, '<br>'); //? 0 ~ 9
     }
     document.write('종료 i = ' + i); //? 9  10이라고?
 }

// todo.1 1 - 10까지 출력되는 반복문의 여러 방법.

function answer1(){
     for(var i = 0; i < 10; i++){
          document.write((i + 1) + '<br>');
     }
}

function answer2(){
     for(var i = 1; i <= 10; i++){
          document.write((i + 1) + '<br>');
     }
}

function answer3(){
     for(var i = 100; i < 110; i++){
          document.write((i -99) + '<br>');
     }
}

function answer4(){
     for(var i = 1; i <= 10; i+=2){
          document.write(i + '<br>');
          document.write((i + 1) + '<br>');
     }
}

// todo. 1 ~ 10까지만 나오기만 하면됨.
function answer5(){
     for(var i = 11; i < 21; i++){
          document.write((i - 10) + '<br>')
     }
}

function answer6(){
     function answer5(){
          for(var i = 10; i>=1; i--){
              document.write((11-i)+'<br>');
          }
      }
}

function star10(){
     var star = '';
     for(var i = 0; i < 10; i++){
          star += '*';
     }
     document.write('result =' + star);
}


// * case.3 자신이 좋아하는 과일 4개를 배열로 배치하고, alert으로 출력.
function favorFluit(){
     var array = ['딸기', '포도', '망고', '수박'];
     //console.log(array[0]);
     for(var i = 0; i < array.length; i++){
          console.log(array[i]);
     }
} 

// todo. 지금까지 배웠던 JS단원명을 배열을 활용해 출력해보자.
function arrayFor(){
     var data = ['check','variable','typeof','operator','if','switch','while','for']; //? 베웠던 js딘원명 배열화.
     for(var i = 0; i < data.length; i++){
          document.write(data[i] + '<br>'); //? for loop를 통해 전체 출력
     } 
}

function arrayForES6(){

}

// * case.4 역반복배열
function reverseFavorFluit(){
     var array = ['딸기','수박','망고','포도'];

     for(var i = array.length - 1; i >=0; i--){
          document.write(array[i]);
     }
}

// * case.5 continue
function forContinue(){
     for (var i = 0; i <= 10; i++){
          continue;
          document.write(i + '<br>');
     }
     document.write('최종 i = ' + i + '<br>');
}

// * case.5-1 활용
function runContinue(){
     var output = 0;
     for (var i = 1; i <= 10; i++){
          if(i%2==1){
               continue;;
          }
          output += i;
          alert(output);
     }
}

// * case.5 break
function forBreak(){
     for(var i = 1; i <= 10; i++){
          break;
          document.write(i + '<br>');
     }
     document.write('최종 i =' + i + '<br>');
}

// *case. 6-1 활용
function runBreak(){
     for(var i = 0; true; i++){
          alert(i + '번째 반복문');
          if(!confirm('계속하시겠습니까?')){
               break;
          }
     }
}

// !다중 for

// *case.1 반절피라미드

function halfPyramid(){
     var star = '';
     for(var i = 1; i <= 10; i++){ //? i = 1, 10보다 작기때문에 true. 다음실행 / i 1증가. i = 2, 10보다 작기때문에 true. 다음실행
         for(var j = 0; j < i; j++){ //? j = 0, i = 1, j < i이기때문에 true. 다음실행 / j 1 증가. j = 1, i = 1, false이기때문에 반복문 중지하고 외부 반복문으로 실행 / j = 0, i = 2, j < i이기때문에 true. 다음실행
                                   //? j 1증가. j = 1, i = 2, j < i가 true이기때문에 다음 실행 / j 1증가. j = 2, i = 2 false이기때문에 반복문 중기 외부 반복문으로 실행.
             star += '*'; //? '*'이 하나 찍히고 위로 올라가서 다시 판별. / '*'이 하나찍히고 위로 올라가서 다시 판별. '*'이 두개찍히고 위로 올라가서 다시 판별.
         }
         star += '<br>';// ? '*'에 '<br>'찍히고 외부 최상단 반복문으로 올라가서 다시 판별. / '**'에 '<br>'찍히고 외부 최상단 반복문으로 올라가서 다시 판별.
     }
     document.write(star); //?
 }
 //*todo.1 역반절 피라미드
function reverseHalfPyramid(){
     var star = '';
     for(var i = 10; i >= 1; i--){
          for(var j = 0; j < i; j++){
               star += '*';
          }
          star += '<br>'; 
     }
     document.write(star);
}

// todo. pyramid
function pyramid(){
     var star = '';
     for(var i = 1; i <= 10; i++){
          for(var e = 10; e >= i; e--){
               star += '&nbsp;';
          }
          for(var s = 0; s < 2*i-1; s++){
               star += '*';
          }
          star += '<br>';
     }
     document.write(star);
}