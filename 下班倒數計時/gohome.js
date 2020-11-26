document.addEventListener("DOMContentLoaded", function () {

    let hidder = document.getElementById('hidder')
    hidder.addEventListener('click',()=>{
        let selector = document.getElementById('selector');
        selector.style.display = "none";
    })

    setInterval(function () {  
        let leaveDate = document.getElementById('datepicker')
        if(leaveDate.value !=""){
            let XiaBanTime = new Date(leaveDate.value)

            // 當前時間
            var time = new Date();
            var nowTime = time.getTime(); // 獲取當前毫秒數
    
            // 倒數計時: 差值
            var offsetTime = (XiaBanTime - nowTime) / 1000; // ** 以秒為單位
            var sec = parseInt(offsetTime % 60); // 秒
            var min = parseInt((offsetTime / 60) % 60); // 分 ex: 90秒
            var hr = parseInt(offsetTime / 60 / 60); // 時

            let timer = document.getElementById('timer');
            timer.innerText  = hr + "時" + min + "分" +sec + "秒";
        }
    }, 1000);


}); 