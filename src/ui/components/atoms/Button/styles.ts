import styled from 'styled-components'
import T from 'ui/theme'

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  border-radius: ${T.borderRadius.sm};
  cursor: pointer;
  font-size: ${T.fonts.sizes.xs};
  font-weight: ${T.fonts.weights.medium};
  padding: ${T.spacings.xs} ${T.spacings.xxl};
  color: ${T.colors.white};
  background-color: ${T.colors.tertiary};
  transition: background-color 0.15s ease-in-out;

  &:hover {
    background-color: ${T.colors.tertiaryHover};
  }

  &:focus {
    ${T.states.focus};
  }
`
