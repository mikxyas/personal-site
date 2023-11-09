---
title: "This is just a sample"
subtitle: "Something that I have created just to test out and quickly role out my website"
date: "2023-10-22"
---
# BookNote
### The Inspiration
BookNote is a web app I built to track books in a "messaging app" type interface, similar to Telegram's Saved Messages feature. I really enjoy using Telegram's Saved Messages to take notes and thought it would be great to organize my book notes with a similar UI. I believe this kind of UI is superior to traditional note-taking apps because it's intuitive, familiar, and extremely quick for jotting down ideas or insights from reading.

### Backend Architecture
For the backend, I decided to model it after Notion's architecture as described in their article about their data model. This architecture uses a linked node structure, which I was already familiar with from CS50's linked lists module. I built the backend using Flask because I enjoyed working with it in the CS50 courses.
The hierarchical backend architecture is:
- `User`
- `Library`
- `Block`
    - The Block model is linked to 4 other models:
        - `Shelf`
        - `Book`
        - `Chapter`
        - `Note`
    - The Block has a type attribute that determines which of the linked models it connects to. For example, if the Block type is a shelf, it will link to the Shelf model and can be accessed with `block.shelf`.
- This linked structure allows flexibility in organizing and displaying different hierarchies of information.

### Frontend Design
For the frontend, I wanted to accurately recreate the Telegram "messages" UI for an intuitive, familiar interface. I also aimed for a simple, minimal design without unnecessary markup that would only complicate things.
### My goals for the UI:
- Categorize books into shelves and chapters
 - Display actual book covers
    - I didn't like the fact that some other book logging apps didn't display the cover of books or made you upload your own
 - Use an Aqua-inspired retro theme reminiscent of early Apple designs
    - The one that Steve Jobs famously said, looked so good that you would want to lick it 
 - After multiple iterations in Figma to refine the UI and remove anything extraneous, I ended up with a design I'm thrilled with. It aligns with Dieter Rams's 10 principles of good design.

### Frontend Implementation
The frontend uses Next.js, which I chose for its fast performance, component-based structure, and easy deployment. Since it builds on React, it's able to take advantage of optimized React rendering. I found it straightforward to connect the Next.js frontend to my Flask backend.

### Future Plans
While the initial web app meets my goals, there is still room to expand:
- Build mobile apps for iOS and Android to leverage the messaging UI fully
- Incorporate AI features like smart recommendations and summaries
- Add social functionality to connect with other users

### Key Challenges
The main technical hurdle was handling the linked node data from the backend and mapping it to components in the frontend. My initial approach led to very complicated code.
The solution was to fully embrace React's component model. By handling the data fetching and processing at the component level, I was able to greatly simplify the logic. This project helped me realize the importance of proper separation of concerns when working with linked data in React.
### My philosophy when making the project
For the frontend my philosophy was to quickly iterate by removing the unnecessary things. That was the key for me, to not waste time on useless features. As Steve Jobs said saying no is the most important thing in design and development. But I wish I took the same attitude because I spent too much time working on useless features for the backend. I have commented out so many functions that took hours to write. It turns out simple is better and also applies to the backend as well. This is very significant because working on this project changed my attitude. Anything is possible if it is made simple and you have a careful and definitive plan. 