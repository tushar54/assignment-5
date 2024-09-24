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
    if(isNaN(addInput)||parseFloat(addInput)>parseFloat(totalAmount)||parseFloat(addInput)<=0||addInput=='')
    { 
        alert("invalid input");
        ocument.getElementById("please-input").value = "";
        return;
    }
    const changeValue=changeInput(addInput);
    changeInput(totalAmount);
    const changeDonation=changeInput(donationAmount);
    const totalDonation = changeDonation + changeValue;
    const changeTotalAmount= totalAmount - changeValue;
    const date = new Date();
    getid('total-amount').innerText=changeTotalAmount;
    getid('total-donation-amount').innerText=totalDonation;
    addhtml.innerHTML+=`
    <div class="w-10/12 border border-blue-200 rounded-lg mx-auto shadow-sm p-6 space-y-2 mb-2">
    <h1>${changeValue} taka is donated for Donate for Flood at Noakhali, Bangladesh </h1>
    <h2 class="text-sm text-slate-blue">${date}</h2>
    </div>
    `;    
    
    modal.showModal();
    document.getElementById("please-input").value = "";

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
    if(isNaN(addInput)||parseFloat(addInput)>parseFloat(totalAmount)||parseFloat(addInput)<=0||addInput=='')
    { 
        document.getElementById("please-input1").value = "";
        alert("invalid input");
        return;
    }
    const changeValue=changeInput(addInput);
    changeInput(totalAmount);
    const changeDonation=changeInput(donationAmount);
    const totalDonation = changeDonation + changeValue;
    const changeTotalAmount= totalAmount - changeValue;
    const date = new Date();
    getid('total-amount').innerText=changeTotalAmount;
    getid('total-donation-amount1').innerText=totalDonation;
    addhtml.innerHTML+=`
    <div class="w-10/12 border border-blue-200 rounded-lg mx-auto shadow-sm p-6 space-y-2 mb-2">
    <h1>${changeValue} taka is donated for Flood Relief in Feni,Bangladesh</h1>
    <h2 class="text-sm text-slate-blue">${date}</h2>
   
    </div>
    `;    
    modal1.showModal();
    document.getElementById("please-input1").value = "";
}

)
// part 2 end

// part 3 start 

const modal2=document.getElementById('my_modal_7');
document.getElementById('donate-please2').addEventListener('click',function()
{
    const addInput=getid('please-input2').value;
    const totalAmount=getid('total-amount').innerText;
    const donationAmount=getid('total-donation-amount2').innerText;
    const addhtml=document.getElementById('addedHistory');
    if(isNaN(addInput)||parseFloat(addInput)>parseFloat(totalAmount)||parseFloat(addInput)<=0||addInput=='')
    { 
        document.getElementById("please-input2").value = "";
        alert("invalid input");
        return;
    }
    const changeValue=changeInput(addInput);
    changeInput(totalAmount);
    const changeDonation=changeInput(donationAmount);
    const totalDonation = changeDonation + changeValue;
    const changeTotalAmount= totalAmount - changeValue;
    const date = new Date();
    getid('total-amount').innerText=changeTotalAmount;
    getid('total-donation-amount2').innerText=totalDonation;
    addhtml.innerHTML+=`
    <div class="w-10/12 border border-blue-200 rounded-lg mx-auto shadow-sm p-6 space-y-2 mb-2">
    <h1>${changeValue} is donated for Aid for Injured in the Quota Movement</h1>
    <h2 class="text-sm text-slate-blue">${date}</h2>
    </div>
    `;    
    modal2.showModal();
    document.getElementById("please-input2").value = "";
}

)

// part 3 end