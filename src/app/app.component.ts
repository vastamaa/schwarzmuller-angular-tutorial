import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-basics';
  loadedFeature: string = 'recipe';

  onNavigate(selectedFiredFeature: string) {
    this.loadedFeature = selectedFiredFeature;
  }
}
