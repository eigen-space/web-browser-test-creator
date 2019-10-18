import { Normalizer } from './normalizer';

describe('Normalizer', () => {
    const normalizer = new Normalizer();

    describe('#normalizeTitle', () => {

        it('should correctly convert the file name into a title', () => {
            expect(normalizer.normalizeTitle('file-name.json')).toEqual('File name');
        });
    });

    describe('#normalizeSpecFileName', () => {
        it('should get the file name from the suite name', () => {
            expect(normalizer.normalizeSpecFileName('file name')).toEqual(`file-name.${Normalizer.BASE_SPEC_NAME}`);
        });
    });
});