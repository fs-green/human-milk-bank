import { Component } from '@angular/core';

/**
 * Mit Hilfe eines Decorators werden Klassen um weitere Informationen, d. h. um Metadaten erweitert. 
 * Über die Eigenschaft selector zeigen Sie an, an welcher Stelle die Komponente verwendet werden soll. 
 * Über die template-Eigenschaft konfigurieren Sie schließlich, dass bei der Instanziierung der Komponente 
 * das hinterlegte Template gerendert werden soll. Ebenso verweisen Sie auf die zugehörige CSS-Datei für das Styling der Komponente. 
 */
@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'human-milk-bank-frontend';
}
