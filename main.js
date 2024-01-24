
let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");


function generateQR(){
    if(qrText.value.length > 0){
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrText.value;
        imgBox.classList.add("show-img");
    }
    else{
        qrImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCqLROK3HZMOi-8aauDabdfngqqHH20Cyquw&usqp=CAU";
        qrText.classList.add('error');
        setTimeout(()=>{
            qrText.classList.remove('error');
        },1000);
    }
}    
  
