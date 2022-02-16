import dialogComponent from './demos/dialog.component';

export default {
  title: 'Example/Dialog',
};

const Template = ({ isDark }) => {

  return `<div class="${isDark ? `dark` : null }">
            <mwc-dialog id="dialog1" heading="Dialog header" open>
              Dialog body text
              <mwc-button slot="primaryAction" dialogAction="ok">Action 2</mwc-button>
              <mwc-button slot="secondaryAction" dialogAction="cancel">Action 1</mwc-button>
            </mwc-dialog>
          </div>`;
};

export const Basic = dialogComponent.bind({});
Basic.parameters = {
  docs: {
    inlineStories: false,
  },
};

export const Anatomy = Template.bind({});
Anatomy.parameters = {
  docs: {
    inlineStories: false,
  },
};