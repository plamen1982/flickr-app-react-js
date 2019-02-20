import { sortArrayOfDatesByDateProp,  errorResponseHandler, fetchData} from '../helpers';
import sinon from 'sinon';

describe('helpers.js', () => {
    it('sortArrayOfDatesByDateProp(items, prop), should sort the correct data', () => {
        const testArray = [
            {title: "DSC_4513", link: "https://www.flickr.com/photos/ashsphoto/32215212437/", date_taken: "2019-02-16T19:48:21-08:00"},
            {title: "2019-02-20_08-23-49", link: "https://www.flickr.com/photos/41994643@N07/32215212777/", date_taken: "2020-02-19T10:56:45-08:00"}
        ];

        const soretedTestArray = sortArrayOfDatesByDateProp(testArray, 'date_taken');
        expect(soretedTestArray[0].date_taken).toEqual("2020-02-19T10:56:45-08:00");
        expect(soretedTestArray[1].date_taken).toEqual("2019-02-16T19:48:21-08:00");
    });

    it('errorResponseHandler(response), should return json object if the response.ok property is truthy', () => {
        const responseTest = {
            type: "cors", url: "https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1", redirected: false, status: 200, ok: true
        };
        const responseTestJson = errorResponseHandler(responseTest);
        expect(responseTestJson).toEqual(JSON.stringify(responseTest));
    });


    it('errorResponseHandler(response), should throw an error if the response.ok property is falsy value', async () => {
        const responseTest = {
            type: "cors", url: "https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1", redirected: false, status: 200, ok: false
        };

        const errorHandlerStub = sinon.stub();

        try {
            const responseTestJson = errorResponseHandler(responseTest);
            expect(responseTestJson).toEqual(JSON.stringify(responseTest));
        } catch (error) {
            errorHandlerStub();
        }
        expect(errorHandlerStub.callCount).toEqual(1)
    });

});