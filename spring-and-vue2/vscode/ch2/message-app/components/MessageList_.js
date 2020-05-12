import MessageListItem from './MessageListItem.js';

export default {
    name: 'MessageList',
    template: `<ul>
    <message-list-item v-for="item in items" :key="item.id" :item="item" @delete="deleteMessage(item)"></message-list-item>
    </ul>`,
    name: 'MessageListItem',
    components: {
        MessageListItem
    },
    props: {
        items: {
            type: Array,
            required: true
        }
    },
    methods: {
        deleteMessage(message) {
            this.$emit('delete', message);
        }
    }

}