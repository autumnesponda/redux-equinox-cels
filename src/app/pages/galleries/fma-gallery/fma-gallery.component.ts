import { Component } from '@angular/core';
import { GalleryPageComponent } from '../../../components/gallery-page/gallery-page.component';
import { Constants } from '../../../constants';

@Component({
  selector: 'app-fma-gallery',
  standalone: true,
  imports: [ GalleryPageComponent ],
  templateUrl: './fma-gallery.component.html',
  styles: ''
})
export class FmaGalleryComponent {
  imageFilenames = Constants.FMA_FILENAMES;
  imageCaptions = Constants.FMA_CAPTIONS;
  headerUrl = Constants.HEADERS_PREFIX + 'fmaheader_sizetest.webp';
  title = 'Fullmetal Alchemist';
  subtitle = 'Animated by bones inc., Fullmetal Alchemist was a 51-episode manga adaptation that aired from 2003 - 2004.';
}
