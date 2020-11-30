document.addEventListener("DOMContentLoaded", function () {

    //hide
    let hidder = document.getElementById('hidder')
    hidder.addEventListener('click',()=>{
        let selector = document.getElementById('selector');
        let nav = document.getElementsByTagName('nav');
        selector.style.display = "none";
        nav[0].style.display = "none";
    })

    //main
    let leaveDate = document.getElementById('datepicker')
    let result = document.getElementById('result');

  
    leaveDate.addEventListener('change', () => {
        let endDate = new Date(leaveDate.value);
        let startDate = new Date();
        let dateDiffSeconds = endDate - startDate - toHour(8) ;
        let dateDiffDays = dateDiffSeconds/toHour(1)/24;
        result.innerHTML = `${parseInt(dateDiffDays)} 天!`
    })

    function toHour(x){
        return x*1000*60*60;
    }

}); 