import { Normalizer } from './normalizer';

describe('Normalizer', () => {
    const normalizer = new Normalizer();

    describe('#normalizeTitle', () => {

        it('should correctly convert the file name into a title', () => {
            expect(normalizer.normalizeTitle('file-name.json')).toEqual('File name');
        });
    });

    describe('#normalizeSpecFileName', () => {
        it('should from the name suit get the file name', () => {
            expect(normalizer.normalizeSpecFileName('file name')).toEqual('file-name.spec.ts');
        });
    });
});