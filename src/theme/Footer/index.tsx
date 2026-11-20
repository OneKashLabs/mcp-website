import type {ReactNode} from 'react';
import Footer from '@theme-original/Footer';
import type FooterType from '@theme/Footer';
import type {WrapperProps} from '@docusaurus/types';
import MoreApps from '@site/src/components/MoreApps';

type Props = WrapperProps<typeof FooterType>;

/** Puts the other OneKash Labs apps above the footer. */
export default function FooterWrapper(props: Props): ReactNode {
  return (
    <>
      <MoreApps current="mcp" />
      <Footer {...props} />
    </>
  );
}
