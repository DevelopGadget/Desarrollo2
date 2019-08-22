import { FormControl, Validators } from '@angular/forms';

export class Equipo {
    constructor(
        private Nombre: string,
        private Liga: string,
        private Estadio: string,
        private Capitan: string,
        private Fundacion: number,
        private Titulos: number
    ) { }

    Control() {
        return {
            Nombre: new FormControl(null, {
                validators: Validators.required
            }),
            Liga: new FormControl(null, {
                validators: Validators.required
            }),
            Estadio: new FormControl(null, {
                validators: Validators.required
            }),
            Capitan: new FormControl(null, {
                validators: Validators.required
            }),
            Fundacion: new FormControl(null, {
                validators: Validators.required
            }),
            Titulos: new FormControl(null, {
                validators: Validators.required
            })
        }
    }
}
