const esquema = ["fecha", "detalles", "velocidad", "patente"];

module.exports = {

    validarEsquema: function (infraccion) {
        let camposNoEncontrados = "";
        const propiedadesDeLaInfraccion = Object.getOwnPropertyNames(infraccion);
        for (let i of esquema) {
            if (!propiedadesDeLaInfraccion.includes(i)) {
                camposNoEncontrados = camposNoEncontrados + i + ",";
            }
        }
        if (camposNoEncontrados)
            camposNoEncontrados = camposNoEncontrados.substr(0, camposNoEncontrados.length - 1);
        return camposNoEncontrados;
    }
}