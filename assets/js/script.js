
(function(){

    var clickGo = document.querySelector('.button-go');
    var searchInput = document.querySelector('.search-input');
    var list = document.querySelector('.list');
    var listArray = [];

    var clickGoFunc = function() {
            var searchValue = searchInput.value;

            // check if input field is empty
            if(searchValue === ""){
                
                alert("please put a value in the input field");
            
            }else{

                // check if list item already exists in the array named listArray
                if(listArray.indexOf(searchValue) == -1){
                    listArray.push(searchValue);

                        // Function for creating loop for added array items and enclosing each array item inside <li>
                        //Also adding a close button to each array item by adding <a> Tag
                        var runIt = function (){
                                for(var i= 0; i < listArray.length; i++ ){
                                    var liTag = document.createElement('li');
                                    var removeItem = document.createElement('span');
                                    var closeLink = document.createElement('a');
                                    closeLink.className = "close-link";
                                    closeLink.setAttribute('href', "#");
                                    closeLink.textContent = 'X';

                                    // adding <a> tag inside span
                                    removeItem.appendChild(closeLink);

                                    liTag.textContent = listArray[i].toUpperCase();
                                    list.appendChild(liTag);
                                    liTag.appendChild(removeItem);
                                    list.appendChild(liTag)
                                } 
                                // end of for loop
                        }; 
                        // end of runit

                        // clearing ul.list container before reloading array items.
                        list.innerHTML = "";

                        // calling runIt funtion which contains for loop  for all the array items
                        list.appendChild(runIt());

                }else{
                    alert("value already exisits");
                } 
                // end of if and else statement which is checking if value is already there is the array
                // pushing new values in the listArray array 
                // wrapping new array items in li tags and adding close button on each array item
            }
            // if statement checking if the input field is empty , if not it runs other function which checks following 
                    // end of if and else statement which is checking if value is already there is the array
                    // pushing new values in the listArray array 
                    // wrapping new array items in li tags and adding close button on each array item
            } 
            // end of clickGoFunc


    //calling function 
    clickGo.addEventListener('click', function(){
            clickGoFunc()
    });

}());

