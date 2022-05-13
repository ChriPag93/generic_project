import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  @Input()
  indice: number;
  @Input()
  urlrest: string;
  @Input()
  indicedati: number;
  image = '';
  width = 200;
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
        this.image = res.value;
      }
    )
  }

}
