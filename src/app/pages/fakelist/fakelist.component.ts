import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';



@Component({
  selector: 'app-fakelist',
  templateUrl: './fakelist.component.html',
  styleUrls: ['./fakelist.component.css']
})
export class FakelistComponent implements OnInit {
  @Input()
  data: any[];
  headers = [];
  @Input()
  title: string;
  @Output()
  dataChange = new EventEmitter<any[]>();
  editing = [];
  constructor() { }

  ngOnInit(): void {
    if (this.data.length > 0) {
      this.headers = Object.keys(this.data[0]);
    }
    for (let element of this.data){
      this.editing.push(false)
    }
  }
  delete(obj) {
    console.log(this.data);
    this.data = this.data.filter(element => element !== obj);
    this.datachange();
  }
  datachange() {
    this.dataChange.emit(this.data);
    console.log(this.data);
  }
  editSelected(i) {
    for (let index = 0; index < this.editing.length; index++) {
      if (index !== i){
        this.editing[index] = false;
      } else {
        this.editing[index] = !this.editing[index];
      }
    }
  }
}
