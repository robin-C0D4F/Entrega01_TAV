import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SplashComponent } from './splash/splash.component';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: 'home', icon: 'home' },
    { title: 'About', url: 'about', icon: 'search' },
    { title: 'Weather', url: 'weather', icon: 'cloud' },
    { title: 'Conversor', url: 'conversor', icon: 'cash' },
    { title: 'Coffee', url: 'coffee', icon: 'cafe' },
  ];

  constructor(private modalController: ModalController) {
    this.presentSplash();
  }

    async presentSplash(){
      const modal = await this.modalController.create({
        component: SplashComponent,
        cssClass: 'my-custom-class'
      });
      return await modal.present();
    }

}
