import styled from 'styled-components';

export const Container = styled.div`
  justify-content: start;
  padding: 0 80px 0 60px;
  position: sticky;
  border-bottom: 1px #b9a4a4 solid;
`;

export const Logo = styled.img`
  width: 150px;
  cursor: pointer;
`;

export const List = styled.ul`
  list-style:none;
  width: 1200px;
  display:flex; 
  justify-content: space-between;
  align-items: center;
`;

export const Item = styled.li`
  :hover {
    text-decoration: underline
  };
  cursor: pointer;
`;

export const Connection = styled.span`
  :hover {
    background-color: #d3d0d0
  };
  cursor: pointer;
  padding: 8px;
  margin-left: 200px;
  border: solid;
  border-width: thin;
  display: flex;
  justify-content: flex-end;
`;