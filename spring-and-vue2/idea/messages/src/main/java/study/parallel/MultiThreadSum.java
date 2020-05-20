package study.parallel;

import java.util.stream.IntStream;

/**
 * @author nnoco
 * @since 2020. 05. 20
 */
public class MultiThreadSum {
    static int value = 0;

    public static void main(String[] args) throws InterruptedException {

        Runnable sumWorker = () -> {
            IntStream.range(0, 10)
                    .forEach(a -> {
                        value++;
                        value = value + 1;

                        // 메모리
                        // CPU
                        // 원자적 연산
                        // 원자 -> 더이상 나눌 수 없는 단위
                        // Atomic

                        // 1: -> 0 + 1 -> 1 = 1
                        // 2: -> 0 + 1 -> 1 =
                        // 3: -> 0 + 1 -> 1 = 1
                        // 4: -> 1 + 1 -> 2 = 2
                    });

            System.out.println("Done " + Thread.currentThread().getName());
        };

        for(int i = 0; i < 100; i++) {
            new Thread(sumWorker, "thread " + i).start();
        }

        Thread.sleep(5000);

        System.out.println(value);
    }
}
