import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { User } from 'src/app/shared/models/user/user.model';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
})
export class ListUsersComponent implements OnInit {
  public users: User[];
  public filter: string;
  constructor(private userService: UserService, private loadingController: LoadingController, private toastController: ToastController) { }

  ngOnInit() {
    this.getUsers();
  }

  private async getUsers() {
    const loading = (await this.deployLoaderGettingUsers());
    try {
      loading.present();
      this.users = await this.userService.getUsers();
      console.log(this.users);
    } catch (error) {
      this.deployToastErrorGetUser();
    } finally {
      loading.dismiss();
    }
  }

  private async deployLoaderGettingUsers() {
    const loading = await this.loadingController.create({
      message: `Getting users please wait`,
    });
    return loading;
  }

  private async deployToastErrorGetUser() {
    const toast = await this.toastController.create({
      message: 'There is a error in the get user method.',
      position: 'top',
      duration: 2000,
    });
    toast.present();
  }

}
