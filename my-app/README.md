What i learnt:

1. interesting warning. image.png
   so i set keys to be equal to a numbering i wanted to output (at step for how it works, so key=01 and then i wanted step to be 01. got this warning). it seems that key is a special prop that cannot be destructured

query:

1. so i was trying to export a modal into Navbar.js. i exported it as default with the name of NavModal, as seen in https://ibb.co/Sy491pG

At Modal.js however, i accidentally imported it as Modal, as seen in https://ibb.co/yfSqv0p. My question is why is that working, even though i did not import it as NavModal? Thank you!

2. What i intended to do: https://ibb.co/z53BPBQ - i wanted to output 3 of those blue components.

Hence, i decided to store all the relevant props in an articles array - https://ibb.co/jGN6v8Q, then map it out to display those 3 components.

Because i wanted to render different svgs per article, i had to pass them as a prop. However, those svgs ended as a string.

what i did: i used dompurify and setdangerouslyhtml as seen in https://ibb.co/WK6TsVw, then passed icon into the article component, as seen in https://ibb.co/WtGbZ8k

was wondering if there was a better way to approach this? thank you!
