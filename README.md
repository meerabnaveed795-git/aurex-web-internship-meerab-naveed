# AUREX Full-Stack Engineering Internship

## Intern Information

**Name:** Meerab Naveed
**Domain:** Full-Stack Web Development
**Week:** Week 4

---

# Week 2

## Work Completed

* CSS Flexbox
* CSS Grid
* Responsive Design
* Portfolio Page Layout

---

# Week 3

## Week 3 Focus

Advanced CSS, CSS Grid, Flexbox, CSS Animations, Transitions, Responsive Design and UI Polish.

## Technologies Used

* HTML5
* CSS3
* CSS Grid
* Flexbox
* CSS Animations
* CSS Transitions
* CSS Custom Properties (Variables)
* Responsive Design
* Fluid Typography (`clamp`)

## CSS Grid Implementation

A responsive project showcase was created using CSS Grid with `auto-fit` and `minmax()`.

**Key implementations:**

* `grid-template-columns: repeat(auto-fit, minmax(240px, 1fr))` for automatic responsive columns
* Cards automatically wrap and resize based on available space
* No horizontal scrollbars on any screen size
* Clean integration with Flexbox for inner card alignment

## Keyframe Animations

Custom keyframe animations were created to enhance user experience:

1. **fadeIn** — Applied to `body` for smooth page load transition
2. **heroAppear** — Applied to `.hero-content` for hero section entrance
3. **Card Hover Elevation** — Smooth `translateY` and shadow transitions on project/skill cards
4. **Button Scale Effects** — Subtle scale and shadow on hover for all buttons

## Transitions & Micro-interactions

* Smooth hover states on navigation links
* Card elevation on hover
* Button hover effects
* Form input focus states with border color and box-shadow
* Consistent `0.3s ease` transitions

## Responsive Testing

| Device  | Screen Size | Result                                           |
| ------- | ----------- | ------------------------------------------------ |
| Desktop | 1200px+     | ✅ Perfect layout, no issues                      |
| Tablet  | 768px       | ✅ Grid adjusts to 2 columns, nav wraps           |
| Mobile  | 480px       | ✅ Single column, stacked nav, full-width buttons |

**Outcome:** No horizontal scrollbars, no visual breaks, and all elements scale fluidly.

## Accessibility

* `prefers-reduced-motion` media query added to respect user motion preferences
* Semantic HTML5 elements used throughout
* Proper form labels for all inputs

---

# Week 4

## Week 4 Focus

This week focused on developing a **Task Management Application** using JavaScript. The application allows users to manage their daily tasks through an interactive and responsive interface.

## Technologies Used

* HTML5
* CSS3
* JavaScript
* DOM Manipulation
* LocalStorage
* Form Validation
* Responsive Design

## Task Management Application

A functional Task Management Application was developed where users can create and manage tasks.

### Key Features

* Add new tasks
* Edit existing tasks
* Delete tasks
* Mark tasks as completed
* Filter tasks
* Validate task form input
* Save tasks in browser `localStorage`
* Restore tasks after page refresh
* Responsive user interface

## Task Operations

The application provides complete task management functionality:

* **Add:** Users can enter a task and add it to the task list.
* **Edit:** Existing tasks can be modified.
* **Delete:** Unwanted tasks can be removed.
* **Complete:** Tasks can be marked as completed.
* **Filter:** Users can filter tasks according to their completion status.

## Form Validation

Form validation was implemented to ensure that invalid or empty task entries are not submitted.

The application provides appropriate validation feedback to the user when required information is missing.

## LocalStorage Implementation

Browser `localStorage` was used to store task data.

This allows tasks to remain available even after the page is refreshed or reopened in the same browser.

## Responsive Design

The Task Management Application was designed to work across different screen sizes.

* Desktop layout
* Tablet layout
* Mobile layout
* Flexible task cards
* Responsive buttons and form elements

## Deployment

The Task Management Application is prepared for deployment using:

* GitHub Pages
* Vercel

After deployment, the live application link will be added below.

---

## Live Deployment

🔗 **Live Link:** [Your site is live at https://meerabnaveed795-git.github.io/aurex-web-internship-meerab-naveed]

## GitHub Repository

🔗 **Repository Link:** [https://github.com/meerabnaveed795-git/aurex-web-internship-meerab-naveed(repository)]

---

## Weekly Progress Reflection

### Week 2

During Week 2, I learned how to use CSS Flexbox and Grid to create structured and responsive web layouts.

### Week 3

During Week 3, I learned advanced CSS concepts including:

* CSS Grid `auto-fit` and `minmax()`
* Difference between Flexbox and Grid
* CSS `@keyframes` animations
* Smooth transitions and hover effects
* Fluid typography using `clamp()`
* CSS custom properties
* Responsive design
* Accessibility using `prefers-reduced-motion`

### Week 4

During Week 4, I learned how to build an interactive web application using JavaScript.

Key learnings included:

* DOM manipulation
* Creating and managing tasks dynamically
* Editing and deleting data
* Handling completed task states
* Implementing task filters
* Form validation
* Using browser `localStorage`
* Maintaining data after page refresh
* Creating responsive application interfaces
* Preparing a web application for deployment

---

## Completed Features Checklist

### Week 3

* [x] Advanced CSS Grid with auto-fit and minmax
* [x] Flexbox for navigation and skills section
* [x] Keyframe animations
* [x] Hover effects on cards and buttons
* [x] Smooth transitions
* [x] CSS custom properties
* [x] Fluid typography with clamp()
* [x] Responsive media queries
* [x] Reduced motion accessibility
* [x] Clean folder structure

### Week 4

* [x] Task Management Application
* [x] Add tasks
* [x] Edit tasks
* [x] Delete tasks
* [x] Mark tasks as completed
* [x] Task filtering
* [x] Form validation
* [x] LocalStorage integration
* [x] Tasks persist after page refresh
* [x] Responsive design
* [x] GitHub Pages / Vercel deployment
* [x] Live deployment verification

---

## Project Status

**Current Status:** Week 4 Task Management Application completed and ready for deployment.
