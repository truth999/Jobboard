import React from 'react';
import CreateOffer from '../src/components/CreateOffer';
import { UserProvider } from '../src/hook/context/UserProvider';
import { useRouter } from 'next/router';

const CreateOfferPage = () => {
  const router = useRouter();
  const { user } = router.query;

  return (
    <UserProvider>
      <CreateOffer user={user} />
    </UserProvider>
  );
};
export default CreateOfferPage;
