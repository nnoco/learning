package study;

import java.util.ArrayList;
import java.util.Collection;

/**
 * @author nnoco
 * @since 2020. 05. 26
 */
interface 팩스 {
    void 팩스보내기();
}

interface 복사기 {
    void 복사();
}

interface 스캐너 {
    void 스캔();
}

class 삼성팩스 implements 팩스 {
    @Override
    public void 팩스보내기() {
        // 팩스를 보낸다..
    }

    public void 해상도지정(int dpi) {
        // 해상도
    }
}

// 렌탈
class LG팩스 implements 팩스 {
    @Override
    public void 팩스보내기() {

    }

    public void setColor() {

    }
}

public interface 복합기 extends 팩스, 복사기, 스캐너 {

}

/* DIP Dependency Inversion Principle
              팩스        <-
               |
        삼성팩스     LG팩스 <-
 */

class FaxUser {
    LG팩스 bokhap;

    {
        ArrayList<String> arrayList = new ArrayList<String>();
        arrayList.add("1");
        arrayList.add("2");
        arrayList.add("43");
        arrayList.add("5");
        // .... 100000

        arrayList.contains("5");

        // 삭제


        Collection<String> arrayList2 = new ArrayList<>();
        arrayList2.add("");

        // 인터페이스 분리가 필요함!
        bokhap.팩스보내기(); // 복사X, 스캔X
        // bokhap.해상도지정(720);

        bokhap.setColor();
    }
}
