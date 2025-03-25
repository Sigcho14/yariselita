// Seleccionar el elemento de audio
const music = new Audio("tu-musica.mp3"); // Reemplaza con la ruta de tu audio
music.loop = true; // Para que la música se repita

$("#messageState").on("change", (x) => {
    $(".message").removeClass("openNor").removeClass("closeNor");

    if ($("#messageState").is(":checked")) {
        $(".message").removeClass("closed").removeClass("no-anim").addClass("openNor");
        $(".heart").removeClass("closeHer").removeClass("openedHer").addClass("openHer");
        $(".container").stop().animate({"backgroundColor": "#f48fb1"}, 2000);
        console.log("Abriendo");

        // Intentar reproducir la música cuando se abre el mensaje
        music.play().catch(error => console.log("Autoplay bloqueado, el usuario debe interactuar primero"));
    } else {
        $(".message").removeClass("no-anim").addClass("closeNor");
        $(".heart").removeClass("openHer").removeClass("openedHer").addClass("closeHer");
        $(".container").stop().animate({"backgroundColor": "#fce4ec"}, 2000);
        console.log("Cerrando");

        // Pausar la música cuando se cierra el mensaje
        music.pause();
        music.currentTime = 0; // Reiniciar la canción
    }
});

$(".message").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
    console.log("Animation End");
    if ($(".message").hasClass("closeNor"))
        $(".message").addClass("closed");
    $(".message").removeClass("openNor").removeClass("closeNor").addClass("no-anim");
});

$(".heart").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
    console.log("Animation End");
    if (!$(".heart").hasClass("closeHer"))
        $(".heart").addClass("openedHer").addClass("beating");
    else
        $(".heart").addClass("no-anim").removeClass("beating");
    $(".heart").removeClass("openHer").removeClass("closeHer");
});
