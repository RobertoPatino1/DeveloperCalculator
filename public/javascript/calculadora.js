let funcionPredeterminada = () =>{
    const formulario = document.getElementById('formulario');
    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();    //Para detener el comportamiento predeterminado
        let valorPorHora = parseFloat(document.getElementById('valorPorHora').value)
        let testingHoras = parseFloat(document.getElementById('testingHoras').value)
        let interfazHoras = parseFloat(document.getElementById('interfazHoras').value)
        let mantenimientoHoras = parseFloat(document.getElementById('mantenimientoHoras').value)
        let deploymentHoras = parseFloat(document.getElementById('deploymentHoras').value)
        let resultado = (valorPorHora * interfazHoras) + (valorPorHora * testingHoras) + (valorPorHora*mantenimientoHoras) + (valorPorHora*deploymentHoras)

        document.getElementById('valorTotal').value = resultado;


    })
}

funcionPredeterminada();