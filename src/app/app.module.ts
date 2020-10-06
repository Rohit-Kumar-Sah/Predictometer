import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LeftpanelComponent } from './leftpanel/leftpanel.component';
import { RightpanelComponent } from './rightpanel/rightpanel.component';
import { ToppanelComponent } from './toppanel/toppanel.component';
import { BottompanelComponent } from './bottompanel/bottompanel.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftpanelComponent,
    RightpanelComponent,
    ToppanelComponent,
    BottompanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
