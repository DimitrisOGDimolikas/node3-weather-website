const request = require('postman-request')

const forecast = (lat, long, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=97ef83b09c722aed92865c1f6abc6d20&query='+ encodeURIComponent(lat) +','+ encodeURIComponent(long) +'&units=m'

    request({url, json: true},(error, {body}) => {
        if(error){
            callback('Unable to connect to weather service!', undefined)
        }else if(body.error){
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature
                     + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out. The humidity is ' + body.current.humidity + '%')
        }
    })
}

module.exports = forecast