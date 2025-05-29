const GREETING = 'HeLlo My name is Andres , 5 First CI-CD pipeline :) :)!';

module.exports = async (req, res) => {
    res.send({
        greeting: GREETING,
    });
};
