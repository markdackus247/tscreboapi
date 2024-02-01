import { model, Schema, Document } from 'mongoose';
import { Crebo } from '@interfaces/crebo.interface';
import { KerntaakSchema } from '@models/kerntaak.models';

const { UUID, String } = Schema.Types;
import { v4 as uuidv4 } from 'uuid';

export const CreboSchema: Schema = new Schema({
    id: {
        type: UUID,
        required: true,
        unique: true,
        default: uuidv4(),
        immutable: true
    },
    creboNumber: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    sbblink: {
        type: String,
        required: false,
    },
    kdpdflink: {
        type: String,
        required: false,
    },
    fileCode: {
        type: String,
        required: false,
    },
    kerntaken: {
        type: [KerntaakSchema],
        required: false,
    }
},
    {
        timestamps: true
    }
);

export const CreboModel = model<Crebo & Document>('Crebo', CreboSchema);
