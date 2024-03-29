import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ScRootComponent } from './components/sc-root/sc-root.component';
import { HttpClientModule } from '@angular/common/http';
import { ScSearchComponent } from './components/sc-search/sc-search.component';
import { ScArtworkComponent } from './components/sc-artwork/sc-artwork.component';
import { ScSearchHistoryComponent } from './components/sc-search-history/sc-search-history.component';
import { ScSearchResultComponent } from './components/sc-search-result/sc-search-result.component';

@NgModule({
  declarations: [
    AppComponent,
    ScRootComponent,
    ScSearchComponent,
    ScArtworkComponent,
    ScSearchHistoryComponent,
    ScSearchResultComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
