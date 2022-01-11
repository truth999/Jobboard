import styled from 'styled-components';

export const Container = styled.div`
  border: #c4c4c4 solid;
  border-width: thin;
  width: 600px;
  display: flex;
  margin: 30px;
`;

export const Picture = styled.img`
  width: 200px;
`;

export const CompanyLogo = styled.img`
  width: 65px;
  border: #e4e3e3 solid;
  border-width: thin;
  position: absolute;
  margin: 35px 0 0 165px;
`;

export const Informations = styled.div`
  display: block;
  flex-direction: column;
  padding-left: 50px;
`;

export const List = styled.ul`
  width: 250px;
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`;
