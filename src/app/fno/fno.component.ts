import { Component, OnInit } from '@angular/core';
import { Fn } from '../fn';

@Component({
  selector: 'app-fno',
  templateUrl: './fno.component.html',
  styleUrls: ['./fno.component.scss']
})
export class FnoComponent implements OnInit {
  fn: Fn = {
    id: 1,
    name: 'Windstorm'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
