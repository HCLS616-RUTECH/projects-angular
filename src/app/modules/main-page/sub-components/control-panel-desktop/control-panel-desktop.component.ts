import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'control-panel-desktop',
  templateUrl: './control-panel-desktop.component.html',
  styleUrls: ['./control-panel-desktop.component.scss']
})
export class ControlPanelDesktopComponent implements OnInit {
  @Input() form!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
