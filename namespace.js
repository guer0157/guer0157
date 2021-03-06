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
        box.addEventListener('mouseover', mouseOver);
        box.addEventListener('mouseout', mouseOut);
        box.addEventListener('click', mouseClick);
        
        function mouseOver (event) {        
            event.currentTarget.classList.toggle('highlight');
        }function mouseOut (event) {        
            event.currentTarget.classList.toggle('highlight');
        }

        function mouseClick (event) {
            event.currentTarget.style.borderColor = "#00FF00";
            event.currentTarget.style.backgroundColor = "#FF0000";
        }

    }

};