import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  title = '';
  headers = [];
  var_names = [];
  urlrest = '';
  obj = {};
  urlpost = '';
  @Input()
  indice: number;
  @Input()
  indicedati: number;
  constructor(private httpclient: HttpClient, public route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(
      result => {
        const id = result.id;
        console.log("l'id è");
        console.log(id);

        this.httpclient.get('assets/menu.json').subscribe(

          data => {
            let dataid = data[this.indice]['data'][this.indicedati]['data_id'];
            this.title = data[this.indice]['general_info']['title'];
            this.headers = data[this.indice]['data'][this.indicedati]['headers'];
            this.var_names = data[this.indice]['data'][this.indicedati]['var_names'];
            this.urlrest = data[this.indice]['data'][this.indicedati]['url_rest'];
            this.urlpost = data[this.indice]['data'][this.indicedati]['url_post'];
            this.httpclient.get(this.urlrest + '?id=' + id ).subscribe(
              res => {
                this.obj = res as any;
              }
            )
          }
        );
      },
      (error) => {return '.1'; },
    );


  }
  submit() {
    console.log(this.obj);
    this.httpclient.post(this.urlpost, this.obj).subscribe(
      result => {
      }
    );
  }
  typeOf(obj) {
    return obj instanceof Array
  }
}
