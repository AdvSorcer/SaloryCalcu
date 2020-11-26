document.addEventListener("DOMContentLoaded", function(){

  

    let hourSalory = document.getElementById('salory');
    let result = document.getElementById('result');
    let monthSalory = document.getElementById('MonthSalory')
    let title = document.getElementById('title');

    titleCalcu();
    setInterval(titleCalcu,1000*60);
    setInterval(calcu,1000*60);

    //titel
    function titleCalcu(){
        let now = new Date();
        let nowHour =now.getHours();
        let workingTime = 0;

        if(nowHour <= 12){
            workingTime = nowHour -8 ;
        }

        if(nowHour >=13){
            workingTime = nowHour -9;
        }
        title.innerHTML = `今天已工作${workingTime}小時  目前賺了`
    }

    hourSalory.addEventListener('keyup',()=>{
        monthSalory.value="";
        calcu();
    })

    monthSalory.addEventListener('keyup',()=>{
        hourSalory.value ="";
        MonthCalcu();
    })

    
    //hour
    function calcu(){
        let intHourSalory = parseInt(hourSalory.value)
        let total = 0 ;
        if(isNaN(intHourSalory)){
            result.innerText = "please enter Number";
            return;
        }

        let now = new Date();
        let nowHour =now.getHours();
        let workingTime = 0;

        if(nowHour <= 12){
            workingTime = nowHour -8 ;
            total = intHourSalory * workingTime;
            result.innerText = total + " $";
            return;
        }else{
            
        }

        if(nowHour >=13 ){
            workingTime = nowHour -9;
            total = intHourSalory * workingTime;
            result.innerText = total + " $";
            return;
        }
        result.innerText = nowHour;
    }
    //month
    function MonthCalcu(){
        let intMonthSalory = parseInt(monthSalory.value)
        let total = 0 ;
        if(isNaN(intMonthSalory)){
            result.innerText = "please enter Number";
            return;
        }

        let perHourSalory = intMonthSalory/22/8 ;

        let now = new Date();
        let nowHour =now.getHours();
        let workingTime = 0;

        if(nowHour <= 12){
            workingTime = nowHour -8 ;
            total = perHourSalory * workingTime;
            result.innerText = parseInt(total) + " $";
            return;
        }

        if(nowHour >=13){
            workingTime = nowHour -9;
            total = perHourSalory * workingTime;
            result.innerText = parseInt(total) + " $";
            return;
        }
        result.innerText = nowHour;
    }

  }); 