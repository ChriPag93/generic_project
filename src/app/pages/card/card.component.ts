import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  indice: number;
  @Input()
  indicedati: number;
  urlsrest = [];
  obj_arr = [];

  constructor(private httpclient: HttpClient) { }

  ngOnInit(): void {
    this.httpclient.get('assets/menu.json').subscribe(
      result => {
        this.urlsrest = result[this.indice]['data'][this.indicedati]['urls_rest'];
        for (const element of this.urlsrest) {
          this.httpclient.get(element).subscribe(
            data  => {
              console.log(data);
              const res = data as any;
              const obj = {
                name: res.data_name,
                icon: res.data_icon,
                value: res.data_value
              };
              this.obj_arr.push(obj);
            }
          )
        }
      }
    );

  }

}
