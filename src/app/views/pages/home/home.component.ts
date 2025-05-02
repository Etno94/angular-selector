import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faPlus, faMagnifyingGlass, faBell, faChevronDown } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  imports: [
    FontAwesomeModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(library: FaIconLibrary) {
    library.addIcons(faPlus, faMagnifyingGlass, faBell, faChevronDown); // Register the 'plus' icon
  }
}
