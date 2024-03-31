import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EvaGalleryComponent } from './pages/galleries/eva-gallery/eva-gallery.component';
import { FmaGalleryComponent } from './pages/galleries/fma-gallery/fma-gallery.component';
import { GalleryHomeComponent } from './pages/galleries/gallery-home/gallery-home.component';
import { GhostStoriesGalleryComponent } from './pages/galleries/ghost-stories-gallery/ghost-stories-gallery.component';
import { GundamGalleryComponent } from './pages/galleries/gundam-gallery/gundam-gallery.component';
import { JojoGalleryComponent } from './pages/galleries/jojo-gallery/jojo-gallery.component';
import { OtherGalleryComponent } from './pages/galleries/other-gallery/other-gallery.component';
import { BeePuppycatGalleryComponent } from './pages/galleries/bee-puppycat-gallery/bee-puppycat-gallery.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'gallery', component: GalleryHomeComponent },
    { path: 'gallery/bee-puppycat', component: BeePuppycatGalleryComponent},
    { path: 'gallery/evangelion', component: EvaGalleryComponent},
    { path: 'gallery/gundam', component: GundamGalleryComponent},
    { path: 'gallery/ghoststories', component: GhostStoriesGalleryComponent},
    { path: 'gallery/jojos', component: JojoGalleryComponent},
    { path: 'gallery/fma', component: FmaGalleryComponent},
    { path: 'gallery/other', component: OtherGalleryComponent},
];
