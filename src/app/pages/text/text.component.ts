import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
  @Input()
  indice: number;
  @Input()
  urlrest: string;
  @Input()
  indicedati: number;
  text = '';
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
        this.text = res.value;
      }
    )
  }

}
