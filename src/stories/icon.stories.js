import { withDesign } from 'storybook-addon-designs'
import '@material/mwc-icon';
import iconList from '../assets/codepoints.json';

const MAT_ICON_LIST = Object.keys(iconList);

const TD_ICON_LIST = [
  'cluster_analysis',
  'data_preparation',
  'data_sources',
  'loader-dots',
  'machine_learning',
  'node_branch',
  'node_merge',
  'operators_equals',
  'operators_greater_than_or_equal',
  'operators_less_than_or_equal',
  'operators_multiply',
  'operators_not_equal',
  'operators_subtract',
  'outbound_campaign_manager',
  'script_macro_ondark',
  'script_macro',
  'script_sql_ondark',
  'script_sql',
  'script_stored_procedure_ondark',
  'script_stored_procedure',
  'variable_ondark',
  'variable',
  'view_sankey',
  'workflow',
];

export default {
  title: 'Example/Icon',
  argTypes: {
    // icon:  {
    //     options: TD_ICON_LIST,
    //     control: { type: 'select' },
    // },
    onClick: { action: 'onClick'}
  },
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/aDX2Rc1OIJ9tWgMcAvKRXv/Section?node-id=22%3A1453',
    },
  }
};

const Template = ({ showTdIcons = false }) => {
  const container = document.createElement('div');
  const iconList = showTdIcons ? TD_ICON_LIST : MAT_ICON_LIST;

  iconList.forEach((icon) => {
      const icoElem = document.createElement('mwc-icon');
      icoElem.innerText = icon;
      icoElem.style.padding = `8px`;
      
      if (showTdIcons) {
        icoElem.className = 'teradata-icon';
      }
      
      container.appendChild(icoElem);
  });

  return container;
};

export const MaterialIcons = Template.bind({});

export const TeradataIcons = Template.bind({});
TeradataIcons.args = { 
  showTdIcons: true
};