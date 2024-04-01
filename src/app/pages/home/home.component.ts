import { Component } from '@angular/core';

import { Constants } from '../../constants';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {

  slides = [
    {img: Constants.MEDIA_PREFIX + "eva/EOE_00_16.jpeg"},
    {img: Constants.MEDIA_PREFIX + "jojo/cellthumbnail.jpg"},
    {img: Constants.MEDIA_PREFIX + "eva/NGE_EPISODE13_FULL.png"},
    {img: Constants.MEDIA_PREFIX + "eva/EOE_03_combined.jpg"},
    {img: Constants.MEDIA_PREFIX + "other/RMS-099%20Rick%20Dias.jpg"},
    {img: Constants.MEDIA_PREFIX + "eva/EOE_02_A10.jpeg"}

  ];

}
