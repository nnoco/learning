package app.messages;

import org.springframework.stereotype.Component;

/**
 * @author nnoco
 * @since 12/05/2020
 */
@Component
public class MessageService {
    private MessageRepository repository;

    public MessageService(MessageRepository repository) {
        this.repository = repository;
    }

    public void save(String text) {
        this.repository.saveMessage(new Message(text));
    }
}
