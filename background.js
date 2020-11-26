document.addEventListener("DOMContentLoaded", function(){
    //https://blog.accupass.com/wp-content/uploads/2017/03/1_120122230539_1.jpg
    //https://ibw.bwnet.com.tw/image/pool/2018/05/db76c1b18b0b27c0033073a01b440fbf_620.jpg
    //https://womany.net/cdn-cgi/image/w=800,fit=scale-down,f=auto/https://castle.womany.net/images/content/pictures/18214/womany_Cute_Cats_cats_33440930_1280_800_1410542878-19856-1650.jpg

    var url_list = [
        "https://blog.accupass.com/wp-content/uploads/2017/03/1_120122230539_1.jpg",
        "https://ibw.bwnet.com.tw/image/pool/2018/05/db76c1b18b0b27c0033073a01b440fbf_620.jpg",
        "https://womany.net/cdn-cgi/image/w=800,fit=scale-down,f=auto/https://castle.womany.net/images/content/pictures/18214/womany_Cute_Cats_cats_33440930_1280_800_1410542878-19856-1650.jpg",
        "https://ichef.bbci.co.uk/news/640/cpsprodpb/1912/production/_105981460_d9ff6226-aae3-4bba-8634-d26742299c80.jpg"
    ]
    //document.body.background = url_list[getRandom(4)]

    function getRandom(x){
        return Math.floor(Math.random()*x);
    };

    let pump = document.getElementById('Pump');
    let images = document.getElementById('images')
    pump.addEventListener('click',()=>{
          images.src = url_list[getRandom(4)]
          images.style.height = "400px";
          images.style.width = "640px";
    })
});


