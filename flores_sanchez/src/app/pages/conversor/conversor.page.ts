import { Component, OnInit } from '@angular/core';
import { ConversorService } from 'src/app/services/conversor.service';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.page.html',
  styleUrls: ['./conversor.page.scss'],
})
export class ConversorPage implements OnInit {

  pageTitle = 'conversor';
  image = 'conversor.svg';
  pageIcon = `../../../assets/img/${this.image}`;

  listadoMonedas: any = [];
  valorMoneda: any = [];

  constructor(private conversorService: ConversorService) { }

  ngOnInit() {
    this.getListadoMonedas();
  }

  getListadoMonedas(){
    this.conversorService.getListadoMonedas()
    .then(data => {
      this.listadoMonedas = data;
      console.log(this.listadoMonedas);      
    },
    (error) => {
      console.log(error);
    });
  }

  numberOnlyValidation(event: any) {
    const pattern = /[0-9.,]/;
    let inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
    }
  }
}
