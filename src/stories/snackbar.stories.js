import '@material/mwc-snackbar';
import '@material/mwc-button';
import '@material/mwc-icon-button';

export default {
  title: 'Example/Snackbar',
  argTypes: {
    stacked:  {
      control: 'boolean',
      defaultValue: false,
    },
    leading:  {
      control: 'boolean',
      defaultValue: false,
    },
    label:  {
      control: 'text',
      defaultValue: 'Can\'t send photo. Retry in 5 seconds.',
    },
  }
};

const Template = ({ label, leading, stacked, }) => {
  let snackbar = undefined;

  document.addEventListener('DOMContentLoaded', () => {
    const snackbar = document.querySelector('mwc-snackbar');
    const snackbarTarget = document.querySelector('.show-snackbar-button');

    snackbarTarget.addEventListener('click', ( ) => {
      return snackbar.open ? snackbar.close() : snackbar.show();
    });
  }, { once : true });


    return `
    <mwc-button class="show-snackbar-button">Toggle Snackbar</mwc-button>
    <mwc-snackbar
       labelText="${label}"
       ${leading ? 'leading' : null }
       ${stacked ? 'stacked' : null }>
      <mwc-button slot="action">RETRY</mwc-button>
      <mwc-icon-button icon="close" slot="dismiss"></mwc-icon-button>
    </mwc-snackbar>`;
};

export const Basic = Template.bind({});
Basic.args = {
}
