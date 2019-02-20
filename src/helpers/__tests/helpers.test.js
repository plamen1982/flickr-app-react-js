import { sortArrayOfDatesByDateProp,  errorResponseHandler, fetchData} from '../helpers';
import sinon from 'sinon';

describe('helpers.js', () => {
    it('sortArrayOfDatesByDateProp(items, prop), should sort the correct data', () => {
        const testArray = [
            {title: "DSC_4513", link: "https://www.flickr.com/photos/ashsphoto/32215212437/", date_taken: "2019-02-16T19:48:21-08:00"},
            {title: "2019-02-20_08-23-49", link: "https://www.flickr.com/photos/41994643@N07/32215212777/", date_taken: "2020-02-19T10:56:45-08:00"}
        ];

        const soretedTestArray = sortArrayOfDatesByDateProp(testArray, 'date_taken');
        expect(soretedTestArray[0].date_taken).toEqual("2020-02-19T10:56:45-08:00")
    });
    it('errorResponseHandler(response), should return promise if response.ok e truthy', () => {

    });
    it('fetchData(url)', () => {

    });
});