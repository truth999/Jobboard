/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { Header } from '../src/components/Header/index';
import { FormContainer, InputButton, Container, Label, Input } from '../styles/CreateOfferPage';

const CreateOfferPage = () => {
  const [jobInfo, setJobInfo] = useState({});

  const handleChange = (event) => {
    setJobInfo({ ...jobInfo, [event.target.name]: event.target.value });
  };

  return (
    <>
      <Header />
      <Container>
        <FormContainer onSubmit={() => console.log('ok : ', jobInfo)}>
          <Label>
            photo de couverture :
            <Input type="text" name="coverImage" onChange={(event) => handleChange(event)} />
          </Label>
          <Label>
            Logo de l'entreprise :
            <Input type="text" name="companyLogo" onChange={(event) => handleChange(event)} />
          </Label>
          <Label>
            Nom de l'entreprise :
            <Input type="text" name="companyName" onChange={(event) => handleChange(event)} />
          </Label>
          <Label>
            Titre de l'offre :
            <Input type="text" name="title" onChange={(event) => handleChange(event)} />
          </Label>
          <Label>
            Type du contrat :
            <Input type="text" name="contractType" onChange={(event) => handleChange(event)} />
          </Label>
          <Label>
            Ville de l'entreprise :
            <Input type="text" name="localization" onChange={(event) => handleChange(event)} />
          </Label>
          <Label>
            photo de couverture:
            <Input type="text" name="coverImage" onChange={(event) => handleChange(event)} />
          </Label>
          <InputButton type="submit" value="Envoyer" />
        </FormContainer>
      </Container>
    </>
  );
};
export default CreateOfferPage;
