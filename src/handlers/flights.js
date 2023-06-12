const {sequelize, queryTypes} = require('../external/postgres');
const Validator = require('fastest-validator');
const v = new Validator;

module.exports = {
    oneWay: async (req, res) => {
        try {
            const rules = {
                origin_airport: 'string|min:3|max:3',
                destination_airport: 'string|min:3|max:3',
                flight_date: 'string',
            };

            const validateError = v.validate(req.body, rules);
            if (validateError.length) {
                return res.status(400).json({
                    status: true,
                    message: 'Bad Request',
                    err: validateError,
                    data: null
                });
            }

            const originAirport = req.body.origin_airport;
            const destinationAirport = req.body.destination_airport;
            const query = `
                select
                    flights.flight_number,
                    flights.departure_airport_id,
                    flights.airplane_id,
                    flights.airline_id,
                    flights.arrival_airport_id,
                    flights.class,
                    flights.price,
                    flights.departure_terminal_name,
                    flights.arrival_terminal_name,
                    flights.flight_date,
                    flights.departure_time,
                    flights.arrival_time,
                    flights.flight_duration,
                    flights.departure_timestamp,
                    flights.arrival_timestamp,
                    flights.free_baggage,
                    flights.cabin_baggage,
                    flights.capacity
                from
                    flights
                    inner join airports as departure_airport on departure_airport.id = flights.departure_airport_id
                    inner join airports as arrival_airport on arrival_airport.id = flights.arrival_airport_id
                    inner join airplanes on airplanes.id = flights.airplane_id
                    inner join airlines on airlines.id = flights.airline_id
                where
                    flights.flight_date = '2023-11-11'
                    and departure_airport.iata_code = '${originAirport}'
                    and arrival_airport.iata_code = '${destinationAirport}'`;

            const results = await sequelize.query(query, {type: queryTypes.SELECT});
            const filghts = results.map(result => {
                return result;
            });

            return res.status(200).json({
                status: true,
                message: 'OK',
                err: null,
                data: filghts
            });
        } catch (err) {
            throw err;
        }
    }
};