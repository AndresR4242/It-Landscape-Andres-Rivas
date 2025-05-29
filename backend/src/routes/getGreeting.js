const GREETING = 'HeLlo , 2 First CI-CD pipeline :) :)!';

module.exports = async (req, res) => {
    res.send({
        greeting: GREETING,
    });
};
