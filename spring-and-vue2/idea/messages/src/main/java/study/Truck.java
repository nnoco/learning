package study;

/**
 * @author nnoco
 * @since 2020. 05. 26
 */
public class Truck extends AbstractCar {
    @Override
    public void handleToLeft(int degree) {
        // 핸들을 왼쪽으로 돌린다.
    }

    @Override
    public void handleToRight(int degree) {

    }

    @Override
    public void accelerate() {
        // Abstract <-> Concrete (콘크리트)
    }
}
