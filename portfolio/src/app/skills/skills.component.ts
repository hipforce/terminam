import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { WindowService } from '../window.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})

export class SkillsComponent implements OnInit {

  @Input() isSkill: boolean;

  constructor(private windowService: WindowService) {
  }

  ngOnInit() {
  }

  close() {
    this.windowService.closeSkill();
  }

}
