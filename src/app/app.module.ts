import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { ShopComponent } from './content/shop/shop.component';
import { JournalComponent } from './content/journal/journal.component';
import { AdventureComponent } from './content/adventure/adventure.component';
import { JournalService } from './content/journal/journal.service';
import { Journal } from './content/journal/journal';
import { AppRoutingModule } from './content/app-routing.module';
import { PostEntryComponent } from './content/post.entry/postentry.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { OwlCarousel } from './content/owl/owl-carousel';
import { ReadComponent } from './content/read/read.component';
import { AboutComponent } from './content/about/about.component';
import { FindusComponent } from './content/findus/findus.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    FooterComponent,
    ContentComponent,
    ShopComponent,
    JournalComponent,
    AdventureComponent,
    JournalComponent,
    PostEntryComponent,
    NavigatorComponent,
    OwlCarousel,
    ReadComponent,
    AboutComponent,
    FindusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [JournalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
