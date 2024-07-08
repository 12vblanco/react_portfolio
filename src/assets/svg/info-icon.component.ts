import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-icon',
  standalone: true,
  template: `
    <svg
      class="info"
      data-slot="icon"
      aria-hidden="true"
      fill="none"
      stroke-width="2.2"
      [attr.stroke]="strokeColor"
      viewBox="0 0 180 180"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  `,
  styles: [`
    .info {
      position: absolute;
      margin: 16px;
      z-index: 1234;
      cursor: pointer;
    }
    @media (max-width: 340px) {
      .info {
        font-size: 26px;
      }
    }
  `]
})
export class InfoIconComponent {
  @Input() strokeColor: string = 'var(--color-secondary)';
}