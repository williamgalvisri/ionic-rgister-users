import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { UserService } from 'src/app/shared/service/user.service';
import { CreateUsersComponent } from './create-users/create-users.component';

@NgModule({
  imports: [
    SharedModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule,
  ],
  declarations: [Tab1Page, CreateUsersComponent],
  providers: [UserService]
})
export class Tab1PageModule {}
