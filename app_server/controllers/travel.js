//var fs = require('fs');
//var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
};

/* travel
const travel = (req, res) => {
    res.render('travel', { travel: true, title: 'Travel - Travlr Getaways', trips });
}; */

const travelList = (req, res) => {
    const path = '/api/trips';
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {}
    };

    console.info('>> travelController.travelList calling ' + requestOptions.url);

    request(
        requestOptions,
        (err, statusCode, body) => {
            if (err) {
                console.error(err);
            }
            renderTravelList(req, res, body);
        }
    );

};

const renderTravelList = (req, res, responseBody) => {
    let message = null;
    let pageTitle = 'Travel - Travlr Getaways';

    if (!(responseBody instanceof Array)) {
        message = 'API lookup error';
        responseBody = [];
    } else {
        if (!responseBody.length) {
            message = 'No trips exist in the database.';
        }
    }
    //console.info('responseBody: ' + responseBody + ' message: ' + message);

    res.render('travel', {
        title: pageTitle,
        trips: responseBody,
        travel: true,
        message
    });
}

module.exports = {
    travelList,
    renderTravelList
};