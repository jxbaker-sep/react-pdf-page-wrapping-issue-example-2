We have a PDF that consists of multiple "tables" (each "row" is its own View). Each table has a title and a row of column headers; both should repeat if the table wraps a page. That part I've got working.

Two questions:

1. [Image 1](images/react-pdf-questions-1.PNG): How do I cause the page to wrap at a certain distance from the bottom? Right now, a wrapping table's last row overlaps the page footer. We'd like to prevent that. Specifically, we'd like to cause the table to wrap on or before 30 dots (at 72dpi) of the bottom edge.
2. [Image 2](images/react-pdf-questions-2.PNG): I can't figure out how to get it so that it does not show the table title and header columns unless it can also show at least one row of content. That is, it should never show just the table title and header columns as the last content on the page.

The code that generates the table is located [here](src/pdf/MyPage/MyTable.tsx)

To run locally:
 * Clone repo
 * `npm ci`
 * `npm start`
 * Navigate to http://localhost:3000

