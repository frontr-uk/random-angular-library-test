import { ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'rbx-card',
  styleUrls: ['./card.component.scss'],
  template: `
    <ng-content></ng-content>
  `,
})
export class CardComponent {
  /**
   * Always apply the base Rubix button css class.
   */
  @HostBinding('class.rbx-card')
  private addBaseButtonCssClass = true;
}
