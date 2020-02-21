import { Component, OnInit } from '@angular/core';
import { WindowService } from '../window.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private windowService: WindowService) { }

  ngOnInit() {
  }


  close() {
    this.windowService.closeAbout();
  }
}
