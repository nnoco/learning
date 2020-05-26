package study;

/**
 * @author nnoco
 * @since 2020. 05. 26
 */
public abstract class AbstractCar implements Car {
    // 상태
    // 속도
    private double velocity = 0;

    @Override
    public void brake() {
        velocity = velocity - 1;
    }
}
