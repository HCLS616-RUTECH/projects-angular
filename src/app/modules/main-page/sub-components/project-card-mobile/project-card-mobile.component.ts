import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output} from '@angular/core';
import {ProjectCard} from "../../sources/models/project-card.model";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'project-card-mobile',
  templateUrl: './project-card-mobile.component.html',
  styleUrls: ['./project-card-mobile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('visibleAdditional', [
      transition('void => *', [
        style({'max-height': 0}),
        animate('0.25s', style({'max-height': '300px'}))
      ]),
      transition('* => void', [
        style({'max-height': '300px'}),
        animate('0.25s', style({'max-height': 0}))
      ]),
    ]),
  ]
})
export class ProjectCardMobileComponent {
  @Input() card!: ProjectCard;
  @Output() onNavigate = new EventEmitter<string>();

  isOpen = false;

  constructor(private readonly _cdRef: ChangeDetectorRef) {
  }

  get name(): string {
    return this.card?.name.replace(/\s/g, '-').toLowerCase();
  }

  handleTriggerNavigation($event: MouseEvent): void {
    $event.preventDefault();
    this.onNavigate.emit(this.card.path);
  }

  handleToggleAdditionalView() {
    this.isOpen = !this.isOpen;
    this._cdRef.markForCheck();
  }


}
