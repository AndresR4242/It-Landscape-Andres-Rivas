const GREETING = 'HeLlo My name is Andres , 4 First CI-CD pipeline :) :)!';

module.exports = async (req, res) => {
    res.send({
        greeting: GREETING,
    });
};
