컴파일
```
$ kotlinc hello.kr -include-runtime -d hello.jar
```

- -d 옵션은 클래스 파일의 디렉토리 또는 .jar 파일 이름을 지정하여 컴파일 결과를 출력
- -include-runtime 옵션은 .jar 파일에 Kotlin 런타임 라이브러리를 포함
  
## 실행
```
$ java -jar hello.jar
```
  
`kotlin` 명령을 통해서도 생성된 .jar를 실행 가능
```
$ kotlin -classpath hello.jar HelloKt
```
  
HelloKt는 kotlin 컴파일러가 hello.kt 파일로부터 생성한 메인 클래스의 이름이다.

---
`kotlinc-jvm` 을 실행하여 REPL모드로 사용 가능

---
-script 옵션을 통해 kts(kotlin script file)을 실행할 수 있음
```
$ kotlinc -script list_folders.kts <path_to_folder_to_inspect>
```
