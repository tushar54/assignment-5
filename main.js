const mainbtn=document.getElementById('main-btn');
const historybtn=document.getElementById('history-btn');

document.getElementById('main-btn').addEventListener('click',function(){
this.style.backgroundColor="#B4F461";
historybtn.style.removeProperty("background-color");
const shift=getid('main-section');
shift.classList.remove('hidden');
const hold=getid('History-section');
hold.classList.add('hidden');

}
)
document.getElementById('history-btn').addEventListener('click',function(){
    this.style.backgroundColor="#B4F461";
    mainbtn.style.removeProperty("background-color");
    const shift=getid('History-section');
    shift.classList.remove('hidden');
    const hold=getid('main-section');
    hold.classList.add('hidden');
    
    }
    )


// part 1
const modal=document.getElementById('my_modal_5');
document.getElementById('donate-please').addEventListener('click',function()
{
    const addInput=getid('please-input').value;
    const totalAmount=getid('total-amount').innerText;
    const donationAmount=getid('total-donation-amount').innerText;
    const addhtml=document.getElementById('addedHistory');
    if(isNaN(addInput)||parseFloat(addInput)>parseFloat(totalAmount)||parseFloat(addInput)<0||addInput=='')
    { 
        alert("invalid input");
        return;
    }
    const changeValue=changeInput(addInput);
    changeInput(totalAmount);
    const changeDonation=changeInput(donationAmount);
    const totalDonation = changeDonation + changeValue;
    const changeTotalAmount= totalAmount - changeValue;
    getid('total-amount').innerText=changeTotalAmount;
    getid('total-donation-amount').innerText=totalDonation;
    addhtml.innerHTML+=`
    <div class="w-10/12 border border-blue-200 rounded-lg">
    <h1>${changeValue} taka added from Donate for Flood at Noakhali, Bangladesh Total ${totalDonation}</h1>
    </div>
    `;    
    modal.showModal();
}

)
// part 1 end 


// part 2 start
const modal1=document.getElementById('my_modal_6');
document.getElementById('donate-please1').addEventListener('click',function()
{
    const addInput=getid('please-input1').value;
    const totalAmount=getid('total-amount').innerText;
    const donationAmount=getid('total-donation-amount1').innerText;
    const addhtml=document.getElementById('addedHistory');
    if(isNaN(addInput)||parseFloat(addInput)>parseFloat(totalAmount)||parseFloat(addInput)<0||addInput=='')
    { 
        alert("invalid input");
        return;
    }
    const changeValue=changeInput(addInput);
    changeInput(totalAmount);
    const changeDonation=changeInput(donationAmount);
    const totalDonation = changeDonation + changeValue;
    const changeTotalAmount= totalAmount - changeValue;
    getid('total-amount').innerText=changeTotalAmount;
    getid('total-donation-amount1').innerText=totalDonation;
    addhtml.innerHTML+=`
    <div class="w-10/12 border border-blue-200 rounded-lg">
    <h1>${changeValue} Donate for Flood Relief in Feni,Bangladesh ${totalDonation}</h1>
    </div>
    `;    
    modal1.showModal();
}

)
// part 2 end