import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-layout',
  imports: [
    RouterModule,
    MatIconModule,
    FontAwesomeModule
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  constructor(library: FaIconLibrary) {
    library.addIcons( faChevronDown);
  }
}
