import { PropsWithChildren } from 'react';

import { PageContainer, PageContent } from 'src/lib/base/Styled/Containers';

const Page = (props: PropsWithChildren) => {
  const { children } = props;
  return (
    <PageContainer>
      <PageContent>{children}</PageContent>
    </PageContainer>
  );
};

export default Page;
