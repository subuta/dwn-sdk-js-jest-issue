import { DWN } from '@tbd54566975/dwn-sdk-js';

const main = async () => {
    console.log(`Instantiating DWN...`);
    const dwn = await DWN.create({});

    console.log(dwn)
}

main()
