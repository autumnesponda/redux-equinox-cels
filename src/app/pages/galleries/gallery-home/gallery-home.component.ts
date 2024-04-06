import { Component } from '@angular/core';
import { GalleryTeaserCardComponent } from '../../../components/gallery-teaser-card/gallery-teaser-card.component';
import { Constants } from '../../../constants';

@Component({
  selector: 'app-gallery-home',
  standalone: true,
  imports: [
    GalleryTeaserCardComponent
  ],
  templateUrl: './gallery-home.component.html',
  styles: ``
})
export class GalleryHomeComponent {
  headerUrl = Constants.HEADERS_PREFIX + 'galleryheader_new.webp';

  galleryCards = [
    {
      imageUrl: Constants.GALLERY_IMAGES_PREFIX + 'eva/teaser.jpg',
      title: 'Evangelion',
      subtitle: 'エヴァンゲリオン',
      galleryPageLink: 'evangelion'
    },
    {
      imageUrl: Constants.GALLERY_IMAGES_PREFIX + 'gundam/teaser.jpg',
      title: 'Gundam Series',
      subtitle: 'ガンダムシリーズ',
      galleryPageLink: 'gundam',
    },
    {
      imageUrl: Constants.GALLERY_IMAGES_PREFIX + 'ghoststories/teaser.jpg',
      title: 'Ghost Stories',
      subtitle: '学校の怪談',
      galleryPageLink: 'ghoststories',
    },
    {
      imageUrl: Constants.GALLERY_IMAGES_PREFIX + 'jojo/teaser.jpg',
      title: 'Jojo\'s Bizzare Adventure',
      subtitle: 'ジョジョの奇妙な冒険',
      galleryPageLink: 'jojos',
    },
    {
      imageUrl: Constants.GALLERY_IMAGES_PREFIX + 'fullmetal/teaser.jpg',
      title: 'Fullmetal Alchemist',
      subtitle: '鋼の錬金術師',
      galleryPageLink: 'fma',
    },
    {
      imageUrl: Constants.GALLERY_IMAGES_PREFIX + 'beepuppycat/teaser.jpg',
      title: 'Bee and Puppycat',
      subtitle: 'Frederator Studios Orginal Youtube series',
      galleryPageLink: 'bee-puppycat',
    },
    {
      imageUrl: Constants.GALLERY_IMAGES_PREFIX + 'other/teaser.jpg',
      title: 'Other',
      subtitle: 'Miscellaneous Animated Works',
      galleryPageLink: 'other',
    },
  ];
}
