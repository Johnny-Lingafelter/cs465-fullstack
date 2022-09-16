/* rooms */
const rooms = (req, res) => {
    res.render('rooms', { rooms: true, title: 'Rooms - Travlr Getaways'});
};

module.exports = {
   rooms
};