$(document).ready(function(){
     //* case.1
     var $divs = $('div');
     $divs.css('color','#f00');

     //* case.2
     $('#btnCheck').click(sayHello);

     //* case.3
     $('#btnAddBorder').click(addBorder);

     //todo
     $('#btnTextChange').click(changeText);
});

//* case.2
function sayHello(){
     alert('hello');
}

//* case.3
function addBorder(){
     $('#panel1').css('border','5px solid black')
}

//todo
function changeText(){
     $('#panel2').css({
          'font-size' : '25px',
          'color' : 'green',
          'font-weight' : '900'
     })
}
