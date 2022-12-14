What i learnt:

1. interesting warning. image.png
   so i set keys to be equal to a numbering i wanted to output (at step for how it works, so key=01 and then i wanted step to be 01. got this warning). it seems that key is a special prop that cannot be destructured

query:

1. so i was trying to export a modal into Navbar.js. i exported it as default with the name of NavModal, as seen in https://ibb.co/Sy491pG

At Modal.js however, i accidentally imported it as Modal, as seen in https://ibb.co/yfSqv0p. My question is why is that working, even though i did not import it as NavModal? Thank you!
EDIT: default exports can only have 1 export. Hence, the name does not really matter, you will still be able to import the same thing regardless of the naming.

2. What i intended to do: https://ibb.co/z53BPBQ - i wanted to output 3 of those blue components.

Hence, i decided to store all the relevant props in an articles array - https://ibb.co/jGN6v8Q, then map it out to display those 3 components.

Because i wanted to render different svgs per article, i had to pass them as a prop. However, those svgs ended as a string.

what i did: i used dompurify and setdangerouslyhtml as seen in https://ibb.co/WK6TsVw, then passed icon into the article component, as seen in https://ibb.co/WtGbZ8k

was wondering if there was a better way to approach this? thank you!

3. useEffect dependencies dont have to be inside of the useEffect function? eg.
   export default function useScrollToTop() {
   const { pathname } = useLocation();

useEffect(() => {
// "document.documentElement.scrollTo" is the magic for React Router Dom v6
document.documentElement.scrollTo({
top: 0,
left: 0,
behavior: "instant", // Optional if you want to skip the scrolling animation
});
}, [pathname]);
// why is pathname able to be added as a dependency here, even though pathname is not used inside of the useEffect?
return null;
}
To conditionally render elements based on viewport width, need useViewPort custom hook.

4. Unlimited render error
   ![Untitled]![dispatchcontext](https://user-images.githubusercontent.com/98036884/207301582-02c69351-d421-4019-b159-0145333d0918.PNG)

   Problem: i am assuming selected is immediately updating, however setSelected is an async function, hence when the user selects an option, dispatchOption is still passing “”

tried wrapping that selected option into useEffect and useCallback, then encountered unlimited render error:
![Untitled]![unlimitedrender](https://user-images.githubusercontent.com/98036884/207301798-b640d820-7d23-4ab3-a6b3-76d1ba8290f9.PNG)

problem 1: useReducer was always returning a brand new state!

![Untitled]![usereducer](https://user-images.githubusercontent.com/98036884/207301900-5850437d-d618-426f-8a92-debcf5b9b6de.PNG)


even if action.actionKey was equal to stateKeys[actionKey - 1], i was still returning a brand new destructured object. this changes state constantly!

Problem 2: At Option.js, i was receiving a dispatchOption function as a prop from Question.js. However, i did not wrap it with a useCallback function **AT QUESTION.JS (i wrapped it at Option.js)** before passing it into Option.js. This caused dispatchOption to constantly be recreated whenever Question.js is rendered, which caused dispatchOption to keep changing, causing infinite render error!

5. in order for routing to work when deploying to github.pages, you need to change BrowserRouter to Hashrouter (see index.js)

6. How to align paragraphs, see steps section, tablet.

- problem: As the lines for each paragraph increases, the size needed for that paragraph increases, so the corresponding gap between elements decreased. What i tried to do: set fixed height for the paragraph. However, this does not scale very well with responsiveness.
  EDIT: setted the subheader height to a fixed height (pixels), and play around with the % for the .paragraph at subscribe page.
