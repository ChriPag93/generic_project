import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-buttonref',
  templateUrl: './buttonref.component.html',
  styleUrls: ['./buttonref.component.css']
})
export class ButtonrefComponent implements OnInit {
ref_url= '';

  @Input()
  indice: number;
  @Input()
  indicedati: number;
  dataname = '+';
  query_parameters: string[] = [];
  query_parameters_value;
  constructor(private httpclient: HttpClient, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      result => {
        const id = result.id;
        this.query_parameters_value = result;
      });


    this.httpclient.get('assets/menu.json').subscribe(
      data => {
        this.ref_url = data[this.indice]['data'][this.indicedati]['ref_url'];
        this.dataname = data[this.indice]['data'][this.indicedati]['data_name'];
      }
    );
  }

}
