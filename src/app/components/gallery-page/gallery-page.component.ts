import { Component, Input, OnInit } from '@angular/core';
import {Lightbox, LightboxConfig, LightboxModule} from "ngx-lightbox";
import { Constants } from '../../constants';

@Component({
    standalone: true,
    selector: 'app-gallery-page',
    imports: [ LightboxModule ],
    templateUrl: 'gallery-page.component.html',
    styleUrls: ['gallery-page.component.sass']
})
export class GalleryPageComponent implements OnInit {
    @Input() imageFilenames: Array<string> = [];
    @Input() imageCaptions: Array<string> = [];
    @Input() headerUrl = "";
    @Input() title = "";
    @Input() subtitle = "";

    albums: Array<any> = [];

    constructor(public _lightbox: Lightbox, public _lightboxConfig: LightboxConfig) {
        _lightboxConfig.centerVertically = true;
        _lightboxConfig.disableScrolling = true;
        _lightboxConfig.showZoom = true;
        _lightboxConfig.showImageNumberLabel = true;
    }

    ngOnInit() {
        for (let i = 0; i < this.imageFilenames.length; i++) {
            const filename = this.imageFilenames[i];
            let image;
            if (filename.indexOf('|') != -1) {
                const splitFilename = filename.split('|');
                image = {
                    src: Constants.GALLERY_IMAGES_PREFIX + splitFilename[0],
                    caption: this.imageCaptions[i],
                    overlay: Constants.GALLERY_IMAGES_PREFIX + splitFilename[1]
                };
            } else {
                image = {
                    src: Constants.GALLERY_IMAGES_PREFIX + this.imageFilenames[i],
                    caption: this.imageCaptions[i],
                    overlay: null
                };
            }
            this.albums.push(image);
        }
    }

    open(index: number): void {
        // open lightbox
        console.log("Opening lightbox at index: " + index);
        this._lightbox.open(this.albums, index);
    }

    close(): void {
        // close lightbox programmatically
        this._lightbox.close();
    }
}
