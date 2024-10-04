import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { HomeComponent } from './home.component';
import { ActivatedRoute } from '@angular/router';

const meta: Meta<HomeComponent> = {
  component: HomeComponent,
  title: 'HomeComponent',
  decorators: [
    moduleMetadata({
      providers: [{ provide: ActivatedRoute, useValue: {} }],
    }),
  ],
};
export default meta;
type Story = StoryObj<HomeComponent>;

export const Primary: Story = {
  args: {},
};
