import { Component } from '@angular/core';
import { GalleryPageComponent } from '../../../components/gallery-page/gallery-page.component';
import { Constants } from '../../../constants';

@Component({
  selector: 'app-bee-puppycat-gallery',
  standalone: true,
  imports: [ GalleryPageComponent ],
  templateUrl: './bee-puppycat-gallery.component.html',
  styles: ''
})
export class BeePuppycatGalleryComponent {
  imageFilenames = Constants.BEEPUPPYCAT_FILENAMES;
  imageCaptions = Constants.BEEPUPPYCAT_CAPTIONS;
  headerUrl = '';
  title = 'Bee and Puppycat';
  subtitle = 'The original YouTube series created by Natasha Allegri; animated by Frederator Studios and Dong Woo Animation';
}
