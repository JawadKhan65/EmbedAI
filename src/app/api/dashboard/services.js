import DashboardDao from "./dao";
import { NextResponse } from "next/server";

class DashboardService {
    constructor() {
        this.DashboardDao = new DashboardDao();
    }

    async UpdateUserSubscription(userid, subscription) {
        try {
            return await this.DashboardDao.updateSubscription(userid, subscription);
        } catch (error) {
            console.error('Error updating user subscription:', error);
            return { success: false, response: error };
        }
    }

    async CreateUserSubscription(subscription) {
        try {
            return await this.DashboardDao.createSubscription(subscription);
        } catch (error) {
            console.error('Error creating user subscription:', error);
            return { success: false, response: error };
        }
    }

    async CreateUserChatBot(chatbot) {
        try {
            let free_limit = 1;
            let basic_limit = 3;
            let pro_limit = 5;
            let enterprise_limit = 7;

            const total_chatbots = await this.DashboardDao.findChatBot(chatbot?.userid);
            const subscription = await this.DashboardDao.findSubscription(chatbot?.userid);
            if (total_chatbots.success) {
                const chatbotsCount = total_chatbots.response.length;

                if ((chatbot?.type === 'free' && chatbot?.type === subscription.type) && chatbotsCount >= free_limit) {
                    return { success: false, response: 'Free plan limit exceeded' };
                }
                if (chatbot?.type === 'basic' && chatbotsCount >= basic_limit) {
                    return { success: false, response: 'Basic plan limit exceeded' };
                }
                if (chatbot?.type === 'pro' && chatbotsCount >= pro_limit) {
                    return { success: false, response: 'Pro plan limit exceeded' };
                }
                if (chatbot?.type === 'enterprise' && chatbotsCount >= enterprise_limit) {
                    return { success: false, response: 'Enterprise plan limit exceeded' };
                }
            }

            return await this.DashboardDao.createChatBot(chatbot);
        } catch (error) {
            console.error('Error creating user chatbot:', error);
            return { success: false, response: error };
        }
    }
    async CreateChat(chat) {
        try {
            return await this.DashboardDao.createChat(chat);

        } catch (error) {
            console.log('Error creating chat:', error);
            return { success: false, response: error };
        }
    }

    async CreateUserData(data) {
        try {
            return await this.DashboardDao.createData(data);
        } catch (error) {
            console.error('Error creating user data:', error);
            return { success: false, response: error };
        }
    }

    async GetUserChatBots(userid) {
        try {
            let names = [];
            let chatbot_ids = [];

            const response = await this.DashboardDao.findChatBot(userid);

            if (response.success && Array.isArray(response.response)) {
                response.response.map((chatbot) => {
                    names.push(chatbot?.chatbot_name);
                    chatbot_ids.push(chatbot?._id);
                });
            }

            return { success: true, response: { names, chatbot_ids } };
        } catch (error) {
            console.error('Error getting user chatbots:', error);
            return { success: false, response: error };
        }
    }

    async GetUserDashboardDetails(userid) {
        try {
            const subscriptionResult = await this.DashboardDao.findSubscription(userid);
            const chatbotResult = await this.DashboardDao.findChatBot(userid);

            if (!subscriptionResult.success || !chatbotResult.success) {
                return { success: false, response: 'Error fetching data' };
            }

            const subscription = subscriptionResult.response;
            const chatbot = chatbotResult.response;

            return { success: true, response: { subscription, chatbot } };
        } catch (error) {
            console.error('Error getting user dashboard details:', error);
            return { success: false, response: error };
        }
    }

    async GetAddedData(data) {
        try {
            const response = await this.DashboardDao.findAddedData(data.userid, data.chatbot_id);
            return { success: true, response: response };

        } catch (error) {
            console.error('Error getting added data:', error);
            return { success: false, response: error };

        }

    }

    async CreateTrainingData(data) {
        try {
            const response = await this.DashboardDao.createSourceData(data);
            return { success: true, response: response };

        } catch (error) {
            console.error('Error creating training data:', error);
            return { success: false, response: error };

        }
    }

    async GetChatsForChatbot(chatbot_id) {
        try {
            const chats = await this.DashboardDao.findChatbotChats(chatbot_id);
            return { success: true, response: chats };


        } catch (error) {
            console.error('Error getting user dashboard details:', error);
            return { success: false, response: error };

        }
    }

    async GetChats(userid) {
        try {
            const chats = await this.DashboardDao.findChatData(userid);
            return { success: true, response: chats };

        } catch (error) {
            console.error('Error getting user dashboard details:', error);
            return { success: false, response: error };

        }
    }
}

export default DashboardService;
