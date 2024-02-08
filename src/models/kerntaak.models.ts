import { model, Schema, Document } from 'mongoose';
import { Kerntaak } from '@interfaces/kerntaak.interface';
import { WerkprocesSchema } from '@models/werkproces.models';

const { UUID, String } = Schema.Types;
import { v4 as uuidv4 } from 'uuid';

export const KerntaakSchema: Schema = new Schema({
    id: {
        type: UUID,
        required: true,
        unique: true,
        default: uuidv4(),
        immutable: true
    },
    code: {
        type: String,
        required: true,
        lowercase: true
    },
    part: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    informalName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    werkprocessen: {
        type: [WerkprocesSchema],
        required: false,
    }
},
    {
        timestamps: true,
        collection: 'kerntaak'
    }
);

export const KerntaakModel = model<Kerntaak & Document>('Kerntaak', KerntaakSchema);
