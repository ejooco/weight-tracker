const mongoose = require('mongoose');
// mongoose-double required to use type: double for decimal weight values
require('mongoose-double')(mongoose);

// SchemaTypes is how we access the Double
const SchemaTypes = mongoose.Schema.Types;
const Schema = mongoose.Schema;

const entrySchema = new Schema({
    weight: {type: SchemaTypes.Double, required: true},
    date: {type: Date, required: true}
}, {
    timestamps: true,
});

const Entry = mongoose.model('Entry', entrySchema);

module.exports = Entry;