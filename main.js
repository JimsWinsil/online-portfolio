let container = document.getElementById('container');
let text = document.getElementById('text');
let border = document.getElementById('border');

container.addEventListener('mouseover', mouseOver);
container.addEventListener('mouseout', mouseOut);
text.addEventListener('mouseover', mouseOver);
text.addEventListener('mouseout', mouseOut);

function mouseOver() {
    container.style.backgroundColor = 'black';
    text.style.color = 'white';
}

function mouseOut() {
    container.style.backgroundColor = 'white';
    text.style.color = 'black';
}

border.addEventListener('mouseover', function() {
    border.style.borderColor = 'red';
})

border.addEventListener('mouseout', function() {
    border.style.borderColor = 'white';
})



function setZoom() {
    if (window.matchMedia('(min-width: 780px) and (max-width: 1400px)').matches) {
      document.body.style.zoom = "90%";
    } else {
      document.body.style.zoom = "100%";
    }
}

setZoom();
window.addEventListener('resize', setZoom);

var form = document.getElementById("myForm");
var submit = document.getElementById("submit");

submit.addEventListener("click", function() {
    if (form.checkValidity()) {
        alert("Thanks for reaching out! Your inquiry has been received.");
        var inputs = form.getElementsByTagName('input');
        var textareas = form.getElementsByTagName('textarea');
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].value = '';
        }

        for (var i = 0; i < textareas.length; i++) {
            textareas[i].value = '';
        }
        form.submit();
        form.reset();
    } else {
        alert("Please fill in all required fields.");
    }
});

let a = document.getElementById('a');
let b = document.getElementById('b');

a.addEventListener('mouseover', function() {
    b.style.backgroundColor = 'red';
})

a.addEventListener('mouseout', function() {
    b.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
})

a.addEventListener("click", function() {
    if (form.checkValidity()) {
        alert("Thanks for reaching out! Your inquiry has been received.");
        var inputs = form.getElementsByTagName('input');
        var textareas = form.getElementsByTagName('textarea');
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].value = '';
        }

        for (var i = 0; i < textareas.length; i++) {
            textareas[i].value = '';
        }
        form.submit();
        form.reset();
    } else {
        alert("Please fill in all required fields.");
    }
});