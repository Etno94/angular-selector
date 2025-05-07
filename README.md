# AngularSelector

This project is a take-home challenge built using Angular. It demonstrates a modular architecture, dynamic components, and adherence to best practices such as SOLID principles. The main focus is on the `CardSelectorComponent`, which showcases various supply statuses and scenarios.

## Live Demo

You can view the deployed project here: [Angular Selector Demo](https://etno94.github.io/angular-selector/)

---

## Project Setup

To set up the project locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/etno94/angular-selector.git
   cd angular-selector
   ```

2. **Install Dependencies**:
   Ensure you have Node.js and npm installed. Then, run:
   ```bash
   npm install
   ```

3. **Run the Development Server**:
   Start the local development server:
   ```bash
   ng serve
   ```
   Open your browser and navigate to `http://localhost:4200/`.

4. **Run Unit Tests**:
   Execute the unit tests using Karma:
   ```bash
   ng test
   ```

5. **Build for Production**:
   Generate a production-ready build:
   ```bash
   ng build --output-path=dist --base-href=/angular-selector/
   ```

6. **Deploy to GitHub Pages**:
   Deploy the project to GitHub Pages:
   ```bash
   ng deploy --base-href=/angular-selector/
   ```

---

## Assumptions

- **Layout and Menu Context**:
  While the layout and menu are part of the project, they were not prioritized to focus on delivering a high-quality `CardSelectorComponent` within the given timeframe.

- **Modular Architecture**:
  The project is designed with a modular architecture to ensure scalability and maintainability. Each component is self-contained and reusable.

- **Tailwind CSS**:
  Tailwind CSS was chosen for its ability to improve code maintainability, speed up development, and create visually appealing and performant views.

- **SOLID Principles**:
  The project adheres to SOLID principles to ensure components are loosely coupled, highly cohesive, and easy to extend or modify.

- **Component Functionality**:
  While not all user actions (e.g., add, delete) were implemented, the `CardSelectorComponent` focuses on fetching data and showcasing every possible status scenario.

---

## Features

- **Dynamic Supply Management**:
  The `CardSelectorComponent` dynamically displays supplies based on their status (active, inactive, etc.) and allows users to interact with them.

- **Search Functionality**:
  A search bar is included to filter supplies when there are more than two, improving usability for large datasets.

- **Mock and Real Data Support**:
  The project uses dependency injection to easily switch between mock data (`MockSupplyService`) and real backend integration (`SupplyService`).

- **Accessibility**:
  The project includes ARIA roles and attributes to ensure accessibility for users relying on assistive technologies.

- **Unit Tests**:
  Comprehensive unit tests are included to validate the functionality of key components, ensuring reliability and maintainability.

---

## Technical Highlights

- **Standalone Components**:
  The project leverages Angular's standalone components to simplify the architecture and reduce boilerplate code.

- **Signals for State Management**:
  Angular's `signal` API is used for reactive state management, ensuring efficient updates and a clean separation of concerns.

- **Dynamic Routing**:
  The application uses Angular's router to handle navigation, with a fallback route to redirect users to the login page.

- **GitHub Pages Deployment**:
  The project is deployed using Angular CLI's `ng deploy` command, making it easy to showcase the application.

---

## Known Limitations

- **Limited User Actions**:
  While the component supports fetching and displaying data, actions like adding or deleting supplies are not implemented.

- **Basic Layout**:
  The layout and menu are functional but not fully polished, as the focus was on delivering a robust and dynamic `CardSelectorComponent`.

---

## Additional Resources

- **Angular CLI Documentation**:
  [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli)

- **Tailwind CSS Documentation**:
  [Tailwind CSS Documentation](https://tailwindcss.com/docs)

- **SOLID Principles**:
  [SOLID Principles Explained](https://en.wikipedia.org/wiki/SOLID)

---

## Conclusion

This project demonstrates understanding of Angular, modular architecture, and best practices. The `CardSelectorComponent` is a dynamic, scalable, and maintainable solution that showcases various supply statuses and scenarios. While some features were deprioritized to focus on quality delivery, the project is designed to be easily extendable for future enhancements.