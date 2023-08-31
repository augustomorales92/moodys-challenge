# Moody's challenge 
## brief explanation of how I approached the challenge

Upon reviewing the Challenge, the first step I took was to examine the provided API in order to understand the data that I would be working with. Subsequently, I delved into the API documentation.

Next, I constructed the React application. I initialized the application and proceeded to implement the code, establishing the connection using fetch to observe the responses of the queries. I also analyzed the data sent in the request headers, which allowed me to formulate the necessary logic.

Following that, I defined the interfaces that would be used in the queries and in the different components.

Regarding the overall logic of the application, my focus was on avoiding lengthy queries to preserve efficiency, gradually storing the information. Since users typically do not navigate to the last pages, fetching all the data at once would have involved retrieving a significant amount of information that might not be utilized. Additionally, the API provided optimized queries to retrieve a smaller amount of data per page, which was ideal for pagination.

Concerning the design, I chose to utilize a style framework. Personally, I greatly appreciate using Material-UI (Mui) for scenarios involving tables or grids, so that's the option I went with.

Finally, I concluded by finalizing the design, carrying out refactoring and componentization to enhance code readability and cleanliness.

I provide some comments on code to explain little stuffs

## Script to run APP

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
