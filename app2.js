var account = [];

function bankAccountEntry(desc, value, type){
   this.desc = desc,
   this.value = value,
   this.type = type
}

//function to display to UI
function displayAccount(){
   for(var [i] in account){
          if(account[i].type === 'deposit'){
         let parent = document.querySelector('.depositBlock');
         let template = ` 
                            <div class="item_list" id="deposit">
                             <div class="row">
                            <div class="col-8">
                              <div class="item_title">
                                 ${account[i].desc}
                             </div>
                           </div>
       
                            <div class="col-4">
                              <div class="item_value">
                                 ${account[i].value}
                              </div>
                           </div>         
                      </div>
                </div>             
              `
       
         parent.insertAdjacentHTML('afterend',template);
      
      }
      else{
         let parent = document.querySelector('.withdrawBlock');
         let template = ` 
                            <div class="item_list" id="withdraw">
                             <div class="row">
                            <div class="col-8">
                              <div class="item_title">
                                 ${account[i].desc}
                             </div>
                           </div>
       
                            <div class="col-4">
                              <div class="item_value">
                                 ${account[i].value}
                              </div>
                           </div>         
                      </div>
                </div>             
              `
       
         parent.insertAdjacentHTML('afterend',template);
      
      }
   }
}

//display total

function displayTotal(){
   $('.tot').html(accountTotal())
}

//create an alert if account is overdrawn
function overDrawn(){
    //change the color of the account balance to red
    $('.tot').css('color','red');
    //add html to span tag 
    $('.alert').html('<h4>Account Overdrawn!</h4>')
    $('.alert').css('color', 'red');
}

//if account is not overdrawn
function accountBalanced(){
  $('.tot').css('color', 'black');
  $('.alert').html('');
}

//create a function to push a new instance of the bankAccount object into the Account array
function createNewListing(desc, value, type){
   var item = new bankAccountEntry(desc, value, type);
   account.push(item);
}

//create a function to count total
function accountTotal(){
   let total = 200;
   for(var [i] in account){
      if(account[i].type === 'deposit'){
         total += parseInt(account[i].value);
      }
      else{
         total -= parseInt(account[i].value);
      }
      if(total < 0){
        
         //run this function
         overDrawn();
      }
      else{
         accountBalanced();
      }
   }
   return total;
}

// deposit event listener
 $('.addTo').on('click',function(e){
   let desc = document.querySelector('.debName').value;
   let value = document.querySelector('.debCost').value;
   let type = 'deposit'; 

   if(desc === '' || value === ''){
          validate();
   }
   else{
   e.preventDefault();
   createNewListing(desc, value, type);
   accountTotal();
   displayAccount();
   displayTotal();
   clearFields();
   }
 })

// withdraw event listener

$('.takeFrom').on('click', function(e){
   let desc = document.querySelector('.widName').value;
   let value = document.querySelector('.widCost').value;
   let type = 'withdraw'; 
   if(desc === '' || value === ''){
    validate();
}
else{
   e.preventDefault();
   createNewListing(desc, value, type);
   accountTotal();
   displayAccount();
   displayTotal();
   clearFields();
}
})

//clear text fields
function clearFields(){
 document.querySelector('#dName').value = '';
 document.querySelector('#dCost').value = '';
 document.querySelector('#wName').value = '';
 document.querySelector('#wCost').value = '';
}

//form validation
function validate(){
  $('.alert').css('color', 'red');
  $('.alert').html('Please enter all fields');
}

//form validation text input
// Function to check letters and numbers

function validateText(){

}