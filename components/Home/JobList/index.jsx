import React from 'react';
import { JobItem } from '../JobItem/index';

export const JobList = () => {
  const coverImage =
    'https://cdn-images.welcometothejungle.com/SdhQQJLP79zqBQ5u7Wpjezw0r9Bmx_BAuoCimXKePlE/w:640/q:85/czM6Ly93dHRqLXBy/b2R1Y3Rpb24vdXBs/b2Fkcy93ZWJzaXRl/X29yZ2FuaXphdGlv/bi9jb3Zlcl9pbWFn/ZS93dHRqX2ZyL2Zy/LTE1ZTI4MTQ4LWQ0/ODItNDVlMi1hNDA3/LWQ5NDA4Y2I1OWZl/OC5qcGc';
  const companyLogo =
    'https://cdn-images.welcometothejungle.com/kB6BQTiMvs3uoKHQX1WtJQU-q4XpzHhhKNBn1v5hsh0/w:200/q:85/czM6Ly93dHRqLXBy/b2R1Y3Rpb24vdXBs/b2Fkcy9vcmdhbml6/YXRpb24vbG9nby84/NTI2LzE1NjcwNi8z/ZTIxZTRjYi1jM2M5/LTQ0NWYtODk0Yy01/NDA2MzE1NWUxZjYu/cG5n';
  const companyName = 'Les Ripeurs';
  const title = 'Product Builder';
  const contractType = 'CDI';
  const localization = 'Tourcoing';
  const publishedAt = '17/12/2021';
  return (
    <>
      <JobItem
        coverImage={coverImage}
        companyLogo={companyLogo}
        companyName={companyName}
        publishedAt={publishedAt}
        title={title}
        contractType={contractType}
        localization={localization}
      />
    </>
  );
};
