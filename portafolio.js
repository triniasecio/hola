// PRIMERO CREAMOS UNA VARIABLE QUE CONTIENE TODOS LOS DATOS DE TUS TRABAJOS
var trabajos = [
{
    figure: "media/foto-01.jpg",
    title: "HELENA",
    about: "Sistema de enfriamiento de insulina análogo",
}, {
    figure: "media/foto-02.jpg",
    title: "PÍCARAS",
    about: "Reinvención de una Michelada a comida rápida",
}, {
    figure: "media/foto-03.jpg",
    title: "PASAPACÁ",
    about: "Snack saludable para viajes en familia",
}, {
    figure: "media/foto-04.jpg",
    title: "APÓYALO",
    about: "Posavasos hechos para ayudar a recaudar fondos para Coaniquem",
}, {
    figure: "media/foto-05.jpg",
    title: "PROYECTO VILLA GARCÍA",
    about: "Proyecto para valorar la localidad de Villa García, Cunco",
}, {
    figure: "media/foto-06.jpg",
    title: "PROYECTO MARTUCHAS",
    about: "Creción de un lugar para que las martuchas duerman en el Zoológico Metropolitano de Santiago",
}, {
    figure: "media/foto-07.jpg",
    title: "PROYECTO MAGGI",
    about: "Reinvención de un producto Maggi para Millennials",
}, {
    figure: "media/foto-08.jpg",
    title: "OPHIC",
    about: "Fiesta ambientada en el tema de los sueños y dividida en sus etapas",
}
]
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + '</div>')
});
