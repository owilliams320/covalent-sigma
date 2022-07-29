export default {
  title: 'Components/Status Header',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    title: {
      control: 'text',
      defaultValue: 'Title of status header',
    },
    state: {
      options: ['active', 'caution', 'error', 'positive', 'paused', 'pending'],
      control: { type: 'select' },
      defaultValue: 'paused',
    },
    status: {
      control: 'text',
      defaultValue: 'This is a status',
    },
  },
};

export const Neutral = ({ state, status, title }) => {
  return `
    <td-status-header state="${state}" statusText="${status}" titleText="${title}">
      <status-header-slot slot="status-header-text">[Insert Slot Text Here]</status-header-slot>
    </td-status-header>`;
};

export const HeaderWithTabs = ({ state, status, title }) => {
  return `
    <td-status-header state="${state}" statusText="${status}" titleText="${title}">
      <status-header-slot slot="status-header-text">
        Property&nbsp;&nbsp;&nbsp;Value<br>
        Property&nbsp;&nbsp;&nbsp;Value<br>
        Property&nbsp;&nbsp;&nbsp;Value<br>
        Property&nbsp;&nbsp;&nbsp;Value<br>
        Property&nbsp;&nbsp;&nbsp;Value<br>
        Property&nbsp;&nbsp;&nbsp;Value<br>
        Property&nbsp;&nbsp;&nbsp;Value<br>
        Property&nbsp;&nbsp;&nbsp;Value<br>
        Property&nbsp;&nbsp;&nbsp;Value<br>
        Property&nbsp;&nbsp;&nbsp;Value<br>
      </status-header-slot>
      <td-tab-bar slot="td-tab-bar" activeIndex="0" id="tabs">
        <td-tab null
                label="Tab one">
        </td-tab>
        <td-tab null
                label="Tab two">
        </td-tab>
        <td-tab null
                label="Tab three">
        </td-tab>
      </td-tab-bar>
    </td-status-header>`;
};

export const Active = Neutral.bind({});
Active.args = {
  state: 'active',
  status: 'Running',
  title: 'Active',
};
export const Caution = Neutral.bind({});
Caution.args = {
  state: 'caution',
  status: 'Caution',
  title: 'Caution',
};
export const Error = HeaderWithTabs.bind({});
Error.args = {
  state: 'error',
  status: 'Error',
  title: 'Error',
};
export const Positive = Neutral.bind({});
Positive.args = {
  state: 'positive',
  status: 'Positive',
  title: 'Positive',
};
export const Paused = Neutral.bind({});
Paused.args = {
  state: 'paused',
  status: 'Paused',
  title: 'Paused',
};
export const Pending = Neutral.bind({});
Pending.args = {
  state: 'pending',
  status: 'Pending',
  title: 'Pending',
};
