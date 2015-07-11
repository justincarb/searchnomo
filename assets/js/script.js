
(function(){

    var clickGo = document.querySelector('.button-go');
    var searchInput = document.querySelector('.search-input');
    var list = document.querySelector('.list');
    var listArray = [];
    var aClickBtn = aClickBtn;


// Loop function to show array items inside Li tag with remove button on the right side
    var dynElelmentFunc = function(){
        for(var i= 0; i < listArray.length; i++ ){
            var liTag = document.createElement('li');
            var removeItem = document.createElement('span');
            var closeLink = document.createElement('a');
            closeLink.className = "close-link";
            closeLink.setAttribute('href', "#");
			closeLink.setAttribute('onclick', "removeItem(this,'" + listArray[i] + "')");
            closeLink.textContent = 'X';

            // adding <a> tag inside span
            removeItem.appendChild(closeLink);

            // adding each array Item
            liTag.textContent = listArray[i].toUpperCase();

            // adding Li tags to each array item
            list.appendChild(liTag);


            // adding remove button
            liTag.appendChild(removeItem);


        }
        // end of for loop


         // var for a tag created dynamiclly to make it available outside scope
            aClickBtn = document.getElementsByTagName('a');
            return aClickBtn;


    };
    //end of dynElements



    var clickGoFunc = function() {
            var searchValue = searchInput.value;

            // check if input field is empty
            if(searchValue === ""){

                alert("please put a value in the input field");

            }else{

                        // check if list item already exists in the array named listArray
                        if(listArray.indexOf(searchValue) == -1){
                            listArray.push(searchValue);

                               //Calling dynElelmentFunc which contains loop to display array items
                                var runIt = function (){
                                    dynElelmentFunc();
                                };
                                // end of runit

                                // clearing ul.list container before reloading array items.
                                list.innerHTML = "";

                                // calling runIt function
                                //list.appendChild(runIt());
								runIt();

								document.querySelectorAll(".form-control")[0].value = "";
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
    };
            // end of clickGoFunc

	removeItem = function(xAnchor,value){
		xAnchor.parentNode.parentNode.remove();
		console.log(listArray);
		console.log(listArray.indexOf(value));
		listArray.splice(listArray.indexOf(value) 	,1);
		console.log(listArray);
	};

    //calling function
    clickGo.addEventListener('click', function(){
            clickGoFunc();
    });

	return{
		removeItem : removeItem
	};

}());
