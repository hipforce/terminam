import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowService {

  isSkill: boolean = false;
  isAbout: boolean = false;
  isContact: boolean = false;
  constructor() { }

  openSkill() {
    this.isSkill = true;
  }

  closeSkill() {
    this.isSkill = false;
  }

  openAbout () {
    this.isAbout = true;
  }

  closeAbout() {
    this.isAbout = false;
  }

  openContact() {
    this.isContact = true
  }

  closeContact() {
    this.isContact = false;
  }
}
