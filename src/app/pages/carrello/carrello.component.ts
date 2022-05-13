import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css']
})
export class CarrelloComponent implements OnInit {
  @Input()
  data: any[];
  @Output()
  dataChange = new EventEmitter<any[]>();
  constructor() { }

  ngOnInit(): void {
  }

}
