const GREETING =
    'HeLlo My name is Andres and i have made een actions with github successfully';

module.exports = async (req, res) => {
    res.send({
        greeting: GREETING,
    });
};
