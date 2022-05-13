import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
title = '';
headers = [];
var_names = [];
list: any [] = [];
id = 0;
ref_url = 'default';

  @Input()
  indice: number;
  @Input()
  urlrest: string;
  @Input()
  indicedati: number;
  data_name = '';
  query_parameters: string[] = [];
  in_query_parameters: string[] = [];
  query_parameters_value;

  constructor(private httpclient: HttpClient, private router: Router, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      result => {
        const id = result.id;
        this.query_parameters_value = result;
        this.modificaUrlRest();

        this.httpclient.get('assets/menu.json').subscribe(
          data => {
            this.title = data[this.indice]['general_info']['title'];
            this.headers = data[this.indice]['data'][this.indicedati]['headers'];
            this.var_names = data[this.indice]['data'][this.indicedati]['var_names'];
            this.data_name = data[this.indice]['data'][this.indicedati]['data_name'];
            this.ref_url = data[this.indice]['data'][this.indicedati]['ref_url'];
            this.query_parameters = data[this.indice]['query_parameters'];
            this.in_query_parameters = data[this.indice]['in_query_parameters'];
            if (id === null || id === undefined) {
            } else {
           //   this.urlrest = data[this.indice]['data'][this.indicedati]['url_rest'] + id;
            }

            this.httpclient.get(this.urlrest).subscribe(
              data => {
                console.log(data);
                this.list = data as any[];
              }
            );
            console.log('url_rest');
            console.log(this.urlrest)
          }
        );
      });
  }

  navigateToRefUrl(dato) {
    console.log("IL DATO INTERO E' ");
    console.log(dato);
    this.router.navigate(['/pagina' , 4]);
  }

  checkQueryParams(data) {
    let obj = {};
    for (let param of this.query_parameters) {
      obj[param] = data[param];
    }
    return obj;
  }
  modificaUrlRest() {
    const regex = /\{[^}]*\}/g;
    const arr = this.urlrest.match(regex);
    if (arr === undefined || arr === null) {
      return;
    }
    for (let el of arr) {
      let str2 = el.replace('{', '');
          str2 = str2.replace('}', '');
          let value = this.query_parameters_value[str2];
          this.urlrest = this.urlrest.replace(el, value);
   }
  }
}
