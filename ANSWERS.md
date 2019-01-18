1.  What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.
  - PropTypes are used for a few things but most notably to make sure that the data coming into your
    components is what you think it is which can help catch errors and bugs easier than if you didnt
    check your data. They are also a good way for other developers to come into your component file
    and quickly see generally what all the props are doing and what they should be passing in, kind
    of like an index in a book.

2.  Describe a life-cycle event in React?
    - A life cycle event is an event that's triggered during certain points in a components lifecycle. For
      example one of them is component did mount so when the component mounts, that event gets triggered 
      which will trigger a re-render as well.

3.  Explain the details of a Higher Order Component?
    - A Higher Order Component is an anonymous component that will take in other components as arguments
      and using those components and some of its own logic, it will conditionally render one of the 
      components passed in. For example like on our project the anonymous component had a loggedIn
      boolean in its state and would check for a username in local storage and change that loggedIn
      value based on what it found in local storage which would in turn conditionally render either
      the post-page or the login-page. In short it is a component whos job is to render other components.

4.  What are three different ways to style components in React? Explain some of the benefits of each.
    - The first way to style a component in react is to just have css files for the components and
      import them into your component files then just use vanilla css to do all your styles. The
      benifit to this would probably be that it is super close to just making a normal static
      website nothing too fancy besides the importing other than that its just writing css.

    - The second way I think would be a pre-processor, I havent actually tried using a pre-processor
      with react yet but I've heard people say its kind of hard to get setup and working. I would
      imagine that the benifits of using a pre-proccesor would be similar to using a pre-proccesor
      on a static site, you get to nest styles and set variables and use mixins and what not.

    - The third way is to use another library like Styled-components. the benifits of styled components
      lets you keep all your styles in the same js file as the component so no styles get leaked and its
      easier to keep track of all your styles. Also on top of that you can use javascript, logic and props
      to conditionally change your css styles using the same template literal strings we have been learning
      since day one of javascript.        