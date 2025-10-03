# ⚡️ [Next.js State Crash Course](https://github.com/jaimemendozadev/nextjs-state-crash-course)

<br />

## Table of Contents (TOC)

- [Prerequisites](#prerequisites)
- [Prop Drilling](#prop-drilling)
- [What is State Management?](#what-is-state-management)
- [React Context](#react-context)



<br />

---
## Prerequisites

I'm going to assume you have access to the following, have working knowledge, or can figure out how to install AND use the following tools on your local machine:

- Node.js (installed locally on your computer)
- Git
- GitHub Account
- Code Editor of Your Choice (preferably [VS Code](https://code.visualstudio.com/) because it plays nicely with Next.js/TypeScript and autocompletes a lot of code for you.)

<br />

I also assume you've attended my [Next.js Crash Course](https://github.com/jaimemendozadev/nextjs-crash-course) and have a barebones understanding of the JavaScript and React fundamentals that are covered.


<br />

**IMPORTANT**: We will not be discussing how to implement [TypeScript (TS)](https://www.typescriptlang.org/) in this crash course as that would lead to cognitive overhead for everyone involved 🤯. **UNLESS THERE'S UNANIMOUS CONSENT** to use TS in the project, avoid getting TS errors in the codebase by using the all important escape hatch by adding the following line of code at the top of each `.ts` or `.tsx` file: `// @ts-nocheck`


<br />


[Back to TOC](#table-of-contents-toc)

---
# Prop Drilling

As you've probably already discovered, one of the nice things about [React.js](https://react.dev/) is that you can create reusable pieces of UI, that we call Components. Right here, I'm creating a `CustomForm` Component:

```
const CustomForm = ({value, handler, submitHandler}) => {

    return (
        <form onSubmit={submitHandler}>
          <label htmlFor="custom-input">
          <input id="custom-input" type="text" value={value} onChange={handler}>
        </form>

    )
}

```

<br />


When I render this `CustomForm` Component to the screen, I'm rendering it inside my `MyTodoApp` Component, which is what we call the top `"Parent"` level of the app. 


From the "Parent" level, I'm passing the `<CustomForm />` Component some [props](https://react.dev/learn/passing-props-to-a-component) so it can receive additional data that it needs to do it's job. 

You can think of `props` as Function arguments, variables, or the data in your app that you care about tracking.


```
const MyTodoApp = () => {

    const [inputValue, setInputValue] = useState("");
    
    const handleSubmit = (evt) => {
        // Rest of code
    }

    const onChange = (evt) => {
        const userValue = evt.target.value;
        setInputValue(userValue);
    }



    return (
        <CustomForm value={inputValue} handler={onChange} submitHandler={handleSubmit} />
    )
}

```

<br />

Passing props that are created and tracked in a top level `"Parent"` Component that then get passed down to a `"Child"` Component is easy to visualize because the data is only traveling down one-level deep.


BUUUUUUUUUUUUUUUUUUUUUUUT 

<br />

Imagine a scenario where we have a top level `"Parent"` Component that renders a `"Child"` Component. 

<img src="./README/prop-drilling-screenshot.png" alt="Screenshot of React Prop Drilling" />


In the 👆🏽above screenshot, we have a simple piece of data that tracks the current User named `"Alice"`. From the top-level `"Parent"` Component, the User `Alice` gets passed down to the immediate `"Child"` Component at `Level 1`.


<br />

What if that`"Child"` Component ALSO becomes a `"Parent"` that renders its own `"Child"` Component? What if the User `Alice` also needs to get passed down one another level down in the app? 


<br />

<strong>Just imagine trying to BOTH visualize AND track the passage of props/data `N-levels` deep in the app</strong>.


<img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjJyY3U5bDR6N2tqYTh0amh4cTFpZmR3cXA0ZXdlN2VuamducnVzMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3etP8HqLPVixUc9Y3s/giphy.gif" alt="Confused Betty White GIF">

In React, we `UNOFFICIALLY` call the passage of props/data down more than one-level deep as <strong>prop drilling</strong>.


[Back to TOC](#table-of-contents-toc)

---


## What is State Management? 

By no means is this an official Merriam-Webster's definition of `State`, so take it with a few grains of 🧂salt.

When we talk about `State` we're talking about the variables, the pieces of data, you care about tracking for the entire duration of your running app.

In the [previous section](#prop-drilling), we were talking about props, and we defined them as follows:

> You can think of `props` as Function arguments, variables, or the data in your app that you care about tracking.


<br />

`State` is synonymous with `props` because: 


> it's all about the data 🫵🏽 you care about ALWAYS TRACKING or ALWAYS HAVING ACCESS TO while your app is running.

<br />

When we drill props N-levels deep in the app, we risk understanding the data path of the props/data as it travels down to its destination. We might even forget where the data journey started. 😵‍💫 

<br />


BUUUUUUUUUUUUUUUUUUUUUUUT 

<br />

🤔 WHAT IF you 🫵🏽 had CONSTANT ACCESS to the props/data you care about tracking? 😮 Enter the idea of `State Management`. 


<img src="./README/global-state-screenshot.png" alt="Global State Screenshot" />

<br />



In the 👆🏽above screenshot, rather than localizing all the important data in one single Component, you could design a little mini Database (DB) that exists somewhere above all the React Components that you render on the screen. This little mini Database WILL ALWAYS KEEP TRACK of whatever data you care about tracking.


And the best part: EVERY COMPONENT IN YOUR APP, can have access to the `State` because it exists in the Global space of your app. 


Your job as a developer is to then:

- Decide what data you care about tracking;
- Setting up the `State` database and hooking up the React App to the `State` DB; and
- Eventually updating the Frontend `State` Database to reflect the most current information after you make a Backend API Operation.


We will be using the built-in React tooling to solve our `State` Management issues. Enter React Context.


<br />

[Back to TOC](#table-of-contents-toc)

___
## React Context







<br />

[Back to TOC](#table-of-contents-toc)

___