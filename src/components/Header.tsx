import Link from 'next/link';
import styled from 'styled-components';

const HeaderStyles = styled.header`
    position: absolute;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid black;
    padding: 2rem;
    h1 {
        cursor: pointer;
    }
`;

const Header = () => (
    <HeaderStyles>
        <Link href="/" passHref>
            <h1>Notion API</h1>
        </Link>
    </HeaderStyles>
);

export default Header;
