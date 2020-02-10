import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { TextOverviewComponent } from './pages/text-overview/text-overview.component';
import { TextAnalyticsExplorerComponent } from './pages/text-analytics-explorer/text-analytics-explorer.component';
import { EmotionsComponent } from './components/emotions/emotions.component';
import { IntentComponent } from './components/intent/intent.component';
import { PrioritiesComponent } from './components/priorities/priorities.component';
import { SentimentsComponent } from './components/sentiments/sentiments.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './pages/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TextOverviewComponent,
    TextAnalyticsExplorerComponent,
    EmotionsComponent,
    IntentComponent,
    PrioritiesComponent,
    SentimentsComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
