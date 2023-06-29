import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output} from '@angular/core';
import {ProjectCard} from "../../sources/models/project-card.model";
import {
  trigger,
  // state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('visibleCard', [
      transition('void => *', [
        style({ opacity: 0, transform: "perspective(600px) rotateY(-90deg)"}),
        animate('0.25s', style({ opacity: 1, transform: "perspective(600px) rotateY(0deg)" }))
      ]),
    ]),
    trigger('visibleMain', [
      transition('void => *', [
        style({ opacity: 0}),
        animate('0.25s', style({ opacity: 1 }))
      ]),
    ]),
    trigger('visibleAdditional', [
      transition('void => *', [
        style({ opacity: 0}),
        animate('0.25s', style({ opacity: 1 }))
      ]),
    ]),
  ]
})
export class ProjectCardComponent {
  @Input() card!: ProjectCard;
  @Output() onNavigate = new EventEmitter<string>();

  isHover = false;

  constructor(private readonly _cdRef: ChangeDetectorRef) {}

  get name(): string {
    return this.card?.name.replace(/\s/g, '-').toLowerCase();
  }

  handleTriggerNavigation(): void {
    this.onNavigate.emit(this.card.path);
  }

  handleHover(state: boolean) {
    this.isHover = state;
    this._cdRef.markForCheck();
  }
}
