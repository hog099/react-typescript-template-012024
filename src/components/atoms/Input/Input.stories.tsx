import { InputComponent } from './Input';
import '@/styles/style.css';
import '@/styles/tailwind.css';

export default {
  title: 'Input Component',
  component: InputComponent,
};

const Template = (args) => <InputComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
    helperText:  null,
    label: "Endereço de email",
    name: "email",
    type: "email",
    placeholder: "Seu email",
    required: true,
    value: "email@email.com",
    onChange: ()=>null
};