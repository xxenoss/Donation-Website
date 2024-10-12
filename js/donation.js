const myBalance = document.getElementById('my-balance')


donateMoney(donateButtonId= 'feni-donate-button',inputId='feni-input-donate', addBalanceto='feni-balance', heading = 'feni-heading')
donateMoney(donateButtonId= 'noakhali-donate-button',inputId='noakhali-input', addBalanceto='noakhali-balance', heading = 'noakhali-heading')
donateMoney(donateButtonId= 'quota-donate-button',inputId='quota-input', addBalanceto='quota-balance', heading= 'quota-heading')

function donateMoney(donateButtonId, inputId, addBalanceto, heading){
    document.getElementById(donateButtonId).addEventListener('click', function(event){
            event.preventDefault();
    const donateAmount = document.getElementById(inputId).value
    const donateBalance = document.getElementById(addBalanceto).innerText
    const newMyBalance = parseFloat(myBalance.innerText) - parseFloat(donateAmount)
    if (newMyBalance >= 0 && donateAmount > 0){
    document.getElementById('my-balance').innerText = newMyBalance

    const newDonateBalance = parseFloat(donateBalance) + parseFloat(donateAmount)
    document.getElementById(addBalanceto).innerText = newDonateBalance
    popupSuccess()
    transactionHistory(donateAmount, heading)
    }
    else{
        alert("You haven't Sufficient Balance")
    }
})}
 


// popup success

function popupSuccess(){
    document.getElementById('popup-id').classList.remove('hidden')
    document.getElementById('close-button').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('popup-id').classList.add('hidden')

    })
}

//transaction scetion
function transactionHistory(donateAmount, heading){

    const donateHeading = document.getElementById(heading).innerText

    const add = document.createElement('div')
    add.innerHTML = `<div class='border-2 rounded-lg'><div class="font-bold p-3"> ${donateAmount} Taka is Donated ${donateHeading}</div>
    <div class='p-3'> ${new Date()} </div>
    </div>
    `
    const transactionAdd = document.getElementById('add-transaction')
    transactionAdd.insertBefore(add, transactionAdd.firstChild
    )
}

//button to check donations

document.getElementById('history-button').addEventListener('click', function(event){
    event.preventDefault();
    this.style.backgroundColor = '#B4F461'
    document.getElementById('main-donate-button').style.backgroundColor = '#F9F7F3'
    document.getElementById('donation-page').classList.add('hidden')
    document.getElementById('transaction-section').classList.remove('hidden')
})
document.getElementById('main-donate-button').addEventListener('click', function(event){
    event.preventDefault();
    this.style.backgroundColor = '#B4F461'
    document.getElementById('history-button').style.backgroundColor = '#F9F7F3'
    document.getElementById('donation-page').classList.remove('hidden')
    document.getElementById('transaction-section').classList.add('hidden')
})