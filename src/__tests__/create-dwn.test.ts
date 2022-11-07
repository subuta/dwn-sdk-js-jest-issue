import { expect, it } from '@jest/globals';

import { Dwn } from '@tbd54566975/dwn-sdk-js';

it('should assert truth', async () => {
    const dwn = await Dwn.create({});

    console.log(dwn)

    expect(true).toEqual(true);
});
