# frontend-mentor-coffee-roaster-site
- Multi-page Website for me to practice using React Router as well as other hooks such as useContext, useCallBack, etc. Had some fun with making my own custom hooks too!
- Deployed Site Link: https://spiritoftime.github.io/frontend-mentor-coffee/
- Technologies Used - HTML, CSS, React, React Router

## Some Challenges I faced along the way:



1. so i was trying to export a modal into Navbar.js. i exported it as default with the name of NavModal, as seen in [!image](https://ibb.co/Sy491pG)
At Modal.js however, i accidentally imported it as Modal, as seen in [!image](https://ibb.co/yfSqv0p). My question is why is that working, even though i did not import it as NavModal? Thank you! EDIT: default exports can only have 1 export. Hence, the name does not really matter, you will still be able to import the same thing regardless of the naming.

2. What i intended to do: [!image](https://ibb.co/z53BPBQ) - i wanted to output 3 of those blue components.
Hence, i decided to store all the relevant props in an articles array - [!image](https://ibb.co/jGN6v8Q), then map it out to display those 3 components.

Explanation:
Default exports don't preserve names.

You can have only one default export per file. So whenever you import a default export it is essentially importing that object with a new name defined in the import statement.

An easy way of understanding it is by thinking of the

import XYZ from ./Modal

line as

import whatever is the default export of ./Modal and call it XYZ



3. Because i wanted to render different svgs per article, i had to pass them as a prop. However, those svgs ended as a string.

what i did: i used dompurify and setdangerouslyhtml as seen in [!image](https://ibb.co/WK6TsVw), then passed icon into the article component, as seen in [!image](https://ibb.co/WtGbZ8k)
In the end, I realised that whole svg elements can be passed as props without having to convert them to string. However, I left the code this way since I had did such an interesting workaround.
