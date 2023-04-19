import Section from '../components/Section.js';
import DefaultCard from '../components/DefaultCard.js';
import HorizontalCard from '../components/HorizontalCard.js';
import {
  defaultCardButton,
  horizontalCardButton,
  cardListSelector,
  items,
  filterButtons,
  filterListSelector,
  filterButtonTemplate
} from '../utils/constants.js';
import FilterButton from '../components/FilterButton.js'


const filterList = new Section ({
    data: filterButtons,
    renderer: (item) => {
      const filterButton = new FilterButton(
        { data: item },
        filterButtonTemplate
      );

      const filterButtonElement = filterButton.generateButton();

      filterList.setItem(filterButtonElement);
    }
  },
  filterListSelector
);

const filterButton = new FilterButton({
    data: items,
    handleButtonClick: (isGrid) => {
      if (isGrid) {
        defaultCardList.clear();
        defaultCardList.renderItems()
      } else {
        horizontalCardList.clear();
        horizontalCardList.renderItems()
      }
    }
  },
  filterButtonTemplate
);

const defaultCardList = new Section({
  data: items,
  renderer: (item) => {
    const card = new DefaultCard(item, '.default-card');
    const cardElement = card.generateCard();
    defaultCardList.setItem(cardElement);
  }
}, cardListSelector);

const horizontalCardList = new Section({
  data: items,
  renderer: (item) => {
    const card = new HorizontalCard(item, '.horizontal-card');
    const cardElement = card.generateCard();
    horizontalCardList.setItem(cardElement);
  }
}, cardListSelector);


defaultCardList.renderItems();
filterList.renderItems();
