import axios from "axios";
const apiUrl = "http://localhost:3005/";

export function getUsers(id) {
    
    return apiUrl+"users/"+id;
}
export function getConversations(id) {
    
    return apiUrl+"conversations/"+id;
}
export function getMessages(id) {
    
    return apiUrl+"messages/"+id;
}

export function addMessage(message) {
    return axios.post(apiUrl+"addMessage", message);
}
export function addConversation(conversation) {
    return axios.post(apiUrl+"addConversation", conversation);
}

