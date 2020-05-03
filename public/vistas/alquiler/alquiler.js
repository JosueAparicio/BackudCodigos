var appmateria = new Vue({
    el: '#frm-alquiler',
    data: {
        Alquiler: {
            idalquiler: 0,
            accion: 'nuevo',
            Cliente: '',
            Pelicula: '',
            Fdevolucion: '',
            valor: '',
            msg: ''
        }
    },
    methods: {
        guardarAlquiler: function () {
            fetch(`private/modulos/alquiler/procesos.php?proceso=recibirDatos&materia=${JSON.stringify(this.materia)}`).then(resp => resp.json()).then(resp => {
                this.materia.msg = resp.msg;
                this.materia.idmateria = 0;
                this.materia.codigo = '';
                this.materia.nombre = '';
                this.materia.carrera = '';
                this.materia.ciclo = '';
                this.materia.accion = 'nuevo';
                appBuscarMateria.buscarMateria();
            });
        }
    }
});