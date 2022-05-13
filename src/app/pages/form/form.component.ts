import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input()
  indice: number;
  @Input()
  urlrest: string;
  @Input()
  indicedati: number;
  form_data: any[];
  form_title = '';
  obj = {};
  url_post = '';
  query_parameters: string[] = [];
  in_query_parameters: string[] = [];
  query_parameters_value;
  constructor(private httpclient: HttpClient, public route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      result => {
        this.query_parameters_value = result;
        this.httpclient.get('assets/menu.json').subscribe(
          data => {
            this.form_data = data[this.indice]['data'][this.indicedati]['form_data'];
            for (const elem of this.form_data) {
            }
            this.form_title = data[this.indice]['data'][this.indicedati]['form_title'];
            this.url_post = data[this.indice]['data'][this.indicedati]['url_post'];
            this.in_query_parameters = data[this.indice]['in_query_parameters'];
            this.modificaUrlPost();
          }
        );
        if (this.urlrest !== null && this.urlrest !== undefined && this.urlrest !== '') {
          this.httpclient.get(this.urlrest).subscribe(
            data => {
              console.log(data);
              //this.form_data = data as any[];
            }
          )
        }
      });
  }
  chiamaPost() {
    console.log(this.obj);
    console.log('stampo url post');
    console.log(this.url_post);
    console.log('stampo query parametres value');
    console.log(this.query_parameters_value);

    this.httpclient.post(this.url_post, this.obj).subscribe(
      result => {

      }
    )
  }
  checkQueryParams(data) {
    let obj = {};
    for (let param of this.query_parameters) {
      obj[param] = data[param];
    }
    return obj;
  }
  modificaUrlPost() {
    const regex = /\{[^}]*\}/g;
    const arr = this.url_post.match(regex);
    if (arr === undefined || arr === null) {
      console.log('array vuoto');
      return;
    }
    for (let el of arr) {
      console.log('stampo el');
      console.log(el);

      let str2 = el.replace('{', '');
      str2 = str2.replace('}', '');
      let value = this.query_parameters_value[str2];
      this.url_post = this.url_post.replace(el, value);
    }
  }
  visibilityVerify(element) {
    if (element['visibility'] === undefined ) {
      return true;
    }
    const corrispondente = this.form_data.find(
      el => el['id'] === element['visibility']['ref_id']
    );
    if (this.obj[corrispondente['data_name']] ===  element['visibility']['ref_value']){
      return true;
    }
    return false;
  }
}
