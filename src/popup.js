import { blockScreen, unBlockScreen } from './screenblock.js';

export function makePopUp(title, blockIndex = 100) {
  blockScreen(blockIndex);
  const popBox = document.createElement('div');
  popBox.setAttribute('id', 'popUpBox');
  popBox.style.display = 'flex';
  popBox.style.flexDirection = 'column';
  popBox.style.width = '50%';
  popBox.style.height = '60%';
  popBox.style.zIndex = `${blockIndex + 1}`;

  popBox.style.top = '50%';
  popBox.style.left = '50%';
  popBox.style.marginTop = '-30vh';
  popBox.style.marginLeft = '-25vw';
  popBox.style.position = 'fixed';
  popBox.style.borderRadius = '6px';
  popBox.style.boxShadow = '5px 5px 5px rgba(0, 0, 0, 0.2), 5px -1px 5px rgba(0, 0, 0, 0.2)';
  popBox.style.boxSizing = 'border-box';
  const popUpHeader = makeBoxHeader(title);
  const popUpcontent = document.createElement('div');
  popUpcontent.style.height = '90%';
  popUpcontent.style.padding = '8px 15px 5px 15px';
  popBox.appendChild(popUpHeader);
  popBox.appendChild(popUpcontent);
  return { popBox, popUpHeader, popUpcontent };
}

function makeBoxHeader(headTitle) {
  const boxHeader = document.createElement('div');

  boxHeader.setAttribute('id', 'popUpHeader');
  boxHeader.style.height = '10%';
  boxHeader.style.display = 'flex';
  boxHeader.style.justifyContent = 'space-between';
  boxHeader.style.padding = '0px 12px 0px 12px';
  boxHeader.style.borderRadius = '6px 6px 0px 0px';
  boxHeader.style.fontWeight = 'bold';
  boxHeader.style.lineHeight = 'max(6vh, 40px)';
  boxHeader.style.fontSize = 'max(4vh, 30px)';

  const headerText = document.createElement('div');
  headerText.textContent = headTitle;
  headerText.marginRight = 'auto';

  const closeButton = document.createElement('button');
  closeButton.setAttribute('id', 'popUpClose');
  closeButton.textContent = 'X';
  closeButton.addEventListener('click', () => closePupUp());

  boxHeader.appendChild(headerText);
  boxHeader.appendChild(closeButton);
  return boxHeader;
}

export function closePupUp() {
  const popUpBox = document.getElementById('popUpBox');
  popUpBox.remove();
  unBlockScreen();
}
