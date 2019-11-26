import { Component, OnInit } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';

@Component({
  selector: 'app-marcador-presenca',
  templateUrl: './marcador-presenca.page.html',
  styleUrls: ['./marcador-presenca.page.scss'],
})
export class MarcadorPresencaPage implements OnInit {

  constructor(private qrScanner: QRScanner) { }

  ngOnInit() {
    this.scanning();
  }

  scanning() {
    this.qrScanner.prepare().then((status: QRScannerStatus) => {
        if (status.authorized) {
          const scanSub = this.qrScanner.scan().subscribe((text: string) => {
            console.log('Scanned something', text);
            this.qrScanner.hide(); // hide camera preview
            scanSub.unsubscribe(); // stop scanning
          });
        } else if (status.denied) {
          this.qrScanner.openSettings();
        } else {
        }
      })
  .catch((e: any) => console.log('Error is', e));
  }

}
