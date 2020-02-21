import { Component, OnInit } from '@angular/core';
import { WindowService } from '../window.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private windowService: WindowService) { }

  ngOnInit() {
  }

  close() {
    this.windowService.closeContact();
  }

}
