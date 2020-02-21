import { Component, OnInit } from '@angular/core';
import { WindowService } from '../window.service';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements OnInit {

  buffer: string[] = [];
  commandValue: string = "";

  constructor(private windowService: WindowService) {
    this.buffer.push("Type 'help' to see all available commands");
  }

  ngOnInit() {
  }

  commandIn() {
    this.buffer.push('portfolio/~' + this.commandValue + ':');
    if (this.commandValue === "cls") {
      this.buffer = [];
    }
    else if (this.commandValue === "help") {
      this.buffer.push("These are the available commands: about, skills, education, experience, cv, contact, cls, open")
    }
    else if (this.commandValue === "skills") {
      this.windowService.openSkill();
    }
    else if (this.commandValue === "about") {
      this.windowService.openAbout();
    }
    else if (this.commandValue === 'contact') {
      this.windowService.openContact();
    }
    else if (this.commandValue === "education") {
      this.buffer.push("--------Education--------")
      this.buffer.push("high school: Lycée Saint-joseph Toulouse 'bac s section sportive'");
      this.buffer.push("2015-2021: EPITECH Toulouse");
      this.buffer.push("Ja 2020 - May 2020: SUNY The college at brockport state of New York University, major in computing science");
    }
    else if (this.commandValue === "ls") {
      this.buffer.push('Cv-Benjamin-Jouanno');
    }
    else if (this.commandValue === "experience") {
      this.buffer.push("--------Job experience--------");

      this.buffer.push("high school internship: Airbus");
      this.buffer.push("2016-2017: DAJ(demain un autre jour) Internship in IOS mobile application developpement");
      this.buffer.push("2017-2019: Internship, part-time and CDD contract for Umlaut (P3-group) in web applicaiton developpement for Airbus");
      this.buffer.push("--------Extra experience--------");
      this.buffer.push("Global Game Jam 2016, 2018, 2019");
      this.buffer.push("Hackaton ENA(Ecole nationale des administration) Strasbourg");
    }
    else {
      this.buffer.push("Unknow command! try help for more informations.");
    }
    this.commandValue = "";
  }

}
