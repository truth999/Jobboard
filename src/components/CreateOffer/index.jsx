/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useState } from 'react';
import { Header } from '../Header';
import { FormContainer, InputButton, Container, Label, Input } from './style';
import { v4 as uuidv4 } from 'uuid';
import { useMutation } from '@apollo/client';
import { CREATE_JOB } from '../../lib/graphql/mutation';
import Link from 'next/link';
import { format } from 'date-fns';
import { UserContext } from '../../hook/context/UserProvider';

const CreateOffer = () => {
  const { isConnected } = useContext(UserContext);
  const [createJob, { data, loading, error }] = useMutation(CREATE_JOB);

  const today = new Date();
  const todayFormated = format(today, 'dd MMM. yyyy');
  const [jobInfo, setJobInfo] = useState({ id: uuidv4(), publishedAt: todayFormated.toString() });

  const handleChange = (e) => {
    setJobInfo({ ...jobInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createJob({
      variables: {
        data: {
          id: jobInfo.id,
          publishedAt: jobInfo.publishedAt,
          coverImage: jobInfo.coverImage,
          companyLogo: jobInfo.companyLogo,
          title: jobInfo.title,
          companyName: jobInfo.companyName,
          contractType: jobInfo.contractType,
          localization: jobInfo.localization,
        },
      },
    });
  };

  if (loading) return 'Posting, wait!';
  if (error) return `Posting error: ${error.message}`;
  // if (!isConnected) return 'you are not connected.';

  return (
    <>
      <Header />
      <Container>
        <FormContainer onSubmit={(e) => handleSubmit(e)}>
          <Label>
            photo de couverture :
            <Input type="text" name="coverImage" onChange={(e) => handleChange(e)} />
          </Label>
          <Label>
            Logo de l'entreprise :
            <Input type="text" name="companyLogo" onChange={(e) => handleChange(e)} />
          </Label>
          <Label>
            Nom de l'entreprise :
            <Input type="text" name="companyName" onChange={(e) => handleChange(e)} />
          </Label>
          <Label>
            Titre de l'offre :
            <Input type="text" name="title" onChange={(e) => handleChange(e)} />
          </Label>
          <Label>
            Type du contrat :
            <Input type="text" name="contractType" onChange={(e) => handleChange(e)} />
          </Label>
          <Label>
            Ville de l'entreprise :
            <Input type="text" name="localization" onChange={(e) => handleChange(e)} />
          </Label>
          <Link href={'/'}>
            <InputButton type="submit" value="Envoyer" />
          </Link>
        </FormContainer>
      </Container>
    </>
  );
};
export default CreateOffer;
