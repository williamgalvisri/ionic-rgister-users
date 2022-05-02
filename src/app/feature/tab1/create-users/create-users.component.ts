import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.scss'],
})
export class CreateUsersComponent implements OnInit {
  public formGroupCreateUser: FormGroup;

  constructor(
    private loadingController: LoadingController,
    private userService: UserService,
    private toastController: ToastController,
    private route: Router
  ) {
    // Init formGroup CreateUser instance
    this.formGroupCreateUser = new FormGroup({
      name: new FormControl('', [Validators.required]),
      job: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      dni: new FormControl('', [
        Validators.pattern(`[0-9]+`),
        Validators.minLength(10),
        Validators.maxLength(11),
      ]),
    });
  }

  get createUserIsValid() {
    return this.formGroupCreateUser.valid;
  }

  ngOnInit() {}

  public async createUser() {
    const loading = await this.deployLoaderCreatinUser();
    try {
      // Deploy loader while user is creating
      loading.present();
      const { name, job } = this.formGroupCreateUser.value;
      await this.userService.createUser({ name, job });
      // Remove loader user create
      this.deployToastSuccessCreation();
      // Finally move to users list
      this.route.navigate(['tabs/users']);
    } catch (error) {
      this.deployToastErrorCreation();
    } finally {
      loading.dismiss();
    }
  }

  private async deployLoaderCreatinUser() {
    const loading = await this.loadingController.create({
      message: `Creating user ${this.formGroupCreateUser.value.name}`,
    });
    return loading;
  }

  private async deployToastSuccessCreation() {
    const toast = await this.toastController.create({
      message: 'The user was created success.',
      position: 'top',
      duration: 2000,
    });
    toast.present();
  }

  private async deployToastErrorCreation() {
    const toast = await this.toastController.create({
      message: 'There is a error in the creation user',
      position: 'top',
      duration: 2000,
    });
    toast.present();
  }
}
