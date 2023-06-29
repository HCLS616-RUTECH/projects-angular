import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-fake-store',
  templateUrl: './fake-store.component.html',
  styleUrls: ['./fake-store.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FakeStoreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
