document.getElementById('button_cv').addEventListener('click', function() {
    const pdfUrl = 'assets/docs/Cv Esteban Turrys.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'cv esteban turrys.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});


document.getElementById('button_form').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'flex';
    document.getElementById('nav').style.display = 'none';
});

document.getElementById('close_form').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('nav').style.display = 'block';
});

document.getElementById('myForm').addEventListener('submit', function(event) {
    console.log("entré")
    event.preventDefault(); // Evita que el formulario se envíe de manera convencional

    // Mostrar mensaje de agradecimiento
    document.getElementById('thankYouMessage').style.display = 'block';

    // Ocultar el overlay
    document.getElementById('overlay').style.display = 'none';

    // Ocultar el mensaje de agradecimiento después de 3 segundos
    setTimeout(function() {
        console.log("entré 2")
        document.getElementById('thankYouMessage').style.display = 'none';
    }, 3000);
});

document.addEventListener('DOMContentLoaded', function () {
    var navLinks = document.querySelectorAll('.nav-link');
    var navCollapse = document.querySelector('.navbar-collapse');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            if (window.innerWidth <= 992) { // Limitar el script a tablets y móviles
                var bsCollapse = new bootstrap.Collapse(navCollapse);
                bsCollapse.hide();
            }
        });
    });
});
