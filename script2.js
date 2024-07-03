window.onload = function () {
    var img1 = document.getElementById("image1");
    var img2 = document.getElementById("image2");
    
    var index1 = 1;
    var index2 = 2;
    var maxIndex = 10;
    
    function ChangeImage1()
    {
        img1.src = "img/Beta10/" + index1 + ".png";
        if(index1 < maxIndex-1)
        {
            index1 +=2;    
        }
        else{
            index1 = 1;
        }
        setTimeout(ChangeImage1,5000);
    }
    function ChangeImage2()
    {
        img2.src = "img/Beta10/" + index2 + ".png";
        if(index2 < maxIndex)
        {
            index2 +=2;    
        }
        else{
            index2 = 2;
        }
        setTimeout(ChangeImage2,5000);
    }
    ChangeImage1();
    ChangeImage2();
};