import mongoose from "mongoose";

const trainingSourceSchema = new mongoose.Schema({
    userid: {
        type: String,
        required: true
    },
    chatbot_id: {
        type: String,
        required: true
    },
    source_url: {
        type: String,
        required: true
    },
    file_name: {
        type: String,
        required: true
    },
    file_size: {
        type: String,
        required: true
    },

    isTrained: {
        type: Boolean,
        required: true
    }
});

// Use the existing model if it exists, or create a new one if it doesn't
const TrainingSource = mongoose.models.TrainingSource || mongoose.model('TrainingSource', trainingSourceSchema);

export default TrainingSource;
