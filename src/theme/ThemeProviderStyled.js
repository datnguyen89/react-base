import styled from 'styled-components'

export const ThemeProviderWrapper = styled.div`
  *::-webkit-scrollbar {
    background-color: ${props => props.isDarkMode ? '#000' : '#fff'};
    width: 6px;
  }

  /* background of the scrollbar except button or resizer */
  *::-webkit-scrollbar-track {
    background-color: transparent;
  }

  /* scrollbar itself */
  *::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 8px;
  }

  /* set button(top and bottom of the scrollbar) */
  *::-webkit-scrollbar-button {
    display: none;
  }
`