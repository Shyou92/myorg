import { moduleMetadata } from '@storybook/angular';

import { ButtonDirective } from './impl';
import { ButtonDirectiveTestingModule } from './testing';

const buttonTypeOptions = [
  'Primary',
  'Secondary-md',
  "Secondary-sm"
];

export default {
  title: 'Shared/UI/Button',
  decorators: [
    moduleMetadata({
      imports: [ButtonDirectiveTestingModule],
    }),
  ],
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: buttonTypeOptions,
      },
      defaultValue: buttonTypeOptions[0],
    },
  },
};

const Template = (
  args: ButtonDirective,
  { loaded }: { loaded: Record<string, unknown> }
) => ({
  props: { ...args, ...loaded },
  template: `
    <button *ngIf="type === 'Primary'" myorg-button-primary>Default Button</button>
    <button *ngIf="type === 'Secondary-md'" myorg-button-secondary-md>Md Button</button>
    <button *ngIf="type === 'Secondary-sm'" myorg-button-secondary-sm>Sm Button</button>
  `,
});

export const Default = Template.bind({});
