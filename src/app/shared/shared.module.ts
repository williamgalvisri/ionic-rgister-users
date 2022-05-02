import { NgModule } from '@angular/core';
import { ComponentModule } from './components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './service/user.service';
import { SearchByNamePipe } from './pipes/search-by-name.pipe';


@NgModule({
    imports: [ComponentModule, HttpClientModule],
    declarations: [SearchByNamePipe],
    exports: [ComponentModule, SearchByNamePipe],
    providers: [UserService],
})
export class SharedModule { }
