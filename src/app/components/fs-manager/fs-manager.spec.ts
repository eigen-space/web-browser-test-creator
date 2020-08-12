import { FsManager } from './fs-manager';

describe('FsManager', () => {
    const fsManager = new FsManager();

    describe('#readWithoutComments', () => {

        it('should return nothing because of comment and nothing more', () => {
            const actual = fsManager.readWithoutComments(`${__dirname}/spec-data/test-data-only-one-comment`);
            expect(actual).toEqual('');
        });

        it('should return the content of the file', () => {
            const actual = fsManager.readWithoutComments(`${__dirname}/spec-data/test-data-with-comments`);
            expect(actual).toEqual('192.168.0.1\n');
        });

        it('should return only useful part without comment lines', () => {
            const actual = fsManager.readWithoutComments(`${__dirname}/spec-data/test-data-without-comments`);
            expect(actual).toEqual('one\ntwo\nthree\n');
        });
    });
});
