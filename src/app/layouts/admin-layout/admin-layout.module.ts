import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';
import { UserComponent }            from '../../pages/user/user.component';
import { TableComponent }           from '../../pages/table/table.component';
import { TypographyComponent }      from '../../pages/typography/typography.component';
import { IconsComponent }           from '../../pages/icons/icons.component';
import { MapsComponent }            from '../../pages/maps/maps.component';
import { NotificationsComponent }   from '../../pages/notifications/notifications.component';
import { UpgradeComponent }         from '../../pages/upgrade/upgrade.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ListComponent} from '../../pages/list/list.component';
import {DetailComponent} from '../../pages/detail/detail.component';
import {FakelistComponent} from '../../pages/fakelist/fakelist.component';
import {TitleComponent} from '../../pages/title/title.component';
import {TextComponent} from '../../pages/text/text.component';
import {ImageComponent} from '../../pages/image/image.component';
import {CardComponent} from '../../pages/card/card.component';
import {FormComponent} from '../../pages/form/form.component';
import {ButtonrefComponent} from '../../pages/buttonref/buttonref.component';
import {TestprovaComponent} from '../../pages/testprova/testprova.component';
import {CarrelloComponent} from '../../pages/carrello/carrello.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TableComponent,
    UpgradeComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    ListComponent,
    DetailComponent,
    FakelistComponent,
    TitleComponent,
    TextComponent,
    ImageComponent,
    CardComponent,
    FormComponent,
    ButtonrefComponent,
    TestprovaComponent,
    CarrelloComponent,


  ]
})

export class AdminLayoutModule {}
