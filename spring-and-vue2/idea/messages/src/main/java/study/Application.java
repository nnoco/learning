package study;

import java.io.File;
import java.net.URL;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Map;

/**
 * @author nnoco
 * @since 12/05/2020
 */
public class Application {
    public static void main(String[] args) throws Exception {
        ClassLoader loader = Thread.currentThread().getContextClassLoader();

        Map<String, Object> container = new HashMap<>();

        System.out.println("?");
        Enumeration<URL> urls = loader.getResources("");
        while(urls.hasMoreElements()) {
            URL url = urls.nextElement();

            retrieve(url.getPath(), new File(url.getFile()), container);
        }

        StudyService service = (StudyService) container.get("study.StudyService");
        service.hello();
    }

    static void retrieve(String base, File file, Map<String, Object> container) throws Exception {
        if(file.isFile()) {
            String name = file.getAbsolutePath()
                    .replaceFirst(base, "")
                    .replaceAll("/", ".")
                    .replaceAll("\\.class$", "");

            if(name.startsWith("study.")) {
                Class<?> type = Class.forName(name);
                if(type.isAnnotationPresent(Component.class)) {
                    container.put(name, type.newInstance());
                }
            }
            System.out.println(name);
        } else {
            for(File f: file.listFiles()) {
                retrieve(base, f, container);
            }
        }
    }
}
