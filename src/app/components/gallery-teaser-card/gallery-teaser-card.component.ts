import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';

@Component({
  selector: 'app-gallery-teaser-card',
  standalone: true,
  imports: [
    RouterModule,
    MdbRippleModule
  ],
  templateUrl: './gallery-teaser-card.component.html',
  styleUrl: './gallery-teaser-card.component.sass'
})
export class GalleryTeaserCardComponent {
  @Input() imageUrl!: string;
  @Input() title!: string;
  @Input() subtitle?: string;
  @Input() galleryPageLink!: string;
}
