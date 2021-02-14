import styled from 'styled-components'

/**
 * #0081a7
 * #00afb9
 * #fdfcdc
 * #fed9b7
 * #f07167
 */

export const PicComponent = styled.div<{
  filterColor?: string
  filterOpacity?: number
  blur?: string
  borderRadius?: string
}>`
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  font-size: 0;

  filter: ${(props) => (props.blur ? 'blur(' + props.blur + ')' : 'blur(0)')};
  -webkit-filter: ${(props) =>
    props.blur ? 'blur(' + props.blur + ')' : 'blur(0)'};


    img{
      border-radius: ${(props) => (props.borderRadius ? props.borderRadius : 0)};
    }

  

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: ${(props) =>
      props.filterColor ? props.filterColor : 'transparent'};
    opacity: ${(props) => props.filterOpacity};
    border-radius: ${(props) => (props.borderRadius ? props.borderRadius : 0)};
  }
`
