import '@material/mwc-checkbox';
import '@material/mwc-formfield';

import * as typographyContent from './demos/typography.content.html';
import * as loremIpsumContent from './demos/lorem-ipsum.content.html';
import * as tableProgressContent from './demos/table-progress-indicator.content.html';

export default {
  title: 'Example/Skeleton',
};

const skeletonClsName = 'skeleton-text';
const skeletonEffect = 'skeleton-effect-fade';

export const DataTable = ({}) => {

  const container = document.createElement('div');
  container.innerHTML = tableProgressContent;

  const tableCell = container.getElementsByClassName('mdc-data-table__cell');
  tableCell.forEach((cell) => {
    cell.classList.add(skeletonClsName);
    cell.classList.add(skeletonEffect);
  });

  return container;
};

export const Typography = ({}) => {

  const container = document.createElement('div');
  container.classList.add(skeletonClsName);
  container.classList.add(skeletonEffect);
  container.innerHTML = typographyContent;

  return container;
};


export const Content = ({}) => {

  const container = document.createElement('div');
  container.classList.add(skeletonClsName);
  container.classList.add(skeletonEffect);
  container.innerHTML = loremIpsumContent;

  return container;
};

export const Checkbox = ({ label = 'Bananas', indeterminate }) => {

  const container = document.createElement('div');
  container.innerHTML = `
      <style>
          mwc-formfield {
              display: block;
          }
          .child {
              margin-left: 20px;
          }
      </style>
      <mwc-formfield label="${label}">
          <mwc-checkbox ${indeterminate ? `indeterminate` : null }></mwc-checkbox>
      </mwc-formfield>
      
      <mwc-formfield label="${label}">
          <mwc-checkbox class="child"></mwc-checkbox>
      </mwc-formfield>
      
      <mwc-formfield label="${label}">
          <mwc-checkbox class="child" checked></mwc-checkbox>
      </mwc-formfield>`;

  const labels = container.getElementsByTagName('mwc-formfield');
  labels.forEach((label) => {
    label.classList.add(skeletonClsName);
    label.classList.add(skeletonEffect);
  });  

  return container;
    
};
