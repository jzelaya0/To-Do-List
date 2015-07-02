$(function(){

//WHEN CHECKBOX IS CLICKED
  //1. STAR NEEDS TO CHANGE COLOR TO GOLD
  //2 (OPTIONAL) MOVE THAT ITEM TO THE BOTTOM OF THE list
$('input[type=checkbox]').click(function(){
  if(this.checked){
      $(this).next().css("color", "#ffcc00");
      console.log(this);
  }else {
      $(this).next().css("color", 'rgb(71, 62, 57)');
      console.log(this);
  }
});

//WHEN DELETE BUTTON IS CLICKED
  //1. REMOVE THE ENTIRE LIST ITEM
  $('.glyphicon.glyphicon-remove').click(function(){
    $(this).parent().remove();
    console.log(this);
  });


//WHEN A NEW TASK IS ADDED
  //1. VALUE OF INPUT FIELD IS ADDED TO A NEW LIST ITEM
  $('.form').submit(function(event){
    event.preventDefault();
});
  //2. ADD CLICK BUTTON CREATES THE NEW LIST ITEM AND ADDS IT TO THE LIST
  $('.btn').click(function(){
    $inputText = $('.form-input').val();
    $('.list').append('<p><input type="checkbox"><i class="glyphicon glyphicon-star"></i><span>' + $inputText + '</span><i class="glyphicon glyphicon-remove"></i></p>');
  });





});
