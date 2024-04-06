import { Component } from '@angular/core';
import { GalleryPageComponent } from '../../../components/gallery-page/gallery-page.component';
import { Constants } from '../../../constants';

@Component({
  selector: 'app-other-gallery',
  standalone: true,
  imports: [ GalleryPageComponent ],
  templateUrl: './other-gallery.component.html',
  styles: ''
})
export class OtherGalleryComponent {
  imageFilenames = Constants.OTHER_FILENAMES;
  imageCaptions = Constants.OTHER_CAPTIONS;
  headerUrl = '';
  title = 'Other';
  subtitle = 'Other pieces of production media from various shows in my collection';
}
