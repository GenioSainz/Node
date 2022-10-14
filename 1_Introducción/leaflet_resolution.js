function screen_size(){

    var total_width      = window.screen.width;
    var total_height     = window.screen.height;
    var available_width  = window.innerWidth;
    var available_height = window.innerHeight;

    if(total_width <780 || total_height <400 || available_width <780 || available_height <400){
       
        var txt1 = 'Your Screen Resolution:  [Width, Height ] ' + ' [' + total_width     + ',' + total_height     + '] pixels.';
        var txt2 = 'Your Available Resolution:  [ Width, Height ] ' + ' [' + available_width + ',' + available_height + '] pixels.';
       
        
        var txt = "The ENROAD application is optimized for screen resolutions \nlarger than your device resolution: \n\n" + txt1 + "\n\n" +txt2;
        window.alert(txt);
    }
};

window.addEventListener("load", (event) => { screen_size() });