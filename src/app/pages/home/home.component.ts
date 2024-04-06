import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { EmblaCarouselDirective, EmblaCarouselType, EmblaOptionsType } from 'embla-carousel-angular';
import Autoscroll from 'embla-carousel-auto-scroll';

import { Constants } from '../../constants';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    EmblaCarouselDirective
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent implements AfterViewInit {

  carouselImages = [
    Constants.CAROUSEL_IMAGES_PREFIX + "EOE_00_16.jpg",
    Constants.CAROUSEL_IMAGES_PREFIX + "layout01.jpg",
    Constants.CAROUSEL_IMAGES_PREFIX + "mobile_suit_victory_gundam_01.jpg",
    Constants.CAROUSEL_IMAGES_PREFIX + "EOE_03_combined.jpg",
    Constants.CAROUSEL_IMAGES_PREFIX + "nardo01.jpg",
    Constants.CAROUSEL_IMAGES_PREFIX + "reidedcel.jpg"
  ];
  
  @ViewChild(EmblaCarouselDirective) emblaRef!: EmblaCarouselDirective;

  emblaApi?: EmblaCarouselType;

  options: Partial<EmblaOptionsType> = { 
    align: "center",
  };
  
  plugins = [ Autoscroll({ 
    speed: 0.75,
    startDelay: 0,
    stopOnInteraction: false,
  })];

  ngAfterViewInit() {
    this.emblaApi = this.emblaRef.emblaApi;
  }

}
