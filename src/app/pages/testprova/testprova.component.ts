import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {removeSummaryDuplicates} from '@angular/compiler';

@Component({
  selector: 'app-testprova',
  templateUrl: './testprova.component.html',
  styleUrls: ['./testprova.component.css']
})
export class TestprovaComponent implements OnInit {
listatag = [];
input = '';
lista: any[] = [];
carrello: any[] = [];
  constructor(private httpclient: HttpClient) { }

  ngOnInit(): void {
  }
  addTag() {
    this.listatag.push(this.input);
    this.cercaRisultati();
    console.log(this.listatag)
  }
  deleteTag(name: string): void {
    this.listatag = this.listatag.filter(item => item !== name);
    this.cercaRisultati();
    console.log(this.listatag)
  }
  cercaRisultati(){
    this.httpclient.post('http://192.168.1.66:8080/sheets/filter_search', this.listatag).subscribe(
      result =>{
        let res = result as any[];
        this.lista = res;
      }
    );
  }
stampa(elem){
  console.log('cont corrente');
  console.log(elem);
}

}
