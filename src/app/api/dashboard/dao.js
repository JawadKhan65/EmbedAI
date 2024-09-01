import { SubscriptionSchema, ChatBotSchema, DataSchema, ChatSchema } from "../../../../Models/dashboard.models";
import TrainingSource from "../../../../Models/training_data.models";
class DashboardDao {
    constructor() {
        this.SubscriptionSchema = SubscriptionSchema;
        this.ChatBotSchema = ChatBotSchema;
        this.DataSchema = DataSchema;
        this.ChatSchema = ChatSchema;
        this.TrainingSource = TrainingSource;
    }
    async findSubscription(userid) {
        try {
            const subscription = await this.SubscriptionSchema.findOne({ userid });
            if (subscription) {
                return { success: true, response: subscription };
            }

        }
        catch (error) {
            console.error('Error finding subscription:', error);
            return { success: false, response: error };
        }
    }

    async findChatbotChats(chatbot_id) {
        try {
            return await this.ChatSchema.find({ chatbot_id });

        } catch (error) {
            console.error('Error getting user dashboard details:', error);
            return { success: false, response: error };

        }
    }

    async findChatData(chatbot_id) {
        try {
            return await this.DataSchema.find({ chatbot_id });

        } catch (error) {
            console.error('Error getting user dashboard details:', error);
            return { success: false, response: error };

        }
    }

    async updateSubscription(userid, subscription) {
        try {
            if ((await this.findSubscription(userid)).success) {
                const updated_subscription = await this.SubscriptionSchema.findOneAndUpdate({ userid }, subscription, { new: true });
                return { success: true, response: updated_subscription };
            }
        }
        catch (error) {
            console.error('Error updating subscription:', error);
            return { success: false, response: error };
        }
    }
    async findAddedData(userid, chatbot_id) {
        try {
            return await this.TrainingSource.find({ userid, chatbot_id });

        } catch (error) {
            console.error('Error getting user dashboard details:', error);
            return { success: false, response: error };

        }

    }
    async findChatBot(userid) {
        try {
            // console.log("userid: " + userid);
            const chatbot = await this.ChatBotSchema.find({ userid: userid });
            // console.log("chatbot: " + chatbot);
            if (chatbot !== undefined) {
                return { success: true, response: chatbot };
            }
        }
        catch (error) {
            console.error('Error finding chatbot:', error);
            return { success: false, response: error };
        }
    }
    async createSubscription(subscription) {
        try {
            const new_subscription = await this.SubscriptionSchema.create(subscription);
            return new_subscription;
        } catch (error) {
            console.error('Error creating subscription:', error);
            return null;
        }
    }

    async createChatBot(chatbot) {
        try {

            const new_chatbot = await this.ChatBotSchema.create(chatbot);
            return new_chatbot;
        } catch (error) {
            console.error('Error creating chatbot:', error);
            return null;
        }
    }

    async createData(data) {
        try {
            const new_data = await this.DataSchema.create(data);
            return new_data;
        } catch (error) {
            console.error('Error creating data:', error);
            return null;
        }
    }
    async createSourceData(data) {
        try {
            return await this.TrainingSource.create(data);
        } catch (error) {
            console.error('Error creating source data:', error);
            return null;
        }
    }

    async createChat(chat) {
        try {
            const new_chat = await this.ChatSchema.create(chat);
            return new_chat;
        } catch (error) {
            console.error('Error creating chat:', error);
            return null;
        }
    }

}

export default DashboardDao;