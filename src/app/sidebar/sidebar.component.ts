import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    id: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/testprova',     title: 'Test Prova',         icon: 'nc-bank',       class: '',     id: '487' },

];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];

  constructor(private httpclient: HttpClient) { }
      ngOnInit() {
        this.httpclient.get('assets/menu.json').subscribe(
          data => {
            const list = data as any[];
            for (const pagina of list) {
              if (pagina['in_menu'] === 0) {
                continue;
              }
              const curr_options = {
                path: pagina['general_info']['url'],
                title: pagina['general_info']['title'],
                icon: pagina['general_info']['icon'],
                class: pagina['general_info']['class'],
                id: pagina['general_info']['id'],
              };
              ROUTES.push(curr_options);
            }
            this.menuItems = ROUTES.filter(menuItem => menuItem);
          }
        );
    }
}
