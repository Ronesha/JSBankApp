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
         console.log('Account Overdrawn!');
      }
   }
   return total;
}

// deposit event listener
 $('.addTo').on('click',function(e){
   let desc = document.querySelector('.debName').value;
   let value = document.querySelector('.debCost').value;
   let type = 'deposit'; 
   e.preventDefault();
   createNewListing(desc, value, type);
   accountTotal();
   displayAccount();
   displayTotal();
 })

// withdraw event listener

$('.takeFrom').on('click', function(e){
   let desc = document.querySelector('.widName').value;
   let value = document.querySelector('.widCost').value;
   let type = 'withdraw'; 
   e.preventDefault();
   createNewListing(desc, value, type);
   accountTotal();
   displayAccount();
   displayTotal();
})



