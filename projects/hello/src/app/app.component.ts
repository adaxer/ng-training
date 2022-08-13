import { Component } from '@angular/core';
import { EnvironmentService } from './environment.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent {
  title = 'Hello Angular';

  constructor(env: EnvironmentService) {
    console.log("Api Url = ", env.apiUrl);
  }
}
