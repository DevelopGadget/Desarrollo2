import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Equipo } from './equipo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  checkoutForm;

  constructor(private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group(new Equipo('', '', '', '', 0, 0).Control());
  }

  onSubmit(equipo) {
    this.checkoutForm.reset();
  }

}
