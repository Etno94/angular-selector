import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faPlus, faMagnifyingGlass, faBell, faChevronDown } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-layout',
  imports: [
    RouterModule,
    FontAwesomeModule
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  constructor(library: FaIconLibrary) {
    library.addIcons(faPlus, faMagnifyingGlass, faBell, faChevronDown); // Register the 'plus' icon
  }
}
