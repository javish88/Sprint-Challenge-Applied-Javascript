// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const headerContainer = document.querySelector('.header-container')

headerContainer.appendChild(Header());

function Header() {
    const newHeader = document.createElement('div'),
          newSpan = document.createElement('span'),
          newHeaderHOne = document.createElement('h1'),
          newSpanTwo = document.createElement('span');
          
    newHeader.classList.add('header')
    newSpan.classList.add('date')
    newSpanTwo.classList.add('temp')

    newHeader.appendChild(newSpan)
    newHeader.appendChild(newHeaderHOne)
    newHeader.appendChild(newSpanTwo)

    newSpan.textContent = 'November 1, 2019';
    newHeaderHOne.textContent = 'Lambda Times'
    newSpanTwo.textContent = 'New Jersey 51 \u00b0'

    return newHeader;       
}