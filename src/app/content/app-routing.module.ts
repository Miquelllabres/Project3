import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContentComponent } from './content.component';
import { ShopComponent } from './shop/shop.component';
import { JournalComponent } from './journal/journal.component';
import { AdventureComponent } from './adventure/adventure.component';
import { PostEntryComponent } from './post.entry/postentry.component';
import { AboutComponent } from './about/about.component';
import { FindusComponent } from './findus/findus.component';
import { ReadComponent } from './read/read.component';




const routes: Routes = [
    {path: '', component: ContentComponent},
    {path: 'shop', component: ShopComponent},
    {path: 'journal', component: JournalComponent},
    {path: 'adventure', component: AdventureComponent},
    {path: 'post-entry', component: PostEntryComponent},
    {path: 'read/:ID', component: ReadComponent},
    {path: 'about', component: AboutComponent},
    {path: 'findus', component: FindusComponent},
   

] ;

@NgModule ({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule {}