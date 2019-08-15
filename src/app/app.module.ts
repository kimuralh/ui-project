import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { ResumesComponent } from './components/resumes/resumes.component';
import { AdvertiseBarComponent } from './components/advertise-bar/advertise-bar.component';
import { DescriptionComponent } from './components/description/description.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactComponent } from './components/contact/contact.component';
import { MainPageLayoutComponent } from './layouts/main-page-layout/main-page-layout.component';
import { ResumeCardComponent } from './components/resume-card/resume-card.component';
import { DescriptionCardComponent } from './components/description-card/description-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    BannerComponent,
    ResumesComponent,
    AdvertiseBarComponent,
    DescriptionComponent,
    GalleryComponent,
    ContactComponent,
    MainPageLayoutComponent,
    ResumeCardComponent,
    DescriptionCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
