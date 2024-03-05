/* ftp://creative@191.232.192.240/01_CPOffshore/01_Pool/Pfizer/XTANDI/VMLYR_Xtandi61%25BannerAds_Toolbelt/300x600/R2/V2/XTANDI_DTC_HTML5_Banner_300x600_Awareness_61Toolbelt_Branded.html */


/* const paragraph = "ftp://creative@191.232.192.240/01_CPOffshore/01_Pool/Pfizer/XTANDI/VMLYR_Xtandi61%25BannerAds_Toolbelt/300x600/R2/V2/XTANDI_DTC_HTML5_Banner_300x600_Awareness_61Toolbelt_Branded.html";

console.log(paragraph.replace("ftp://creative@", 'http://'));
console.log(paragraph.replace("ftp://creative@191.232.192.240", 'http://www.wundermanlab.com.ar/')); */

function clickButton() {
    // Obtener el valor del input
    var inputValue = document.getElementById('searchInput').value;

    // Mostrar el valor en la consola
    console.log("Valor del input:", inputValue);
    const paragraph = inputValue;
    console.log(paragraph.replace("ftp://creative@", 'http://'));
    console.log(paragraph.replace("ftp://creative@191.232.192.240", 'http://www.wundermanlab.com.ar/')); 
  
    document.getElementById('resultado').textContent = paragraph.replace("ftp://creative@", 'http://');
    document.getElementById('resultado2').textContent = paragraph.replace("ftp://creative@191.232.192.240", 'http://www.wundermanlab.com.ar');
}

function copiarResultadoAlPortapapeles() {
    // Obtener el valor del resultado
    var resultado = document.getElementById('resultado').textContent;

    // Copiar al portapapeles usando el API de Clipboard
    navigator.clipboard.writeText(resultado)
        .then(function() {
            console.log("Texto copiado al portapapeles");
        })
        .catch(function(err) {
            console.error('Error al intentar copiar al portapapeles: ', err);
        });
}
function copiarResultadoAlPortapapeles2() {
    // Obtener el valor del resultado
    var resultado = document.getElementById('resultado2').textContent;

    // Copiar al portapapeles usando el API de Clipboard
    navigator.clipboard.writeText(resultado)
        .then(function() {
            console.log("Texto copiado al portapapeles");
        })
        .catch(function(err) {
            console.error('Error al intentar copiar al portapapeles: ', err);
        });
}