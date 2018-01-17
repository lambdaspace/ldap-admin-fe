import fgInput from './components/UIComponents/Inputs/formGroupInput';
import DropDown from './components/UIComponents/Dropdown';

/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const GlobalComponents = {
  install(Vue) {
    Vue.component('fg-input', fgInput);
    Vue.component('drop-down', DropDown);
  },
};

export default GlobalComponents;
