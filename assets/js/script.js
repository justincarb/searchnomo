

var clickGo = document.querySelector('.button-go');
var searchInput = document.querySelector('.search-input');
var containerContent = document.querySelector('.container-content');
var listArray = [];
/*
clickGo.onclick = function() {
  var searchValue = searchInput.value;
    if(searchValue === ""){
      alert("please put a value in the input field");

      }else{
        //checking if array already contains added list item
        //if it is not, push the item to the array
            if(listArray.indexOf(searchValue) == -1){
              listArray.push(searchValue);

            // Adding li tags to the array list items
            var liTag = document.createElement('li');

            for(var i= 0; i < listArray.length; i++ ){
              containerContent.textContent = (listArray[i]);

              containerContent.appendChild(liTag);
            }
            // if arry contains already contains list item then alert following message
            }else{
              alert("value already exisits");
            }
          }
        };

    */


    clickGo.onclick = function() {
        var searchValue = searchInput.value;
        if(searchValue === ""){
            alert("please put a value in the input field");
        }else{

            if(listArray.indexOf(searchValue) == -1){
                listArray.push(searchValue);

                var ulTag = document.createElement('ul');

                for(var i= 0; i < listArray.length; i++ ){
                    var liTag = document.createElement('li');
                    liTag.textContent = listArray[i];
                    ulTag.appendChild(liTag);
                }

                containerContent.innerHTML = "";
                containerContent.appendChild(ulTag)

            }else{
                alert("value already exisits");
            }
        }
    };
