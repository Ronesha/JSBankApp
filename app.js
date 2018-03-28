//account object constructor

function Account(desc, value, type){
   this.desc = desc;
   this.value = value;
   this.type = type;
}

Account.prototype.totalCalc = function(){
    
}


//even listeners will set off 
let deposit = document.querySelector('.addTo');
let withdraw = document.querySelector('.takeFrom');
let total = 200;//initial bank account value
document.querySelector('.tot').innerHTML(total);

deposit.addEventListener('click', function(){
    //define variables
    let desc = document.querySelector('.debName').value;
    let value = document.querySelector('.debCost').value;
    let type = 'deposit'; 
    //make new instance of Account object to group variables together
    const addToAccount = new Account(desc, value, type);
    console.log(addToAccount);
    //then we want to display in UI
    let ui = new UI();
    ui.depositDisplay(addToAccount);

})

withdraw.addEventListener('click', function(){
    //define variables
    let desc = document.querySelector('.widName').value;
    let value = document.querySelector('.widCost').value;
    let type = 'withdraw'; 
    //make new instance of Account object to group variables together
    const withdrawFromAccount = new Account(desc, value, type);
    console.log(withdrawFromAccount);
    //then we want to display in UI
    let ui = new UI();
    ui.withdrawDisplay(withdrawFromAccount);
    
})



//UI constructor

function UI () {};

//account display deposit
UI.prototype.depositDisplay = function(addToAccount){
   let parent = document.querySelector('.depositBlock');
   let template = ` 
                      <div class="item_list" id="deposit">
                       <div class="row">
                      <div class="col-8">
                        <div class="item_title">
                           ${addToAccount.desc}
                       </div>
                     </div>
 
                      <div class="col-4">
                        <div class="item_value">
                           ${addToAccount.value}
                        </div>
                     </div>         
                </div>
          </div>             
        `
 
   parent.insertAdjacentHTML('afterend',template);

}

UI.prototype.withdrawDisplay = function(withdrawFromAccount){
 
    let parent = document.querySelector('.withdrawBlock');
    let template = ` 
                       <div class="item_list" id="withdraw">
                        <div class="row">
                       <div class="col-8">
                         <div class="item_title">
                            ${withdrawFromAccount.desc}
                        </div>
                      </div>
  
                       <div class="col-4">
                         <div class="item_value">
                            ${withdrawFromAccount.value}
                         </div>
                      </div>         
                 </div>
           </div>             
         `
  
    parent.insertAdjacentHTML('afterend',template);
 


}

