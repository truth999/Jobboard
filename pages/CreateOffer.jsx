import React from 'react';
import CreateOffer from '../src/components/CreateOffer';
import { UserProvider } from '../src/hook/context/UserProvider';

const CreateOfferPage = () => {
  return (
    <UserProvider>
      <CreateOffer />
    </UserProvider>
  );
};
export default CreateOfferPage;
