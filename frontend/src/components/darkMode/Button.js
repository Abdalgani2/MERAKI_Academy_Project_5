import styled from 'styled-components';
import style from 'styled-theming';

const getBackground = style.variants('mode', 'variant', {
  normal: {
    light: '#EEE',
    dark: '#EEE'
  },
  primary: {
    light: 'papayawhip',
    dark: 'pink'
  }
});

const Button = styled.button`
  background-color: ${getBackground};
`;

export default Button;