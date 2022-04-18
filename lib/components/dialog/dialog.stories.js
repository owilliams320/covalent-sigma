import dialogComponent from '../../../stories/demos/dialog.component';

export default {
  title: 'Components/Dialog',
  properties: {
    darkMode: {current: 'dark', stylePreview: true}

  }
};

const Template = ({ isDark }) => {

  return `<div class="${isDark ? `dark` : null }">
            <mwc-dialog id="dialog1" heading="Dialog header" scrimClickAction="" open>
              Dialog body text
              <mwc-button slot="primaryAction">Action 2</mwc-button>
              <mwc-button slot="secondaryAction">Action 1</mwc-button>
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

const templateLogout = ({}) => {

  return `<mwc-dialog id="example-logout" heading="You will be logged out soon" scrimClickAction="" open>
            Due to inactivity, you’ll be logged out in 3 minutes to protect your security.
            <mwc-button slot="primaryAction">Log out</mwc-button>
            <mwc-button slot="secondaryAction">Stay logged in</mwc-button>
          </mwc-dialog>`;
};

export const Logout = templateLogout.bind({});
Logout.parameters = {
  docs: {
    inlineStories: false,
  },
};

const templateUDF = ({}) => {

  return `<style>
              mwc-formfield {
                  margin-left: -.75rem;
              }
              .key-value {
                margin-bottom: .5rem;
                margin-top: .5rem;
              }
              .key-value--key {
                color: --mdc-theme-text-secondary-on-background;
              }
          </style>
          <mwc-dialog id="example-udf" heading="Delete User Defined Function" scrimClickAction="" open>
            
            <div class="key-value">
              <div class="key-value--key mdc-typography--caption">Function to delete</div>
              <div class="key-value--value">UDF_StrCpy</div>
            </div>
            <mwc-formfield label="I understand that all queries currently using this UDF will be canceled">
              <mwc-checkbox class="child"></mwc-checkbox>
            </mwc-formfield>
            <mwc-button slot="primaryAction" class="destructive primary" disabled>Delete</mwc-button>
            <mwc-button slot="secondaryAction">Cancel</mwc-button>
          </mwc-dialog>`;
};

export const UDF = templateUDF.bind({});
UDF.parameters = {
  docs: {
    inlineStories: false,
  },
};