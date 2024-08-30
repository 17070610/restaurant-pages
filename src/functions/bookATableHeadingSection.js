import '../styles/bookATableHeadingSectionStyles.css';
import content from "./getContent.js";

const bookATableHeaderSection = document.createElement('div');
bookATableHeaderSection.classList.add('book-a-table-heading-section');

const bookATableHeader = document.createElement('h2');
bookATableHeader.classList.add('book-a-table-heading');
bookATableHeader.textContent = "BOOK A TABLE";

bookATableHeaderSection.appendChild(bookATableHeader);

content.appendChild(bookATableHeaderSection);

export { bookATableHeaderSection };