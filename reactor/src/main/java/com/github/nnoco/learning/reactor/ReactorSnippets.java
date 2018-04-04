package com.github.nnoco.learning.reactor;

import reactor.core.publisher.Flux;

import java.util.Arrays;
import java.util.List;

public class ReactorSnippets {
    private static List<String> words = Arrays.asList(
            "the",
            "quick",
            "brown",
            "fox",
            "jumps",
            "over",
            "the",
            "lazy",
            "dog"
    );

    public static void main(String[] args) {
        Flux<String> fewWords = Flux.just("Hello", "world!");
        Flux<String> manyWords = Flux.fromIterable(words);

        fewWords.subscribe(System.out::println);
        System.out.println();
        manyWords.subscribe(System.out::println);
    }
}
