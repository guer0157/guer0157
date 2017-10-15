var GUER0157 = {

    init: function () {

        // Append The Div
        var box = document.createElement('div'),
            boxes = document.getElementById('boxes');

        // Add Text
        box.textContent = "GUER0157";

        // Add Class to box
        box.classList.add('box');

        // Append the box to #boxes
        boxes.appendChild(box);

        // Add Event Listeners
        box.addEventListener('mouseover', mouseOverOut);
        box.addEventListener('mouseout', mouseOverOut);
        box.addEventListener('click', mouseClick);
        
        function mouseOverOut (event) {        
            event.currentTarget.classList.toggle('highlight');
        }

        function mouseClick (event) {
            event.currentTarget.style.borderColor = "#00FF00";
            event.currentTarget.style.backgroundColor = "#FF0000";
        }

    }

};