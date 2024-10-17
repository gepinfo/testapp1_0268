
import * as mongoose from 'mongoose';


const Schema = mongoose.Schema;

export const entity2Schema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   empid: { type: Number },
   empname: { type: String },
   empage: { type: Number },
   empstatus: { type: String }
})

const entity2Model = mongoose.model('entity2', entity2Schema, 'entity2');
export default entity2Model;
