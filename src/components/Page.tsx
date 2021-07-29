import { Normalize } from 'styled-normalize';

import Header from './Header';
import GlobalStyles from './styles/GlobalStyles';
import Typography from './styles/Typography';

interface PageProps {
    children: any;
}

const Page: React.FC<PageProps> = ({ children }) => (
    <div>
        <Normalize />
        <GlobalStyles />
        <Typography />
        <Header />
        {children}
    </div>
);

export default Page;
