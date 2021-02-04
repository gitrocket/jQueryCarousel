$(document).ready(() => {
    var elem = $("img:first-child").fadeIn(500).show()
    var lastChild = $("img:last-child");
    var length = $(".images-container img").length;
    var counter = 0;

    $("#right-btn").click( () => {
        // if the counter is less then the number of images, increment the counter,
        // hide the current element, and show the next element
        if(counter < (length -1)) {
             counter++; 
             elem.hide();
             elem = elem.next().fadeIn(500).show();
        } else {
        // otherwise we set the displayed element to the first image, hide the last image
        // and show the current image, and reset the counter
            elem = $("img:first-child");
            lastChild.hide();
            elem = elem.fadeIn(500).show();
            counter = 0;
        }
       

    })

    $("#left-btn").click( () => {
        console.log("hello")
       if(counter == 0) {
             elem.hide();
             elem = $("img:last-child");
             elem = elem.fadeIn(500).show();
             counter = (length -1);
        } else {
            counter--;
            elem.hide();
            elem = elem.prev().fadeIn(500).show();
        }
       
        
    })
    

})