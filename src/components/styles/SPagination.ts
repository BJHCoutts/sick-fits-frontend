import styled from 'styled-components';

const SPagination = styled.div`
  text-align: center;
  display: grid;
  width: fit-content;
  grid-template-columns: repeat(4, auto);
  align-items: stretch;
  justify-content: center;
  align-content: center;
  border: 1px solid var(--lightGray);
  border-radius: 10px;
  margin: 2rem auto 3rem;
  & > * {
    margin: 0;
    padding: 15px 30px;
    border-right: 1px solid var(--lightGray);
    &:last-child {
      border-right: 0;
    }
  }
  a[aria-disabled='true'] {
    color: grey;
    pointer-events: none;
  }
`;

export default SPagination;
