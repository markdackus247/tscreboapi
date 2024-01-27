import { model, Schema, Document } from 'mongoose';
import { Werkproces } from '@/interfaces/werkproces.interface';

const { UUID, String } = Schema.Types;
import { v4 as uuidv4 } from 'uuid';

const WerkprocesSchema: Schema = new Schema({
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
    outcome: {
        type: String,
        required: false,
    },
    behaviour: {
        type: String,
        required: false,
    },
},
{
    timestamps: true
}
);

export const WerkprocesModel = model<Werkproces & Document>('Werkproces', WerkprocesSchema);
