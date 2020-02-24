- [ ] Why would you use class component over function components (removing hooks from the question)?
        Class components use lifecycle methods to hold it's own state. They are also still widely used in the industry. Removing hooks from the question class components hold their own state properties within the component, where functional components without useState does not.


- [ ] Name three lifecycle methods and their purposes.
        componentDidMount-initial data you want to access will be defined on this phase. A good place for an API call.
        componentDidUpdate- when state changes it rerenders the component.
        componentWillUnmount- Death of the component. The component is no longer rendered. Good place for cleanups if needed.


- [ ] What is the purpose of a custom hook?
        Using stateful logic you can customize a hook to reuse over and over again. This is good to keep you code DRY and when you notice the same code being use throughout the application and repeating yourself.


- [ ] Why is it important to test our apps?
        Testing our apps is good to catch bugs during the process to address them sooner than later and not letting them effect other parts of your code. It would also be good before deploying your app to save on time and money in the long run. 