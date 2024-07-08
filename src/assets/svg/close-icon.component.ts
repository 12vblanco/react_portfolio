import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-close-icon',
  standalone: true,
  template: `
  <svg
    class="close"
    viewBox="0 0 24 24"
    stroke='var(--color-secondary)'
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
  >
  <line x1="16.9999" y1="7" x2="7.00001" y2="16.9999" id="Path" stroke-width="2" stroke-linecap="round">

</line>
            <line x1="7.00006" y1="7" x2="17" y2="16.9999" id="Path" stroke-linecap="round">

</line>
  </svg>
  `,
  styles: [`
  .close{
    width: 58px;
    height: 58px;
    stroke-width: 2.2;
    margin-right: -12px;
    cursor: pointer;
    position: relative;
    top: 6px;
    left: -3px;
  }
  `]
})
export class ModalCloseIconComponent {
  @Input() strokeColor: string = 'var(--color-secondary)';
}
