# 2020. 5. 20
책은 Maven으로 작성되어 있으나, 실습은 Gradle로 진행

Gradle에는 Maven의 \<parent\>가 없고, plugin만 추가

Spring Boot 2.2.3 플러그인을 적용했더니 Gradle 버전이 6.3 이상이어야 실행 가능 
-> `gradle-wrapper.properties`의 `distributionUrl`의 버전을 6.3으로 변경함

`spring-boot-starter-thymeleaf` 추가 후 타임리프 뷰 파일 추가

`GenericFilterBean`을 상속한 필터 작성(`AudtingFilter`)
-> Configuration에서 `FilterRegistrationBean`으로 설정