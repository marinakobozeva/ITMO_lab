const popupAnalysis = document.querySelector('.popup_analysis');
const buttonDetails = document.querySelector('.card__button');
const buttonClose = popupAnalysis.querySelector('.popup__button-close');


//функции открытия и закрытия попапов//
function openPopup(popup) {
  popup.classList.add('popup_opened');

  popup.addEventListener('click', closePopupOverlay);
  document.addEventListener('keydown', closePopupEsc);
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');

  popup.removeEventListener('click', closePopupOverlay);
  document.removeEventListener('keydown', closePopupEsc);
};


const closePopupOverlay = (evt) => {

  if ((evt.target.classList.contains('popup')) || (evt.target.classList.contains('popup__button-close'))) {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  };
};


const closePopupEsc = (evt) => {

  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  };
};

buttonDetails.addEventListener('click', () => {
  openPopup(popupAnalysis);
});
