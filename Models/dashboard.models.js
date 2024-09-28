import mongoose from 'mongoose'


// Subscription Schema for the user

const Subscriptions = new mongoose.Schema({
    userid: {
        type: String,
        required: true,

    },
    type: {
        type: String,
        required: true
    },
    validity: {
        type: Date,
        required: true
    },
    no_of_chatbots: {
        type: Number,
        required: true
    },


})

// ChatBots Schema for the user

const ChatBots = new mongoose.Schema({
    userid: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        default: 'free'
    }
    ,
    chatbot_name: {
        type: String,
        required: true
    },

}, {
    timestamps: true
});

// Data storage schema for the user

const Data = new mongoose.Schema({
    userid: {
        type: String,
        required: true
    },
    chatbot_id: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    embedding: {
        type: Array,
        required: true
    }

}, {
    timestamps: true
})

// Chats Storage for the user

const Chats = new mongoose.Schema({
    userid: {
        type: String,
        required: true
    },

    chat_id: {
        type: String,
        required: true
    },
    query: {
        type: String,
        required: true
    },
    response: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})



const SubscriptionSchema = mongoose.models.Subscriptions || mongoose.model('Subscriptions', Subscriptions);
const ChatBotSchema = mongoose.models.ChatBots || mongoose.model('ChatBots', ChatBots);
const DataSchema = mongoose.models.Data || mongoose.model('Data', Data);
const ChatSchema = mongoose.models.Chats || mongoose.model('Chats', Chats);

export { SubscriptionSchema, ChatBotSchema, DataSchema, ChatSchema };
