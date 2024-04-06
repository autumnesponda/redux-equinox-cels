import { Component } from '@angular/core';
import { GalleryPageComponent } from '../../../components/gallery-page/gallery-page.component';
import { Constants } from '../../../constants';

@Component({
  selector: 'app-jojo-gallery',
  standalone: true,
  imports: [ GalleryPageComponent ],
  templateUrl: './jojo-gallery.component.html',
  styles: ''
})
export class JojoGalleryComponent {
  imageFilenames = Constants.JOJO_FILENAMES;
  imageCaptions = Constants.JOJO_CAPTIONS;
  headerUrl = Constants.HEADERS_PREFIX + 'jojoheader_convert.webp';
  title = 'JoJo\'s Bizarre Adventure';
  subtitle = 'Created by Hirohiko Araki, these are from the two OVA series that adapt Stardust Crusaders, both by Studio A.P.P.P..';
}
