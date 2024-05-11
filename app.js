function Start() {
    var randomNumber=Math.random()*6
    var randomConvert=Math.round(randomNumber)
    console.log(randomConvert);

    // var convert1='img/WhatsApp Image 2024-05-11 at 8.33.32 AM.jpeg'
    // var convert2='img/WhatsApp Image 2024-05-11 at 9.14.31 AM.jpeg'
    // var convert3='img/WhatsApp Image 2024-05-11 at 9.14.31 AM (1).jpeg'
    // var convert4='img/WhatsApp Image 2024-05-11 at 9.14.31 AM (2).jpeg'
    // var convert5='img/WhatsApp Image 2024-05-11 at 9.14.31 AM (3).jpeg'
    // var convert6='img/WhatsApp Image 2024-05-11 at 9.14.31 AM (4).jpeg'
    var button=document.getElementById('Start')
     if(randomConvert===1){
     img.src='img/WhatsApp Image 2024-05-11 at 8.33.32 AM.jpeg'
    }
    else if(randomConvert===2){
img.src='img/WhatsApp Image 2024-05-11 at 9.14.31 AM.jpeg'
     }
     else if(randomConvert===3){
        img.src='img/WhatsApp Image 2024-05-11 at 9.14.31 AM (1).jpeg'
     }

     else if(randomConvert===4){
       img.src='img/WhatsApp Image 2024-05-11 at 9.14.31 AM (2).jpeg'
     }

     else if(randomConvert===5){
        img.src='img/WhatsApp Image 2024-05-11 at 9.14.31 AM (3).jpeg'
     }

     else if(randomConvert===6){
        img.src='img/WhatsApp Image 2024-05-11 at 9.14.31 AM (4).jpeg'
        
     }



}





