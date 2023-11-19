// @ts-nocheck

import React from 'react';
import { ChakraProvider, CSSReset, extendTheme } from '@chakra-ui/react';
import Dynamicard from '../../components/Dynamiccard';

const theme = extendTheme({
  // Add your custom theme configuration here if needed
});

function Club() {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <div style={{ display: 'flex', justifyContent: 'center', margin: 'auto' }} className="gap-8">

        <Dynamicard
         name="FC Barcelona"
         location="Barcelona, Spain"
         superfans={2369684}
         url="barcelona"
         imageUrl="https://pbs.twimg.com/media/FnHB1TtXoAU2yi5?format=jpg&name=4096x4096"
         avatarUrl="https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/380px-FC_Barcelona_%28crest%29.svg.png"
        />

        <Dynamicard
         name="Paris Saint-Germain F.C."
         location="Paris, France"
         superfans={1970574}
         url="parissaintgermain"
         imageUrl="https://pbs.twimg.com/media/Fo8_ucsWYBskJ5p?format=jpg&name=large"
         avatarUrl="https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/DTU%2C_Delhi_official_logo.png/200px-DTU%2C_Delhi_official_logo.png"
        />

        <Dynamicard
          name="Manchester City F.C."
          location="Manchester, United Kingdom"
          superfans={321309842}
          url="manchester"
          imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Harvard_Medical_School_HDR.jpg/220px-Harvard_Medical_School_HDR.jpg"
          avatarUrl="https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/1280px-Manchester_United_FC_crest.svg.png"
        />

        <Dynamicard
          name="AC Milan"
          location="Milan, Italy "
          superfans={25321382174}
          url="milan"
          imageUrl="https://cdn.vox-cdn.com/thumbor/jMf8tTxX1kDiKgZei1yrY3C99tY=/0x0:7704x3020/1820x1213/filters:focal(3206x798:4438x2030):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/72559119/1586555928.0.jpg"
          avatarUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Logo_of_AC_Milan.svg/260px-Logo_of_AC_Milan.svg.png"
        />

        {/* Add more Dynamicard components with different details here */}
      </div>
    </ChakraProvider>
  );
}

export default Club;
