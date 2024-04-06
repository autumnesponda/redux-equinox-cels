import { Component } from '@angular/core';
import { Constants } from '../../../constants';
import { GalleryPageComponent } from '../../../components/gallery-page/gallery-page.component';

@Component({
  selector: 'app-gundam-gallery',
  standalone: true,
  imports: [ GalleryPageComponent ],
  templateUrl: './gundam-gallery.component.html',
  styles: ''
})
export class GundamGalleryComponent {
  imageFilenames = Constants.GUNDAM_FILENAMES;
  imageCaptions = Constants.GUNDAM_CAPTIONS;
  headerUrl = Constants.HEADERS_PREFIX + 'gundamheader.webp';
  title = 'Various Gundam Series';
  subtitle = 'Animated by Sunrise, these are from various Gundam TV anime series.';
}
