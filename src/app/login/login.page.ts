import { Usuario } from './../core/models/usuario.model';
import { Login } from './../../models/login.model';
import { AuthService } from './auth.service';
import { DashboardPage } from './../dashboard/dashboard.page';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController, NavParams, AlertController, LoadingController } from '@ionic/angular';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private loadCtrl: LoadingController,
    private authService: AuthService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      usuario: ['', [Validators.required, Validators.minLength(12), Validators.maxLength(12)]],
      senha: ['', [Validators.required]]
    });
  }

  logar() {
    this.loadCtrl.create({duration: 2 });
    this.authService.login(
      this.getLogin()
    ).subscribe((u: Usuario) => {
      if (u !== null) {
        this.navCtrl.navigateRoot('/pages/dashboard');
        this.loadCtrl.dismiss();
      }
    }, async (error: HttpErrorResponse) => {
        const alert = await this.alertController.create({
          header: 'Error',
          message: error.error.message,
          buttons: ['OK']
        });
        await alert.present();
    });
  }

  getLogin(): Login {
    return {
      username: this.loginForm.value.usuario as string,
      password: this.loginForm.value.senha as string
    };
  }

}
