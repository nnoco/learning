package study;

/**
 * @author nnoco
 * @since 2020. 05. 26
 */
public interface Car {
    // RCCar 리모컨
    void handleToLeft(int degree);

    void handleToRight(int degree);

    void accelerate();

    void brake();
}
