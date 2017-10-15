
var GUER0157 = {

    init: function () {

        // Append The Div
        var box = document.createElement('div');

        // Add Text
        box.textContent = "GUER0157";

        // Add Class to box
        box.classList.add('box');

        // Append the box to #boxes
        var boxes = document.getElementById("boxes");
        boxes.appendChild(box);

        // Add Event Listeners
        box.addEventListener('mouseover', mouseOverOut);
        box.addEventListener('mouseout', mouseOverOut);
        box.addEventListener('click', click);

        //var box = document.querySelector(".box");
        
    }

    function mouseOverOut ( event ) {        
        event.currentTarget.classList.toggle('highlight');
    }


    function click ( event ) {
        event.currentTarget.style.borderColor = "#00FF00";
        event.currentTarget.style.backgroundColor = "#FF0000";
    }

}

