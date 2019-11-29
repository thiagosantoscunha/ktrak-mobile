import { Component, OnInit } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { Dialogs } from '@ionic-native/dialogs';
import { Platform, AlertController } from '@ionic/angular';
import { Vibration } from '@ionic-native/vibration/ngx';
import { environment } from 'src/environments/environment';
import { MarcaPresencaService } from '../core/services/marca-presenca.service';
import { MarcaPresencaModel } from '../core/models/marca-presenca.model';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.page.html',
  styleUrls: ['./qrcode.page.scss'],
})
export class QrcodePage implements OnInit {

  qrScan: any;

  constructor(
    public qr: QRScanner,
    public plataform: Platform,
    public alertController: AlertController,
    private marcaPresencaService: MarcaPresencaService
  ) {
    this.plataform.backButton.subscribeWithPriority(0, () => {
      document.getElementsByTagName('body')[0].style.opacity = '1';
      this.qrScan.unsubscribe();
    });
  }

  ngOnInit() {

  }

  async presentAlert() {
  }

  

  scanning() {
    this.qr.prepare().then( (status: QRScannerStatus) => {
      if (status.authorized) {
        this.qr.show();
        document.getElementsByTagName('body')[0].style.opacity = '0';

        this.qrScan = this.qr.scan().subscribe(async (textFound) => {
          document.getElementsByTagName('body')[0].style.opacity = '1';
          this.qrScan.unsubscribe();

          await this.marcaPresencaService.marcaPorChave(textFound).subscribe( async (model: MarcaPresencaModel) => {
            const alert = await this.alertController.create({
              header: textFound,
              subHeader: 'Sucesso!',
              message: 'Presença marcada com sucesso para o usuário ' + model.username,
              buttons: ['OK']
            });
            await alert.present();
          });

          console.log(textFound);
        }, error => {
            console.error(error);
        });


      } else if (status.denied) {
        this.qr.openSettings();
      } else {
      }
    })
.catch((e: any) => console.log('Error is', e));
  }

}
