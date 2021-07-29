import { Normalize } from 'styled-normalize';

import Header from './Header';
import GlobalStyles from './styles/GlobalStyles';
import Typography from './styles/Typography';

const Page = ({ children: any }) => (
    <div>
        <Normalize />
        <GlobalStyles />
        <Typography />
        <Header />
        {children}
    </div>
);

export default Page;
