import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

// Nach den Import-Anweisungen folgt der Decorator @NgModule. Hier findet eine deklarative Konfiguration eines
// Angular-Moduls statt. Mit Hilfe von Modulen werden in der Angular-Plattform zusammengehörige Komponenten und Services
// gekapselt. Dabei besteht jede Angular-Anwendung aus mindestens einem Modul, nämlich konkret dem Applikationsmodul.
// Folgende Angaben sind verpflichtend:

@NgModule({
// Abschnitt declarations: Alle hier aufgeführten Komponenten sind im gesamten Applikationsmodul sichtbar und können
// von jeder anderen Komponente verwendet werden. Wir haben im Moment nur eine Komponente namens AppComponent.
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent
  ],
  imports: [
// Die Angabe, welches Zielsystem angesprochen werden soll: imports: [BrowserModule].
// In diesem Fall möchten wir die Applikation in einem Webbrowser laufen lassen. Wir verwenden vorerst nur diesen
// Applikationstyp. Wir haben schon darauf hingewiesen, dass mit Angular auch Applikationen für andere Systeme, wie etwa
// mobile Geräte, möglich sind. In diesem Fall müssten wir andere Module an dieser Stelle importieren. Wir stellen
// diese Möglichkeiten hier jedoch ausdrücklich zurück.
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  providers: [],
// Die Einstiegskomponente in die Applikation: bootstrap: [AppComponent], also der Entry Point der Applikation
  bootstrap: [AppComponent]
})
export class AppModule { }
