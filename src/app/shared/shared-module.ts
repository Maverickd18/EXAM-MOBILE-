import { input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './componets/input/input.component';
import { ButtonComponent } from './componets/button/button.component';
import { CardComponent } from './componets/card/card.component';
import { HeaderComponent } from './componets/header/header.component';
import { LinkComponent } from './componets/link/link.component';
import { ModalComponent } from './componets/modal/modal.component';
import { ListComponent } from './componets/list/list.component';
import { PrincipalnewsComponent } from './componets/principalnews/principalnews.component';
import { SelectComponent } from './componets/select/select.component';
import { SidebarComponent } from './componets/sidebar/sidebar.component';
import { UserformComponent } from './componets/userform/userform.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    CardComponent,
    HeaderComponent,
    LinkComponent,
    ListComponent,
    ModalComponent,
    PrincipalnewsComponent,
    SelectComponent,
    SidebarComponent,
    UserformComponent,
  ],
  providers:[
    
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[ButtonComponent,CardComponent,HeaderComponent,InputComponent,LinkComponent,ListComponent,ModalComponent
    ,PrincipalnewsComponent,SelectComponent,SidebarComponent,UserformComponent
  ]
})
export class SharedModule { }
