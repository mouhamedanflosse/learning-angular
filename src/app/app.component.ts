import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyCompComponent } from './my-comp/my-comp.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MyCompComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title : string = 'my-app';
}
