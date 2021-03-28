import { Component, OnInit } from '@angular/core';
import { ShorturlService } from '../shared/shorturl.service';

@Component({
  selector: 'app-shorturl',
  templateUrl: './shorturl.component.html',
  styles: [
  ]
})
export class ShorturlComponent implements OnInit {

  constructor(public service: ShorturlService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

}
