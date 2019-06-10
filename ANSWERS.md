## Self-Study/Essay Questions

- [ ] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

PropTypes are used to validate and document the data types of props being passed in to a component.  This is important because invalid data types can cause errors and/ or unexpected results at runtime.

- [ ] Describe a life-cycle event in React?

React lets you define components as classes or functions. The methods that you are able to use on these are called lifecycle events. These methods can be called during the lifecycle of a component, and they allow you to update the UI and application states.  Mounting, updating, and unmounting are the lifecycle stages.

- [ ] Explain the details of a Higher Order Component?

A higher order component is a component that takes in one or more components as props and returns a brand new component, usually a version of the component(s) with added functionality.

- [ ] What are three different ways to style components in React? Explain some of the benefits of each.

CSS/ SCSS: Allows you to style like HTML with any specificity that you wish to use, Usually kept in a separate, easy to read file.

Styled Components: Creates components that hold styles and you use them in jsx as element tags.  It seems that an advantage would be that they are re-useable without unexpected bubbling to other components.

Third party libraries: Allows you to make use of styles and/ or components that have been written by a third party.  Some of these are very powerful and would otherwise require a lot of coding to accomplish from scratch.
