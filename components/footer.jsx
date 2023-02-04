import { Box } from '@chakra-ui/react';


export default function Footer(props) {
    return (
        <Box
            as="footer"
            display="flex"
            alignItems="center"
            justifyContent="center"
            padding="1rem"
            borderTop="1px solid #eaeaea"
            {...props}
        >
            <p>© 2021 - <a href="https://sheki.net">Sheki</a></p>
        </Box>
    );
}