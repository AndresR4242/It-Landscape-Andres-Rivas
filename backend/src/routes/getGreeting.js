const GREETING = 'HeLlo , CI-CD pipeline!';

module.exports = async (req, res) => {
    res.send({
        greeting: GREETING,
    });
};
