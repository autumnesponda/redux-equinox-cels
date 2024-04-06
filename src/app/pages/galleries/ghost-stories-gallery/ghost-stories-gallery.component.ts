import { Component } from '@angular/core';
import { GalleryPageComponent } from '../../../components/gallery-page/gallery-page.component';
import { Constants } from '../../../constants';

@Component({
  selector: 'app-ghost-stories-gallery',
  standalone: true,
  imports: [ GalleryPageComponent ],
  templateUrl: './ghost-stories-gallery.component.html',
  styles: ''
})
export class GhostStoriesGalleryComponent {
  imageFilenames = Constants.GHOSTSTORIES_FILENAMES;
  imageCaptions = Constants.GHOSTSTORIES_CAPTIONS;
  headerUrl = Constants.HEADERS_PREFIX + 'ghoststoriesheader.webp';
  title = 'Ghost Stories';
  subtitle = 'Animated by Pierrot, this series aired from 2000 - 2001 and is infamous for its borderline nonsensical English dub.';
}
