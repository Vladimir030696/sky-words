import styled from 'styled-components';


const CardContainer = styled.div`
  .cards__card {
    background: ${props => props.color}; 
  }

  .card__title {
    color: black;
  }
`;
export default CardContainer