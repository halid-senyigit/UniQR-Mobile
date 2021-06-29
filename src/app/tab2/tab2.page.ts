import { Component } from '@angular/core';
import { ZBar, ZBarOriginal } from '@ionic-native/zbar';
import { AlertController } from '@ionic/angular';
import { ParticipateInputModel } from '../Models/ParticipateInputModel';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  optionZbar:any;
  scannedOutput:any;

  constructor(private userService: UserService, private alertController: AlertController) {
    this.optionZbar = {
      flash: 'off',
      drawSight: true
    }
   }


  scanQr() {

    ZBar.scan(this.optionZbar)
    .then(respone => {
       console.log(respone);
       let input = new ParticipateInputModel(respone);

            this.userService.participate(input).subscribe(
              async (data) => {
                if(data.status == "ok"){
                  const alert = await this.alertController.create({
                    cssClass: 'my-custom-class',
                    header: 'Success',
                    subHeader: 'Participated',
                    message: "Participation is success",
                    buttons: ['OK'],
                  });
                  await alert.present();
                }else {
                  const alert = await this.alertController.create({
                    cssClass: 'my-custom-class',
                    header: 'Success',
                    subHeader: 'You have already participated in this attendance',
                    message: data.status,
                    buttons: ['OK'],
                  });
                  await alert.present();
                }
                
                

              });
    })
    .catch(error => {
       alert(error);
    });
  }
}
