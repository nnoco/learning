package com.github.nnoco.learning.reactor

import reactor.core.publisher.Flux
import java.util.*

val words: List<String> = Arrays.asList(
        "the",
        "quick",
        "brown",
        "fox",
        "jumps",
        "over",
        "the",
        "lazy",
        "dog."
)

fun main(args: Array<String>) {
    val manyWords: Flux<String> = Flux.fromIterable(words);
    manyWords.subscribe(System.out::println)

    val fewWords = Flux.just("Hello", ", ", "world!")
    fewWords.subscribe(System.out::println)
}