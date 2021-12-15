    function toggler(divId) {
        $("#hidden").toggle();
}

    function iniciarGrafico(superhero){
        const superheroData =[]
        superheroData.push({
            name: "Inteligencia",
            y: superhero.powerstats.intelligence
        });

        superheroData.push({
            name: "Fuerza",
            y: superhero.powerstats.strength
        });

        superheroData.push({
            name: "Velocidad",
            y: superhero.powerstats.strength
        });
        
        superheroData.push({
            name: "Durabilidad",
            y: superhero.powerstats.strength
        });

        superheroData.push({
            name: "Poder",
            y: superhero.powerstats.strength
        });

        superheroData.push({
            name: "Combate",
            y: superhero.powerstats.strength
        });
        
        
        
        
        const chart = new CanvasJS.Chart("chartContainer", {
            exportEnabled: true,
            animationEnabled: true,
            title:{
                text: `Estadisticas de poder para: ${superhero.name}`
            },
            legend:{
                cursor: "pointer",
                
            },
            data: [{
                type: "pie",
                showInLegend: true,
                toolTipContent: "{name}: <strong>{y}%</strong>",
                indexLabel: "{name} - {y}",
                dataPoints: superheroData
            }]
        });
        chart.render();
    }


$('#superhero-form').on('submit', function(ev) {    
    ev.preventDefault();
    // id ingresada por el usuario
    const id = $('#superhero-id').val();

    $.get(`https://superheroapi.com/api.php/3525635500807579/${id}`, function(superhero) {
    
    $('#superhero-img').attr('src', superhero.image.url);
    $('.nombre').html(`<i>Nombre: </i>${superhero.name}`);
    $('.conexiones').html(`<i>Conexiones: </i>${superhero.connections["group-affiliation"]}`);
    $('.publicado').html(`<i>Publicado por: </i>${superhero.biography.publisher}`);
    $('.ocupacion').html(`<i>Ocupación: </i>${superhero.work.occupation}`);
    $('.first').html(`<i>Primera Aparición: </i>${superhero.biography["first-appearance"]}`);
    $('.altura').html(`<i>Altura: </i>${superhero.appearance.height}`);
    $('.peso').html(`<i>Peso: </i>${superhero.appearance.weight}`);
    $('.alianzas').html(`<i>Alianzas: </i>${superhero.connections["group-affiliation"]}`);


        
    console.log(superhero);
    iniciarGrafico(superhero);    
    });
  });


  