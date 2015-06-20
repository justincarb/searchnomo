var inputBox = document.querySelector('#input-box');
var textBox = document.querySelector('.text-box');
var inputButton = document.querySelector('#input-button');
var arrayBox = document.getElementById('array-box');

var list = [];
var names = '';


inputButton.onclick = function(){
  // check of input value is already exists in the array
  if(list.indexOf(inputBox.value)> -1){
    alert('This Value is already exists');
  }else{
    // push input value into the array.
    list.push(inputBox.value);
    // reset input box before updated array is loaded
    arrayBox.innerHTML = '';

    // loop for array items
    for(var i = 0; i < list.length; i++){
      arrayBox.innerHTML += '<li>' + list[i] + '<a href="#" class="close-btn">X</a></li></br>';
      }
    }
};


document.body.addEventListener('click',function(e){
  if(e.target.className === 'close-btn'){
    e.target.parentNode.remove();
  }
});
