import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import {TestprovaComponent} from '../../pages/testprova/testprova.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'pagina/:id',      component: DashboardComponent },
    { path: 'testprova/:id',      component: TestprovaComponent },

];
