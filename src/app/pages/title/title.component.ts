import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  @Input()
  indice: number;
  @Input()
  urlrest: string;
  @Input()
  indicedati: number;
  title = '';

  constructor(private httpclient: HttpClient) { }

  ngOnInit(): void {
    this.httpclient.get('assets/menu.json').subscribe(
      data => {

      }
    );
    this.httpclient.get(this.urlrest).subscribe(
      data  => {
        console.log(data);
        const res = data as any;
        this.title = res.value;
      }
    )
  }

}
